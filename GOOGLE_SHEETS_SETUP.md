# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration to automatically save form submissions.

## Prerequisites

1. A Google Cloud Project
2. Google Sheets API enabled
3. A service account with access to your Google Sheet

## Step-by-Step Setup

### 1. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Google Sheets API**:
   - Navigate to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

### 2. Create a Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the service account details:
   - Name: `mars-talentflex-sheets` (or any name you prefer)
   - Description: `Service account for MARS TalentFlex Google Sheets integration`
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"

### 3. Create and Download Service Account Key

1. Click on the service account you just created
2. Go to the "Keys" tab
3. Click "Add Key" > "Create new key"
4. Select "JSON" format
5. Click "Create" - this will download a JSON file

### 4. Share Google Sheet with Service Account

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1H989U2duiXFwMSVZZay4SKqCVuZnirjSxSdMWAT288k
2. Click the "Share" button (top right)
3. Copy the **email address** from the service account JSON file (it looks like: `your-service-account@project-id.iam.gserviceaccount.com`)
4. Paste it in the "Share" dialog
5. Give it **Editor** permissions
6. Click "Send" (you can uncheck "Notify people" if you want)

### 5. Add Environment Variable

1. Open the downloaded JSON file
2. Copy the entire contents
3. Add it to your `.env.local` file (or your deployment environment variables) as:

```env
GOOGLE_SERVICE_ACCOUNT_KEY='{"type":"service_account","project_id":"...","private_key_id":"...","private_key":"...","client_email":"...","client_id":"...","auth_uri":"...","token_uri":"...","auth_provider_x509_cert_url":"...","client_x509_cert_url":"..."}'
```

**Important:** 
- The entire JSON must be on a single line
- Use single quotes around the JSON string
- Escape any single quotes inside the JSON if needed

4. (Optional) set custom sheet/tab names for each form. These should match the tabs inside your spreadsheet:

```env
GOOGLE_SHEETS_DEMO_TAB=Sheet1
GOOGLE_SHEETS_CONTACT_TAB=Contact Form
```

If you rename the tabs in Google Sheets, update these values so submissions land in the correct tab.

### 6. Alternative: Using OAuth2 (Optional)

If you prefer OAuth2 instead of a service account, you can use these environment variables:

```env
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
GOOGLE_REFRESH_TOKEN=your-refresh-token
GOOGLE_REDIRECT_URI=your-redirect-uri
```

## How It Works

- When a user submits the **Contact Form**, the data is automatically saved to Google Sheets with headers:
  - Timestamp
  - Name
  - Email
  - Company
  - Positions

- When a user submits the **Demo Booking Form**, the data is automatically saved to Google Sheets with headers:
  - Timestamp
  - Name
  - Email
  - Position
  - Preferred Date
  - Preferred Time

- **Headers are automatically created** on the first submission if they don't exist
- Each form submission adds a new row to the sheet
- The integration is non-blocking - if Google Sheets fails, the form submission still succeeds

## Testing

1. Submit a test form on your website
2. Check your Google Sheet - you should see:
   - Headers in the first row (if it's the first submission)
   - A new row with the form data

## Troubleshooting

### Error: "Google Sheets authentication credentials not found"
- Make sure `GOOGLE_SERVICE_ACCOUNT_KEY` is set in your environment variables
- Verify the JSON is properly formatted and on a single line

### Error: "The caller does not have permission"
- Make sure you've shared the Google Sheet with the service account email
- Verify the service account has "Editor" permissions

### Data not appearing in the sheet
- Check your server logs for any error messages
- Verify the spreadsheet ID is correct in `lib/google-sheets.ts`
- Make sure the Google Sheets API is enabled in your Google Cloud project

## Security Notes

- Never commit your service account JSON file to version control
- Keep your `.env.local` file in `.gitignore`
- Use environment variables in your deployment platform (Netlify, Vercel, etc.)
- Regularly rotate your service account keys for security

