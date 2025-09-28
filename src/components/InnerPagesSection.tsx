import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function InnerPagesSection() {
  const innerPages = [
    {
      id: 1,
      title: "Asked Questions",
      category: "FAQ",
      image: "https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc1NzgwNDI1MXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 2,
      title: "About Our Company",
      category: "About",
      image: "https://images.unsplash.com/photo-1753613648120-d2c8d1d49002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd29ya3NwYWNlJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NTc3NzM5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 3,
      title: "About Our Company",
      category: "About",
      image: "https://images.unsplash.com/photo-1665360786492-ace5845fe817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwc3RhcnR1cCUyMG9mZmljZXxlbnwxfHx8fDE3NTc3OTU5MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 4,
      title: "Our Services",
      category: "Services",
      image: "https://images.unsplash.com/photo-1526242767279-2ad8d8271177?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpbyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTc3ODYzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 py-20 relative overflow-hidden">
      {/* Large Number Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[20rem] lg:text-[25rem] font-bold text-white/10 select-none pointer-events-none">
          25
        </span>
      </div>

      {/* Background decorative shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-48 -translate-y-48"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-white/5 rounded-full translate-y-24"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-100 text-sm tracking-wider uppercase mb-4">
            Build With Incredible
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Pre-Built Inner Pages Ready
          </h2>
        </div>

        {/* Inner Pages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {innerPages.map((page) => (
            <div key={page.id} className="group cursor-pointer">
              {/* Page Preview */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-1 transform hover:scale-105 transition-all duration-300 shadow-2xl border border-white/20">
                <div className="bg-gray-900/80 rounded-xl p-3">
                  {/* Browser Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="bg-gray-700 rounded px-2 py-1">
                      <span className="text-gray-300 text-xs">runok.com</span>
                    </div>
                  </div>
                  
                  {/* Page Content */}
                  <div className="bg-gradient-to-br from-gray-800 to-gray-700 h-48 rounded-lg relative overflow-hidden">
                    <ImageWithFallback 
                      src={page.image}
                      alt={page.title}
                      className="w-full h-full object-cover rounded-lg opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-lg"></div>
                    
                    {/* Page Header Overlay */}
                    <div className="absolute top-4 left-4 right-4">
                      <div className="bg-blue-600/90 backdrop-blur-sm rounded-lg p-3 text-center">
                        <h3 className="text-white font-bold text-sm mb-1">
                          {page.title}
                        </h3>
                        <span className="text-blue-100 text-xs">
                          {page.category} Page
                        </span>
                      </div>
                    </div>

                    {/* Page Content Placeholder */}
                    <div className="absolute bottom-4 left-4 right-4 space-y-2">
                      <div className="bg-white/20 rounded h-2"></div>
                      <div className="bg-white/15 rounded h-2 w-3/4"></div>
                      <div className="bg-white/10 rounded h-2 w-1/2"></div>
                    </div>
                  </div>
                  
                  {/* Page Title */}
                  <div className="mt-3 text-center">
                    <h4 className="text-white font-medium text-sm">
                      {page.title}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              </div>
              <span className="text-white font-medium">25+ Inner Pages</span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              </div>
              <span className="text-white font-medium">Responsive Design</span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              </div>
              <span className="text-white font-medium">Easy Customization</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}