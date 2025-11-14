"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Users,
  Heart,
  MapPin,
  Play,
  Star,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSupabase } from "./providers";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}

interface EventCard {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  date: string;
  location: string;
  category: string;
  attendees?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Events() {
  const [events, setEvents] = useState<EventCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextEvent, setNextEvent] = useState<Event | null>(null);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const { supabase } = useSupabase();

  // Enhanced mock events with richer content
  const enhancedEvents: EventCard[] = [
    {
      id: "1",
      title: "Sunday Celebration Service",
      description:
        "Join us for uplifting worship, inspiring messages, and community fellowship. Experience God's presence in a contemporary setting.",
      image:
        "https://images.unsplash.com/photo-1515943073294-77dfc14c7a7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      icon: <Star className="h-5 w-5" />,
      date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
      location: "Main Sanctuary",
      category: "Worship",
      attendees: "500+",
    },
    {
      id: "2",
      title: "Youth Night: Game Night",
      description:
        "An evening of fun, games, and meaningful conversations for teenagers. Connect with peers and grow in faith together.",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      icon: <Users className="h-5 w-5" />,
      date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
      location: "Youth Center",
      category: "Youth",
      attendees: "85",
    },
    {
      id: "3",
      title: "Community Outreach Day",
      description:
        "Serve our community through various projects including food distribution, home visits, and neighborhood cleanup.",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628192c4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      icon: <Heart className="h-5 w-5" />,
      date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      location: "Various Locations",
      category: "Outreach",
      attendees: "120",
    },
    {
      id: "4",
      title: "Worship Workshop",
      description:
        "Learn contemporary worship techniques, join our band, or develop your musical gifts in a supportive environment.",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      icon: <Sparkles className="h-5 w-5" />,
      date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
      location: "Music Studio",
      category: "Workshop",
      attendees: "45",
    },
  ];

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data, error } = await supabase
          .from("events")
          .select("*")
          .order("date", { ascending: true });

        if (error) {
          console.error("Error fetching events:", error);
          setEvents(enhancedEvents);
        } else if (data) {
          const formattedEvents: EventCard[] = data.map((event: Event) => ({
            id: event.id,
            title: event.title,
            description: event.description,
            image:
              event.image_url ||
              "https://images.unsplash.com/photo-1515943073294-77dfc14c7a7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
            icon: <Calendar className="h-5 w-5" />,
            date: event.date,
            location: event.location || "TBD",
            category: "Event",
          }));
          setEvents(formattedEvents);
          setNextEvent(data[0] || null);
        }
      } catch (error) {
        console.error("Error in fetchEvents:", error);
        setEvents(enhancedEvents);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [supabase]);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + (7 - targetDate.getDay())); // Next Sunday
      targetDate.setHours(10, 0, 0, 0); // 10:00 AM

      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const getCategoryColor = (category: string) => {
    const colors = {
      Worship: "from-purple-500 to-indigo-500",
      Youth: "from-green-500 to-emerald-500",
      Outreach: "from-red-500 to-pink-500",
      Workshop: "from-blue-500 to-cyan-500",
      Event: "from-orange-500 to-yellow-500",
    };
    return (
      colors[category as keyof typeof colors] || "from-gray-500 to-slate-500"
    );
  };

  const getCategoryLink = (category: string) => {
    const links = {
      Worship: "/worship",
      Youth: "/youth",
      Outreach: "/outreach",
      Workshop: "/workshop",
      Event: "/",
    };
    return links[category as keyof typeof links] || "/";
  };

  return (
    <section className="section-shell relative py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/50" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/60 px-4 py-2 text-sm font-medium text-cyan-100 shadow-lg shadow-cyan-500/20 backdrop-blur-md mb-6"
          >
            <Sparkles className="h-4 w-4" />
            <span>Upcoming Events & Activities</span>
          </motion.div>

          <h2 className="text-5xl font-bold text-slate-100 mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              What's Happening
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Join us for inspiring worship services, meaningful community
            activities, and opportunities to grow in faith together.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, rotateY: 5, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="glass-panel soft-shadow h-full border border-slate-700/70 overflow-hidden relative">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />

                  {/* Category Badge */}
                  <div
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(
                      event.category
                    )} text-white text-xs font-semibold shadow-lg`}
                  >
                    {event.category}
                  </div>

                  {/* Attendees Badge */}
                  {event.attendees && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-slate-900/80 text-cyan-400 text-xs font-semibold backdrop-blur-sm">
                      {event.attendees} attending
                    </div>
                  )}

                  {/* Play Button Overlay for specific events */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-16 h-16 bg-cyan-500/90 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer"
                    >
                      <Play className="h-6 w-6 text-white ml-1" />
                    </motion.div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-cyan-400">
                    {event.icon}
                    <span className="font-semibold">{event.title}</span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {event.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <Calendar className="h-4 w-4 text-cyan-400" />
                      <span>
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <Clock className="h-4 w-4 text-cyan-400" />
                      <span>
                        {new Date(event.date).toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <MapPin className="h-4 w-4 text-cyan-400" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} className="pt-2">
                    <Link href={getCategoryLink(event.category)}>
                      <Button
                        className="w-full bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-600 hover:to-sky-600 text-white shadow-lg"
                        size="sm"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Countdown Timer Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-panel p-8 max-w-4xl mx-auto border border-slate-700/70"
        >
          <div className="text-center mb-8">
            <motion.h3
              className="text-3xl font-bold text-slate-100 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Next Sunday Service Starts In
            </motion.h3>
            <motion.p
              className="text-slate-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Don't miss out on this week's powerful worship experience
            </motion.p>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {[
              {
                label: "Days",
                value: timeLeft.days,
                color: "from-purple-500 to-indigo-500",
              },
              {
                label: "Hours",
                value: timeLeft.hours,
                color: "from-cyan-500 to-sky-500",
              },
              {
                label: "Minutes",
                value: timeLeft.minutes,
                color: "from-emerald-500 to-teal-500",
              },
              {
                label: "Seconds",
                value: timeLeft.seconds,
                color: "from-orange-500 to-red-500",
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="glass-panel p-6 border border-slate-600/50 relative overflow-hidden group">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                  <motion.div
                    className="relative z-10"
                    animate={{
                      scale: item.label === "Seconds" ? [1, 1.1, 1] : 1,
                    }}
                    transition={{
                      duration: 1,
                      repeat: item.label === "Seconds" ? Infinity : 0,
                      repeatType: "reverse",
                    }}
                  >
                    <div className="text-4xl font-bold text-slate-100 mb-2">
                      {String(item.value).padStart(2, "0")}
                    </div>
                    <div className="text-sm text-slate-400 uppercase tracking-wide font-medium">
                      {item.label}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="text-center mt-8"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 text-lg font-semibold shadow-xl"
            >
              Set Reminder
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
