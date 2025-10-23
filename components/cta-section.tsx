"use client"

import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative w-full overflow-hidden py-20">
      {/* Background Image */}
      <img
        src="/images/cta-background.png"
        alt="Professional team meeting"
        className="absolute inset-0 w-full h-[500px] object-cover"
      />

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-end px-6 lg:px-12 py-20">
        <div className="max-w-2xl text-right text-white">
          <h2 className="mb-8 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            <span className="font-bold">Rise Above the 
              
              Noise,</span>
            <br />
            <span className="font-light">Find the Right Talent.</span>
          </h2>
          <div className="flex justify-end">
            <Button
              className="px-8 py-4 text-base font-extrabold text-white transition-all duration-200 hover:shadow-xl hover:scale-105 rounded-md w-full sm:w-auto uppercase"
              style={{ backgroundColor: "#7cb342" }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#689F38"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#7cb342"}
              onClick={() => {
                const formSection = document.getElementById('contact-form');
                if (formSection) {
                  formSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
