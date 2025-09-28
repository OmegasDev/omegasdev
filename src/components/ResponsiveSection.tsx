import React from 'react';

export function ResponsiveSection() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 py-20 relative overflow-hidden">
      {/* Background decorative shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-48 -translate-y-48"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-white/5 rounded-full translate-y-24"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-100 text-sm tracking-wider uppercase mb-4">
            Build With Incredible
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Responsive & Retina<br />
            Ready Template
          </h2>
        </div>

        {/* Device Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Desktop */}
          <div className="text-center group">
            <div className="mb-6 flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                {/* Desktop Icon */}
                <svg className="w-16 h-16 text-white mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              1025px
            </h3>
            <p className="text-blue-100 text-sm">
              Desktop Screen Layout
            </p>
          </div>

          {/* Laptop */}
          <div className="text-center group">
            <div className="mb-6 flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                {/* Laptop Icon */}
                <svg className="w-16 h-16 text-white mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              769px
            </h3>
            <p className="text-blue-100 text-sm">
              Laptop Screen Layout
            </p>
          </div>

          {/* Tablet */}
          <div className="text-center group">
            <div className="mb-6 flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                {/* Tablet Icon */}
                <svg className="w-16 h-16 text-white mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              481px
            </h3>
            <p className="text-blue-100 text-sm">
              Tablet Screen Layout
            </p>
          </div>

          {/* Mobile */}
          <div className="text-center group">
            <div className="mb-6 flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                {/* Mobile Icon */}
                <svg className="w-16 h-16 text-white mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              360px
            </h3>
            <p className="text-blue-100 text-sm">
              Mobile Screen Layout
            </p>
          </div>
        </div>

        {/* Device Showcase */}
        <div className="relative">
          {/* Central device mockup */}
          <div className="relative mx-auto max-w-4xl">
            {/* Large device frame */}
            <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-4 border border-white/20">
              <div className="bg-gray-900/80 rounded-2xl overflow-hidden">
                {/* Device screen */}
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-700 relative">
                  {/* Screen content placeholder */}
                  <div className="absolute inset-4 bg-white/5 rounded-lg">
                    <div className="p-6 space-y-4">
                      <div className="bg-white/10 rounded h-8 w-3/4"></div>
                      <div className="space-y-2">
                        <div className="bg-white/5 rounded h-4"></div>
                        <div className="bg-white/5 rounded h-4 w-5/6"></div>
                        <div className="bg-white/5 rounded h-4 w-2/3"></div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mt-6">
                        <div className="bg-white/10 rounded-lg h-16"></div>
                        <div className="bg-white/10 rounded-lg h-16"></div>
                        <div className="bg-white/10 rounded-lg h-16"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating smaller devices */}
            <div className="absolute -top-8 -right-8 transform rotate-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
                <div className="bg-gray-900/80 rounded-xl w-32 h-48">
                  <div className="p-3 space-y-2">
                    <div className="bg-white/10 rounded h-3"></div>
                    <div className="bg-white/5 rounded h-2"></div>
                    <div className="bg-white/5 rounded h-2 w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 transform -rotate-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
                <div className="bg-gray-900/80 rounded-xl w-40 h-28">
                  <div className="p-3 space-y-2">
                    <div className="bg-white/10 rounded h-2"></div>
                    <div className="bg-white/5 rounded h-1.5"></div>
                    <div className="bg-white/5 rounded h-1.5 w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating chat bubble */}
        <div className="fixed bottom-8 right-8 bg-white rounded-full p-4 shadow-2xl z-50">
          <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </div>
      </div>
    </section>
  );
}