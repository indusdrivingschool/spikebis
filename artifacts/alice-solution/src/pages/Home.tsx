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
  DollarSign,
  Phone,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const SERVICE_LIST = [
  "Shopify Store Development",
  "Shopify Store Management",
  "Facebook & Instagram Ads",
  "TikTok Ads",
  "Google Ads",
  "Website Development",
  "Ecommerce Solutions",
  "Graphic Design",
  "Video Editing",
  "Branding",
  "SEO Optimization",
  "Social Media Marketing",
  "Digital Marketing",
  "UI/UX Design",
  "AI Automation",
  "Freelancing Services",
  "Fiverr Business Solutions",
  "Website Maintenance",
  "Business Growth Strategy",
];

const services = [
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "Shopify Store Development",
    desc: "Premium e-commerce stores built for conversion and rapid scaling.",
    color: "from-green-500/30 to-emerald-900/60",
    border: "border-green-500/30",
    iconBg: "bg-green-500/20 text-green-400",
    tag: "E-Commerce",
  },
  {
    icon: <Store className="w-6 h-6" />,
    title: "Shopify Store Management",
    desc: "End-to-end management ensuring maximum uptime and sales performance.",
    color: "from-emerald-500/30 to-teal-900/60",
    border: "border-emerald-500/30",
    iconBg: "bg-emerald-500/20 text-emerald-400",
    tag: "E-Commerce",
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Facebook & Instagram Ads",
    desc: "Data-driven Meta campaigns that maximize your return on ad spend.",
    color: "from-blue-600/30 to-indigo-900/60",
    border: "border-blue-500/30",
    iconBg: "bg-blue-500/20 text-blue-400",
    tag: "Paid Ads",
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: "TikTok Ads",
    desc: "Viral short-form marketing strategies for the next-gen audience.",
    color: "from-pink-600/30 to-rose-900/60",
    border: "border-pink-500/30",
    iconBg: "bg-pink-500/20 text-pink-400",
    tag: "Paid Ads",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Google Ads",
    desc: "High-intent search and display campaigns that capture ready buyers.",
    color: "from-yellow-500/30 to-orange-900/60",
    border: "border-yellow-500/30",
    iconBg: "bg-yellow-500/20 text-yellow-400",
    tag: "Paid Ads",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Website Development",
    desc: "Custom, high-performance web applications engineered for scale.",
    color: "from-cyan-500/30 to-blue-900/60",
    border: "border-cyan-500/30",
    iconBg: "bg-cyan-500/20 text-cyan-400",
    tag: "Development",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Ecommerce Solutions",
    desc: "Comprehensive platforms to digitize and accelerate your retail growth.",
    color: "from-violet-500/30 to-purple-900/60",
    border: "border-violet-500/30",
    iconBg: "bg-violet-500/20 text-violet-400",
    tag: "E-Commerce",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Graphic Design",
    desc: "Stunning visual assets that communicate your brand's true power.",
    color: "from-fuchsia-500/30 to-pink-900/60",
    border: "border-fuchsia-500/30",
    iconBg: "bg-fuchsia-500/20 text-fuchsia-400",
    tag: "Creative",
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Video Editing",
    desc: "Professional post-production turning raw footage into masterpieces.",
    color: "from-red-500/30 to-rose-900/60",
    border: "border-red-500/30",
    iconBg: "bg-red-500/20 text-red-400",
    tag: "Creative",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Branding",
    desc: "Memorable premium brand identities built to stand the test of time.",
    color: "from-amber-500/30 to-yellow-900/60",
    border: "border-amber-500/30",
    iconBg: "bg-amber-500/20 text-amber-400",
    tag: "Creative",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "SEO Optimization",
    desc: "Dominate search rankings and drive sustainable organic traffic.",
    color: "from-lime-500/30 to-green-900/60",
    border: "border-lime-500/30",
    iconBg: "bg-lime-500/20 text-lime-400",
    tag: "Marketing",
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "Social Media Marketing",
    desc: "Engaging content strategies that build loyal communities.",
    color: "from-sky-500/30 to-blue-900/60",
    border: "border-sky-500/30",
    iconBg: "bg-sky-500/20 text-sky-400",
    tag: "Marketing",
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: "Digital Marketing",
    desc: "Holistic multi-channel campaigns that accelerate your brand growth.",
    color: "from-blue-500/30 to-indigo-900/60",
    border: "border-blue-500/30",
    iconBg: "bg-blue-500/20 text-blue-400",
    tag: "Marketing",
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "UI/UX Design",
    desc: "Intuitive, breathtaking interfaces that users love to navigate.",
    color: "from-purple-500/30 to-violet-900/60",
    border: "border-purple-500/30",
    iconBg: "bg-purple-500/20 text-purple-400",
    tag: "Design",
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "AI Automation",
    desc: "Streamline workflows and slash overhead with cutting-edge AI.",
    color: "from-teal-500/30 to-cyan-900/60",
    border: "border-teal-500/30",
    iconBg: "bg-teal-500/20 text-teal-400",
    tag: "Technology",
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "Freelancing Services",
    desc: "On-demand expert talent for your most critical project needs.",
    color: "from-orange-500/30 to-red-900/60",
    border: "border-orange-500/30",
    iconBg: "bg-orange-500/20 text-orange-400",
    tag: "Services",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Fiverr Business Solutions",
    desc: "Curated outsourced workflows managed by our elite coordinators.",
    color: "from-green-600/30 to-teal-900/60",
    border: "border-green-600/30",
    iconBg: "bg-green-600/20 text-green-400",
    tag: "Services",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Website Maintenance",
    desc: "Proactive security, updates, and performance optimization 24/7.",
    color: "from-slate-500/30 to-gray-900/60",
    border: "border-slate-500/30",
    iconBg: "bg-slate-500/20 text-slate-300",
    tag: "Development",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Business Growth Strategy",
    desc: "Strategic blueprinting to scale your operations on a global stage.",
    color: "from-indigo-500/30 to-blue-900/60",
    border: "border-indigo-500/30",
    iconBg: "bg-indigo-500/20 text-indigo-400",
    tag: "Strategy",
  },
];

