import { motion } from 'framer-motion'
import { certifications } from '../data/certifications'


import { SiGoogle, SiUdemy, SiGeeksforgeeks } from 'react-icons/si'


import { FiAward } from 'react-icons/fi'

const iconMap = {
  google: <SiGoogle size={28} className="text-cyan-400" />,
  udemy: <SiUdemy size={28} className="text-cyan-400" />,
  gfg: <SiGeeksforgeeks size={28} className="text-cyan-400" />,
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 px-6 bg-gray-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute right-1/4 top-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-1/4 bottom-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-[0.3em] uppercase mb-3">What I've earned</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full" />
        </motion.div>

        {/* Cards with enhanced styling */}
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 5 }}
              className="group relative bg-gray-900/50 rounded-2xl p-6 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 flex items-center gap-5 overflow-hidden"
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon with enhanced styling */}
              <div className="relative z-10 bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-xl border border-white/5 group-hover:border-cyan-500/30 transition-colors">
                {iconMap[cert.icon] || <FiAward size={28} className="text-cyan-400" />}
              </div>

              {/* Text */}
              <div className="relative z-10 flex-1">
                <h3 className="text-white font-semibold text-base group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{cert.issuer}</p>
              </div>
              
              {/* Arrow indicator */}
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}