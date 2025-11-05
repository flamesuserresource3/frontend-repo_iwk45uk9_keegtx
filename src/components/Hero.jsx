import { motion } from "framer-motion";
import { Rocket, Sparkles } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle background glows (non-interactive) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-500/30 via-blue-500/20 to-cyan-400/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-tr from-fuchsia-500/30 via-violet-500/20 to-indigo-400/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10 backdrop-blur">
            <Sparkles className="h-4 w-4 text-yellow-300" />
            <span className="text-xs text-white/80">Modern Web Development Studio</span>
          </div>
          <h1 className="mt-6 text-balance font-extrabold tracking-tight text-white text-4xl sm:text-6xl">
            GammaWeb
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Build. Launch. Scale.
            </span>
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-white/70">
            We craft blazing-fast websites and applications that turn visitors into customers. From design to deployment, our team delivers pixel-perfect experiences and measurable results.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 px-5 py-3 text-white shadow-lg shadow-indigo-600/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <Rocket className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
              Start a project
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              View our work
            </a>
          </div>
        </motion.div>

        {/* Spline hero animation */}
        <div className="relative mx-auto mt-12 h-80 w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] ring-1 ring-white/10 sm:h-96 lg:h-[520px]">
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
          {/* decorative gradient rims that don't block interaction */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-950/60 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/60 to-transparent" />
            <div className="absolute -left-24 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-gradient-to-tr from-purple-500/25 via-blue-500/20 to-orange-400/20 blur-3xl" />
            <div className="absolute -right-24 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-gradient-to-tr from-cyan-500/25 via-indigo-500/20 to-violet-500/20 blur-3xl" />
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {[
            { value: "150+", label: "Projects launched" },
            { value: "98%", label: "Client satisfaction" },
            { value: "< 1s", label: "Time to interact" },
            { value: "24/7", label: "Ongoing support" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-white/10 bg-white/5 p-4 text-center text-white/80 backdrop-blur"
            >
              <div className="text-2xl font-semibold text-white">{item.value}</div>
              <div className="mt-1 text-xs text-white/60">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
