"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DemoBookingDialog } from "@/components/demo-booking-dialog"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <>
    <nav className="w-full bg-gradient-to-br from-[#f5f0eb] via-[#ede8f0] to-[#e8e5f5] border-b border-gray-200/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <div className="flex items-center gap-[60px]">
        <Link href="/" className="flex items-center group">
          <img
            src="/images/MARS-1.webp"
            alt="MARS Solutions Group"
            width={140}
            height={56}
            className="h-auto w-[140px] transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 group-hover:drop-shadow-md"
          />
        </Link>

          <div className="hidden items-center gap-8 lg:flex">
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('about')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-base font-bold text-gray-800 transition-colors duration-200 hover:text-[#B3262F] py-2">
                About <ChevronDown size={16} />
              </button>
              {openDropdown === 'about' && (
                <div
                  className="absolute left-0 top-full pt-2 w-48 z-50"
                  onMouseEnter={() => setOpenDropdown('about')}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="bg-white rounded-md shadow-lg py-2">
                    <Link href="https://marssg.com/services/" target="_blank" className="block px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100 hover:text-[#B3262F]">
                      Services
                    </Link>
                    <Link href="https://marssg.com/diversity-mars/" target="_blank" className="block px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100 hover:text-[#B3262F]">
                      Diversity
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('solutions')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-base font-bold text-gray-800 transition-colors duration-200 hover:text-[#B3262F] py-2">
                SOLUTIONS <ChevronDown size={16} />
              </button>
              {openDropdown === 'solutions' && (
                <div
                  className="absolute left-0 top-full pt-2 w-56 z-50"
                  onMouseEnter={() => setOpenDropdown('solutions')}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="bg-white rounded-md shadow-lg py-2">
                    <Link href="https://marssg.com/" target="_blank" className="block px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100 hover:text-[#B3262F]">
                      MARSSG
                    </Link>
                    <Link href="https://getreturnship.com/" target="_blank" className="block px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100 hover:text-[#B3262F]">
                      MARS RETURNSHIP
                    </Link>
                    <Link href="https://giveovation.com/" target="_blank" className="block px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100 hover:text-[#B3262F]">
                      OVATION
                    </Link>
                    <Link href="https://www.marssg-healthcare.com/" target="_blank" className="block px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100 hover:text-[#B3262F]">
                      MARS HEALTHCARE
                    </Link>
                    <Link href="https://marsorbit.us/" target="_blank" className="block px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100 hover:text-[#B3262F]">
                      MARS ORBIT
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="https://marssg.com/jobs/" target="_blank" className="text-base font-bold text-gray-800 transition-colors duration-200 hover:text-[#B3262F] relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#B3262F] after:transition-all after:duration-300 hover:after:w-full">
              Jobs
            </Link>

            <Link href="https://marssg.com/staffing-2/" target="_blank" className="text-base font-bold text-gray-800 transition-colors duration-200 hover:text-[#B3262F] relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#B3262F] after:transition-all after:duration-300 hover:after:w-full">
              Staffing
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('news')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-base font-bold text-gray-800 transition-colors duration-200 hover:text-[#B3262F] py-2">
                News <ChevronDown size={16} />
              </button>
              {openDropdown === 'news' && (
                <div
                  className="absolute left-0 top-full pt-2 w-48 z-50"
                  onMouseEnter={() => setOpenDropdown('news')}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="bg-white rounded-md shadow-lg py-2">
                    <Link href="https://marssg.com/blog/" target="_blank" className="block px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100 hover:text-[#B3262F]">
                      Blog
                    </Link>
                    <Link href="https://marssg.com/events/" target="_blank" className="block px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100 hover:text-[#B3262F]">
                      Events
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="https://marssg.com/referral-bonus/" target="_blank" className="text-base font-bold text-gray-800 transition-colors duration-200 hover:text-[#B3262F] relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#B3262F] after:transition-all after:duration-300 hover:after:w-full">
              Referral Bonus
            </Link>
          </div>
        </div>

        <div className="ml-auto flex items-center gap-4">
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#B3262F] hover:bg-white/20 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Button
            onClick={() => setIsDialogOpen(true)}
            className="hidden lg:inline-flex px-8 py-4 text-base font-extrabold text-white transition-all duration-200 hover:shadow-xl hover:scale-105 rounded-md"
            style={{ backgroundColor: "#B3262F" }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#9A1F28"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#B3262F"}
          >
            Contact Us
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg">
          <div className="px-6 py-6 space-y-4">
            <div className="space-y-2">
              <div className="text-base font-bold text-gray-800 py-2">About</div>
              <Link href="https://marssg.com/services/" target="_blank" className="block pl-4 text-sm font-semibold text-gray-700 hover:text-[#B3262F] py-2" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link href="https://marssg.com/diversity-mars/" target="_blank" className="block pl-4 text-sm font-semibold text-gray-700 hover:text-[#B3262F] py-2" onClick={() => setIsMenuOpen(false)}>
                Diversity
              </Link>
            </div>

            <div className="space-y-2">
              <div className="text-base font-bold text-gray-800 py-2">SOLUTIONS</div>
              <Link href="https://marssg.com/" target="_blank" className="block pl-4 text-sm font-semibold text-gray-700 hover:text-[#B3262F] py-2" onClick={() => setIsMenuOpen(false)}>
                MARSSG
              </Link>
              <Link href="https://getreturnship.com/" target="_blank" className="block pl-4 text-sm font-semibold text-gray-700 hover:text-[#B3262F] py-2" onClick={() => setIsMenuOpen(false)}>
                MARS RETURNSHIP
              </Link>
              <Link href="https://giveovation.com/" target="_blank" className="block pl-4 text-sm font-semibold text-gray-700 hover:text-[#B3262F] py-2" onClick={() => setIsMenuOpen(false)}>
                OVATION
              </Link>
              <Link href="https://www.marssg-healthcare.com/" target="_blank" className="block pl-4 text-sm font-semibold text-gray-700 hover:text-[#B3262F] py-2" onClick={() => setIsMenuOpen(false)}>
                MARS HEALTHCARE
              </Link>
              <Link href="https://marsorbit.us/" target="_blank" className="block pl-4 text-sm font-semibold text-gray-700 hover:text-[#B3262F] py-2" onClick={() => setIsMenuOpen(false)}>
                MARS ORBIT
              </Link>
            </div>

            <Link href="https://marssg.com/jobs/" target="_blank" className="block text-base font-bold text-gray-800 py-3 hover:text-[#B3262F]" onClick={() => setIsMenuOpen(false)}>
              Jobs
            </Link>

            <Link href="https://marssg.com/staffing-2/" target="_blank" className="block text-base font-bold text-gray-800 py-3 hover:text-[#B3262F]" onClick={() => setIsMenuOpen(false)}>
              Staffing
            </Link>

            <div className="space-y-2">
              <div className="text-base font-bold text-gray-800 py-2">News</div>
              <Link href="https://marssg.com/blog/" target="_blank" className="block pl-4 text-sm font-semibold text-gray-700 hover:text-[#B3262F] py-2" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
              <Link href="https://marssg.com/events/" target="_blank" className="block pl-4 text-sm font-semibold text-gray-700 hover:text-[#B3262F] py-2" onClick={() => setIsMenuOpen(false)}>
                Events
              </Link>
            </div>

            <Link href="https://marssg.com/referral-bonus/" target="_blank" className="block text-base font-bold text-gray-800 py-3 hover:text-[#B3262F]" onClick={() => setIsMenuOpen(false)}>
              Referral Bonus
            </Link>

            <Button
              onClick={() => {
                setIsDialogOpen(true)
                setIsMenuOpen(false)
              }}
              className="w-full px-8 py-4 text-base font-extrabold text-white transition-all duration-200 hover:shadow-xl rounded-md mt-4"
              style={{ backgroundColor: "#B3262F" }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
    <DemoBookingDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  )
}
