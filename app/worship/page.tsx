"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ThreeBackground from "@/components/ThreeBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

import {
  Calendar,
  Clock,
  Music,
  Star,
  Users,
  Heart,
  Volume2,
  Headphones,
} from "lucide-react";

export default function WorshipPage() {
  return (
    <div className="relative min-h-screen text-slate-100 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      <ThreeBackground particleCount={600} speed={0.4} />

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-shell py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-950/80 via-slate-950/60 to-indigo-950/80" />

          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center gap-3 rounded-full border border-purple-400/30 bg-purple-950/60 px-6 py-3 text-sm font-medium text-purple-100 shadow-lg shadow-purple-500/20 backdrop-blur-md mb-8"
              >
                <Music className="h-5 w-5" />
                <span>Contemporary Christian Worship</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl lg:text-7xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                  Worship Ministry
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl lg:text-2xl text-slate-200 leading-relaxed mb-10"
              >
                Experience God's presence through contemporary music, authentic
                praise, and meaningful worship that transforms hearts and lives.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold shadow-xl"
                >
                  <Music className="h-5 w-5 mr-2" />
                  Join Worship Team
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-purple-500/50 bg-slate-900/70 px-8 py-4 text-lg font-semibold text-slate-100 backdrop-blur-md hover:border-purple-400 hover:bg-slate-900/90"
                >
                  <Headphones className="h-5 w-5 mr-2" />
                  Listen to Messages
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Service Times */}
        <section className="section-shell py-20">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-slate-100 mb-4">
                Service Times
              </h2>
              <p className="text-xl text-slate-300">
                Join us for uplifting worship experiences
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  time: "Sundays 10:00 AM",
                  title: "Main Service",
                  description:
                    "Full worship experience with contemporary music, preaching, and community fellowship",
                  icon: <Star className="h-6 w-6" />,
                  color: "from-purple-500 to-indigo-500",
                },
                {
                  time: "Wednesdays 7:00 PM",
                  title: "Prayer & Worship",
                  description:
                    "Intimate time of worship, prayer, and Biblical teaching",
                  icon: <Heart className="h-6 w-6" />,
                  color: "from-emerald-500 to-teal-500",
                },
                {
                  time: "Fridays 6:00 PM",
                  title: "Youth Service",
                  description:
                    "High-energy worship designed specifically for teenagers",
                  icon: <Users className="h-6 w-6" />,
                  color: "from-orange-500 to-red-500",
                },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass-panel p-8 text-center border border-slate-700/70 relative overflow-hidden group hover:scale-105 transition-transform duration-300"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                  />

                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    {service.icon}
                  </motion.div>

                  <h3 className="text-2xl font-bold text-slate-100 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-lg font-semibold text-cyan-400 mb-4">
                    {service.time}
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Worship Team */}
        <section className="section-shell py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/50 via-transparent to-purple-950/50" />

          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-slate-100 mb-4">
                Our Worship Team
              </h2>
              <p className="text-xl text-slate-300">
                Talented musicians and vocalists dedicated to leading others
                into God's presence
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Worship Pastor",
                  image:
                    "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Michael Chen",
                  role: "Lead Guitarist",
                  image:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Emma Davis",
                  role: "Lead Vocalist",
                  image:
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "David Rodriguez",
                  role: "Drummer",
                  image:
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
                },
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="relative overflow-hidden rounded-2xl mb-4">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400">{member.role}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-panel p-8 max-w-3xl mx-auto text-center border border-slate-700/70"
            >
              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                Want to Join Our Team?
              </h3>
              <p className="text-slate-300 mb-6">
                We're always looking for passionate musicians and vocalists to
                join our worship ministry. No matter your skill level, if you
                have a heart for worship, we'd love to hear from you.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold"
              >
                <Music className="h-5 w-5 mr-2" />
                Audition Today
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Recent Messages */}
        <section className="section-shell py-20">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-slate-100 mb-4">
                Recent Messages
              </h2>
              <p className="text-xl text-slate-300">
                Catch up on the latest sermons and worship experiences
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "When Heaven Meets Earth",
                  date: "Nov 10, 2024",
                  preacher: "Pastor Sarah Johnson",
                  duration: "42 min",
                  image:
                    "https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "Worship in the Wilderness",
                  date: "Nov 3, 2024",
                  preacher: "Pastor Sarah Johnson",
                  duration: "38 min",
                  image:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "The Heart of Worship",
                  date: "Oct 27, 2024",
                  preacher: "Pastor Sarah Johnson",
                  duration: "45 min",
                  image:
                    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
                },
              ].map((message, index) => (
                <motion.div
                  key={message.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass-panel border border-slate-700/70 overflow-hidden group hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={message.image}
                      alt={message.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-slate-100 mb-2">
                        {message.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-slate-300">
                        <span>{message.date}</span>
                        <span>•</span>
                        <span>{message.duration}</span>
                      </div>
                    </div>

                    <div className="absolute top-4 right-4">
                      <Button
                        size="sm"
                        className="bg-purple-500/90 hover:bg-purple-600 text-white backdrop-blur-sm"
                      >
                        <Volume2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-cyan-400 mb-4">{message.preacher}</p>
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                      Listen Now
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
