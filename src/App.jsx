import Hero from "./components/Hero";
import Services from "./components/Services";
import Showcase from "./components/Showcase";
import CTA from "./components/CTA";
import { Rocket } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-600/30">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-white">GammaWeb</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
          <a className="hover:text-white" href="#services">Services</a>
          <a className="hover:text-white" href="#work">Work</a>
          <a className="hover:text-white" href="#contact">Contact</a>
          <a
            href="#contact"
            className="rounded-lg bg-white px-3 py-2 font-medium text-slate-900 hover:brightness-95"
          >
            Get started
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-white/60">© {new Date().getFullYear()} GammaWeb. All rights reserved.</p>
        <div className="text-sm text-white/60 flex items-center gap-6">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-400 selection:text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Showcase />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
