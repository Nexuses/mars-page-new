import { google } from 'googleapis'

// Google Sheets configuration
const SPREADSHEET_ID = '1H989U2duiXFwMSVZZay4SKqCVuZnirjSxSdMWAT288k'
const SHEET_NAME = 'Sheet1' // Default sheet name, can be changed

/**
 * Get authenticated Google Sheets client
 */
async function getSheetsClient() {
  try {
    // Option 1: Service Account with full JSON key
    if (process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
      console.log('[Google Sheets] GOOGLE_SERVICE_ACCOUNT_KEY found, length:', process.env.GOOGLE_SERVICE_ACCOUNT_KEY.length)
      
      // Remove surrounding quotes if present
      let keyString = process.env.GOOGLE_SERVICE_ACCOUNT_KEY.trim()
      if ((keyString.startsWith("'") && keyString.endsWith("'")) || 
          (keyString.startsWith('"') && keyString.endsWith('"'))) {
        keyString = keyString.slice(1, -1)
      }
      
      console.log('[Google Sheets] Parsing Google Service Account Key...')
      let credentials
      try {
        credentials = JSON.parse(keyString)
      } catch (parseError: any) {
        console.error('[Google Sheets] JSON Parse Error:', parseError.message)
        console.error('[Google Sheets] First 100 chars of key:', keyString.substring(0, 100))
        console.error('[Google Sheets] Last 100 chars of key:', keyString.substring(Math.max(0, keyString.length - 100)))
        
        // Try to fix common issues with Vercel environment variables
        // Vercel might convert actual newlines to \n or vice versa
        try {
          // If the key has actual newlines, escape them properly
          const fixedKey = keyString.replace(/\n/g, '\\n').replace(/\r/g, '')
          credentials = JSON.parse(fixedKey)
          console.log('[Google Sheets] Successfully parsed after fixing newline escaping')
        } catch (secondParseError: any) {
          console.error('[Google Sheets] Second parse attempt also failed:', secondParseError.message)
          throw new Error(`Failed to parse GOOGLE_SERVICE_ACCOUNT_KEY: ${parseError.message}. Second attempt: ${secondParseError.message}`)
        }
      }
      
      if (!credentials.client_email) {
        console.error('[Google Sheets] Missing client_email in credentials')
        throw new Error('Invalid service account key: missing client_email')
      }
      
      console.log('[Google Sheets] Authenticating with service account:', credentials.client_email)
      const auth = new google.auth.GoogleAuth({
        credentials,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      })
      const authClient = await auth.getClient()
      console.log('[Google Sheets] Authentication successful')
      return google.sheets({ version: 'v4', auth: authClient as any })
    }

    // Option 1b: Service Account with separate email and private key
    if (process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
      console.log('Using separate service account credentials...')
      
      // Remove surrounding quotes from private key if present
      let privateKey = process.env.GOOGLE_PRIVATE_KEY.trim()
      if ((privateKey.startsWith("'") && privateKey.endsWith("'")) || 
          (privateKey.startsWith('"') && privateKey.endsWith('"'))) {
        privateKey = privateKey.slice(1, -1)
      }
      
      // Replace literal \n with actual newlines
      privateKey = privateKey.replace(/\\n/g, '\n')
      
      const credentials = {
        type: 'service_account',
        project_id: 'mars-478705',
        private_key_id: '3460b8af0f96a7efd1aa1c8aad2e49228acf504c',
        private_key: privateKey,
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        client_id: '104883648030298332098',
        auth_uri: 'https://accounts.google.com/o/oauth2/auth',
        token_uri: 'https://oauth2.googleapis.com/token',
        auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
        client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${encodeURIComponent(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL)}`,
        universe_domain: 'googleapis.com'
      }
      
      console.log('Authenticating with service account:', credentials.client_email)
      const auth = new google.auth.GoogleAuth({
        credentials,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      })
      const authClient = await auth.getClient()
      return google.sheets({ version: 'v4', auth: authClient as any })
    }

    // Option 2: OAuth2 Client (Alternative)
    if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET && process.env.GOOGLE_REFRESH_TOKEN) {
      const oauth2Client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET,
        process.env.GOOGLE_REDIRECT_URI
      )
      oauth2Client.setCredentials({
        refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
      })
      return google.sheets({ version: 'v4', auth: oauth2Client })
    }

    console.error('[Google Sheets] No authentication credentials found')
    console.error('[Google Sheets] Available env vars:', {
      GOOGLE_SERVICE_ACCOUNT_KEY: !!process.env.GOOGLE_SERVICE_ACCOUNT_KEY,
      GOOGLE_SERVICE_ACCOUNT_EMAIL: !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      GOOGLE_PRIVATE_KEY: !!process.env.GOOGLE_PRIVATE_KEY,
      GOOGLE_CLIENT_ID: !!process.env.GOOGLE_CLIENT_ID,
    })
    throw new Error('Google Sheets authentication credentials not found. Please set GOOGLE_SERVICE_ACCOUNT_KEY (full JSON) or GOOGLE_SERVICE_ACCOUNT_EMAIL + GOOGLE_PRIVATE_KEY, or OAuth2 credentials.')
  } catch (error: any) {
    console.error('[Google Sheets] Error authenticating with Google Sheets:', error)
    if (error.message) {
      console.error('[Google Sheets] Error message:', error.message)
    }
    if (error.stack) {
      console.error('[Google Sheets] Error stack:', error.stack)
    }
    throw error
  }
}

/**
 * Check if headers exist in the sheet
 */
async function checkHeadersExist(sheets: any, headers: string[], sheetName: string): Promise<boolean> {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${sheetName}!1:1`,
    })

    const existingHeaders = response.data.values?.[0] || []
    console.log('Existing headers in sheet:', existingHeaders)
    
    // Check if all required headers exist
    const allHeadersExist = headers.every(header => existingHeaders.includes(header))
    return allHeadersExist
  } catch (error: any) {
    // If sheet is empty or doesn't exist, headers don't exist
    console.log('Headers check error (this is OK if sheet is empty):', error.message)
    return false
  }
}

