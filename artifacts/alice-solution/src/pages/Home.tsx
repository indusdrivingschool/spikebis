import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronUp,
  Menu,
  X,
  ArrowRight,
  Code,
  ShoppingCart,
  Megaphone,
  Video,
  PenTool,
  Search,
  Share2,
  TrendingUp,
  Bot,
  Briefcase,
  Monitor,
  Wrench,
  Clock,
  Globe,
  Award,
  Zap,
  CheckCircle,
  Star,
  MessageCircle,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Palette,
  BarChart,
  Layout,
  Store,
  DollarSign
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Animations
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const services = [
  { icon: <ShoppingCart className="w-6 h-6 text-blue-400" />, title: "Shopify Store Development", desc: "Premium e-commerce stores designed for conversion and rapid scaling." },
  { icon: <Store className="w-6 h-6 text-blue-400" />, title: "Shopify Store Management", desc: "End-to-end management ensuring maximum uptime and sales." },
  { icon: <Megaphone className="w-6 h-6 text-blue-400" />, title: "Facebook & Instagram Ads", desc: "Data-driven ad campaigns that maximize ROI across Meta platforms." },
  { icon: <Video className="w-6 h-6 text-blue-400" />, title: "TikTok Ads", desc: "Viral marketing strategies tailored for the modern short-form audience." },
  { icon: <Search className="w-6 h-6 text-blue-400" />, title: "Google Ads", desc: "Targeted search and display campaigns to capture high-intent traffic." },
  { icon: <Code className="w-6 h-6 text-blue-400" />, title: "Website Development", desc: "Custom, high-performance web applications built for scale." },
  { icon: <Briefcase className="w-6 h-6 text-blue-400" />, title: "Ecommerce Solutions", desc: "Comprehensive platforms to digitize and grow your retail business." },
  { icon: <Palette className="w-6 h-6 text-blue-400" />, title: "Graphic Design", desc: "Stunning visual assets that communicate your brand's true value." },
  { icon: <Monitor className="w-6 h-6 text-blue-400" />, title: "Video Editing", desc: "Professional post-production that turns raw footage into masterpieces." },
  { icon: <Award className="w-6 h-6 text-blue-400" />, title: "Branding", desc: "Crafting memorable, premium brand identities that stand the test of time." },
  { icon: <TrendingUp className="w-6 h-6 text-blue-400" />, title: "SEO Optimization", desc: "Dominate search rankings and drive sustainable organic traffic." },
  { icon: <Share2 className="w-6 h-6 text-blue-400" />, title: "Social Media Marketing", desc: "Engaging content strategies that build communities and loyalty." },
  { icon: <BarChart className="w-6 h-6 text-blue-400" />, title: "Digital Marketing", desc: "Holistic multi-channel campaigns to accelerate brand growth." },
  { icon: <Layout className="w-6 h-6 text-blue-400" />, title: "UI/UX Design", desc: "Intuitive, breathtaking interfaces that users love to interact with." },
  { icon: <Bot className="w-6 h-6 text-blue-400" />, title: "AI Automation", desc: "Streamline workflows and reduce overhead with cutting-edge AI." },
  { icon: <Wrench className="w-6 h-6 text-blue-400" />, title: "Freelancing Services", desc: "On-demand expert talent integration for your most critical tasks." },
  { icon: <DollarSign className="w-6 h-6 text-blue-400" />, title: "Fiverr Business Solutions", desc: "Curated outsourced workflows managed by our elite coordinators." },
  { icon: <Zap className="w-6 h-6 text-blue-400" />, title: "Website Maintenance", desc: "Proactive security, updates, and performance optimization." },
  { icon: <Globe className="w-6 h-6 text-blue-400" />, title: "Business Growth Strategy", desc: "Strategic blueprinting to scale your operations globally." },
];

