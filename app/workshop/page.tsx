"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ThreeBackground from "@/components/ThreeBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";
import {
  Lightbulb,
  Palette,
  Music,
  Wrench,
  Camera,
  Code,
  Book,
  Trophy,
  Star,
  Clock,
  Users,
  Calendar,
} from "lucide-react";

export default function WorkshopPage() {
  return (
    <div className="relative min-h-screen text-slate-100 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
      <ThreeBackground particleCount={600} speed={0.6} color="#3B82F6" />

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-shell py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 via-slate-950/60 to-indigo-950/80" />

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
                className="inline-flex items-center gap-3 rounded-full border border-blue-400/30 bg-blue-950/60 px-6 py-3 text-sm font-medium text-blue-100 shadow-lg shadow-blue-500/20 backdrop-blur-md mb-8"
              >
                <Lightbulb className="h-5 w-5" />
                <span>Learn • Create • Grow • Excel</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl lg:text-7xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  Workshop Ministry
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl lg:text-2xl text-slate-200 leading-relaxed mb-10"
              >
                Discover your God-given talents and develop new skills in a
                supportive community environment. From creative arts to
                practical skills, we offer workshops for every interest.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 text-lg font-semibold shadow-xl"
                >
                  <Book className="h-5 w-5 mr-2" />
                  Browse Workshops
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-500/50 bg-slate-900/70 px-8 py-4 text-lg font-semibold text-slate-100 backdrop-blur-md hover:border-blue-400 hover:bg-slate-900/90"
                >
                  <Star className="h-5 w-5 mr-2" />
                  Teach a Workshop
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Workshop Categories */}
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
                Workshop Categories
              </h2>
              <p className="text-xl text-slate-300">
                Explore diverse skill-building opportunities
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Creative Arts",
                  description:
                    "Painting, drawing, photography, and digital design",
                  icon: <Palette className="h-8 w-8" />,
                  color: "from-purple-500 to-pink-500",
                  workshops: 12,
                  skillLevel: "All Levels",
                  image:
                    "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
                },
                {
                  title: "Music & Audio",
                  description:
                    "Instrument lessons, music production, and audio engineering",
                  icon: <Music className="h-8 w-8" />,
                  color: "from-blue-500 to-cyan-500",
                  workshops: 8,
                  skillLevel: "Beginner to Advanced",
                  image:
                    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
                },
                {
                  title: "Technology",
                  description:
                    "Programming, web development, and digital skills",
                  icon: <Code className="h-8 w-8" />,
                  color: "from-green-500 to-emerald-500",
                  workshops: 10,
                  skillLevel: "All Levels",
                  image:
                    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
                },
                {
                  title: "Practical Skills",
                  description: "Woodworking, home repair, and DIY projects",
                  icon: <Wrench className="h-8 w-8" />,
                  color: "from-orange-500 to-red-500",
                  workshops: 6,
                  skillLevel: "Beginner Friendly",
                  image:
                    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
                },
                {
                  title: "Photography",
                  description:
                    "Portrait, landscape, and digital editing techniques",
                  icon: <Camera className="h-8 w-8" />,
                  color: "from-teal-500 to-cyan-500",
                  workshops: 5,
                  skillLevel: "All Levels",
                  image:
                    "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
                },
                {
                  title: "Life Skills",
                  description:
                    "Leadership, communication, and personal development",
                  icon: <Trophy className="h-8 w-8" />,
                  color: "from-indigo-500 to-purple-500",
                  workshops: 7,
                  skillLevel: "All Levels",
                  image:
                    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
                },
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 40, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-panel border border-slate-700/70 overflow-hidden group hover:scale-105 transition-transform duration-300 relative"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />

                      <div className="absolute top-4 left-4">
                        <div
                          className={`w-12 h-12 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg`}
                        >
                          {category.icon}
                        </div>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex justify-between items-end">
                          <h3 className="text-xl font-bold text-slate-100">
                            {category.title}
                          </h3>
                          <div className="text-right">
                            <div className="text-sm text-slate-300">
                              {category.workshops} workshops
                            </div>
                            <div className="text-xs text-blue-400">
                              {category.skillLevel}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-slate-300 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Workshops */}
        <section className="section-shell py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-transparent to-indigo-950/30" />

          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-slate-100 mb-4">
                Featured Workshops
              </h2>
              <p className="text-xl text-slate-300">
                Popular upcoming workshops starting soon
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  title: "Digital Photography Masterclass",
                  instructor: "Sarah Johnson",
                  duration: "6 weeks",
                  schedule: "Wednesdays 7:00-9:00 PM",
                  startDate: "Jan 15, 2025",
                  description:
                    "Learn professional photography techniques from composition to post-processing. Perfect for beginners and intermediate photographers.",
                  includes: [
                    "Camera fundamentals",
                    "Composition techniques",
                    "Lighting and exposure",
                    "Photo editing software training",
                    "Portfolio development",
                  ],
                  price: "$150",
                  spots: "8 spots available",
                  image:
                    "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "Guitar for Beginners",
                  instructor: "Mike Rodriguez",
                  duration: "8 weeks",
                  schedule: "Thursdays 6:30-8:00 PM",
                  startDate: "Jan 20, 2025",
                  description:
                    "Start your musical journey with acoustic or electric guitar. Learn chords, strumming patterns, and your favorite songs.",
                  includes: [
                    "Basic guitar technique",
                    "Chord progressions",
                    "Popular song arrangements",
                    "Music theory basics",
                    "Practice routines",
                  ],
                  price: "$120",
                  spots: "12 spots available",
                  image:
                    "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
                },
              ].map((workshop, index) => (
                <motion.div
                  key={workshop.title}
                  initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass-panel border border-slate-700/70 overflow-hidden group hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={workshop.image}
                      alt={workshop.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />

                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {workshop.spots}
                      </span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-slate-100 mb-2">
                        {workshop.title}
                      </h3>
                      <p className="text-blue-400 font-semibold">
                        with {workshop.instructor}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-slate-400">
                        <Clock className="h-4 w-4 text-blue-400" />
                        <span>{workshop.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <Calendar className="h-4 w-4 text-blue-400" />
                        <span>{workshop.startDate}</span>
                      </div>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      {workshop.description}
                    </p>

                    <div>
                      <p className="text-slate-400 text-sm mb-2">
                        What's Included:
                      </p>
                      <ul className="space-y-1">
                        {workshop.includes.slice(0, 3).map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-slate-300 text-sm"
                          >
                            <Star className="h-3 w-3 text-blue-400 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                      <div>
                        <span className="text-2xl font-bold text-blue-400">
                          {workshop.price}
                        </span>
                        <span className="text-slate-400 text-sm ml-1">
                          total
                        </span>
                      </div>
                      <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white">
                        Register Now
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Workshop Leaders */}
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
                Meet Our Instructors
              </h2>
              <p className="text-xl text-slate-300">
                Experienced teachers passionate about sharing their skills
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  specialty: "Photography & Digital Arts",
                  experience: "10+ years teaching",
                  image:
                    "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
                  bio: "Professional photographer with a passion for teaching others to capture beautiful moments.",
                },
                {
                  name: "Mike Rodriguez",
                  specialty: "Music & Audio Production",
                  experience: "8 years teaching",
                  image:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
                  bio: "Musician and producer who loves helping others discover their musical talents.",
                },
                {
                  name: "Emma Chen",
                  specialty: "Technology & Programming",
                  experience: "6 years teaching",
                  image:
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
                  bio: "Software engineer dedicated to making technology accessible to everyone.",
                },
                {
                  name: "David Wilson",
                  specialty: "Woodworking & DIY",
                  experience: "12 years teaching",
                  image:
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
                  bio: "Master craftsman who enjoys sharing the art of working with wood and tools.",
                },
              ].map((instructor, index) => (
                <motion.div
                  key={instructor.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="relative mb-4">
                    <motion.img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-32 h-32 rounded-2xl mx-auto object-cover group-hover:scale-110 transition-transform duration-500"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-1">
                    {instructor.name}
                  </h3>
                  <p className="text-blue-400 font-semibold mb-2">
                    {instructor.specialty}
                  </p>
                  <p className="text-slate-400 text-sm mb-3">
                    {instructor.experience}
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {instructor.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Workshop Schedule */}
        <section className="section-shell py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-transparent to-indigo-950/50" />

          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-slate-100 mb-4">
                Weekly Schedule
              </h2>
              <p className="text-xl text-slate-300">
                Find a workshop that fits your schedule
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  day: "Monday",
                  workshops: ["Photography Basics", "Digital Design"],
                },
                {
                  day: "Tuesday",
                  workshops: ["Guitar Lessons", "Woodworking"],
                },
                {
                  day: "Wednesday",
                  workshops: ["Photography Masterclass", "Leadership Skills"],
                },
                {
                  day: "Thursday",
                  workshops: ["Beginner Guitar", "DIY Projects"],
                },
                {
                  day: "Friday",
                  workshops: ["Video Editing", "Public Speaking"],
                },
                {
                  day: "Saturday",
                  workshops: ["Workshop Showcase", "Open Studio Time"],
                },
              ].map((day, index) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-panel p-6 border border-slate-700/70 text-center"
                >
                  <h3 className="text-xl font-bold text-slate-100 mb-4">
                    {day.day}
                  </h3>
                  <div className="space-y-2">
                    {day.workshops.map((workshop, idx) => (
                      <div
                        key={idx}
                        className="text-blue-400 text-sm font-medium py-1"
                      >
                        {workshop}
                      </div>
                    ))}
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
                Ready to Learn Something New?
              </h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Whether you're a complete beginner or looking to refine existing
                skills, our workshops provide a supportive environment for
                growth.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 text-lg font-semibold"
              >
                <Book className="h-5 w-5 mr-2" />
                View All Workshops
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
