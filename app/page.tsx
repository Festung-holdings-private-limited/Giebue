"use client";
import React from 'react'

export default function GiebueComingSoon() {
  const [activePage, setActivePage] = React.useState<null | 'privacy' | 'terms'>(null)
  return (
    <main className="min-h-screen bg-white text-black antialiased overflow-hidden">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-black" />
            <span className="text-2xl md:text-3xl font-medium tracking-[-0.04em]">
              Giebue
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-[15px] text-neutral-700">
            <a href="#overview" className="hover:text-black transition-colors">
              Overview
            </a>
            <a href="#principles" className="hover:text-black transition-colors">
              Principles
            </a>
            <a href="#security" className="hover:text-black transition-colors">
              Security
            </a>
            <a href="#contact" className="hover:text-black transition-colors">
              Contact
            </a>
            <button
              onClick={() => setActivePage('privacy')}
              className="hover:text-black transition-colors"
            >
              Privacy
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative border-b border-black/10 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03),transparent_40%)]">
        <div className="absolute inset-0 opacity-80 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.04),transparent_35%)]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-28 md:pt-36 pb-28 md:pb-36">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.28em] text-neutral-400 mb-10">
              Coming Soon
            </p>

            <h1 className="text-[2.8rem] md:text-[5rem] leading-[1] tracking-[-0.02em] font-medium max-w-6xl">
              The impenetrable privacy and encryption
            </h1>

            <div className="mt-12 max-w-2xl">
              <p className="text-xl leading-relaxed text-neutral-700">
                Giebue is being developed with a focus on privacy, encryption, and modern security standards.
              </p>
            </div>

            <div className="mt-16">
              <p className="text-3xl md:text-5xl font-medium tracking-[-0.04em] text-black">
                Coming Soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="border-b border-black/10 bg-[#f6f4ef]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 grid md:grid-cols-3 gap-10">
          <div>
            <p className="text-sm text-neutral-400 mb-2">Architecture</p>
            <h3 className="text-2xl font-medium tracking-tight">
              Modern architecture
            </h3>
          </div>

          <div>
            <p className="text-sm text-neutral-400 mb-2">Data Philosophy</p>
            <h3 className="text-2xl font-medium tracking-tight">
              Minimal information retention
            </h3>
          </div>

          <div>
            <p className="text-sm text-neutral-400 mb-2">Availability</p>
            <h3 className="text-2xl font-medium tracking-tight">
              Public availability
            </h3>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-neutral-400 mb-8">
              Overview
            </p>

            <h2 className="text-5xl md:text-6xl tracking-[-0.05em] leading-[1] font-medium max-w-xl">
              Built around modern security standards.
            </h2>
          </div>

          <div className="space-y-10 text-lg text-neutral-700 leading-relaxed">
            <p>
              Giebue is being developed around a modern infrastructure approach focused on long-term scalability and operational simplicity.
            </p>

            <p>
              The platform architecture prioritizes secure system design, efficient performance, and responsible handling of essential operational information.
            </p>

            <p>
              Public documentation and additional platform details will become available closer to release.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section id="principles" className="border-t border-black/10 bg-[#f6f4ef] py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-20">
            <p className="text-sm uppercase tracking-[0.28em] text-neutral-400 mb-8">
              Principles
            </p>

            <h2 className="text-5xl md:text-6xl tracking-[-0.05em] leading-[1] font-medium">
              Designed with a privacy-focused approach.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            <div className="bg-white/90 backdrop-blur-sm border border-black/10 rounded-[1.5rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
              <h3 className="text-2xl font-medium tracking-tight mb-5">
                Privacy-first approach
              </h3>

              <p className="text-neutral-700 leading-relaxed text-lg">
                User information is intended to remain limited to operationally necessary data only.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm border border-black/10 rounded-[1.5rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
              <h3 className="text-2xl font-medium tracking-tight mb-5">
                Security-oriented design
              </h3>

              <p className="text-neutral-700 leading-relaxed text-lg">
                Platform systems are being structured around modern security and infrastructure standards.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm border border-black/10 rounded-[1.5rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
              <h3 className="text-2xl font-medium tracking-tight mb-5">
                Long-term scalability
              </h3>

              <p className="text-neutral-700 leading-relaxed text-lg">
                Architecture decisions are being designed for future adaptability and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="py-28 md:py-36 border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-20">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-neutral-400 mb-8">
              Security
            </p>

            <h2 className="text-5xl md:text-6xl tracking-[-0.05em] leading-[1] font-medium max-w-lg">
              Engineered around modern security practices.
            </h2>
          </div>

          <div className="space-y-6">
            <div className="border border-black/10 bg-white/80 backdrop-blur-sm rounded-[1.5rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
              <div className="flex items-start justify-between gap-10">
                <div>
                  <h3 className="text-2xl font-medium tracking-tight mb-4">
                    Secure infrastructure
                  </h3>

                  <p className="text-lg text-neutral-700 leading-relaxed max-w-2xl">
                    Architecture planning emphasizes secure access management,
                    reliability, and operational continuity.
                  </p>
                </div>

                
              </div>
            </div>

            <div className="border border-black/10 bg-white/80 backdrop-blur-sm rounded-[1.5rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
              <div className="flex items-start justify-between gap-10">
                <div>
                  <h3 className="text-2xl font-medium tracking-tight mb-4">
                    Responsible data practices
                  </h3>

                  <p className="text-lg text-neutral-700 leading-relaxed max-w-2xl">
                    Giebue is not being designed around advertising, data resale,
                    or unnecessary behavioral tracking practices.
                  </p>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/10 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.28em] text-neutral-500 mb-8">
              Giebue
            </p>

            <h2 className="text-5xl md:text-7xl leading-[0.95] tracking-[-0.05em] font-medium mb-10">
              Built for privacy, reliability, and modern security.
            </h2>

            <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl">
              Additional platform documentation and product information will be published progressively over time.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black text-white border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.15),transparent_35%)]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h4 className="text-2xl font-medium tracking-tight mb-2">
              Giebue
            </h4>

            <p className="text-neutral-500 text-sm">
              Built with modern security standards.
            </p>
          </div>

          <div className="text-sm text-neutral-500 space-y-2">
            <p>contact@giebue.com</p>
            <p>Coming Soon</p>
            <div className="flex items-center gap-5">
              <button
                onClick={() => setActivePage('privacy')}
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setActivePage('terms')}
                className="hover:text-white transition-colors"
              >
                Terms
              </button>
            </div>
            <p>© 2026 Giebue. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {activePage && (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-6">
          <div className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2rem] border border-black/10 p-8 md:p-12 relative">
            <button
              onClick={() => setActivePage(null)}
              className="absolute top-6 right-6 text-sm text-neutral-500 hover:text-black"
            >
              Close
            </button>

            {activePage === 'privacy' && (
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-neutral-400 mb-8">
                  Privacy Policy
                </p>

                <h2 className="text-4xl md:text-5xl tracking-[-0.05em] leading-[1] font-medium mb-12 max-w-3xl">
                  Privacy and responsible data handling remain central to the development of Giebue.
                </h2>

                <div className="space-y-10 text-lg text-neutral-700 leading-relaxed">
                  <p>
                    Giebue is being developed with a focus on minimizing unnecessary data collection and maintaining responsible operational practices.
                  </p>

                  <p>
                    Only limited information required for essential functionality, security, operational continuity, or legal compliance may be processed where necessary.
                  </p>

                  <p>
                    Giebue is not designed around advertising networks, third-party data resale, invasive profiling, or unnecessary behavioral tracking practices.
                  </p>

                  <p>
                    Appropriate technical and organizational measures are intended to be implemented to support platform security, access control, and infrastructure protection.
                  </p>

                  <p>
                    Additional privacy documentation, platform policies, and operational details may be updated periodically as the platform evolves.
                  </p>

                  <p>
                    Giebue is operated by Festung Holdings Pvt Ltd.
                  </p>
                </div>
              </div>
            )}

            {activePage === 'terms' && (
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-neutral-400 mb-8">
                  Terms
                </p>

                <h2 className="text-4xl md:text-5xl tracking-[-0.05em] leading-[1] font-medium mb-12 max-w-3xl">
                  Use of the platform will remain subject to applicable operational and legal requirements.
                </h2>

                <div className="space-y-10 text-lg text-neutral-700 leading-relaxed">
                  <p>
                    Information published on this website is provided for general informational purposes regarding the Giebue platform.
                  </p>

                  <p>
                    Platform availability, functionality, features, and documentation may change, expand, or evolve over time.
                  </p>

                  <p>
                    Unauthorized misuse, interference, disruption, or attempts to compromise platform systems, infrastructure, or services may result in access restrictions or legal action where applicable.
                  </p>

                  <p>
                    Additional legal documentation, policies, and operational guidelines may be published progressively as public platform availability expands.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  )
}
