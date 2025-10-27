"use client"

import { Check } from "lucide-react"

export function PricingSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Plans for Any Kind of Workflow
        </h2>
        
        {/* Subtitle */}
        <p className="text-center text-base sm:text-lg text-gray-600 mb-12 sm:mb-16">
          Sign up now, upgrade anytime. New accounts get a 14-day trial of our paid plans.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Free Forever */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6">Free Forever</h3>
            
            {/* Price */}
            <div className="text-center mb-6">
              <p className="text-sm text-gray-500 mb-1">Always</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl sm:text-5xl font-bold text-gray-900">$0</span>
                <span className="text-sm text-gray-500">/month</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-center text-gray-700 mb-6 leading-relaxed">
              Automate personal tasks. Be less busy, and get more done.
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Use 5 Zaps at once</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Make two-step Zaps</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Get help from our support team</span>
              </li>
            </ul>

            {/* Button */}
            <button className="w-full bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-900 transition-colors duration-200">
              SIGN UP FOR FREE
            </button>
          </div>

          {/* Card 2: For Work */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6">For Work</h3>
            
            {/* Price */}
            <div className="text-center mb-6">
              <p className="text-sm text-gray-500 mb-1">Starting at</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl sm:text-5xl font-bold text-[#7cb342]">$20</span>
                <span className="text-sm text-[#7cb342]">/month</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-center text-gray-700 mb-6 leading-relaxed">
              Automate your business. Turn on workflows that make any job easier.
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#7cb342]" />
                <span className="text-gray-700">Use 20+ Zaps at once</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#7cb342]" />
                <span className="text-gray-700">Make Zaps with 3+ steps</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#7cb342]" />
                <span className="text-gray-700">Get priority support</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#7cb342]" />
                <span className="text-gray-700">Access all of our 500+ apps</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#7cb342]" />
                <span className="text-gray-700">One month free for paying annually</span>
              </li>
            </ul>

            {/* Button */}
            <button 
              className="w-full text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:shadow-lg"
              style={{ backgroundColor: "#7cb342" }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#689F38"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#7cb342"}
            >
              START YOUR 14-DAY TRIAL
            </button>
          </div>

          {/* Card 3: For Teams */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6">For Teams</h3>
            
            {/* Price */}
            <div className="text-center mb-6">
              <p className="text-sm text-gray-500 mb-1">Starting at</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl sm:text-5xl font-bold" style={{ color: "#B3262F" }}>$100</span>
                <span className="text-sm" style={{ color: "#B3262F" }}>/month</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-center text-gray-700 mb-6 leading-relaxed">
              Automate together. Collaborate on workflows with the whole team.
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#B3262F" }} />
                <span className="text-gray-700">Share Zaps with your teammates</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#B3262F" }} />
                <span className="text-gray-700">Separate personal and team Zaps</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#B3262F" }} />
                <span className="text-gray-700">Control who can edit your Zaps</span>
              </li>
            </ul>

            {/* Button */}
            <button 
              className="w-full text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:shadow-lg"
              style={{ backgroundColor: "#B3262F" }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#9A1F28"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#B3262F"}
            >
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

