'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { fetchMovieDetails, fetchMovieCast } from '@/lib/API'
import { Movie, Cast, Video } from '@/types/movie'
import SkeletonCard from './SkeletonCard'

interface MovieDetailProps {
  id: string 
}

const MovieDetail: React.FC<MovieDetailProps> = ({ id }) => {
  const [movie, setMovie] = useState<Movie | null>(null)
  const [cast, setCast] = useState<Cast[]>([])
  const [trailer, setTrailer] = useState<Video | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        const movieData = await fetchMovieDetails(id)
        setMovie(movieData)

        const castData = await fetchMovieCast(id)
        setCast(castData.slice(0, 16)) // Top 16 del reparto

        const trailerVideo = movieData.videos?.results.find(
          (v: Video) => v.type === 'Trailer'
        )
        setTrailer(trailerVideo || null)
      } catch (err) {
        console.error(err)
        setError('Error cargando la película.')
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [id])

  if (loading) {
    return (
      <div className="p-4 grid grid-cols-2 sm:grid-cols-5 gap-4">
        {Array.from({ length: 10 }).map((_, idx) => (
          <SkeletonCard key={idx} height={200} />
        ))}
      </div>
    )
  }

  if (error || !movie) {
    return <p className="text-center text-red-500 mt-10">{error || 'Película no encontrada.'}</p>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
  {/* Contenedor principal tipo card */}
  <div className="bg-[#282c34] rounded-lg shadow-lg p-6 space-y-8">
    {/* Cabecera: Poster y Datos */}
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Poster */}
      <div className="shrink-0 w-full lg:w-80 relative"> 
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={600}   
          height={900}  
          className="rounded-lg shadow-md"
        />
        <div className="mt-2 text-sm text-gray-200 space-y-1">
          <p>
            <strong>Estreno:</strong> {movie.release_date || 'Desconocida'}
          </p>
          <p>
            <strong>Duración:</strong> {movie.runtime ? `${movie.runtime} min` : 'Desconocida'}
          </p>
        </div>
      </div>

      {/* Contenido */}
      <div className="flex-1 space-y-4">
        <h1 className="text-4xl font-bold text-white">{movie.title}</h1>
        <div>
          <h2 className="text-xl font-semibold mb-2 text-white">Sinopsis</h2>
          <p className="text-gray-200">{movie.overview}</p>
        </div>
        <p className="text-yellow-500 font-bold">
          Calificación: {movie.vote_average ?? 'N/A'}
        </p>

        {trailer && (
          <div className="mt-4 aspect-video w-full lg:w-lg mx-auto"> 
            <iframe
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title="Tráiler"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-md"
            ></iframe>
          </div>
        )}
      </div>
    </div>

    {/* Reparto */}
    <div>
      <h2 className="text-2xl font-bold mb-4 text-white">Reparto Principal</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-4">
        {cast.map((actor) => (
          <div key={actor.id} className="text-center">
            {actor.profile_path ? (
              <Image
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                width={150}
                height={225}
                className="rounded-lg"
              />
            ) : (
              <SkeletonCard width={150} height={225} />
            )}
            <p className="text-sm font-semibold truncate text-white">{actor.name}</p>
            <p className="text-xs text-gray-400 truncate">
              {actor.character || 'Desconocido'}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

  )
}

export default MovieDetail
