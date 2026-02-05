export interface Serie {
  id: number
  name: string
  overview: string
  poster_path: string | null
  vote_average: number
  first_air_date: string | null
  number_of_seasons?: number
  number_of_episodes?: number
  videos?: {
    results: Video[]
  }
}

export interface Video {
  id: string
  key: string
  type: string
  name: string
  site: string
}

export interface SerieCast {
  id: number
  name: string
  character?: string
  profile_path: string | null
}
