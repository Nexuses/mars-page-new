export function ElevateCareerSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#f8f5f5" }}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">Supercharge Your Hiring Process with MARS TalentFlex.

            </h2>
            {/* Features Grid (Editable) */}
            {(() => {
              const features = [
                {
                  icon: "/career section-logos/time2.png",
                  title: "Reduce Sourcing Time",
                  description: "Cut sourcing time by 40%, from 60% to under 20%.",
                },
                {
                  icon: "/career section-logos/cost2.png",
                  title: "Save Costs",
                  description: " Lower cost-to-hire by up to 40% with a flat fee.",
                },
                {
                  icon: "/career section-logos/hire2.png",
                  title: "Hire Quality",
                  description: " Get verified, culture-fit candidates who stay longer.",
                },
                {
                  icon: "/career section-logos/qual2.png",
                  title: "Accelerate Hiring",
                  description: "Receive 5–8 ranked profiles in as low as 72 hours.",
                },
              ]

              return (
                <div className="mt-4 sm:mt-6">
                  {/* First Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    {features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex flex-col items-start text-left">
                        <div className="mb-3">
                          {feature.icon.startsWith('/') ? (
                            <img src={feature.icon} alt={feature.title} width={32} height={32} />
                          ) : (
                            <span className="text-3xl">{feature.icon}</span>
                          )}
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Divider below first row */}
                  <div className="mt-6 sm:mt-8 mb-6 sm:mb-8">
                    <div className="h-px w-full" style={{ backgroundColor: "#B3262F" }}></div>
                  </div>
                  
                  {/* Second Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    {features.slice(2, 4).map((feature, idx) => (
                      <div key={idx + 2} className="flex flex-col items-start text-left">
                        <div className="mb-3">
                          {feature.icon.startsWith('/') ? (
                            <img src={feature.icon} alt={feature.title} width={32} height={32} />
                          ) : (
                            <span className="text-3xl">{feature.icon}</span>
                          )}
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })()}
          </div>

          {/* Right Column - Profile Cards Image */}
          <div className="relative flex justify-center md:justify-end mt-8 md:mt-0 group">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-2xl aspect-[16/9]">
              <img
                src="/images/profile-cards.png"
                alt="Professional profiles showcasing HR Director, Sr. Security Engineer, and Sr. Manager Cloud positions"
                className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
