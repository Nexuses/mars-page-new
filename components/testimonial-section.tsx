"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DemoBookingDialog } from "@/components/demo-booking-dialog"

export function TestimonialSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
    <section className="relative w-full bg-gradient-to-br from-[#f5f0eb] via-[#ede8f0] to-[#e8e5f5]">
      {/* Background Image Container */}
      <div className="relative w-full overflow-hidden">
        <img
          src="/images/testimonial-bg.png"
          alt="Diverse professionals in office"
          className="w-full object-cover object-top"
          style={{ height: '600px', objectFit: 'cover', objectPosition: 'center top', width: '100%' }}
        />
      </div>

      {/* Content Card - Positioned Absolutely Over Background */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div
            className="bg-white rounded-2xl sm:rounded-3xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#B3262F]/10 w-full max-w-[42rem] p-6 sm:p-8 lg:p-10"
        >
          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
          Empower Your Talent Acquisition 
            <br />
            Team with the <span className="font-bold">World 
              <br />
              Right Tools</span>
          </h2>

          {/* Body Text */}
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
          TalentFlex helps your recruiters do what they do best build relationships, engage talent, and close offers while we take care of 
          sourcing.
          </p>

          {/* CTA Button */}
          <Button
            onClick={() => setIsDialogOpen(true)}
            className="px-8 py-4 text-base font-extrabold text-white transition-all duration-200 hover:shadow-xl hover:scale-105 rounded-md w-full sm:w-auto uppercase"
            style={{ backgroundColor: "#7cb342" }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#689F38"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#7cb342"}
          >
            Schedule a Demo
          </Button>
        </div>
        </div>
      </div>
    </section>
    <DemoBookingDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  )
}
