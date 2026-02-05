import MovieList from '@/components/MovieList'
import SeriesList from '@/components/SeriesList'
import About from '@/components/About'
import PoweredBy from '@/components/PoweredBy'

const HomePage: React.FC = () => {
  return (
    <main className="pt-24 px-4 sm:px-6 lg:px-12 max-w-full  min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Películas */}
        <section className="flex flex-col p-4 rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center underline decoration-yellow-400 underline-offset-4">
            Películas Populares
          </h2>
          <MovieList />
        </section>

        {/* Series */}
        <section className="flex flex-col  p-4 rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center underline decoration-yellow-400 underline-offset-4">
            Series Populares
          </h2>
          <SeriesList />
        </section>
        
          <About />
          <div className="pt-66">
          <PoweredBy />
          </div>
      </div>
    </main>
  )
}

export default HomePage