/**
 * Create headers in the sheet
 */
async function createHeaders(sheets: any, headers: string[], sheetName: string): Promise<void> {
  try {
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `${sheetName}!1:1`,
      valueInputOption: 'RAW',
      requestBody: {
        values: [headers],
      },
    })
    console.log('Headers created successfully in Google Sheet')
  } catch (error) {
    console.error('Error creating headers:', error)
    throw error
  }
}

/**
 * Append data row to Google Sheet
 */
async function appendRow(sheets: any, values: any[], sheetName: string): Promise<void> {
  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${sheetName}!A:Z`, // Use wider range to ensure all columns are covered
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [values],
      },
    })
    console.log('Data appended successfully to Google Sheet')
    console.log('Response:', response.data)
  } catch (error: any) {
    console.error('Error appending data to Google Sheet:', error)
    if (error.response?.data) {
      console.error('Google API Error Details:', JSON.stringify(error.response.data, null, 2))
    }
    throw error
  }
}

/**
 * Write form data to Google Sheets
 * Automatically creates headers if they don't exist
 */
export async function writeToGoogleSheets(
  headers: string[],
  values: any[],
  sheetName?: string
): Promise<void> {
  try {
    console.log('[Google Sheets] ===== Starting Google Sheets write operation =====')
    console.log('[Google Sheets] Spreadsheet ID:', SPREADSHEET_ID)
    console.log('[Google Sheets] Headers:', headers)
    console.log('[Google Sheets] Values:', values)
    console.log('[Google Sheets] Environment check:', {
      GOOGLE_SERVICE_ACCOUNT_KEY: !!process.env.GOOGLE_SERVICE_ACCOUNT_KEY,
      GOOGLE_SERVICE_ACCOUNT_KEY_LENGTH: process.env.GOOGLE_SERVICE_ACCOUNT_KEY?.length || 0,
    })
    
    const sheets = await getSheetsClient()
    const targetSheet = sheetName || SHEET_NAME
    console.log('[Google Sheets] Target sheet:', targetSheet)

    // Check if headers exist
    console.log('[Google Sheets] Checking if headers exist...')
    const headersExist = await checkHeadersExist(sheets, headers, targetSheet)
    console.log('[Google Sheets] Headers exist:', headersExist)

    // Create headers if they don't exist
    if (!headersExist) {
      console.log('[Google Sheets] Creating headers...')
      await createHeaders(sheets, headers, targetSheet)
    }

    // Append the data row
    console.log('[Google Sheets] Appending data row...')
    await appendRow(sheets, values, targetSheet)
    console.log('[Google Sheets] ===== Successfully wrote to Google Sheets! =====')
  } catch (error: any) {
    console.error('[Google Sheets] ===== ERROR writing to Google Sheets =====')
    console.error('[Google Sheets] Error type:', error?.constructor?.name)
    console.error('[Google Sheets] Error:', error)
    if (error.message) {
      console.error('[Google Sheets] Error message:', error.message)
    }
    if (error.response?.data) {
      console.error('[Google Sheets] Google API Error:', JSON.stringify(error.response.data, null, 2))
    }
    if (error.code) {
      console.error('[Google Sheets] Error code:', error.code)
    }
    if (error.stack) {
      console.error('[Google Sheets] Error stack:', error.stack)
    }
    // Don't throw error - we don't want to break the form submission if Sheets fails
    // Just log it for debugging - but make it very visible in logs
    console.error('[Google Sheets] ===== END ERROR =====')
  }
}

/**
 * Write contact form data to Google Sheets
 */
export async function writeContactFormToSheets(data: {
  name: string
  email: string
  company: string
  positions: string
}): Promise<void> {
  const headers = ['Timestamp', 'Name', 'Email', 'Company', 'Positions']
  const values = [
    new Date().toISOString(),
    data.name,
    data.email,
    data.company,
    data.positions,
  ]

  const sheetName = process.env.GOOGLE_SHEETS_CONTACT_TAB?.trim() || 'Contact Form'

  await writeToGoogleSheets(headers, values, sheetName)
}

/**
 * Write demo booking form data to Google Sheets
 */
export async function writeDemoBookingToSheets(data: {
  company_email: string
  name: string
  position: string
  preferred_date: string
  preferred_time: string
}): Promise<void> {
  const headers = [
    'Timestamp',
    'Name',
    'Email',
    'Position',
    'Preferred Date',
    'Preferred Time',
  ]
  const values = [
    new Date().toISOString(),
    data.name,
    data.company_email,
    data.position,
    data.preferred_date,
    data.preferred_time,
  ]

  const sheetName = process.env.GOOGLE_SHEETS_DEMO_TAB?.trim() || 'Sheet1'

  await writeToGoogleSheets(headers, values, sheetName)
}

