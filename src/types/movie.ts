export interface Movie {
  id: number
  title: string
  overview: string
  poster_path: string
  release_date?: string
  runtime?: number
  vote_average?: number
}
export interface Cast {
  id: number
  name: string
  character?: string
  profile_path?: string
}

export interface Video {
  key: string
  type: string
  name: string
}