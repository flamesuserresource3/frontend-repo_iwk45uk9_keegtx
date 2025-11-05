import { Code, Layout, Monitor, Shield } from "lucide-react";

const services = [
  {
    title: "Custom Web Apps",
    description:
      "Tailored applications built with modern stacks for performance and scalability.",
    icon: Code,
  },
  {
    title: "UI/UX Design",
    description:
      "Responsive, accessible interfaces with a focus on clarity and conversion.",
    icon: Layout,
  },
  {
    title: "E‑commerce & CMS",
    description:
      "Robust storefronts and content systems that are easy to manage and grow.",
    icon: Monitor,
  },
  {
    title: "Security & Audits",
    description:
      "Best‑practice security, monitoring, and performance audits baked in.",
    icon: Shield,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What we do
          </h2>
          <p className="mt-3 text-white/70">
            End‑to‑end product development. We design, build and ship your next
            big idea.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-6 shadow-[0_10px_30px_-10px_rgba(59,130,246,0.25)] backdrop-blur transition transform hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(59,130,246,0.35)]"
            >
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-tr from-indigo-500/20 to-sky-400/20 blur-3xl" />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                <Icon className="h-6 w-6 text-cyan-300" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">{description}</p>
              <div className="mt-6 text-sm font-medium text-cyan-300 opacity-0 transition group-hover:opacity-100">
                Learn more →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
