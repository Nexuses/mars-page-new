"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DemoBookingDialog } from "@/components/demo-booking-dialog"

export function TestimonialSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
    <section className="relative w-full overflow-hidden py-20">
      {/* Background Image */}
      <div className="absolute inset-0 h-[600px]">
        <img
          src="/images/testimonial-bg.png"
          alt="Diverse professionals in office"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Card - Positioned on Left */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 flex items-center py-20 -mt-[120px] sm:mt-0">
        <div
          className="bg-white rounded-3xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#B3262F]/10"
          style={{ maxWidth: "calc(42rem - 30px)", padding: "calc(48px - 15px)", marginLeft: "10px" }}
        >
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
          Empower Your Talent Acquisition 
            <br />
            Team with the <span className="font-bold">World 
              <br />
              Right Tools</span>
          </h2>

          {/* Body Text */}
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          TalentFlex helps your recruiters do what they do bes; build relationships, engage talent, and close offers while we take care of 
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
    </section>
    <DemoBookingDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  )
}
