import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <h1 className="text-3x1 font-bold underline bg-slate-600">
      Hello, Next.js!
    </h1>
  )
}
