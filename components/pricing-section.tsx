"use client"

import { Check } from "lucide-react"

export function PricingSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#f8f5f5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Plans for Any Type of Recruitment Need
        </h2>
        
        {/* Subtitle */}
        <p className="text-center text-base sm:text-lg text-gray-600 mb-12 sm:mb-16">
        Sign up today and seamlessly upgrade as your needs grow. Unlock the full potential with our flexible paid plans.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Free Forever */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6">MARS Lift-Off</h3>
            
            {/* Price */}
            <div className="text-center mb-6">
              <p className="text-sm text-gray-500 mb-1"></p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl sm:text-5xl font-bold text-gray-900"></span>
                <span className="text-sm text-gray-500"></span>
              </div>
            </div>

            {/* Description */}
            <p className="text-center text-gray-700 mb-6 leading-relaxed font-semibold">
            Start-ups & lean HR teams
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">• Up to 3 active roles/month</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Verified, ranked shortlists for every role</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Dual-layer AI + human screening</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Flat monthly subscription</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Dedicated sourcing support</span>
              </li>
            </ul>

            {/* Button */}
            <button className="w-full bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-900 transition-colors duration-200">
            Contact Us
            </button>
          </div>

          {/* Card 2: For Work */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6">MARS VELOCITY</h3>
            
            {/* Price */}
            <div className="text-center mb-6">
              <p className="text-sm text-gray-500 mb-1"></p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl sm:text-5xl font-bold text-[#7cb342]"></span>
                <span className="text-sm text-[#7cb342]"></span>
              </div>
            </div>

            {/* Description */}
            <p className="text-center text-gray-700 mb-6 leading-relaxed font-semibold">
            Growth-stage & mid-sized companies
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#7cb342]" />
                <span className="text-gray-700">Up to 10 active roles/month</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#7cb342]" />
                <span className="text-gray-700">Triple-layer filtration (AI + Process + Human Insight)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#7cb342]" />
                <span className="text-gray-700">Culture-fit scoring & ranking</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#7cb342]" />
                <span className="text-gray-700">Dashboard with candidate insights</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#7cb342]" />
                <span className="text-gray-700">Priority sourcing queue</span>
              </li>
            </ul>

            {/* Button */}
            <button 
              className="w-full text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:shadow-lg"
              style={{ backgroundColor: "#7cb342" }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#689F38"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#7cb342"}
            >
              Contact Us
            </button>
          </div>

          {/* Card 3: For Teams */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6">MARS INFINITY</h3>
            
            {/* Price */}
            <div className="text-center mb-6">
              <p className="text-sm text-gray-500 mb-1"></p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl sm:text-5xl font-bold" style={{ color: "#B3262F" }}></span>
                <span className="text-sm" style={{ color: "#B3262F" }}></span>
              </div>
            </div>

            {/* Description */}
            <p className="text-center text-gray-700 mb-6 leading-relaxed font-semibold">
            Enterprises & multi-business talent teams
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#B3262F" }} />
                <span className="text-gray-700">Unlimited sourcing across functions</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#B3262F" }} />
                <span className="text-gray-700">Custom filters — DEI, leadership, niche roles</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#B3262F" }} />
                <span className="text-gray-700">Dedicated sourcing pod with SLA delivery</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#B3262F" }} />
                <span className="text-gray-700">ATS / HRIS integration</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#B3262F" }} />
                <span className="text-gray-700">Quarterly talent intelligence reports</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#B3262F" }} />
                <span className="text-gray-700">24/7 enterprise support</span>
              </li>
            </ul>

            {/* Button */}
            <button 
              className="w-full text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:shadow-lg"
              style={{ backgroundColor: "#B3262F" }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#9A1F28"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#B3262F"}
            >
             Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

