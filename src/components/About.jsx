import { motion } from 'framer-motion'

const stats = [
  { value: '8.8', label: 'CGPA', suffix: '/10', icon: '🎓' },
  { value: '3', label: 'Projects Built', suffix: '+', icon: '🚀' },
  { value: '8K', label: 'Images Trained On', suffix: '+', icon: '📊' },
  { value: '91', label: 'mAP Achieved', suffix: '%', icon: '🎯' },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden" style={{ background: '#020617' }}>
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.2), transparent)' }} />
      <div className="absolute -left-32 top-1/4 w-64 h-64 rounded-full blur-[100px] pointer-events-none" style={{ background: 'rgba(34,211,238,0.05)' }} />
      <div className="absolute -right-32 bottom-1/4 w-64 h-64 rounded-full blur-[100px] pointer-events-none" style={{ background: 'rgba(168,85,247,0.05)' }} />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
          <p className="text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase mb-3">Get to know me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-0.5" style={{ background: 'linear-gradient(90deg, #22d3ee, transparent)' }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-5 text-gray-500 leading-relaxed">
            <p className="text-base">
              I'm <span className="text-white font-semibold">Balaji Perni</span>, a second-year B.Tech student in AI & Data Science at{' '}
              <span className="text-cyan-400">SRKR Engineering College, Bhimavaram</span>, with a CGPA of <span className="text-white font-semibold">8.8/10</span>.
            </p>
            <p>I specialize in <span className="text-gray-300">Computer Vision</span> and <span className="text-gray-300">Deep Learning</span> — building production-grade AI models and end-to-end ML pipelines from data preprocessing all the way to REST API deployment.</p>
            <p>I've worked on a <span className="text-cyan-400">Government-Sponsored</span> shrimp detection project, a deepfake detection system, and a full-stack AI-powered task management platform.</p>
            <p>Outside of AI, I actively practice <span className="text-gray-300">competitive programming</span> and am preparing for campus placements focusing on DSA and system design.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="glow-border relative rounded-2xl p-6 text-center overflow-hidden"
                style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.05)' }}
              >
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  style={{ background: 'linear-gradient(135deg, rgba(34,211,238,0.04), rgba(168,85,247,0.04))' }} />
                <div className="text-2xl mb-3">{stat.icon}</div>
                <p className="text-3xl font-bold text-white">
                  {stat.value}<span className="text-lg text-cyan-400">{stat.suffix}</span>
                </p>
                <p className="text-gray-600 text-xs mt-2 font-mono uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}