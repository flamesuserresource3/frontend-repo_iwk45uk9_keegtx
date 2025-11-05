import { Star } from "lucide-react";

const projects = [
  {
    title: "Nova Commerce",
    tag: "E‑commerce Platform",
    gradient: "from-indigo-500 via-blue-500 to-cyan-500",
  },
  {
    title: "Pulse Analytics",
    tag: "SaaS Dashboard",
    gradient: "from-fuchsia-500 via-violet-500 to-indigo-500",
  },
  {
    title: "Orbit Landing",
    tag: "Marketing Site",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
];

export default function Showcase() {
  return (
    <section id="work" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Selected work
            </h2>
            <p className="mt-3 max-w-xl text-white/70">
              A glimpse of products we crafted for startups and enterprises.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden shrink-0 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur transition hover:bg-white/10 sm:inline-block"
          >
            Get a quote
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
              <div className={`h-44 w-full rounded-xl bg-gradient-to-r ${p.gradient} opacity-90 transition group-hover:opacity-100`} />
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold">{p.title}</h3>
                  <p className="text-sm text-white/60">{p.tag}</p>
                </div>
                <div className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 text-xs text-yellow-300 ring-1 ring-white/10">
                  <Star className="h-3.5 w-3.5" />
                  Featured
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
