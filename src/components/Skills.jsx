import { motion } from 'framer-motion'
import { skills } from '../data/skills'
import { FiCode, FiDatabase, FiTool, FiCpu, FiLayout, FiCloud } from 'react-icons/fi'

const iconMap = {
  'Programming': <FiCode size={24} />,
  'ML / Deep Learning': <FiCpu size={24} />,
  'Computer Vision': <FiLayout size={24} />,
  'ML Techniques': <FiTool size={24} />,
  'Data & Tools': <FiDatabase size={24} />,
  'Databases': <FiCloud size={24} />,
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute -left-32 top-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -right-32 bottom-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-[0.3em] uppercase mb-3">What I work with</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-gray-800/50 rounded-2xl p-6 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden"
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Category with icon */}
              <div className="flex items-center gap-3 mb-5 relative z-10">
                <div className="p-2.5 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                  {iconMap[skillGroup.category] || <FiCode size={24} />}
                </div>
                <h3 className="text-cyan-400 font-semibold text-sm font-mono uppercase tracking-wider">
                  {skillGroup.category}
                </h3>
              </div>

              {/* Items with enhanced styling */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {skillGroup.items.map((skill, idx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + idx * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-sm bg-white/5 text-gray-300 px-4 py-2 rounded-lg border border-white/5 hover:bg-cyan-400/10 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}