'use client'

import { headingFont, mainFont } from '../../public/fonts'
import NavBar from '@/components/ui/NavBar'

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <div className="h-screen w-screen flex justify-center items-center">
          <h1 className={headingFont.className}>LETS FUCK9NG GOOOOOOOOO</h1>
          <p className={mainFont.className}>test lmao</p>
        </div>
      </main>
    </>
  )
}
