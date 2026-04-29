import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

const socialLinks = [
  {
    icon: <FiGithub size={20} />,
    href: 'https://github.com/balajiperni',
    label: 'GitHub',
  },
  {
    icon: <FiLinkedin size={20} />,
    href: 'https://linkedin.com/in/balajiperni',
    label: 'LinkedIn',
  },
  {
    icon: <FiMail size={20} />,
    href: 'mailto:pernibalaji35@gmail.com',
    label: 'Email',
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/5 py-10 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-500/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">
            Balaji
          </span>
          <span className="text-white font-bold">.dev</span>
        </div>

        {/* Copy with heart icon */}
        <p className="text-gray-500 text-sm flex items-center gap-2">
          © {new Date().getFullYear()} Balaji Perni. Built with 
          <span className="flex items-center gap-1 text-cyan-400">
            <FiHeart size={12} className="fill-cyan-400" />
          </span>
          using React + Tailwind.
        </p>

        {/* Social Icons with enhanced styling */}
        <div className="flex gap-3">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-2.5 bg-white/5 rounded-lg border border-white/5 text-gray-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

      </div>
    </footer>
  )
}