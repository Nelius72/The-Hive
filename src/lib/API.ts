import axios from 'axios'
import { Movie, Cast, Video } from '@/types/movie'
import { Serie, SerieCast } from '@/types/series'
import { SearchResult } from '@/types/search'

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

if (!API_KEY) {
  throw new Error(
    'No API key found. Set NEXT_PUBLIC_TMDB_API_KEY in .env.local'
  )
}

const api = axios.create({
  baseURL: BASE_URL,
  params: { api_key: API_KEY, language: 'es-ES' },
})

/* ==================== PELÍCULAS ==================== */

// Top 10 películas populares
export const fetchPopularMovies = async (): Promise<Movie[]> => {
  const response = await api.get('/movie/popular')
  return response.data.results.slice(0, 10)
}

// Detalle de una película, incluyendo videos (trailer)
export const fetchMovieDetails = async (id: string): Promise<Movie & { videos?: { results: Video[] } }> => {
  const response = await api.get(`/movie/${id}`, {
    params: { append_to_response: 'videos' },
  })
  return response.data
}

// Reparto de la película
export const fetchMovieCast = async (id: string): Promise<Cast[]> => {
  const response = await api.get(`/movie/${id}/credits`)
  return response.data.cast
}

/* ==================== SERIES ==================== */

// Top 10 series populares
export const fetchPopularSeries = async (): Promise<Serie[]> => {
  const response = await api.get('/tv/popular')
  return response.data.results.slice(0, 10)
}

// Detalle de una serie, incluyendo videos
export const fetchSerieDetails = async (id: string): Promise<Serie & { videos?: { results: Video[] } }> => {
  const response = await api.get(`/tv/${id}`, {
    params: { append_to_response: 'videos' },
  })
  return response.data
}

// Reparto de la serie
export const fetchSerieCast = async (id: string): Promise<SerieCast[]> => {
  const response = await api.get(`/tv/${id}/credits`)
  return response.data.cast
}

export const searchMulti = async (query: string): Promise<SearchResult[]> => {
  const res = await api.get<{ results: SearchResult[] }>('/search/multi', {
    params: { query },
  })

  return res.data.results.filter(
    (item) => item.media_type === 'movie' || item.media_type === 'tv'
  )
}


export default api
