import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi'

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative bg-gray-900/80 rounded-2xl p-6 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden"
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Corner decoration */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Top */}
      <div className="relative z-10">
        {/* Tag with glow */}
        <span className="inline-block text-xs font-mono text-cyan-400 bg-cyan-400/10 px-3 py-1.5 rounded-full border border-cyan-500/20">
          {project.tag}
        </span>

        {/* Title with gradient on hover */}
        <h3 className="text-xl font-bold text-white mt-5 mb-3 group-hover:text-cyan-400 transition-all duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Highlights with better styling */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.highlights.map((h) => (
            <span
              key={h}
              className="text-xs bg-white/5 text-gray-300 px-3 py-1.5 rounded-lg font-mono border border-white/5"
            >
              ✦ {h}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="relative z-10">
        {/* Tech Stack with hover effect */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs border border-white/10 text-gray-400 px-3 py-1.5 rounded-lg hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-200 bg-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links with enhanced styling */}
        <div className="flex gap-5 pt-4 border-t border-white/5">
          {project.github && project.github !== '#' && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 text-sm transition-all duration-200 group/link"
            >
              <FiGithub size={16} className="group-hover/link:scale-110 transition-transform" />
              <span>Code</span>
              <FiArrowRight size={12} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
            </a>
          )}
          {project.liveDemo && project.liveDemo !== '#' && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 text-sm transition-all duration-200 group/link"
            >
              <FiExternalLink size={16} className="group-hover/link:scale-110 transition-transform" />
              <span>Live Demo</span>
              <FiArrowRight size={12} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}