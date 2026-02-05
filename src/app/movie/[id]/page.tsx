'use client'

import { useParams } from 'next/navigation'
import MovieDetailComponent from '@/components/MovieDetail'

const MovieDetailPage: React.FC = () => {
  const params = useParams()
  const id = params?.id

  // Seguridad extra
  if (!id || Array.isArray(id)) {
    return <p className="text-center text-red-500 mt-10">Película no válida</p>
  }

  return <MovieDetailComponent id={id} />
}

export default MovieDetailPage