const reasons = [
  { icon: <Award className="w-8 h-8 text-primary" />, title: "Expert Team", desc: "Industry veterans delivering world-class solutions." },
  { icon: <Zap className="w-8 h-8 text-primary" />, title: "Fast Delivery", desc: "Agile methodologies for rapid time-to-market." },
  { icon: <Clock className="w-8 h-8 text-primary" />, title: "24/7 Support", desc: "Round-the-clock monitoring and assistance." },
  { icon: <Globe className="w-8 h-8 text-primary" />, title: "Worldwide", desc: "Global presence, localized understanding." },
  { icon: <CheckCircle className="w-8 h-8 text-primary" />, title: "Quality Work", desc: "Uncompromising standards in every deliverable." },
  { icon: <TrendingUp className="w-8 h-8 text-primary" />, title: "Best Pricing", desc: "Premium service at competitive investment levels." },
];

const projects = [
  { name: "NovaTech AI", category: "Web Development", desc: "Enterprise dashboard for AI analytics.", color: "from-blue-600 via-indigo-700 to-slate-900" },
  { name: "Luxe Wear", category: "E-Commerce", desc: "Premium Shopify store for a global fashion brand.", color: "from-emerald-600 via-teal-700 to-slate-900" },
  { name: "FinFlow", category: "UI/UX Design", desc: "Modern banking app interface.", color: "from-violet-600 via-purple-700 to-slate-900" },
  { name: "Aura Skincare", category: "Digital Marketing", desc: "300% ROI on Facebook & TikTok Ads.", color: "from-pink-600 via-rose-700 to-slate-900" },
  { name: "Vertex Solutions", category: "Branding", desc: "Complete brand overhaul and identity strategy.", color: "from-amber-600 via-orange-700 to-slate-900" },
  { name: "Omni Store", category: "Web Development", desc: "High-volume B2B marketplace platform.", color: "from-cyan-600 via-blue-700 to-slate-900" },
];

