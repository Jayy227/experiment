import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-orange-100 via-yellow-100 to-orange-200 opacity-60 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-yellow-100 via-orange-100 to-yellow-200 opacity-50 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[50rem] h-[50rem] rounded-full bg-gradient-to-br from-orange-50 to-yellow-50 opacity-40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 md:py-40 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-600 text-sm font-semibold border border-orange-200">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              Now in public beta
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-gray-900">
              Make Your Website{" "}
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Clear, Fast
              </span>{" "}
              and Beautifully{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Simple
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 max-w-xl leading-relaxed">
              Everything you need to launch a modern, high-performance website.
              Clean design, blazing speed, and zero complexity. Start building
              today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl hover:from-orange-600 hover:to-yellow-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
              >
                Get Started
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:border-orange-300 hover:text-orange-600 transition-all hover:-translate-y-0.5 shadow-sm"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Right: visual / card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            {/* Main card */}
            <div className="relative w-full max-w-lg rounded-3xl bg-white border border-gray-200 shadow-2xl p-8 lg:p-10">
              {/* Orange accent line top */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full" />

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Lightning Fast</p>
                    <p className="text-2xl font-bold text-gray-900">99.9%</p>
                  </div>
                </div>

                <div className="h-px bg-gray-200" />

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-orange-50 border border-orange-100">
                    <p className="text-3xl font-bold text-gray-900">10x</p>
                    <p className="text-sm text-gray-500 mt-1">Faster builds</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-yellow-50 border border-yellow-100">
                    <p className="text-3xl font-bold text-gray-900">50+</p>
                    <p className="text-sm text-gray-500 mt-1">Components</p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">SSL secured & fast loads</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">Mobile-first responsive design</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decorative dots */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 opacity-20 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-yellow-400 opacity-20 blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}