import { useEffect, useState } from 'react';
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

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  const savedTheme = window.localStorage.getItem('portfolio-theme');

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return (
    <>
      <Header
        navItems={navItems}
        profile={profile}
        theme={theme}
        onToggleTheme={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))}
      />
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
