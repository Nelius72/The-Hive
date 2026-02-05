'use client'

import React from 'react'

const About: React.FC = () => {
  return (
    <div id="about" className="max-w-5xl mx-auto px-4 py-7">
      {/* Contenedor tipo card */}
      <div className="bg-[#282c34] rounded-lg shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white">Sobre The Hive</h2>
        <p className="text-gray-200 text-sm leading-relaxed">
          Bienvenido a <span className="font-bold text-yellow-500">The Hive</span>, tu plataforma para descubrir las películas y series más populares.
          Aquí puedes <span className="font-bold text-yellow-500">explorar, buscar y acceder</span> a toda la información sobre tus títulos favoritos, ver sus tráilers, y consultar el reparto principal.
        </p>
        <p className="text-gray-200 text-sm leading-relaxed">
          El objetivo es ofrecerte una experiencia sencilla, moderna y visualmente atractiva, combinando información completa con una interfaz intuitiva.
        </p>
        <p className="text-gray-200 text-sm leading-relaxed">
          ¡Explora, disfruta y mantente al día con tus películas y series favoritas!
        </p>
      </div>
    </div>
  )
}

export default About
