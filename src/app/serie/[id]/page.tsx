'use client'

import { useParams } from 'next/navigation'
import SerieDetail from '@/components/SerieDetail'

const SerieDetailPage: React.FC = () => {
  const params = useParams()
  const id = params?.id

  if (!id || Array.isArray(id)) {
    return <p className="text-center text-red-500 mt-10">Serie no válida</p>
  }

  return <SerieDetail id={id} />
}

export default SerieDetailPage
