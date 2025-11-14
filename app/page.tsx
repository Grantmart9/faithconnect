import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import Connect from "@/components/Connect";
import GetInvolved from "@/components/GetInvolved";
import StayConnected from "@/components/StayConnected";
import Footer from "@/components/Footer";
import ThreeBackground from "@/components/ThreeBackground";

export default function HomePage() {
  return (
    <div className="relative min-h-screen text-slate-100">
      {/* Enhanced 3D Background */}
      <ThreeBackground particleCount={800} speed={0.3} />

      {/* Global background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950" />
        <div className="absolute -top-40 -left-24 h-72 w-72 rounded-full bg-cyan-500/25 blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-500/25 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-purple-500/15 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <Header />
      <main className="pt-16 space-y-24">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <div className="section-shell relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-transparent to-indigo-950/20" />
            <div className="section-container relative z-10 py-20">
              <div className="text-center space-y-12">
                <div className="space-y-4">
                  <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                    About Our Community
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-indigo-400 mx-auto rounded-full" />
                </div>

                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  <div className="glass-panel p-8 space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-sky-500 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🙏</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-100">
                      Worship & Prayer
                    </h3>
                    <p className="text-slate-300">
                      We gather weekly to worship God through song, prayer, and
                      fellowship. Our services are contemporary yet reverent,
                      creating space for meaningful connection with God and each
                      other.
                    </p>
                  </div>

                  <div className="glass-panel p-8 space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-100">
                      Community Life
                    </h3>
                    <p className="text-slate-300">
                      Building authentic relationships is at the heart of who we
                      are. Through small groups, meals, and shared experiences,
                      we grow together in faith and friendship.
                    </p>
                  </div>

                  <div className="glass-panel p-8 space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">💝</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-100">
                      Serving Others
                    </h3>
                    <p className="text-slate-300">
                      We believe faith is active. Through local outreach,
                      mission trips, and community service, we live out God's
                      love by serving those in need.
                    </p>
                  </div>
                </div>

                <div className="glass-panel p-8 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-semibold text-slate-100 mb-6">
                    Our Vision
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    To be a thriving, diverse community of believers in Christ,
                    passionately pursuing God's purpose for our lives and our
                    city. We envision a place where people from all walks of
                    life can find hope, healing, and a family of faith.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="events">
          <Events />
        </section>
        <section id="connect">
          <Connect />
        </section>
        <section id="resources">
          <GetInvolved />
        </section>
        <section id="stay-connected">
          <StayConnected />
        </section>
      </main>
      <Footer />
    </div>
  );
}