const reasons = [
  { icon: <Award className="w-8 h-8 text-primary" />, title: "Expert Team", desc: "Industry veterans delivering world-class solutions." },
  { icon: <Zap className="w-8 h-8 text-primary" />, title: "Fast Delivery", desc: "Agile methodologies for rapid time-to-market." },
  { icon: <Clock className="w-8 h-8 text-primary" />, title: "24/7 Support", desc: "Round-the-clock monitoring and assistance." },
  { icon: <Globe className="w-8 h-8 text-primary" />, title: "Worldwide", desc: "Global presence, localized understanding." },
  { icon: <CheckCircle className="w-8 h-8 text-primary" />, title: "Quality Work", desc: "Uncompromising standards in every line of code." },
  { icon: <TrendingUp className="w-8 h-8 text-primary" />, title: "Best Pricing", desc: "Premium service at competitive investment levels." },
];

const projects = [
  { name: "NovaTech AI", category: "Web Development", desc: "Enterprise dashboard for AI analytics.", image: "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)" },
  { name: "Luxe Wear", category: "E-Commerce", desc: "Premium Shopify store for a global fashion brand.", image: "linear-gradient(135deg, #0f172a 0%, #1e40af 100%)" },
  { name: "FinFlow", category: "UI/UX Design", desc: "Modern banking app interface.", image: "linear-gradient(135deg, #172554 0%, #0f172a 100%)" },
  { name: "Aura Skincare", category: "Digital Marketing", desc: "300% ROI on Facebook & TikTok Ads.", image: "linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%)" },
  { name: "Vertex Solutions", category: "Branding", desc: "Complete brand overhaul and strategy.", image: "linear-gradient(135deg, #1e3a8a 0%, #020617 100%)" },
  { name: "Omni Store", category: "Web Development", desc: "High-volume B2B marketplace platform.", image: "linear-gradient(135deg, #020617 0%, #1e40af 100%)" },
];

const testimonials = [
  { name: "Sarah Jenkins", company: "TechNova", text: "Alice Solution Co transformed our digital presence. The new website is a masterpiece.", initials: "SJ" },
  { name: "Michael Chen", company: "Luxe Retail", text: "Their Shopify expertise doubled our conversion rate in just two months.", initials: "MC" },
  { name: "Elena Rostova", company: "FinEdge", text: "The UI/UX design is world-class. Our users love the new app experience.", initials: "ER" },
  { name: "David Miller", company: "Growth Inc", text: "Their ad campaigns are precise and incredibly effective. True professionals.", initials: "DM" },
];

