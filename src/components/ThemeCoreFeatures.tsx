import React from 'react';

export function ThemeCoreFeatures() {
  return (
    <section className="bg-[#0a0a1a] py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
      
      {/* Background decorative shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-600/5 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-600/5 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-sm tracking-wider uppercase mb-4">
            Build With Incredible
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            We Have Lot's Of<br />
            Theme Core Features
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* HTML5 Feature */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-300 group text-center">
            <div className="mb-6 flex justify-center">
              {/* HTML5 Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.413l.213 2.622h12.303l-.435 4.905H9.622l.213 2.622h7.794l-.435 4.905-5.94 1.608-5.94-1.608-.284-3.264h2.622l.144 1.55 3.458.96 3.458-.96.36-3.264H5.91l-.639-7.517h13.318l-.213 2.441z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              HTML5
            </h3>
            <p className="text-gray-400 text-sm">
              Markup Language
            </p>
          </div>

          {/* CSS Used Feature */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-300 group text-center">
            <div className="mb-6 flex justify-center">
              {/* CSS Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.413l.213 2.622h12.303l-.435 4.905H9.622l.213 2.622h7.794l-.435 4.905-5.94 1.608-5.94-1.608-.284-3.264h2.622l.144 1.55 3.458.96 3.458-.96.36-3.264H5.91l-.639-7.517h13.318l-.213 2.441z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              CSS Used
            </h3>
            <p className="text-gray-400 text-sm">
              CSS Processor
            </p>
          </div>

          {/* Sass Used Feature */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-300 group text-center">
            <div className="mb-6 flex justify-center">
              {/* Sass Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.141.425-.69 2.124-.69 2.124s-.313-.636-1.132-.636c-.422 0-.844.212-1.336.636-.563.459-.985.918-1.407 1.272-.563.493-1.055.845-1.548 1.131-.669.422-1.267.598-1.618.598-.422 0-.775-.246-.775-.598 0-.211.07-.387.141-.493.07-.106.141-.176.211-.246.141-.176.281-.352.422-.563.211-.352.387-.739.458-1.055.105-.493.07-.985-.035-1.336-.07-.281-.176-.528-.281-.739-.141-.281-.317-.528-.528-.739-.317-.317-.704-.563-1.126-.704-.563-.176-1.161-.176-1.653 0-.422.141-.775.387-1.02.704-.281.387-.422.845-.422 1.302 0 .528.176 1.02.528 1.407.281.317.598.563.915.739.493.281 1.02.493 1.548.598.669.141 1.373.106 2.007-.105.775-.246 1.443-.704 1.971-1.302.422-.493.704-1.055.845-1.653.176-.739.106-1.548-.176-2.252-.176-.528-.458-1.02-.81-1.443-.458-.563-1.02-1.02-1.653-1.337C13.796.598 12.915.387 12 .387c-.845 0-1.653.176-2.358.528-.845.422-1.548 1.055-2.042 1.83-.563.915-.845 1.971-.845 3.027 0 1.126.281 2.217.81 3.168.563 1.02 1.337 1.865 2.287 2.429.915.528 1.971.81 3.027.81 1.126 0 2.217-.281 3.168-.81 1.02-.563 1.865-1.337 2.429-2.287.528-.915.81-1.971.81-3.027 0-.915-.176-1.83-.563-2.64-.316-.669-.774-1.267-1.337-1.724-.563-.458-1.196-.81-1.865-1.02z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Sass Used
            </h3>
            <p className="text-gray-400 text-sm">
              CSS Pre-Processor
            </p>
          </div>

          {/* Bootstrap 5 Feature */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-300 group text-center">
            <div className="mb-6 flex justify-center">
              {/* Bootstrap Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.172 1.572zm.324 1.206H9.956v3.678h2.537c1.466 0 2.302-.663 2.302-1.781 0-1.377-1.095-1.897-2.699-1.897zM1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm15.611 13.025c1.25-.704 2.06-1.934 2.06-3.371 0-2.389-1.676-4.302-4.302-4.302H7.617v14.296h7.963c2.718 0 4.302-1.934 4.302-4.302 0-1.777-.835-3.025-2.271-3.321z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Bootstrap 5
            </h3>
            <p className="text-gray-400 text-sm">
              Latest CSS Framework
            </p>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-8 w-2 h-2 bg-blue-600 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-12 w-3 h-3 bg-purple-600 rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-indigo-600 rounded-full opacity-50 animate-pulse delay-500"></div>
      </div>
    </section>
  );
}