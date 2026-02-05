'use client'

import React from 'react'
import Image from 'next/image'
import reactLogo from '@/assets/images/react.svg'
import nextLogo from '@/assets/images/nextjs.svg'
import tmdbLogo from '@/assets/images/tmdb.svg'


const PoweredBy: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="bg-[#282c34] rounded-lg shadow-lg p-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-200 text-sm">
        <span>Powered by:</span>
        <div className="flex items-center gap-2">
          <Image src={reactLogo} alt="React" width={20} height={20} />
          <span>React</span>
        </div>
        <div className="flex items-center gap-2">
          <Image src={nextLogo} alt="Next.js" width={20} height={20} />
          <span>Next.js</span>
        </div>
        <div className="flex items-center gap-2">
          <Image src={tmdbLogo} alt="TMDB" width={20} height={20} />
          <span>TMDB</span>
        </div>
      </div>
    </div>
  )
}

export default PoweredBy
