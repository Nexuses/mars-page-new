"use client"

import Image from "next/image"
import { useState } from "react"

export function SplitLayoutSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    positions: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', company: '', positions: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <section id="contact-form" className="py-16 bg-white">
      <div className="container mx-auto pr-2 pl-4 sm:pr-4 sm:pl-8 md:pl-12 lg:pl-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          {/* Left Side - Form */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-md">
              {/* Label */}
              <p className="font-black text-lg sm:text-xl tracking-wider mb-1" style={{ color: "#B3262F" }}>CUSTOM, SMART, SCALABLE</p>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 mb-6 sm:mb-8 leading-tight" style={{ fontFamily: "Inter, sans-serif" }}>
                <span className="font-bold"> Hire verified, top-tier</span> <span>Candidates</span> on demand.
              </h2>

              {/* Form */}
              <form className="space-y-4 mb-6" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-100 border-0 rounded text-xs sm:text-sm focus:outline-none focus:ring-2"
                  style={{ "--tw-ring-color": "#B3262F" } as React.CSSProperties}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-100 border-0 rounded text-xs sm:text-sm focus:outline-none focus:ring-2"
                  style={{ "--tw-ring-color": "#B3262F" } as React.CSSProperties}
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-100 border-0 rounded text-xs sm:text-sm focus:outline-none focus:ring-2"
                  style={{ "--tw-ring-color": "#B3262F" } as React.CSSProperties}
                />
                <input
                  type="text"
                  name="positions"
                  placeholder="What positions are you looking for?"
                  value={formData.positions}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-100 border-0 rounded text-xs sm:text-sm focus:outline-none focus:ring-2"
                  style={{ "--tw-ring-color": "#B3262F" } as React.CSSProperties}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-bold uppercase tracking-wide text-white transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "#B3262F" }}
                  onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = "#9A1F28")}
                  onMouseLeave={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = "#B3262F")}
                >
                  {isSubmitting ? 'SENDING...' : 'REQUEST A CALL BACK'}
                </button>
              </form>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-4 p-3 rounded text-xs sm:text-sm" style={{ backgroundColor: "#7cb342", borderColor: "#7cb342", color: "white" }}>
                  ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-4 p-3 rounded text-xs sm:text-sm" style={{ backgroundColor: "#B3262F", borderColor: "#B3262F", color: "white" }}>
                  ❌ Sorry, there was an error sending your message. Please try again.
                </div>
              )}

            </div>
          </div>

          {/* Right Side - Single illustrative image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] group">
              <Image
                src="/images/split-layout.png"
                alt="Hiring illustration"
                fill
                sizes="(max-width: 1024px) 90vw, 600px"
                className="object-contain transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
