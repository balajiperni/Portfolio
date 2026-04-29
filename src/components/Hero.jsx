import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiArrowDown, FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-start px-6 pt-20 relative overflow-hidden" style={{ background: '#020617' }}>

      {/* Grid background */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}
      />

      {/* Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)', animationDelay: '1s' }} />

      <div className="max-w-6xl w-full flex items-center justify-between">

        {/* Left side - Name & Content */}
        <div className="max-w-xl">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 font-mono text-xs tracking-widest uppercase"
          style={{ borderColor: 'rgba(34,211,238,0.2)', background: 'rgba(34,211,238,0.05)', color: '#22d3ee' }}
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Available for Internships
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold mb-4 leading-none tracking-tight"
        >
          <span className="text-outline-white">Balaji Perni</span>
          <span className="text-cyan-400 animate-blink">_</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center gap-3 mb-8 font-mono text-sm"
        >
          {['AI & Data Science', 'Computer Vision', 'Deep Learning', 'Full Stack'].map((tag, i) => (
            <span key={tag} className="flex items-center gap-3">
              <span className="text-gray-400">{tag}</span>
              {i < 3 && <span className="text-cyan-400/30">◆</span>}
            </span>
          ))}
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-500 max-w-xl mb-12 leading-relaxed text-base"
        >
          Building production-grade AI systems at SRKR Engineering College.
          From 91% mAP object detection to full-stack ML microservices —
          <span className="text-gray-300"> I ship things that work.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 flex-wrap mb-12"
        >
          <Link
            to="projects"
            smooth={true}
            duration={600}
            offset={-70}
            className="group relative px-8 py-4 font-semibold rounded-xl cursor-pointer overflow-hidden text-gray-950"
            style={{ background: 'linear-gradient(135deg, #22d3ee, #06b6d4)' }}
          >
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
            <span className="relative flex items-center gap-2">
              View Projects <FiArrowDown className="group-hover:translate-y-1 transition-transform" />
            </span>
          </Link>

          <div className="flex gap-3">
            <a href="https://github.com/balajiperni" target="_blank" rel="noopener noreferrer"
              className="p-4 rounded-xl border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300 hover:bg-cyan-400/5"
            >
              <FiGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/balajiperni" target="_blank" rel="noopener noreferrer"
              className="p-4 rounded-xl border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300 hover:bg-cyan-400/5"
            >
              <FiLinkedin size={20} />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300 hover:bg-cyan-400/5 text-sm font-mono"
            >
              Resume ↗
            </a>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-8 text-left"
        >
          {[
            { val: '8.8', label: 'CGPA' },
            { val: '91%', label: 'mAP Score' },
            { val: '8K+', label: 'Images Trained' },
            { val: '3+', label: 'Projects' },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-bold text-cyan-400">{s.val}</p>
              <p className="text-xs text-gray-600 font-mono mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Right side - Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
      >
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-cyan-400/30 p-1"
          style={{ background: 'rgba(34, 211, 238, 0.05)' }}>
          <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 flex items-center justify-center">
            {/* Replace with your actual photo path */}
            <img 
              src="/src/assets/images/profile.png" 
              alt="Balaji Perni" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full blur-3xl -z-10 opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.4) 0%, transparent 70%)' }} />
      </motion.div>

      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-700 font-mono tracking-[0.2em]">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 border border-gray-800 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-0.5 h-2 bg-cyan-400 rounded-full" />
        </motion.div>
      </motion.div>

    </section>
  )
}