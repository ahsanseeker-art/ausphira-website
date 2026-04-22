/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe2, 
  ShoppingCart, 
  Cpu, 
  TrendingUp, 
  Building2,
  ArrowRight,
  ArrowUpRight,
  Star,
  Menu,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence, useInView, animate } from 'motion/react';

const Counter = ({ value, suffix = "", duration = 2.5 }: { value: number, suffix?: string, duration?: number }) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, value, {
        duration,
        ease: "easeOut",
        onUpdate: (v) => {
          if (ref.current) ref.current.textContent = Math.floor(v) + suffix;
        }
      });
      return () => controls.stop();
    }
  }, [inView, value, suffix, duration]);
  
  return <span ref={ref}>0{suffix}</span>;
};

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const heroSlides = [
    // E-commerce & Retail (Luxury abstract storefront/digital commerce)
    "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=2850&q=80",
    // Imports (Global trade scale/containers at sunset)
    "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=2850&q=80",
    // Logistics (Cranes/Port/Transport)
    "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=2850&q=80",
    // Trading (Financial data / modern architecture overlay)
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=2850&q=80",
    // Digital Marketing (Tech strategy/Global reach)
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2850&q=80"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const { scrollYProgress, scrollY } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  
  const navBg = useTransform(scrollY, [0, 100], ['rgba(255, 255, 255, 0.95)', 'rgba(255, 255, 255, 0.98)']);
  const navBorder = useTransform(scrollY, [0, 100], ['rgba(226, 232, 240, 0.8)', 'rgba(226, 232, 240, 1)']);
  const navBlur = useTransform(scrollY, [0, 100], ['blur(8px)', 'blur(24px)']);
  const navShadow = useTransform(scrollY, [0, 100], ['0px 4px 20px rgba(0,0,0,0.05)', '0px 25px 50px -12px rgba(0,0,0,0.15)']);
  const navPaddingTop = useTransform(scrollY, [0, 100], ['24px', '16px']);

  // Hero banner scroll physics
  const heroBgScale = useTransform(scrollY, [0, 1000], [1, 1.3]);
  const heroBgOpacity = useTransform(scrollY, [0, 800], [0.6, 0]);
  const heroTextParallax = useTransform(scrollY, [0, 800], [0, 200]);

  // About section parallax physics
  const aboutRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress: aboutScrollProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });
  const aboutImageY = useTransform(aboutScrollProgress, [0, 1], ["-15%", "15%"]);

  const businessInfo = {
    name: "AUSPHIRA",
    tagline: "BUILDING TODAY,",
    tagline2: "GROWING TOMORROW",
    address: "771/2, Block R1, Phase 2, Johar Town, Lahore",
    phone: "+92333-1442880",
    phoneDisplay: "+92 333 1442880",
    email: "info@ausphira.com",
    website: "www.ausphira.com",
    city: "Lahore",
  };

  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Global Retail Director",
      text: "AUSPHIRA completely transformed our digital presence. Their strategic approach to our ecommerce platform opened up international markets we hadn't thought possible.",
      rating: 5
    },
    {
      name: "Marcus Thorne",
      role: "Logistics CEO",
      text: "The level of technical sophistication they brought to our automation processes is unmatched. A truly elite collective operating at the highest possible tier.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "VP of Operations",
      text: "Partnering with AUSPHIRA for our expansion was the best decision we made this year. They operate with absolute professionalism and ruthless efficiency.",
      rating: 5
    }
  ];

  const whatsappLink = `https://wa.me/${businessInfo.phone.replace('+', '')}`;
  const phoneLink = `tel:${businessInfo.phone}`;
  const emailLink = `mailto:${businessInfo.email}`;

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
  };

  const heroTopReveal = {
    hidden: { opacity: 0, y: 30, filter: "blur(12px)", letterSpacing: "0.4em" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)", 
      letterSpacing: "-0.02em", 
      transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const heroMiddleReveal = {
    hidden: { opacity: 0, y: 40, scale: 0.85, filter: "blur(16px)", rotate: -4 },
    visible: { 
      opacity: 1, 
      y: -16, 
      scale: 1, 
      filter: "blur(0px)", 
      rotate: 0,
      transition: { duration: 1.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const heroBottomReveal = {
    hidden: { opacity: 0, y: 30, filter: "blur(12px)", letterSpacing: "0.4em" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)", 
      letterSpacing: "-0.04em", 
      transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const staggerSection = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const bentoCardReveal = {
    hidden: { opacity: 0, y: 80, scale: 0.9, rotateX: -15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      rotateX: 0,
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const galleryImageReveal = {
    hidden: { opacity: 0, y: 60, scale: 0.85, filter: "blur(12px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-navy-900 font-sans selection:bg-gold-500/30 selection:text-navy-950">
      {/* SCROLL PROGRESS BAR */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-500 via-gold-300 to-gold-400 origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />
      
      {/* Noise Overlay */}
      <svg className="pointer-events-none fixed isolate z-50 opacity-[0.15] mix-blend-soft-light inset-0 w-full h-full">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
      </svg>

      {/* Ambient Parallax Lights */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center items-center overflow-hidden">
        <motion.div style={{ y: backgroundY }} className="relative w-full h-full opacity-50 mix-blend-multiply">
          <motion.div
            animate={{ 
              x: ["0%", "15%", "-10%", "0%"], 
              y: ["0%", "-10%", "15%", "0%"],
              scale: [1, 1.2, 0.9, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] left-[20%] w-[60vw] h-[60vw] bg-gold-400/20 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ 
              x: ["0%", "-20%", "10%", "0%"],
              y: ["0%", "20%", "-15%", "0%"],
              scale: [0.8, 1.1, 1, 0.8],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[10%] right-[10%] w-[65vw] h-[65vw] bg-navy-400/10 rounded-full blur-[140px]"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vw] bg-slate-300/30 rounded-full blur-[130px]"
          />
        </motion.div>
      </div>

      {/* Floating Island Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ paddingTop: navPaddingTop }}
        className="fixed top-0 left-0 right-0 z-50 px-6"
      >
        <motion.div 
          style={{ 
            backgroundColor: navBg, 
            borderColor: navBorder, 
            backdropFilter: navBlur,
            WebkitBackdropFilter: navBlur,
            boxShadow: navShadow 
          }}
          className="max-w-5xl mx-auto flex justify-between items-center px-6 md:px-8 py-4 rounded-full border border-transparent"
        >
          <div className="flex items-center gap-3">
            <img src="/ausphira-new-logo.png" alt="Ausphira Logo" className="h-[48px] md:h-[60px] w-auto object-contain" />
          </div>
          <div className="hidden md:flex items-center space-x-10 text-xs font-display font-medium uppercase tracking-widest text-navy-900">
            <a href="#services" className="hover:text-gold-600 transition-colors duration-300">Services</a>
            <a href="#about" className="hover:text-gold-600 transition-colors duration-300">About Us</a>
            <a href="#contact" className="px-6 py-2.5 bg-navy-950 text-white hover:bg-gold-500 hover:shadow-[0_0_20px_rgba(203,162,88,0.4)] transition-all duration-500 rounded-full font-bold">
              Contact
            </a>
          </div>
          
          <button 
            className="md:hidden text-navy-950 hover:text-gold-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </motion.div>

        {/* MOBILE MENU DROPDOWN */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-24 left-6 right-6 bg-white/95 backdrop-blur-xl border border-slate-200 p-6 rounded-2xl shadow-2xl md:hidden flex flex-col space-y-6"
            >
              <a onClick={() => setIsMobileMenuOpen(false)} href="#services" className="text-navy-950 font-display text-lg tracking-widest uppercase hover:text-gold-600 transition-colors">Services</a>
              <a onClick={() => setIsMobileMenuOpen(false)} href="#about" className="text-navy-950 font-display text-lg tracking-widest uppercase hover:text-gold-600 transition-colors">About Us</a>
              <a onClick={() => setIsMobileMenuOpen(false)} href="#contact" className="px-6 py-4 bg-navy-950 text-white text-center uppercase tracking-widest hover:bg-gold-500 transition-all duration-500 rounded-full font-bold">
                Contact Now
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <main className="relative z-10 w-full overflow-hidden">
        
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
          {/* Professional animated hero banner imagery */}
          <motion.div 
            style={{ scale: heroBgScale, opacity: heroBgOpacity }}
            className="absolute inset-0 pointer-events-none origin-center z-0"
          >
            <AnimatePresence mode="popLayout">
              <motion.div 
                key={currentSlideIndex}
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 3.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${heroSlides[currentSlideIndex]}')` }}
              />
            </AnimatePresence>
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-900/60 to-slate-50 pointer-events-none z-0"></div>

          {/* Hero-specific localized slow-moving flares */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0 mix-blend-screen">
            <motion.div
              animate={{
                rotate: [0, 15, -10, 0],
                scale: [1, 1.1, 0.95, 1],
                opacity: [0.15, 0.3, 0.15]
              }}
              transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[120vw] h-[40vw] min-w-[800px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent blur-[100px] -rotate-12"
            />
            {/* Cinematic light streaks */}
            <motion.div
              animate={{
                x: ["-150%", "150%"],
                opacity: [0, 0.8, 0]
              }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[40%] w-[80vw] min-w-[600px] h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[2px] -rotate-12"
            />
            <motion.div
              animate={{
                x: ["100%", "-100%"],
                opacity: [0, 0.4, 0]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 8 }}
              className="absolute top-[60%] w-[60vw] min-w-[400px] h-[1px] bg-gradient-to-r from-transparent via-gold-300/30 to-transparent blur-[1px] rotate-45"
            />
          </div>

          <div className="max-w-7xl mx-auto w-full text-center flex flex-col items-center relative z-10">
            <motion.div 
              style={{ y: heroTextParallax }}
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.15 } }
              }}
              className="flex flex-col items-center relative z-10"
            >
              <motion.div variants={fadeUp} className="mb-10 relative inline-block">
                <div className="absolute inset-0 bg-gold-500/20 blur-xl rounded-full"></div>
                <div className="relative border border-gold-500/30 bg-gold-500/10 px-5 py-2 rounded-full flex items-center space-x-3 backdrop-blur-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></div>
                  <span className="text-xs font-display font-bold tracking-[0.2em] text-gold-300 uppercase">Premier Collective / {businessInfo.city}</span>
                </div>
              </motion.div>

              <motion.h1 
                variants={{
                  hidden: { opacity: 1 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                }}
                className="font-display text-[10vw] sm:text-[8vw] lg:text-[85px] xl:text-[105px] leading-[1] text-white font-medium mb-1 drop-shadow-lg flex flex-col items-center text-center w-full"
              >
                <motion.span variants={heroTopReveal} className="block mb-2">BUILDING A</motion.span>
                <motion.span variants={heroMiddleReveal} className="font-serif italic font-light text-gradient-gold lowercase block text-[12vw] sm:text-[10vw] lg:text-[100px] xl:text-[120px] relative z-20">
                  portfolio
                </motion.span>
                <motion.span variants={heroBottomReveal} className="block font-black mt-2 uppercase relative z-10 w-full text-center">OF SUCCESS.</motion.span>
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-8 text-lg md:text-xl xl:text-2xl text-slate-200 font-light max-w-2xl leading-relaxed drop-shadow">
                Luxury business solutions for a global market, operated with uncompromised local excellence.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-16 flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
                <a 
                  href={phoneLink}
                  className="w-full sm:w-auto group relative px-8 py-4 bg-white text-navy-950 font-display font-bold uppercase tracking-widest text-sm rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] active:scale-95 border border-transparent"
                >
                  <div className="absolute inset-0 bg-gold-400 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                  <span className="relative flex items-center justify-center gap-2 group-hover:text-navy-950 transition-colors duration-500">
                    <Phone className="w-4 h-4" /> Call Now
                  </span>
                </a>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto group px-8 py-4 bg-transparent border border-white/30 text-white font-display font-bold uppercase tracking-widest text-sm rounded-full flex items-center justify-center gap-2 hover:bg-white/10 hover:border-gold-400/80 hover:text-gold-300 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(200,169,111,0.3)]"
                >
                  WhatsApp Us <ArrowUpRight className="w-4 h-4 text-gold-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* INFINITE SCROLLING TEXT BAND */}
        <div className="w-full overflow-hidden border-y border-slate-200 bg-white/80 backdrop-blur-md py-5 relative z-10 flex shadow-sm">
          <motion.div
            className="flex whitespace-nowrap items-center w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center">
                <span className="text-navy-900 font-display font-bold tracking-[0.2em] text-xs uppercase px-8">Ecommerce Ventures</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500/50"></span>
                <span className="text-navy-900 font-display font-bold tracking-[0.2em] text-xs uppercase px-8">Artificial Intelligence</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500/50"></span>
                <span className="text-navy-900 font-display font-bold tracking-[0.2em] text-xs uppercase px-8">Global Logistics</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500/50"></span>
                <span className="text-navy-900 font-display font-bold tracking-[0.2em] text-xs uppercase px-8">Corporate Strategy</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500/50"></span>
                <span className="text-navy-900 font-display font-bold tracking-[0.2em] text-xs uppercase px-8">Digital Solutions</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500/50"></span>
                <span className="text-navy-900 font-display font-bold tracking-[0.2em] text-xs uppercase px-8">Business Development</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500/50"></span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* SERVICES BENTO GRID */}
        <section id="services" className="py-32 relative px-4 md:px-8">
          <div className="max-w-[1400px] mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8"
            >
              <div>
                <motion.span variants={fadeUp} className="text-gold-600 font-display font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Core Divisions</motion.span>
                <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-display font-black tracking-tight text-navy-950 max-w-2xl">
                  A multi-disciplinary spectrum of expertise.
                </motion.h2>
              </div>
              <motion.p variants={fadeUp} className="text-slate-600 max-w-md font-light">
                Specialized departments working cohesively under the AUSPHIRA umbrella to deliver unparalleled global market impact.
              </motion.p>
            </motion.div>

            {/* Bento Grid Layout */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerSection}
              style={{ perspective: 1200 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6"
            >
              
              {/* Ecommerce - Large Card */}
              <motion.div 
                variants={bentoCardReveal}
                className="md:col-span-12 lg:col-span-7 md:row-span-2 glass-panel glass-panel-hover rounded-[32px] p-8 md:p-12 relative overflow-hidden group min-h-[400px] lg:min-h-0 flex flex-col justify-end"
              >
                <div className="absolute inset-0 opacity-30 group-hover:opacity-70 transform group-hover:scale-105 transition-all duration-1000 ease-out bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay filter grayscale group-hover:grayscale-0"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/70"></div>
                <div className="relative z-10 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-700 ease-out">
                  <div className="w-16 h-16 bg-gold-500/10 text-gold-600 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md border border-gold-500/20 group-hover:bg-gold-500/20 group-hover:scale-110 transition-all duration-500">
                    <ShoppingCart className="w-8 h-8 group-hover:text-gold-700 transition-colors" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-navy-950 mb-3 tracking-tight group-hover:text-gold-600 transition-colors">Ecommerce Ventures</h3>
                  <p className="text-slate-600 text-lg max-w-md font-light leading-relaxed group-hover:text-navy-900 transition-colors">Architecting, launching, and scaling high-end digital storefronts designed to dominate global retail markets.</p>
                </div>
              </motion.div>

              {/* Digital Solutions */}
              <motion.div 
                variants={bentoCardReveal}
                className="md:col-span-6 lg:col-span-5 glass-panel glass-panel-hover rounded-[32px] p-8 relative overflow-hidden group"
              >
                <div className="absolute inset-0 opacity-20 group-hover:opacity-50 transform group-hover:scale-105 transition-all duration-1000 ease-out bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay filter grayscale group-hover:grayscale-0"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/60 to-transparent"></div>
                <div className="relative z-10 h-full flex flex-col justify-between min-h-[250px] transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-700 ease-out">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-slate-200 border border-white/10 group-hover:bg-gold-500/20 group-hover:text-gold-400 group-hover:border-gold-500/30 transition-all duration-500">
                      <Globe2 className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-gold-400 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white mb-2 tracking-tight group-hover:text-gold-100 transition-colors">Digital Solutions</h3>
                    <p className="text-slate-300 font-light leading-relaxed group-hover:text-white transition-colors">Delivering leading-edge digital marketing, branding, and high-performance technological deployments.</p>
                  </div>
                </div>
              </motion.div>

              {/* Artificial Intelligence */}
              <motion.div 
                variants={bentoCardReveal}
                className="md:col-span-6 lg:col-span-5 glass-panel glass-panel-hover rounded-[32px] p-8 relative overflow-hidden group"
              >
                <div className="absolute inset-0 opacity-20 group-hover:opacity-60 transform group-hover:scale-105 transition-all duration-1000 ease-out bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay filter grayscale group-hover:grayscale-0"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/60 to-transparent"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[80px] group-hover:bg-gold-500/20 transition-colors duration-1000"></div>
                <div className="relative z-10 h-full flex flex-col justify-between min-h-[250px] transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-700 ease-out">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-slate-200 border border-white/10 group-hover:bg-gold-500/20 group-hover:text-gold-400 group-hover:border-gold-500/30 transition-all duration-500">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-gold-400 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white mb-2 tracking-tight group-hover:text-gold-100 transition-colors">Artificial Intelligence</h3>
                    <p className="text-slate-300 font-light leading-relaxed group-hover:text-white transition-colors">Pioneering automation and bespoke AI models to dramatically amplify corporate efficiency.</p>
                  </div>
                </div>
              </motion.div>

              {/* Import & Export */}
              <motion.div 
                variants={bentoCardReveal}
                className="md:col-span-5 lg:col-span-4 glass-panel glass-panel-hover rounded-[32px] p-8 relative overflow-hidden group"
              >
                <div className="absolute inset-0 opacity-20 group-hover:opacity-50 transform group-hover:scale-105 transition-all duration-1000 ease-out bg-[url('https://images.unsplash.com/photo-1586528116311-ad8ed74d4715?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay filter grayscale group-hover:grayscale-0"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/60 to-transparent"></div>
                <div className="relative z-10 flex flex-col h-full justify-between min-h-[250px] transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-700 ease-out">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-slate-200 border border-white/10 group-hover:bg-gold-500/20 group-hover:text-gold-400 transition-all duration-500 mb-6 backdrop-blur-md">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-gold-400 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white mb-2 tracking-tight group-hover:text-gold-100 transition-colors">Import & Export</h3>
                    <p className="text-slate-300 font-light leading-relaxed group-hover:text-white transition-colors">Executing flawless international logistics and establishing bulletproof supply chains.</p>
                  </div>
                </div>
              </motion.div>

              {/* Business Development */}
              <motion.div 
                variants={bentoCardReveal}
                className="md:col-span-7 lg:col-span-8 glass-panel glass-panel-hover rounded-[32px] p-8 md:p-10 relative overflow-hidden group bg-navy-950"
              >
                 <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transform group-hover:scale-105 transition-all duration-1000 ease-out bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay filter grayscale group-hover:grayscale-0"></div>
                 <div className="absolute inset-0 bg-gradient-to-tr from-navy-950 via-navy-900/80 to-transparent"></div>
                 <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gold-900/40 via-navy-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                 <div className="relative z-10 flex flex-col justify-between h-full min-h-[250px] transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-700 ease-out">
                  <div className="flex justify-between items-start">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-slate-200 border border-white/10 group-hover:bg-gold-500/20 group-hover:text-gold-400 transition-all duration-500 mb-6">
                      <TrendingUp className="w-8 h-8" />
                    </div>
                    <ArrowUpRight className="w-8 h-8 text-white/20 group-hover:text-gold-400 transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500" />
                  </div>
                  <div className="max-w-xl">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 tracking-tight group-hover:text-gold-100 transition-colors">Business Development</h3>
                    <p className="text-slate-300 text-lg font-light leading-relaxed group-hover:text-white transition-colors">From market inception to aggressive scaling, we construct and elevate robust subsidiary portfolios seamlessly under the AUSPHIRA umbrella.</p>
                  </div>
                 </div>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* PARALLAX ABOUT SECTION */}
        <section id="about" ref={aboutRef} className="py-32 relative px-4 md:px-8 border-y border-slate-200 bg-white">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 relative aspect-[4/5] rounded-[32px] overflow-hidden group">
              <div className="absolute inset-0 bg-gold-500/10 mix-blend-color z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-700"></div>
              <motion.div style={{ y: aboutImageY }} className="absolute -inset-y-[15%] inset-x-0 w-full h-[130%]">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
                  alt="AUSPHIRA Corporate Vision"
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 origin-center filter grayscale opacity-40 group-hover:opacity-60 group-hover:grayscale-0"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/50 to-transparent z-10 pointer-events-none"></div>
              
              <div className="absolute bottom-10 left-10 right-10 z-20">
                <div className="glass-panel rounded-2xl p-6 backdrop-blur-md border hover:bg-white transition-colors duration-500">
                  <div className="text-4xl font-display font-black text-navy-950 mb-1">Born in Lahore.</div>
                  <div className="text-gold-600 font-display tracking-[0.2em] text-sm font-bold uppercase">Operating Globally.</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
              >
                <motion.span variants={fadeUp} className="text-gold-500 font-display font-bold tracking-[0.2em] text-sm uppercase mb-6 block">The Collective</motion.span>
                <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-display font-black tracking-tight text-navy-950 mb-10 leading-[1.1]">
                  A multi-disciplinary approach to modern progress.
                </motion.h2>
                
                <div className="space-y-6 text-slate-600 text-lg font-light leading-relaxed mb-12">
                  <motion.p variants={fadeUp}>
                    From our strategic foundation in Lahore, <strong className="text-navy-950 font-semibold font-display">AUSPHIRA</strong> operates as a central nervous system for diverse ventures. We recognize that modern business demands radical adaptability, high-tier technological integration, and an unobstructed global perspective.
                  </motion.p>
                  <motion.p variants={fadeUp}>
                    Whether launching consumer-facing digital brands, streamlining trade through large-scale import/export operations, or leveraging the latest in artificial intelligence networks, we maintain a singular, uncompromising focus on tangible supremacy in every sector we touch.
                  </motion.p>
                </div>

                <motion.div variants={fadeUp} className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-200">
                  <div>
                    <h4 className="text-navy-950 font-display text-2xl font-bold mb-3 tracking-tight">Global Vision</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Targeting international markets with deep-rooted local expertise and strategic precision.</p>
                  </div>
                  <div>
                    <h4 className="text-navy-950 font-display text-2xl font-bold mb-3 tracking-tight">Tech-Forward</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Embracing AI and advanced digital architecture to ensure hyper-scalability.</p>
                  </div>
                </motion.div>

                {/* ANIMATED STATS COUNTER */}
                <motion.div variants={fadeUp} className="grid grid-cols-2 lg:grid-cols-3 gap-8 pt-10 mt-10 border-t border-slate-200">
                  <div>
                    <div className="text-4xl lg:text-5xl font-display font-black text-gold-600 mb-2">
                       <Counter value={50} suffix="+" />
                    </div>
                    <div className="text-navy-950 font-bold text-xs tracking-widest uppercase">Global Partners</div>
                  </div>
                  <div>
                    <div className="text-4xl lg:text-5xl font-display font-black text-gold-600 mb-2">
                       <Counter value={120} suffix="+" />
                    </div>
                    <div className="text-navy-950 font-bold text-xs tracking-widest uppercase">Projects Delivered</div>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <div className="text-4xl lg:text-5xl font-display font-black text-gold-600 mb-2">
                       <Counter value={15} suffix="+" />
                    </div>
                    <div className="text-navy-950 font-bold text-xs tracking-widest uppercase">Markets Reached</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section id="gallery" className="py-32 relative px-4 md:px-8 bg-slate-50 border-t border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
            >
              <div>
                <motion.span variants={fadeUp} className="text-gold-600 font-display font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Visual Presence</motion.span>
                <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-display font-black tracking-tight text-navy-950 mb-0">
                  Global operations <br className="hidden md:block"/><span className="text-gradient-gold">in action.</span>
                </motion.h2>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerSection}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf', alt: 'Corporate Strategy' },
                { src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec', alt: 'Global Logistics' },
                { src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa', alt: 'Digital & AI Solutions' },
                { src: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae', alt: 'Ecommerce Ventures' }
              ].map((img, idx) => (
                <motion.div 
                  key={idx}
                  variants={galleryImageReveal}
                  className="relative rounded-3xl overflow-hidden glass-panel aspect-[4/5] group"
                >
                   <img 
                     src={`${img.src}?auto=format&fit=crop&h=800&w=600&q=80`} 
                     alt={img.alt}
                     className="w-full h-full object-cover filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700"></div>
                   <div className="absolute bottom-6 left-6 right-6">
                     <div className="w-8 h-8 rounded-full bg-white/20 mb-3 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                       <ArrowUpRight className="w-4 h-4 text-white" />
                     </div>
                     <p className="text-white font-display font-bold tracking-widest uppercase text-xs">
                       {img.alt}
                     </p>
                   </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section id="testimonials" className="py-32 relative px-4 md:px-8 border-t border-slate-200 bg-white">
          <div className="absolute top-0 right-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/5 via-white/0 to-transparent opacity-50 pointer-events-none"></div>
          
          <div className="max-w-[1400px] mx-auto relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="text-center mb-16"
            >
              <motion.span variants={fadeUp} className="text-gold-600 font-display font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Client Partnerships</motion.span>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-display font-black tracking-tight text-navy-950 mb-6">
                A reputation built on <span className="text-gradient-gold">results.</span>
              </motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="glass-panel glass-panel-hover rounded-[32px] p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex gap-1 mb-8 text-gold-500">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-600 text-lg font-light leading-relaxed mb-10 italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 border-t border-slate-100 pt-6 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-navy-800 font-display font-bold shadow-inner">
                      {testimonial.name[0]}
                    </div>
                    <div className="font-display">
                      <div className="text-navy-950 font-bold tracking-wide">{testimonial.name}</div>
                      <div className="text-gold-600 text-xs tracking-[0.15em] uppercase font-medium mt-1">{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* HUGE CTA SECTION */}
        <section id="contact" className="py-32 md:py-48 relative overflow-hidden flex items-center justify-center bg-navy-950 border-t border-slate-200">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/10 via-navy-950/0 to-transparent z-0 pointer-events-none"></div>
          
          <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-5xl md:text-8xl font-display font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
                Initiate <br/><span className="text-gradient-gold text-6xl md:text-9xl">Discussions.</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 font-light mb-16 max-w-2xl mx-auto">
                Connect with our team in Lahore to discuss high-level partnerships, exclusive services, or visionary new ventures.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a 
                  href={phoneLink}
                  className="group relative px-10 py-5 bg-gold-500 text-navy-950 font-display font-bold uppercase tracking-widest text-sm rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(200,169,111,0.5)]"
                >
                  <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                  <span className="relative flex items-center justify-center gap-3 group-hover:text-navy-950 transition-colors duration-500">
                    <Phone className="w-5 h-5" /> {businessInfo.phoneDisplay}
                  </span>
                </a>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-10 py-5 bg-transparent border border-white/20 text-white font-display font-bold uppercase tracking-widest text-sm rounded-full flex items-center justify-center gap-3 hover:bg-white/5 hover:border-gold-400/50 hover:text-gold-300 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_-10px_rgba(200,169,111,0.2)]"
                >
                  <ArrowUpRight className="w-5 h-5 text-gold-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" /> WhatsApp Direct
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* HIGH-END FOOTER */}
        <footer className="relative pt-24 pb-8 border-t border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy-950 z-0 pointer-events-none"></div>
          
          <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-24">
              
              {/* Brand Col */}
              <div className="md:col-span-12 lg:col-span-5">
                <span className="text-3xl md:text-4xl tracking-[0.2em] font-black font-display text-white uppercase block mb-6">
                  AUS<span className="text-gold-500">PHIRA</span>
                </span>
                <p className="text-slate-400 font-light text-lg max-w-md leading-relaxed mb-8">
                  {businessInfo.tagline} {businessInfo.tagline2}. A premier business development collective bridging Lahore to the globe.
                </p>
                <div className="w-12 h-1 bg-gradient-to-r from-gold-500 to-transparent"></div>
              </div>
              
              {/* Contact Col */}
              <div className="md:col-span-6 lg:col-span-4">
                <h4 className="text-white font-display font-bold tracking-[0.2em] uppercase mb-8 text-sm">Direct Line</h4>
                <div className="flex flex-col gap-6 text-slate-300 font-light text-lg">
                  <a href={phoneLink} className="hover:text-gold-300 transition-colors duration-500 flex items-center group">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center mr-4 group-hover:border-gold-500/50 group-hover:bg-gold-500/10 group-hover:scale-110 transition-all duration-500">
                      <Phone className="w-4 h-4 text-gold-400 group-hover:text-gold-300 transition-colors" />
                    </div>
                    <span className="group-hover:translate-x-2 transition-transform duration-500">{businessInfo.phoneDisplay}</span>
                  </a>
                  <a href={emailLink} className="hover:text-gold-300 transition-colors duration-500 flex items-center group">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center mr-4 group-hover:border-gold-500/50 group-hover:bg-gold-500/10 group-hover:scale-110 transition-all duration-500">
                      <Mail className="w-4 h-4 text-gold-400 group-hover:text-gold-300 transition-colors" />
                    </div>
                    <span className="truncate group-hover:translate-x-2 transition-transform duration-500">{businessInfo.email}</span>
                  </a>
                  <a href={`https://${businessInfo.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-gold-300 transition-colors duration-500 flex items-center group">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center mr-4 group-hover:border-gold-500/50 group-hover:bg-gold-500/10 group-hover:scale-110 transition-all duration-500">
                      <Globe2 className="w-4 h-4 text-gold-400 group-hover:text-gold-300 transition-colors" />
                    </div>
                    <span className="truncate group-hover:translate-x-2 transition-transform duration-500">{businessInfo.website}</span>
                  </a>
                </div>
              </div>

              {/* Location Col */}
              <div className="md:col-span-6 lg:col-span-3">
                <h4 className="text-white font-display font-bold tracking-[0.2em] uppercase mb-8 text-sm">Headquarters</h4>
                <div className="flex items-start text-slate-300 font-light text-lg group cursor-default">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center mr-4 shrink-0 group-hover:border-gold-500/50 group-hover:bg-gold-500/10 transition-all">
                    <MapPin className="w-4 h-4 text-gold-400" />
                  </div>
                  <p className="leading-relaxed pt-1">
                    {businessInfo.address}
                  </p>
                </div>
              </div>

            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs tracking-widest uppercase text-slate-500 font-bold font-display">
              <p className="mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} {businessInfo.name} GROUP.
              </p>
              <div className="flex gap-4">
                <span>All Rights Reserved</span>
                <span className="text-gold-700">&bull;</span>
                <span>{businessInfo.city}</span>
              </div>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}