const testimonials = [
  { name: "Sarah Jenkins", company: "TechNova", text: "Alice Solution Co transformed our digital presence completely. The new website is an absolute masterpiece.", initials: "SJ" },
  { name: "Michael Chen", company: "Luxe Retail", text: "Their Shopify expertise doubled our conversion rate in just two months. Incredible results.", initials: "MC" },
  { name: "Elena Rostova", company: "FinEdge", text: "The UI/UX design is world-class. Our users love the new app experience and engagement is up 180%.", initials: "ER" },
  { name: "David Miller", company: "Growth Inc", text: "Their ad campaigns are precise and incredibly effective. True professionals who deliver on every promise.", initials: "DM" },
];

const pricing = [
  { name: "Starter", price: "$199", period: "/mo", features: ["Basic Website Maintenance", "Standard SEO Optimization", "Email Support", "Monthly Reporting"], recommended: false },
  { name: "Professional", price: "$499", period: "/mo", features: ["Advanced Web Development", "Comprehensive Digital Marketing", "Priority 24/7 Support", "Weekly Strategy Calls", "UI/UX Enhancements"], recommended: true },
  { name: "Enterprise", price: "Custom", period: "", features: ["Full-Scale AI Automation", "Global Ad Campaigns (Google, Meta, TikTok)", "Dedicated Account Manager", "Custom Ecommerce Solutions", "On-site Consulting"], recommended: false },
];

