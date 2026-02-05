'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { fetchPopularSeries } from '@/lib/API'
import { Series } from '@/types/series'

const SeriesList: React.FC = () => {
  const [series, setSeries] = useState<Series[]>([])

  useEffect(() => {
    fetchPopularSeries()
      .then(setSeries)
      .catch(console.error)
  }, [])

  return (
    <div className="mb-8">
      
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {series.map((s) => (
          <Link
            key={s.id}
            href={`/serie/${s.id}`}
            className="group relative block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            <div className="relative w-full h-45 sm:h-50">
              <Image
                src={`https://image.tmdb.org/t/p/w500${s.poster_path}`}
                alt={s.name}
                fill
                style={{ objectFit: 'cover' }}
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center py-1">
              <p className="text-xs font-semibold truncate">{s.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SeriesList
