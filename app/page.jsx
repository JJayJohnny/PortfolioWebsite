import Bio from '@/components/Bio'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Education from '@/components/Education'
import Experience from '@/components/Experience'

export default function Home() {
  return (
    <main>
      <Bio/>
      <About/>
      <Education/>
      <Experience/>
      <Projects/>
      <Contact/>
    </main>
  )
}
