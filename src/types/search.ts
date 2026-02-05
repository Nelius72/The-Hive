export type SearchResult = {
  id: number
  media_type: 'movie' | 'tv'
  poster_path: string | null
  title?: string        // películas
  name?: string         // series
}
