"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ThreeBackground from "@/components/ThreeBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";
import {
  Heart,
  Users,
  MapPin,
  Calendar,
  Clock,
  Star,
  Truck,
  Home,
  Utensils,
  UserPlus,
} from "lucide-react";

export default function OutreachPage() {
  return (
    <div className="relative min-h-screen text-slate-100 bg-gradient-to-br from-slate-950 via-red-950 to-pink-950">
      <ThreeBackground particleCount={800} speed={0.4} color="#EF4444" />

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-shell py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-950/80 via-slate-950/60 to-pink-950/80" />

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
                className="inline-flex items-center gap-3 rounded-full border border-red-400/30 bg-red-950/60 px-6 py-3 text-sm font-medium text-red-100 shadow-lg shadow-red-500/20 backdrop-blur-md mb-8"
              >
                <Heart className="h-5 w-5" />
                <span>Serving Our Community • Making a Difference</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl lg:text-7xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-red-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  Community Outreach
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl lg:text-2xl text-slate-200 leading-relaxed mb-10"
              >
                Live out God's love through action. Join us in serving our
                neighbors, feeding the hungry, and bringing hope to those who
                need it most.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold shadow-xl"
                >
                  <UserPlus className="h-5 w-5 mr-2" />
                  Join Our Mission
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-red-500/50 bg-slate-900/70 px-8 py-4 text-lg font-semibold text-slate-100 backdrop-blur-md hover:border-red-400 hover:bg-slate-900/90"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  View Opportunities
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Impact Stats */}
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
                Our Impact This Year
              </h2>
              <p className="text-xl text-slate-300">
                Together, we're making a real difference in our community
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: "2,500+",
                  label: "Meals Served",
                  icon: <Utensils className="h-8 w-8" />,
                  color: "from-red-500 to-pink-500",
                },
                {
                  number: "150+",
                  label: "Families Helped",
                  icon: <Home className="h-8 w-8" />,
                  color: "from-blue-500 to-indigo-500",
                },
                {
                  number: "300+",
                  label: "Volunteers",
                  icon: <Users className="h-8 w-8" />,
                  color: "from-green-500 to-emerald-500",
                },
                {
                  number: "50+",
                  label: "Projects Completed",
                  icon: <Truck className="h-8 w-8" />,
                  color: "from-purple-500 to-pink-500",
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-panel p-8 text-center border border-slate-700/70 relative overflow-hidden group hover:scale-105 transition-transform duration-300"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                  />

                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-lg relative z-10`}
                  >
                    {stat.icon}
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-slate-100 mb-2 relative z-10"
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-slate-300 font-medium relative z-10">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Outreach Programs */}
        <section className="section-shell py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-transparent to-pink-950/30" />

          <div className="section-container relative z-10">
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
                Multiple ways to serve and make a difference
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  title: "Food Distribution Program",
                  description:
                    "Weekly food distribution to families in need every Saturday morning",
                  details: [
                    "Serve 100+ families weekly",
                    "Organize and distribute food items",
                    "Build relationships with recipients",
                    "Saturday mornings, 9 AM - 12 PM",
                  ],
                  icon: <Utensils className="h-10 w-10" />,
                  color: "from-red-500 to-pink-500",
                  image:
                    "https://images.unsplash.com/photo-1559027615-cd4628192c4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "Home Repair Initiative",
                  description:
                    "Helping elderly and low-income families with home maintenance and repairs",
                  details: [
                    "Free home repairs and maintenance",
                    "Focus on safety and accessibility",
                    "Team of skilled volunteers",
                    "Projects vary by need and season",
                  ],
                  icon: <Home className="h-10 w-10" />,
                  color: "from-blue-500 to-indigo-500",
                  image:
                    "https://images.unsplash.com/photo-1560185007-c5d9b4d2c4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "Community Clean-Up",
                  description:
                    "Monthly neighborhood clean-up events to beautify our community",
                  details: [
                    "Clean parks and public spaces",
                    "Partner with local organizations",
                    "Provide supplies and refreshments",
                    "Last Saturday of each month",
                  ],
                  icon: <Truck className="h-10 w-10" />,
                  color: "from-green-500 to-emerald-500",
                  image:
                    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "Senior Support Program",
                  description:
                    "Ongoing support for seniors including visits, errands, and companionship",
                  details: [
                    "Weekly visits to senior facilities",
                    "Help with shopping and errands",
                    "Technology and phone support",
                    "Holiday care packages",
                  ],
                  icon: <Heart className="h-10 w-10" />,
                  color: "from-purple-500 to-pink-500",
                  image:
                    "https://images.unsplash.com/photo-1559027615-cd4628192c4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
                },
              ].map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass-panel border border-slate-700/70 overflow-hidden group hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${program.color} flex items-center justify-center text-white shadow-lg`}
                      >
                        {program.icon}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-slate-100 mb-3">
                      {program.title}
                    </h3>
                    <p className="text-slate-300 mb-4">{program.description}</p>

                    <ul className="space-y-2 mb-6">
                      {program.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-slate-400 text-sm"
                        >
                          <Star className="h-4 w-4 text-red-400 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full bg-gradient-to-r ${program.color} hover:opacity-90 text-white`}
                    >
                      Get Involved
                    </Button>
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
                Upcoming Outreach Events
              </h2>
              <p className="text-xl text-slate-300">
                Join us in serving our community
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Holiday Food Drive",
                  date: "Dec 1-15, 2024",
                  time: "Collection ongoing",
                  location: "Church Foyer",
                  description:
                    "Help us collect food items for families in need during the holiday season",
                  volunteers: "50 volunteers needed",
                  impact: "Target: 500 families",
                  image:
                    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "Winter Warmth Distribution",
                  date: "Dec 20, 2024",
                  time: "10:00 AM - 4:00 PM",
                  location: "Community Center",
                  description:
                    "Distribute winter coats, blankets, and warm clothing to those in need",
                  volunteers: "30 volunteers needed",
                  impact: "Target: 200 people served",
                  image:
                    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "New Year Community Breakfast",
                  date: "Jan 1, 2025",
                  time: "8:00 AM - 11:00 AM",
                  location: "Church Campus",
                  description:
                    "Start the new year by serving breakfast to anyone who needs a warm meal",
                  volunteers: "25 volunteers needed",
                  impact: "Target: 150 meals served",
                  image:
                    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
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
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-slate-100 mb-2">
                        {event.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-slate-300">
                        <Calendar className="h-4 w-4 text-red-400" />
                        <span>{event.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <Clock className="h-4 w-4 text-red-400" />
                      <span>{event.time}</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <MapPin className="h-4 w-4 text-red-400" />
                      <span>{event.location}</span>
                    </div>

                    <p className="text-slate-300 text-sm">
                      {event.description}
                    </p>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">
                          Volunteers Needed:
                        </span>
                        <span className="text-red-400 font-semibold">
                          {event.volunteers}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Expected Impact:</span>
                        <span className="text-red-400 font-semibold">
                          {event.impact}
                        </span>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white">
                      Sign Up to Help
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer Stories */}
        <section className="section-shell py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/50 via-transparent to-pink-950/50" />

          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-slate-100 mb-4">
                Volunteer Stories
              </h2>
              <p className="text-xl text-slate-300">
                Hear from people whose lives have been changed through serving
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "Serving at the food distribution changed my perspective completely. I've met amazing people and learned that giving back fills your heart in ways nothing else can.",
                  name: "Jennifer Miller",
                  role: "Food Program Volunteer",
                  image:
                    "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
                },
                {
                  quote:
                    "Helping repair Mr. Johnson's home reminded me why we do this work. It's not just about fixing houses - it's about showing love and dignity to our neighbors.",
                  name: "Carlos Rodriguez",
                  role: "Home Repair Team Leader",
                  image:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
                },
              ].map((story, index) => (
                <motion.div
                  key={story.name}
                  initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass-panel p-8 border border-slate-700/70"
                >
                  <div className="text-4xl text-red-400 mb-4">"</div>
                  <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                    {story.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-slate-100">
                        {story.name}
                      </p>
                      <p className="text-red-400 text-sm">{story.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                Ready to Make a Difference?
              </h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Every act of service, no matter how small, creates ripples of
                change in our community. Join us and discover the joy of giving
                back.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold"
              >
                <Heart className="h-5 w-5 mr-2" />
                Start Serving Today
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
