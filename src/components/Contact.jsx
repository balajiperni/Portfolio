import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi'

const contacts = [
  {
    icon: <FiMail size={22} />,
    label: 'Email',
    value: 'pernibalaji375@gmail.com',
    href: 'mailto:pernibalaji375@gmail.com',
  },
  {
    icon: <FiGithub size={22} />,
    label: 'GitHub',
    value: 'github.com/balajiperni',
    href: 'https://github.com/balajiperni',
  },
  {
    icon: <FiLinkedin size={22} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/balajiperni',
    href: 'www.linkedin.com/in/balaji-perni',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-gray-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-[0.3em] uppercase mb-3">Let's talk</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full mx-auto" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-400 mt-8 mb-16 leading-relaxed text-lg"
        >
          I'm currently open to internship opportunities and collaborations.
          Whether you have a project in mind or just want to connect —{' '}
          <span className="text-cyan-400">my inbox is always open!</span>
        </motion.p>

        {/* Contact Cards with enhanced styling */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-gray-900/50 rounded-2xl p-6 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 flex flex-col items-center gap-3 overflow-hidden"
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon with enhanced styling */}
              <div className="relative z-10 p-3 bg-gray-800/50 rounded-xl border border-white/5 group-hover:border-cyan-500/30 transition-colors">
                <div className="text-gray-400 group-hover:text-cyan-400 transition-colors">
                  {contact.icon}
                </div>
              </div>
              <p className="relative z-10 text-white font-medium text-sm">{contact.label}</p>
              <p className="relative z-10 text-gray-500 text-xs break-all group-hover:text-gray-400 transition-colors">{contact.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Big CTA with enhanced styling */}
        <motion.a
          href="mailto:pernibalaji35@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
          className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-400 to-cyan-500 text-gray-950 font-bold rounded-xl hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] transition-all duration-300 text-lg overflow-hidden"
        >
          {/* Button shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          <span className="relative z-10 flex items-center gap-3">
            Say Hello 👋
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </span>
        </motion.a>

      </div>
    </section>
  )
}