const WHATSAPP_NUMBER = "923160401431";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const EMAIL = "info@aicesolutionco.com";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
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
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                className="w-14 h-14 rounded-full border-2 border-primary/20 border-t-primary"
              />
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex items-center gap-1"
              >
                <span className="text-2xl font-bold tracking-widest text-white">aice</span>
                <span className="text-2xl font-bold tracking-widest text-primary">Solution</span>
                <span className="text-2xl font-bold tracking-widest text-white">Co</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-background text-foreground relative overflow-hidden font-sans">
        {/* Background FX */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(59,130,246,0.15) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
          <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.45, 0.25] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[130px]" />
          <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[100px]" />
        </div>

        {/* Top Announcement Banner */}
        <div className="relative z-50 bg-gradient-to-r from-blue-900/80 via-primary/80 to-blue-900/80 backdrop-blur-sm border-b border-primary/30 py-2.5 px-4 text-center">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Sparkles className="w-4 h-4 text-yellow-400 shrink-0" />
            <span className="text-sm font-medium text-white">
              18+ Years of Global IT Excellence — Trusted by <span className="text-yellow-300 font-bold">200+ Clients</span> Worldwide
            </span>
            <span className="hidden sm:inline text-primary/60">|</span>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-green-300 hover:text-green-200 transition-colors flex items-center gap-1 shrink-0">
              <Phone className="w-3.5 h-3.5" /> +92 316 0401431
            </a>
            <span className="hidden sm:inline text-primary/60">|</span>
            <a href={`mailto:${EMAIL}`} className="text-sm text-blue-200 hover:text-white transition-colors shrink-0">
              {EMAIL}
            </a>
          </div>
        </div>

        {/* Navbar */}
        <nav className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent py-5"}`}>
          <div className="container mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("home")}>
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-blue-700 flex items-center justify-center" style={{ boxShadow: "0 0 18px rgba(59,130,246,0.5)" }}>
                <span className="text-white font-bold text-base">A</span>
              </div>
              <span className="text-lg font-bold tracking-tight">
                <span className="text-white">aice</span><span className="text-primary">Solution</span><span className="text-white">Co</span>
              </span>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              {["About", "Services", "Portfolio", "Pricing", "Contact"].map((item) => (
                <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group">
                  {item}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-green-500/30 text-green-300 hover:bg-green-500/10 gap-2">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </Button>
              </a>
              <Button className="bg-primary hover:bg-primary/90 text-white gap-2" style={{ boxShadow: "0 0 18px rgba(59,130,246,0.4)" }} onClick={() => scrollTo("contact")}>
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-white/10">
                <div className="flex flex-col p-6 gap-4">
                  {["About", "Services", "Portfolio", "Pricing", "Contact"].map((item) => (
                    <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-left text-lg font-medium text-slate-300 hover:text-white py-2">{item}</button>
                  ))}
                  <div className="flex flex-col gap-3 mt-4">
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button variant="outline" className="w-full border-green-500/30 text-green-300 gap-2">
                        <MessageCircle className="w-4 h-4" /> WhatsApp
                      </Button>
                    </a>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white" onClick={() => scrollTo("contact")}>Get Started</Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Hero */}
        <section id="home" className="relative min-h-screen flex items-center pt-10 z-10">
          {/* Orbital rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute w-[700px] h-[700px] rounded-full border border-primary/10" />
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-[500px] h-[500px] rounded-full border border-primary/15" />
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute w-[320px] h-[320px] rounded-full border border-primary/20" />
            <div className="absolute w-[200px] h-[200px] rounded-full bg-primary/5 blur-2xl" />
          </div>

          <div className="container mx-auto px-6 relative">
            <motion.div initial="hidden" animate="show" variants={staggerContainer} className="max-w-5xl mx-auto text-center">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border border-primary/20 bg-primary/5 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-slate-300">18+ Years of Digital Excellence</span>
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
                Transforming Businesses Through{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-cyan-400">Smart Digital Solutions</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                We help brands grow with advanced IT services, Shopify solutions, digital marketing, automation, and creative technology.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 bg-primary hover:bg-primary/90 text-white rounded-xl gap-2" style={{ boxShadow: "0 0 30px rgba(59,130,246,0.45)" }} onClick={() => scrollTo("services")}>
                  Explore Services <ArrowRight className="w-5 h-5" />
                </Button>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full text-lg h-14 px-8 border-green-500/30 text-green-300 hover:bg-green-500/10 rounded-xl gap-2">
                    <MessageCircle className="w-5 h-5" /> WhatsApp Us
                  </Button>
                </a>
              </motion.div>

              {/* Stats strip */}
              <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {[
                  { value: "500+", label: "Projects" },
                  { value: "200+", label: "Happy Clients" },
                  { value: "18+", label: "Years Exp." },
                  { value: "24/7", label: "Support" },
                ].map((s, i) => (
                  <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm p-4 text-center">
                    <div className="text-3xl font-bold text-primary mb-1">{s.value}</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-24 relative z-10 bg-black/40">
          <div className="container mx-auto px-6">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeInUp}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                  <Award className="w-4 h-4" /> About Us
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Pioneering the Future of Digital Business</h2>
                <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                  <strong className="text-white">aiceSolutionCo</strong> is a premium worldwide digital transformation company. With over 18 years of industry experience, we blend precision engineering with creative excellence to build immersive digital experiences.
                </p>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  From Shopify stores to AI automation and global ad campaigns — we handle the complex so you can focus on growth.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {["Shopify Experts", "Meta Partners", "Google Certified", "18+ Years"].map((badge) => (
                    <span key={badge} className="px-3 py-1.5 rounded-full border border-primary/25 bg-primary/10 text-primary text-sm font-medium">{badge}</span>
                  ))}
                </div>
                <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 gap-2" onClick={() => scrollTo("services")}>
                  Our Services <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
                {[
                  { label: "Projects Delivered", value: "500+" },
                  { label: "Happy Clients", value: "200+" },
                  { label: "Years Experience", value: "18+" },
                  { label: "Expert Support", value: "24/7" },
                ].map((stat, i) => (
                  <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm p-8 flex flex-col items-center justify-center text-center group hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
                    <span className="text-4xl font-bold text-primary mb-2" style={{ textShadow: "0 0 20px rgba(59,130,246,0.5)" }}>{stat.value}</span>
                    <span className="text-sm text-slate-400 font-medium">{stat.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24 relative z-10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" /> Our Expertise
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Premium Services</h2>
              <p className="text-slate-400 text-lg">Comprehensive digital solutions designed for the modern enterprise. Every service is a commitment to measurable results.</p>
            </div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className={`group relative overflow-hidden rounded-2xl border ${service.border} bg-black/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]`}
                >
                  {/* Poster header */}
                  <div className={`h-20 w-full bg-gradient-to-br ${service.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)", backgroundSize: "20px 20px" }} />
                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-black/30 text-white/70 border border-white/10">
                        {service.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="p-6">
                    <div className={`w-11 h-11 rounded-xl ${service.iconBg} border border-white/10 flex items-center justify-center mb-4 -mt-8 relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                    <div className="mt-4 flex items-center gap-1 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Learn more</span> <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
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
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.map((reason, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex flex-col items-center text-center p-6">
                  <div className="mb-6 p-4 rounded-full bg-primary/10 border border-primary/20">
                    {reason.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{reason.title}</h3>
                  <p className="text-slate-400">{reason.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="py-24 relative z-10">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                  <Monitor className="w-4 h-4" /> Our Work
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
                <p className="text-slate-400 text-lg">A glimpse into the digital transformations we've orchestrated worldwide.</p>
              </div>
              <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 shrink-0 gap-2">
                View All <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <motion.div key={i} variants={fadeInUp} className="group relative overflow-hidden rounded-2xl border border-white/5 bg-black/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]">
                  <div className={`h-52 w-full bg-gradient-to-br ${project.color} relative overflow-hidden transition-transform duration-500 group-hover:scale-105`}>
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "24px 24px" }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-black text-white/20 tracking-widest uppercase">{project.name.split(" ")[0]}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary mb-4">
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
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((t, i) => (
                <motion.div key={i} variants={fadeInUp} className="rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm p-8 relative hover:border-primary/20 transition-colors duration-300">
                  <div className="flex text-primary mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-lg text-slate-300 mb-8 italic leading-relaxed">"{t.text}"</p>
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

        {/* Pricing */}
        <section id="pricing" className="py-24 relative z-10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <DollarSign className="w-4 h-4" /> Investment
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Transparent Pricing</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Premium digital solutions tailored to your scale and ambition.</p>
            </div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className={`relative p-8 rounded-2xl border ${plan.recommended ? "border-primary/60 bg-primary/5" : "border-white/5 bg-white/[0.02]"} backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${plan.recommended ? "md:-translate-y-4" : ""}`}
                  style={plan.recommended ? { boxShadow: "0 0 40px rgba(59,130,246,0.2)" } : {}}
                >
                  {plan.recommended && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full tracking-wider">
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
                  <Button className={`w-full ${plan.recommended ? "bg-primary hover:bg-primary/90 text-white" : "bg-white/5 hover:bg-white/10 text-white border border-white/10"}`}
                    style={plan.recommended ? { boxShadow: "0 0 20px rgba(59,130,246,0.35)" } : {}}
                    onClick={() => scrollTo("contact")}>
                    Get Started
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 relative z-10 bg-black/60 border-t border-white/5">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[150px] pointer-events-none" />
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                    <MessageCircle className="w-4 h-4" /> Get In Touch
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Build Something Extraordinary</h2>
                  <p className="text-slate-400 text-lg mb-10">Ready to elevate your digital presence? Reach out and let's discuss how we can accelerate your growth.</p>

                  <div className="space-y-4 mb-10">
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl border border-green-500/20 bg-green-500/5 hover:bg-green-500/10 transition-colors group">
                      <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                        <MessageCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Chat on WhatsApp</p>
                        <p className="text-white font-semibold">+92 316 0401431</p>
                      </div>
                    </a>
                    <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 p-4 rounded-xl border border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10 transition-colors group">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Email us directly</p>
                        <p className="text-white font-semibold">{EMAIL}</p>
                      </div>
                    </a>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400 mb-4 uppercase tracking-widest">Connect With Us</p>
                    <div className="flex gap-3">
                      {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                        <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all">
                          <Icon className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm p-8 md:p-10">
                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Full Name</label>
                        <Input data-testid="input-name" className="bg-black/50 border-white/10 text-white placeholder:text-slate-600 focus:border-primary/50 h-12" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Email</label>
                        <Input data-testid="input-email" className="bg-black/50 border-white/10 text-white placeholder:text-slate-600 focus:border-primary/50 h-12" type="email" placeholder="john@company.com" />
                      </div>
                    </div>

                    {/* Service Dropdown */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Service Required</label>
                      <div className="relative">
                        <button
                          data-testid="select-service"
                          type="button"
                          onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
                          className="w-full h-12 px-4 rounded-md border border-white/10 bg-black/50 text-left flex items-center justify-between text-sm focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
                        >
                          <span className={selectedService ? "text-white" : "text-slate-600"}>
                            {selectedService || "Select a service..."}
                          </span>
                          <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${serviceDropdownOpen ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {serviceDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              transition={{ duration: 0.15 }}
                              className="absolute top-full left-0 right-0 mt-1 z-50 rounded-xl border border-white/10 bg-[#090f1f] backdrop-blur-xl shadow-2xl max-h-56 overflow-y-auto"
                            >
                              {SERVICE_LIST.map((s) => (
                                <button
                                  key={s}
                                  type="button"
                                  className="w-full text-left px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-primary/15 transition-colors border-b border-white/5 last:border-b-0"
                                  onClick={() => { setSelectedService(s); setServiceDropdownOpen(false); }}
                                >
                                  {s}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Subject</label>
                      <Input data-testid="input-subject" className="bg-black/50 border-white/10 text-white placeholder:text-slate-600 focus:border-primary/50 h-12" placeholder="How can we help?" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Message</label>
                      <Textarea data-testid="input-message" className="bg-black/50 border-white/10 text-white placeholder:text-slate-600 focus:border-primary/50 min-h-[130px] resize-none" placeholder="Tell us about your project..." />
                    </div>
                    <Button data-testid="button-send" type="submit" className="w-full h-13 bg-primary hover:bg-primary/90 text-white text-base font-semibold rounded-xl" style={{ boxShadow: "0 0 25px rgba(59,130,246,0.35)" }}>
                      Send Message <ArrowRight className="ml-2 w-4 h-4" />
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
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-blue-700 flex items-center justify-center" style={{ boxShadow: "0 0 16px rgba(59,130,246,0.5)" }}>
                    <span className="text-white font-bold text-base">A</span>
                  </div>
                  <span className="text-lg font-bold tracking-tight">
                    <span className="text-white">aice</span><span className="text-primary">Solution</span><span className="text-white">Co</span>
                  </span>
                </div>
                <p className="text-slate-400 max-w-sm mb-5 text-sm leading-relaxed">
                  Premium worldwide digital transformation company. 18+ years of excellence in IT, marketing, and creative technology.
                </p>
                <div className="flex flex-col gap-2 text-sm">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
                    <Phone className="w-4 h-4" /> +92 316 0401431
                  </a>
                  <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                    <Mail className="w-4 h-4" /> {EMAIL}
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-white font-bold mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {["About", "Services", "Portfolio", "Pricing", "Contact"].map((item) => (
                    <li key={item}>
                      <button onClick={() => scrollTo(item.toLowerCase())} className="text-slate-400 hover:text-white transition-colors text-sm">
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-6">Top Services</h4>
                <ul className="space-y-3">
                  {["Shopify Development", "Website Development", "Google Ads", "SEO Optimization", "AI Automation"].map((s) => (
                    <li key={s}>
                      <button onClick={() => scrollTo("services")} className="text-slate-400 hover:text-white transition-colors text-sm">{s}</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} aiceSolutionCo. All rights reserved.</p>
              <div className="flex gap-3">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary/50 transition-all">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>

        {/* Floating WhatsApp button */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="button-whatsapp-float"
          className="fixed bottom-8 left-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full text-white text-sm font-semibold transition-all hover:scale-105 active:scale-95"
          style={{ background: "linear-gradient(135deg, #25d366, #128c7e)", boxShadow: "0 0 20px rgba(37,211,102,0.5)" }}
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>

        {/* Back to top */}
        <AnimatePresence>
          {scrolled && (
            <motion.button
              data-testid="button-back-to-top"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="fixed bottom-8 right-6 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center z-50 hover:bg-primary/90 transition-colors"
              style={{ boxShadow: "0 0 20px rgba(59,130,246,0.5)" }}
            >
              <ChevronUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
