import { useEffect } from 'react';
import './App.css';
import { Header } from './components/Header';
import { experience, navItems, profile, projects, skillGroups, stats, testimonials } from './data/portfolio';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Experience } from './sections/Experience';
import { Footer } from './sections/Footer';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';

export default function App() {
  useEffect(() => {
    document.documentElement.dataset.theme = 'dark';
  }, []);

  return (
    <>
      <Header navItems={navItems} profile={profile} />
      <main className="app-shell" id="main-content">
        <Hero profile={profile} stats={stats} />
        <About profile={profile} />
        <Skills skillGroups={skillGroups} />
        <Projects projects={projects} />
        <Experience experience={experience} testimonials={testimonials} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </>
  );
}
