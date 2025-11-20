"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white py-8 sm:py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col gap-6 sm:gap-10">
          <div className="flex flex-col items-center text-center gap-4">
            <Link href="/" className="flex items-center group">
              <img
                src="/images/mars-logo.png"
                alt="MARS Solutions Group"
                width={180}
                height={72}
                className="h-auto w-[140px] sm:w-[160px] lg:w-[180px] transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 group-hover:drop-shadow-md"
              />
            </Link>
            <p className="text-gray-600 text-sm font-medium">People. Process. Technology.</p>
          </div>

          <div className="flex justify-center gap-4">
            <Link
              href="https://www.facebook.com/MARSSGJOBS/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#B3262F] text-gray-700 hover:text-white transition-all duration-300"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="https://x.com/MARS_SGCorp"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#B3262F] text-gray-700 hover:text-white transition-all duration-300"
            >
              <Twitter size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F1947290%2F%3Ftrk%3Dprof-exp-company-name"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#B3262F] text-gray-700 hover:text-white transition-all duration-300"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://www.instagram.com/marssolutionsgroup/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#B3262F] text-gray-700 hover:text-white transition-all duration-300"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCzQPA-VP32DAyXgLAIZ-_Zg"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#B3262F] text-gray-700 hover:text-white transition-all duration-300"
            >
              <Youtube size={20} />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm">
            <Link href="https://marssg.com/jobs/" target="_blank" className="text-gray-700 hover:text-[#B3262F] transition-colors duration-300 font-medium">
              Jobs
            </Link>
            <Link href="https://marssg.com/services/" target="_blank" className="text-gray-700 hover:text-[#B3262F] transition-colors duration-300 font-medium">
              Services
            </Link>
            <Link href="https://marssg.com/staffing-2/" target="_blank" className="text-gray-700 hover:text-[#B3262F] transition-colors duration-300 font-medium">
              Staffing
            </Link>
            <Link href="https://marssg.com/diversity-mars/" target="_blank" className="text-gray-700 hover:text-[#B3262F] transition-colors duration-300 font-medium">
              About
            </Link>
            <Link href="https://marssg.com/blog/" target="_blank" className="text-gray-700 hover:text-[#B3262F] transition-colors duration-300 font-medium">
              Blog
            </Link>
            <Link href="https://marssg.com/events/" target="_blank" className="text-gray-700 hover:text-[#B3262F] transition-colors duration-300 font-medium">
              Events
            </Link>
            <Link href="https://marssg.com/referral-bonus/" target="_blank" className="text-gray-700 hover:text-[#B3262F] transition-colors duration-300 font-medium">
              Referral Bonus
            </Link>
          </div>

          <div className="flex flex-col items-center text-center gap-2 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-sm">
              1433 N Water St Suite 200, Milwaukee, WI 53202
            </p>
            <p className="text-gray-600 text-sm">
              Phone: <Link href="tel:+14142764700" className="hover:text-[#B3262F] transition-colors">414-276-4700</Link>
            </p>
            <p className="text-gray-600 text-sm">
              Email: <Link href="mailto:info@marssg.com" className="hover:text-[#B3262F] transition-colors">info@marssg.com</Link>
            </p>
          </div>

          <div className="text-center pt-6 border-t border-gray-200">
            <p className="text-gray-500 text-xs">
              © 2025 MARS IT Corp. | All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
