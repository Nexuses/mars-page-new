"use client"

import { useEffect, useRef, useState } from "react"

export function VideoSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="w-full pt-8 sm:pt-12 pb-16 sm:pb-20 px-6 sm:px-12 lg:px-20 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`relative transition-all duration-1000 ease-out ${
            isVisible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-16'
          }`}
        >
          <img
            src="/funnel.png"
            alt="MARS funnel process"
            className="block w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}


