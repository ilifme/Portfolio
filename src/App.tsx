import { ArrowRight } from 'lucide-react';
import './App.css';

export default function App() {
  return (
    <main className="app-shell">
      <section className="starter-screen" aria-labelledby="starter-title">
        <div className="starter-panel">
          <p>React portfolio foundation</p>
          <h1 id="starter-title">Portfolio project is ready.</h1>
          <p>
            The next commit will replace this starter screen with the full portfolio experience from the PRD.
          </p>
          <a href="/PRD.md">
            Read PRD <ArrowRight aria-hidden="true" size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
