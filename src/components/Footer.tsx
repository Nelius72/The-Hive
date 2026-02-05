'use client'

import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/images/TheHiveLogo.png'
import { FaTwitter, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'



const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Nelius72', icon: <FaGithub className="text-gray-800 hover:text-white transition" /> },
  { name: 'Twitter', href: 'https://x.com/Nelius72', icon: <FaTwitter className="text-blue-500 hover:text-white transition" /> },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/cornelio-romero-borrero-098055a5', icon: <FaLinkedin className="text-blue-700 hover:text-white transition" /> },
  { name: 'Email', href: 'mailto:cornelioromeroborrero@gmail.com', icon: <FaEnvelope className="text-gray-800 hover:text-white transition" /> },
]

const Footer: React.FC = () => {
  return (
    <footer id='contact' className="bg-yellow-300 text-black mt-16 rounded-lg shadow-blue-950-md">
  <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-1 md:grid-cols-3 gap-4">
    
    <div className="flex flex-col items-center md:items-start gap-1">
      <div className="flex items-center gap-1">
        <Image src={logo} alt="Logo" width={35} height={35} />
        <h2 className="font-bold text-lg">The Hive Network</h2>
      </div>
      <p className="text-xs text-center md:text-left">
        Tu fuente de películas y series. ¡Descubre, explora y disfruta!
      </p>
    </div>

    <div className="flex flex-col items-center md:items-start gap-1">
      <h3 className="font-semibold text-base mb-1">Contacto:</h3>
      <p className="text-xs">Email: cornelioromeroborrero@gmail.com</p>
      
    </div>

    <div className="flex flex-col items-center md:items-start gap-1 mt-6">
      
      <div className="flex gap-3 text-xl">
        {socialLinks.map((social) => (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            title={social.name}
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </div>

  </div>

  <div className="border-t border-black/20 mt-2 pt-2 text-center text-xs">
    © {new Date().getFullYear()} Develop by Nelius. Todos los derechos reservados.
  </div>
</footer>

  )
}

export default Footer
