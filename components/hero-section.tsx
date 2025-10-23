"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DemoBookingDialog } from "@/components/demo-booking-dialog"
import { PdfViewerDialog } from "@/components/pdf-viewer-dialog"

export function HeroSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isPdfViewerOpen, setIsPdfViewerOpen] = useState(false)

  return (
    <>
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#f5f0eb] via-[#ede8f0] to-[#e8e5f5]">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch">
          {/* Left Column - Content */}
          <div className="w-full lg:w-[45%] px-6 sm:px-8 lg:pl-12 xl:pl-16 py-16 lg:py-20 flex items-center">
            <div className="max-w-xl">
              {/* Main Heading */}
              <h1 className="mb-6 text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-black leading-[1.05] tracking-tight">
                <span className="text-gray-900">Cut through the AI noise. </span>
                <span className="text-[#B3262F]">Find real talent, faster.</span>
              </h1>

              {/* Description */}
              <p className="mb-8 text-base sm:text-lg text-gray-700 leading-relaxed max-w-lg">
                MARS TalentFlex is a subscription-based sourcing engine that helps you rise above AI-generated clutter. We merge technology and human insight to deliver verified, ranked candidates—so your team can focus on what truly matters: engaging and hiring the best.
              </p>

              <Button
                onClick={() => setIsPdfViewerOpen(true)}
                className="px-8 py-4 text-base font-extrabold text-white transition-all duration-200 hover:shadow-xl hover:scale-105 rounded-md uppercase"
                style={{ backgroundColor: "#B3262F" }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#9A1F28"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#B3262F"}
              >
                Learn How It Works
              </Button>
            </div>
          </div>

          {/* Right Column - Image touching edge */}
          <div className="w-full lg:w-[55%] relative flex items-center justify-end px-6 py-8 lg:p-0">
            <div className="relative w-full lg:w-[120%] lg:translate-x-[10%]">
              <img
                src="/images/candidate-cards.png"
                alt="Candidate profile cards showing diverse returners"
                className="w-full h-auto object-contain lg:object-right scale-110 lg:scale-125 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <DemoBookingDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      <PdfViewerDialog
        open={isPdfViewerOpen}
        onOpenChange={setIsPdfViewerOpen}
        pdfUrl="/MARS Talent Flex_compressed.pdf"
      />
    </>
  )
}
