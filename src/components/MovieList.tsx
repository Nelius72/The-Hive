'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { fetchPopularMovies } from '@/lib/API'
import { Movie } from '@/types/movie'
import SkeletonCard from './SkeletonCard'

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPopularMovies()
      .then((data) => setMovies(data))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="mb-8">
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {loading
          ? Array.from({ length: 10 }).map((_, idx) => (
              <SkeletonCard key={idx} height="200px" />
            ))
          : movies.map((movie) => (
              <Link
                key={movie.id}
                href={`/movie/${movie.id}`}
                className="group relative block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <div className="relative w-full h-50">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center py-1">
                  <p className="text-xs font-semibold truncate">{movie.title}</p>
                </div>
              </Link>
            ))}
      </div>
    </div>
  )
}

export default MovieList
