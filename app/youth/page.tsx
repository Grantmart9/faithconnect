"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ThreeBackground from "@/components/ThreeBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";
import {
  Users,
  Gamepad2,
  Music,
  Heart,
  Star,
  Calendar,
  Clock,
  Zap,
} from "lucide-react";

export default function YouthPage() {
  return (
    <div className="relative min-h-screen text-slate-100 bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-950">
      <ThreeBackground particleCount={700} speed={0.5} color="#10B981" />

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-shell py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 via-slate-950/60 to-teal-950/80" />

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
                className="inline-flex items-center gap-3 rounded-full border border-emerald-400/30 bg-emerald-950/60 px-6 py-3 text-sm font-medium text-emerald-100 shadow-lg shadow-emerald-500/20 backdrop-blur-md mb-8"
              >
                <Users className="h-5 w-5" />
                <span>Grades 6-12 • Ages 11-18</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl lg:text-7xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                  Youth Ministry
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl lg:text-2xl text-slate-200 leading-relaxed mb-10"
              >
                Where faith meets fun! Join a community of teenagers growing
                together in Christ through authentic friendships, exciting
                activities, and life-changing experiences.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 text-lg font-semibold shadow-xl"
                >
                  <Zap className="h-5 w-5 mr-2" />
                  Join Youth Group
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-emerald-500/50 bg-slate-900/70 px-8 py-4 text-lg font-semibold text-slate-100 backdrop-blur-md hover:border-emerald-400 hover:bg-slate-900/90"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  View Schedule
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Youth Programs */}
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
                Our Programs
              </h2>
              <p className="text-xl text-slate-300">
                Discover amazing activities designed for teenagers
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Friday Night Live",
                  time: "Fridays 6:00 PM",
                  description:
                    "High-energy worship, dynamic teaching, and fun activities every Friday evening",
                  icon: <Music className="h-8 w-8" />,
                  color: "from-emerald-500 to-green-500",
                  highlight: "Weekly Event",
                },
                {
                  title: "Sunday Classes",
                  time: "Sundays 11:30 AM",
                  description:
                    "Interactive Bible study sessions designed for your age group",
                  icon: <Star className="h-8 w-8" />,
                  color: "from-blue-500 to-indigo-500",
                  highlight: "Weekly Class",
                },
                {
                  title: "Gaming Tournaments",
                  time: "Monthly Events",
                  description:
                    "Competitive gaming events with prizes, snacks, and lots of fun",
                  icon: <Gamepad2 className="h-8 w-8" />,
                  color: "from-purple-500 to-pink-500",
                  highlight: "Monthly",
                },
                {
                  title: "Service Projects",
                  time: "Quarterly",
                  description:
                    "Make a difference in our community through hands-on service",
                  icon: <Heart className="h-8 w-8" />,
                  color: "from-red-500 to-orange-500",
                  highlight: "Seasonal",
                },
                {
                  title: "Retreats & Camps",
                  time: "Summer & Winter",
                  description:
                    "Life-changing experiences away from distractions to focus on faith",
                  icon: <Calendar className="h-8 w-8" />,
                  color: "from-teal-500 to-cyan-500",
                  highlight: "Special Events",
                },
                {
                  title: "Leadership Team",
                  time: "By Application",
                  description:
                    "Develop leadership skills while serving your peers",
                  icon: <Users className="h-8 w-8" />,
                  color: "from-yellow-500 to-amber-500",
                  highlight: "Leadership",
                },
              ].map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 40, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-panel border border-slate-700/70 overflow-hidden group hover:scale-105 transition-all duration-300 relative"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                  />

                  <div className="relative z-10 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center text-white shadow-lg`}
                      >
                        {program.icon}
                      </motion.div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${program.color} text-white shadow-lg`}
                      >
                        {program.highlight}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-100 mb-2">
                      {program.title}
                    </h3>
                    <p className="text-emerald-400 font-semibold mb-3">
                      {program.time}
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Youth Leaders */}
        <section className="section-shell py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 via-transparent to-teal-950/30" />

          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-slate-100 mb-4">
                Meet Your Leaders
              </h2>
              <p className="text-xl text-slate-300">
                Passionate adults who love teenagers and want to see them thrive
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "Pastor Jake Matthews",
                  role: "Youth Pastor",
                  bio: "Jake has been leading youth for over 8 years and loves creating spaces where teenagers can encounter God authentically.",
                  image:
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
                  specialities: ["Worship", "Teaching", "Adventure Activities"],
                },
                {
                  name: "Sarah Martinez",
                  role: "Youth Assistant",
                  bio: "Sarah is passionate about mentoring young people and helping them discover their God-given gifts and talents.",
                  image:
                    "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
                  specialities: [
                    "Creative Arts",
                    "Small Groups",
                    "Community Service",
                  ],
                },
              ].map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass-panel p-8 border border-slate-700/70 group hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative"
                    >
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-24 h-24 rounded-2xl object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent rounded-2xl" />
                    </motion.div>

                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-slate-100 mb-1">
                        {leader.name}
                      </h3>
                      <p className="text-emerald-400 font-semibold mb-4">
                        {leader.role}
                      </p>
                      <p className="text-slate-300 mb-4 leading-relaxed">
                        {leader.bio}
                      </p>

                      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {leader.specialities.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
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
                Upcoming Youth Events
              </h2>
              <p className="text-xl text-slate-300">
                Mark your calendar for these amazing events!
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  title: "Winter Retreat 2024",
                  date: "Dec 15-17, 2024",
                  location: "Mountain View Camp",
                  description:
                    "Three days of worship, teaching, and adventure in the mountains. Space is limited!",
                  image:
                    "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
                  price: "$150",
                  spots: "Only 25 spots left!",
                },
                {
                  title: "New Year Game Night",
                  date: "Jan 5, 2025",
                  location: "Youth Center",
                  description:
                    "Start the new year with epic games, pizza, and prizes. All teens welcome!",
                  image:
                    "https://images.unsplash.com/photo-1529156069898-49953e39b3fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
                  price: "Free",
                  spots: "Open to all teens",
                },
              ].map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass-panel border border-slate-700/70 overflow-hidden group hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />

                    <div className="absolute top-4 right-4">
                      <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {event.spots}
                      </span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-slate-100 mb-2">
                        {event.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-slate-300">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-emerald-400" />
                          <span>{event.date}</span>
                        </div>
                        <span>•</span>
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-slate-300 mb-4">{event.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-emerald-400">
                        {event.price}
                      </span>
                      <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white">
                        Register Now
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Parent Testimonials */}
        <section className="section-shell py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/50 via-transparent to-teal-950/50" />

          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-slate-100 mb-4">
                What Parents Say
              </h2>
              <p className="text-xl text-slate-300">
                Hear from families whose teens have been transformed
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "Our daughter has grown so much in her faith and confidence through the youth ministry. The leaders truly care about each teen as an individual.",
                  name: "Maria Rodriguez",
                  role: "Parent of 10th grader",
                },
                {
                  quote:
                    "The youth group has become like a second family. My son looks forward to every Friday night and has made lifelong friends.",
                  name: "James Wilson",
                  role: "Parent of 8th grader",
                },
                {
                  quote:
                    "I love how the youth leaders balance fun activities with serious faith discussions. It's exactly what our teenager needs.",
                  name: "Lisa Chen",
                  role: "Parent of 11th grader",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass-panel p-6 border border-slate-700/70"
                >
                  <div className="text-4xl text-emerald-400 mb-4">"</div>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-slate-100">
                      {testimonial.name}
                    </p>
                    <p className="text-emerald-400 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                Ready to Join Our Youth Family?
              </h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                We can't wait to meet your teenager! Join us this Friday for an
                amazing evening of worship, fun, and community.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 text-lg font-semibold"
              >
                <Zap className="h-5 w-5 mr-2" />
                Join This Friday!
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
