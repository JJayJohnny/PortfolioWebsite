import Bio from '@/components/Bio'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Education from '@/components/Education'

export default function Home() {
  return (
    <main>
      <Bio/>
      <About/>
      <Education/>
      <Projects/>
      <Contact/>
    </main>
  )
}
