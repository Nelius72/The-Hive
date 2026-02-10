import './globals.css'
import NavBar from '@/components/NavBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'The Hive Network',
  description: 'Página de películas y series',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${quicksand.className} bg-gray-900 text-white min-h-screen`}>
        <NavBar />
        {/* Contenido desplazado debajo del navbar */}
        <div className="pt-20">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}

