import { motion } from 'framer-motion'
import { HiAcademicCap } from 'react-icons/hi'
import { FiMapPin, FiCalendar } from 'react-icons/fi'


const tags = ['Computer Vision', 'Deep Learning', 'Data Science', 'Full Stack']

export default function Education() {
  return (
    <section id="education" className="py-28 px-6 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -right-32 bottom-1/2 translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-[0.3em] uppercase mb-3">My background</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full" />
        </motion.div>

        {/* Card with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -5 }}
          className="group relative bg-gray-800/50 rounded-2xl p-8 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Corner decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="flex flex-col md:flex-row gap-8 relative z-10">
            {/* Icon with enhanced styling */}
            <div className="shrink-0">
              <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 p-5 rounded-2xl border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors">
                <HiAcademicCap size={40} className="text-cyan-400" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                <h3 className="text-white font-bold text-2xl">
                  Bachelor of Technology
                </h3>
                <span className="flex items-center gap-2 text-cyan-400 font-mono text-sm bg-cyan-400/10 px-4 py-2 rounded-full w-fit border border-cyan-500/20">
                  <FiCalendar size={14} />
                  2023 – 2027
                </span>
              </div>

              <p className="text-cyan-400 font-semibold text-lg mb-2">
                Artificial Intelligence and Data Science
              </p>
              <p className="flex items-center gap-2 text-gray-400 mb-6">
                <FiMapPin size={16} />
                SRKR Engineering College, Bhimavaram
              </p>

              {/* CGPA Bar with enhanced styling */}
              <div className="mt-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400 text-sm font-medium">Current CGPA</span>
                  <span className="text-white font-bold text-sm">8.8 / 10</span>
                </div>
                <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '88%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="bg-gradient-to-r from-cyan-400 to-cyan-500 h-3 rounded-full relative"
                  >
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shine" />
                  </motion.div>
                </div>
              </div>

              {/* Tags with enhanced styling */}
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium border border-white/10 text-gray-400 px-4 py-2 rounded-lg bg-white/5 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}