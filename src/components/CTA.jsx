export default function CTA() {
  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-600/60 via-blue-600/60 to-cyan-600/60 p-8 shadow-xl backdrop-blur sm:p-12">
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Ready to launch something great?
              </h3>
              <p className="mt-3 text-white/80">
                Tell us about your goals and timeline. We’ll come back within 24 hours with a plan, timeline, and quote.
              </p>
            </div>
            <form
              className="grid gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! We'll reach out shortly.");
              }}
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none ring-0 backdrop-blur focus:border-white/40"
                />
                <input
                  required
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none ring-0 backdrop-blur focus:border-white/40"
                />
              </div>
              <input
                type="text"
                placeholder="Company / Project name"
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none ring-0 backdrop-blur focus:border-white/40"
              />
              <textarea
                required
                placeholder="What are you building?"
                rows={3}
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none ring-0 backdrop-blur focus:border-white/40"
              />
              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-slate-900 transition hover:brightness-95"
                >
                  Get proposal
                </button>
                <p className="text-xs text-white/80">No spam. Free consultation.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
