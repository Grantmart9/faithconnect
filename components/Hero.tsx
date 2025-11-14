"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const stats = [
    { icon: "👥", label: "Members", value: "500+" },
    { icon: "⛪", label: "Weekly Services", value: "3" },
    { icon: "🎯", label: "Small Groups", value: "15" },
    { icon: "🌟", label: "Years Founded", value: "25" },
  ];

  return (
    <section className="section-shell relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 -z-10">
        {/* Base image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1515943073294-77dfc14c7a7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Cathedral interior"
            className="w-full h-full object-cover opacity-30 scale-110"
          />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-950/85 to-slate-900/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/60" />

        {/* Animated background elements */}
        <div className="pointer-events-none absolute -top-32 -left-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
        <div
          className="pointer-events-none absolute bottom-[-4rem] right-[-4rem] h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="pointer-events-none absolute top-1/3 left-1/4 h-64 w-64 rounded-full bg-purple-500/15 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Floating particles effect */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/50 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="section-container relative z-10 py-20">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-10 text-left text-slate-100"
          >
            {/* Live indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-3 rounded-full border border-emerald-400/30 bg-emerald-950/60 px-4 py-2 text-sm font-medium text-emerald-100 shadow-lg shadow-emerald-500/20 backdrop-blur-md"
            >
              <motion.span
                className="h-2 w-2 rounded-full bg-emerald-400"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="font-semibold">LIVE NOW</span>
              <span>•</span>
              <span>Sunday Service - 10:00 AM</span>
            </motion.div>

            {/* Main heading */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-balance text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
              >
                Welcome to{" "}
                <motion.span
                  className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent block"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  FaithConnect
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="max-w-2xl text-xl sm:text-2xl text-slate-200/95 leading-relaxed font-light"
              >
                Where{" "}
                <span className="text-cyan-400 font-medium">
                  faith meets community
                </span>{" "}
                and every story matters. Join us in discovering God's purpose
                for your life.
              </motion.p>
            </div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("about")}
                className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500 px-8 py-4 text-lg font-semibold text-white shadow-2xl shadow-cyan-500/30 transition-all duration-300 hover:shadow-cyan-500/50 hover:scale-105"
              >
                <motion.span className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  <span>Plan Your Visit</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("events")}
                className="border-2 border-slate-500/70 bg-slate-900/70 px-8 py-4 text-lg font-semibold text-slate-100 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:bg-slate-900/90 hover:scale-105"
              >
                Watch Live Service
              </Button>
            </motion.div>

            {/* Quick info */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap items-center gap-6 text-sm text-slate-300/90"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">⏰</span>
                </div>
                <span>10:00 AM Every Sunday</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">📍</span>
                </div>
                <span>Faith City Center</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🎭</span>
                </div>
                <span>All Ages Welcome</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced stats card */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="relative"
          >
            <motion.div
              className="glass-panel soft-shadow relative mx-auto max-w-sm border border-slate-700/70 p-8"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-px rounded-[1.5rem] border border-white/5" />

              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-indigo-500 rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <span className="text-2xl">✨</span>
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-100">
                  Join Our Community
                </h3>
                <p className="text-slate-300 mt-2">
                  Building faith together since 1999
                </p>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="glass-panel p-4 text-center border border-slate-600/50"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-slate-100">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-400 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Progress bar */}
              <motion.div
                initial={{ opacity: 0, width: "0%" }}
                animate={{ opacity: 1, width: "78%" }}
                transition={{ duration: 2, delay: 1.2 }}
                className="relative"
              >
                <div className="text-xs text-slate-300 mb-2 text-center">
                  <span className="text-cyan-400 font-semibold">78%</span>{" "}
                  filled for this service
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "78%" }}
                    transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 rounded-full"
                  />
                </div>
              </motion.div>

              {/* Bottom action */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="mt-6 text-center"
              >
                <p className="text-xs text-slate-400 mb-3">
                  Ready to be part of something bigger?
                </p>
                <Button
                  onClick={() => scrollToSection("connect")}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white"
                  size="sm"
                >
                  Get Connected Today
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.8 }}
        onClick={() => scrollToSection("about")}
        className="pointer-events-auto absolute bottom-8 left-1/2 -translate-x-1/2 group"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <div className="text-xs text-slate-400 group-hover:text-cyan-400 transition-colors font-medium">
            Discover More
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-12 border-2 border-slate-400/60 group-hover:border-cyan-400/80 rounded-full flex justify-center transition-all duration-300">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1 h-3 bg-slate-400/70 group-hover:bg-cyan-400 rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </motion.button>
    </section>
  );
}