const pricing = [
  { name: "Starter", price: "$199", period: "/mo", features: ["Basic Website Maintenance", "Standard SEO Optimization", "Email Support", "Monthly Reporting"], recommended: false },
  { name: "Professional", price: "$499", period: "/mo", features: ["Advanced Web Development", "Comprehensive Digital Marketing", "Priority 24/7 Support", "Weekly Strategy Calls", "UI/UX Enhancements"], recommended: true },
  { name: "Enterprise", price: "Custom", period: "", features: ["Full-Scale AI Automation", "Global Ad Campaigns (Google, Meta, TikTok)", "Dedicated Account Manager", "Custom Ecommerce Solutions", "On-site Consulting"], recommended: false },
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          >
            <div className="flex flex-col items-center gap-4">
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-16 rounded-full border-t-2 border-primary border-r-2 border-transparent"
              />
              <motion.h1
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-2xl font-bold tracking-widest text-white"
              >
                ALICE
              </motion.h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-background text-foreground relative overflow-hidden font-sans">
        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} 
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen" 
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} 
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen" 
          />
        </div>

        {/* Navbar */}
        <nav
          className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
            scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
          }`}
        >
          <div className="container mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("home")}>
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center glow-effect">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold text-white tracking-wide">
                Alice<span className="text-primary">.</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {["About", "Services", "Portfolio", "Pricing", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <Button variant="outline" className="border-white/10 text-white hover:bg-white/5" onClick={() => scrollTo("contact")}>
                Book Consultation
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-white glow-effect" onClick={() => scrollTo("contact")}>
                Get Started
              </Button>
            </div>

            {/* Mobile Nav Toggle */}
            <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-white/10"
              >
                <div className="flex flex-col p-6 gap-4">
                  {["About", "Services", "Portfolio", "Pricing", "Contact"].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollTo(item.toLowerCase())}
                      className="text-left text-lg font-medium text-slate-300 hover:text-white py-2"
                    >
                      {item}
                    </button>
                  ))}
                  <div className="flex flex-col gap-3 mt-4">
                    <Button variant="outline" className="w-full border-white/10 text-white" onClick={() => scrollTo("contact")}>
                      Book Consultation
                    </Button>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white glow-effect" onClick={() => scrollTo("contact")}>
                      Get Started
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center pt-20 z-10">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              animate="show"
              variants={staggerContainer}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-slate-300">Premium Digital Transformation</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
                Transforming Businesses Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary text-glow">Smart Digital Solutions</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                We help brands grow with advanced IT services, Shopify solutions, digital marketing, automation, and creative technology.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 bg-primary hover:bg-primary/90 text-white glow-effect rounded-xl" onClick={() => scrollTo("services")}>
                  Explore Services <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 border-white/10 text-white hover:bg-white/5 rounded-xl glass-card" onClick={() => scrollTo("contact")}>
                  Book Consultation
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 relative z-10 bg-black/40">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeInUp}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                  <Award className="w-4 h-4" /> About Us
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Pioneering the Future of Digital Business</h2>
                <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                  Alice Solution Co is a premium worldwide digital transformation company. We blend cyberpunk precision with deep space luxury to create immersive, high-end digital experiences.
                </p>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  Like Apple and Tesla built an IT agency, we radiate trust, expertise, and global presence. Every pixel, every line of code, and every campaign is designed to maximize your impact.
                </p>
                <Button variant="outline" className="glass-card text-white hover:bg-white/5 border-white/10" onClick={() => scrollTo("services")}>Read Our Story</Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
                {[
                  { label: "Projects Delivered", value: "500+" },
                  { label: "Happy Clients", value: "200+" },
                  { label: "Global Reach", value: "Worldwide" },
                  { label: "Expert Support", value: "24/7" },
                ].map((stat, i) => (
                  <div key={i} className="glass-card p-8 flex flex-col items-center justify-center text-center group hover:border-primary/40 transition-colors">
                    <span className="text-4xl font-bold text-primary mb-2 text-glow">{stat.value}</span>
                    <span className="text-sm text-slate-400 font-medium group-hover:text-slate-300 transition-colors">{stat.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 relative z-10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <Layout className="w-4 h-4" /> Our Expertise
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Premium Services</h2>
              <p className="text-slate-400 text-lg">Comprehensive digital solutions designed for the modern enterprise. We handle the complex technology so you can focus on growth.</p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="glass-card p-8 group transition-all duration-300 hover:-translate-y-2 glow-effect-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 relative z-10 bg-black/40">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Us</h2>
              <p className="text-slate-400 text-lg">The advantages that set us apart in the global digital landscape.</p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {reasons.map((reason, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex flex-col items-center text-center p-6">
                  <div className="mb-6 p-4 rounded-full bg-primary/10 border border-primary/20 text-glow">
                    {reason.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{reason.title}</h3>
                  <p className="text-slate-400">{reason.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24 relative z-10">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                  <Monitor className="w-4 h-4" /> Our Work
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
                <p className="text-slate-400 text-lg">A glimpse into the digital transformations we've orchestrated.</p>
              </div>
              <Button variant="outline" className="glass-card text-white hover:bg-white/5 border-white/10 shrink-0">
                View All Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="group relative overflow-hidden rounded-2xl glass-card glow-effect-hover transition-all duration-500"
                >
                  <div className="h-48 w-full transition-transform duration-500 group-hover:scale-105" style={{ background: project.image }} />
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300 mb-4">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                    <p className="text-slate-400 text-sm">{project.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 relative z-10 bg-black/40">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Client Success Stories</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Don't just take our word for it. Hear from the businesses we've transformed.</p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {testimonials.map((t, i) => (
                <motion.div key={i} variants={fadeInUp} className="glass-card p-8 relative">
                  <div className="flex text-primary mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-lg text-slate-300 mb-8 italic">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold border border-primary/30">
                      {t.initials}
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{t.name}</h4>
                      <p className="text-slate-400 text-sm">{t.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 relative z-10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <DollarSign className="w-4 h-4" /> Investment
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Transparent Pricing</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Premium digital solutions tailored to your scale and ambition.</p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {pricing.map((plan, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className={`relative p-8 rounded-2xl ${plan.recommended ? 'glass-card border-primary/50 glow-effect transform md:-translate-y-4' : 'glass-card hover:border-white/20 transition-colors'}`}
                >
                  {plan.recommended && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                      RECOMMENDED
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3 text-slate-300">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.recommended ? 'bg-primary hover:bg-primary/90 glow-effect text-white' : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'}`}>
                    Get Started
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 relative z-10 bg-black/60 border-t border-white/5">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
          
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Build Something Extraordinary</h2>
                  <p className="text-slate-400 text-lg mb-10">
                    Ready to elevate your digital presence? Reach out to our team of experts and let's discuss how we can accelerate your growth.
                  </p>

                  <div className="space-y-6 mb-10">
                    <div className="flex items-center gap-4 p-4 rounded-xl glass-card">
                      <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                        <MessageCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Chat with us</p>
                        <p className="text-white font-medium">WhatsApp Support</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl glass-card">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Email us</p>
                        <p className="text-white font-medium">hello@alicesolution.co</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-slate-400 mb-4 uppercase tracking-widest">CONNECT WITH US</p>
                    <div className="flex gap-4">
                      {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                        <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-primary/50 transition-all">
                          <Icon className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="glass-card p-8 md:p-10"
                >
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Name</label>
                        <Input className="bg-black/50 border-white/10 text-white placeholder:text-slate-600 focus:border-primary/50 h-12" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Email</label>
                        <Input className="bg-black/50 border-white/10 text-white placeholder:text-slate-600 focus:border-primary/50 h-12" type="email" placeholder="john@company.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Subject</label>
                      <Input className="bg-black/50 border-white/10 text-white placeholder:text-slate-600 focus:border-primary/50 h-12" placeholder="How can we help?" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Message</label>
                      <Textarea className="bg-black/50 border-white/10 text-white placeholder:text-slate-600 focus:border-primary/50 min-h-[150px] resize-none" placeholder="Tell us about your project..." />
                    </div>
                    <Button type="submit" className="w-full h-14 bg-primary hover:bg-primary/90 text-white text-lg font-medium glow-effect rounded-xl">
                      Send Message
                    </Button>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-black border-t border-white/5 relative z-10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center glow-effect">
                    <span className="text-white font-bold text-lg">A</span>
                  </div>
                  <span className="text-xl font-bold text-white tracking-wide">
                    Alice<span className="text-primary">.</span>
                  </span>
                </div>
                <p className="text-slate-400 max-w-sm mb-6">
                  Premium worldwide digital transformation company. We build the future of digital experiences.
                </p>
              </div>
              
              <div>
                <h4 className="text-white font-bold mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {["About", "Services", "Portfolio", "Pricing", "Contact"].map((item) => (
                    <li key={item}>
                      <button onClick={() => scrollTo(item.toLowerCase())} className="text-slate-400 hover:text-white transition-colors">
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-6">Legal</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</a></li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 text-center text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
              <p>&copy; {new Date().getFullYear()} Alice Solution Co. All rights reserved.</p>
              <p>Designed with precision for the modern web.</p>
            </div>
          </div>
        </footer>

        {/* Back to top */}
        <AnimatePresence>
          {scrolled && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center z-50 glow-effect hover:bg-primary/90 transition-colors"
            >
              <ChevronUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}