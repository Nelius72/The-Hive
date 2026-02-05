import { searchMulti } from '@/lib/API'
import Image from 'next/image'
import Link from 'next/link'
import SkeletonCard from '@/components/SkeletonCard'
import { SearchResult } from '@/types/search'

interface SearchPageProps {
  searchParams: Promise<{
    q?: string
  }>
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams
  const query = q?.trim()

  if (!query) {
    return (
      <p className="text-center mt-10">
        Introduce un término de búsqueda
      </p>
    )
  }

  const results: SearchResult[] = await searchMulti(query)

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">
        Resultados para:{' '}
        <span className="text-yellow-500">{query}</span>
      </h1>

      {results.length === 0 ? (
        <p>No se encontraron resultados</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {results.map((item) => {
            const title = item.title ?? item.name ?? 'Sin título'

            return (
              <Link
                key={item.id}
                href={
                  item.media_type === 'movie'
                    ? `/movie/${item.id}`
                    : `/serie/${item.id}`
                }
                className="group rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative w-full h-64 bg-gray-800">
                  {item.poster_path ? (
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt={title}
                      fill
                      className="object-cover group-hover:scale-105 transition"
                    />
                  ) : (
                    <SkeletonCard height={256} />
                  )}
                </div>

                <div className="bg-black bg-opacity-70 text-white text-xs p-2 text-center truncate">
                  {title}
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </main>
  )
}
