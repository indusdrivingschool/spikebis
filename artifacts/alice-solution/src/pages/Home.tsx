import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronUp, Menu, X, ArrowRight, Code, ShoppingCart, Megaphone, Video,
  PenTool, Search, Share2, TrendingUp, Bot, Briefcase, Monitor, Wrench,
  Clock, Globe, Award, Zap, CheckCircle, Star, MessageCircle, Mail,
  Facebook, Instagram, Linkedin, Twitter, Palette, BarChart, Layout,
  Store, DollarSign, Phone, ChevronDown, Sparkles, Shield, Rocket,
  Users, BarChart2, Target, Layers, HeadphonesIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
};
const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const WHATSAPP_NUMBER = "923160401431";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const EMAIL = "info@aicesolutionco.com";

const COUNTRY_CODES = [
  { code: "+92", flag: "🇵🇰", name: "Pakistan" },
  { code: "+1", flag: "🇺🇸", name: "USA" },
  { code: "+44", flag: "🇬🇧", name: "UK" },
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+966", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+49", flag: "🇩🇪", name: "Germany" },
  { code: "+33", flag: "🇫🇷", name: "France" },
  { code: "+86", flag: "🇨🇳", name: "China" },
];

const SERVICE_LIST = [
  "Shopify Store Development", "Shopify Store Management", "Facebook & Instagram Ads",
  "TikTok Ads", "Google Ads", "Website Development", "Ecommerce Solutions",
  "Graphic Design", "Video Editing", "Branding", "SEO Optimization",
  "Social Media Marketing", "Digital Marketing", "UI/UX Design", "AI Automation",
  "Freelancing Services", "Fiverr Business Solutions", "Website Maintenance",
  "Business Growth Strategy",
];

// Ticker items
const TICKER_ITEMS = [
  { icon: <ShoppingCart className="w-4 h-4" />, label: "Shopify Development" },
  { icon: <Megaphone className="w-4 h-4" />, label: "Facebook Ads" },
  { icon: <Globe className="w-4 h-4" />, label: "Worldwide Services" },
  { icon: <Search className="w-4 h-4" />, label: "Google Ads" },
  { icon: <Code className="w-4 h-4" />, label: "Website Development" },
  { icon: <Briefcase className="w-4 h-4" />, label: "Ecommerce Solutions" },
  { icon: <Video className="w-4 h-4" />, label: "TikTok Ads" },
  { icon: <Bot className="w-4 h-4" />, label: "AI Automation" },
  { icon: <TrendingUp className="w-4 h-4" />, label: "SEO Optimization" },
  { icon: <BarChart className="w-4 h-4" />, label: "Digital Marketing" },
  { icon: <Palette className="w-4 h-4" />, label: "Graphic Design" },
  { icon: <Layout className="w-4 h-4" />, label: "UI/UX Design" },
  { icon: <Target className="w-4 h-4" />, label: "Business Growth" },
  { icon: <Shield className="w-4 h-4" />, label: "Website Maintenance" },
];

const services = [
  { icon: <ShoppingCart className="w-7 h-7" />, title: "Shopify Store Development", desc: "Premium e-commerce stores built for conversion and rapid scaling.", color: "from-[#96bf48]/20 to-[#5e8e3e]/10", accent: "#96bf48", tag: "E-Commerce", tagColor: "bg-[#96bf48]/15 text-[#96bf48] border-[#96bf48]/30" },
  { icon: <Store className="w-7 h-7" />, title: "Shopify Store Management", desc: "End-to-end management ensuring maximum uptime and peak sales performance.", color: "from-emerald-500/20 to-emerald-900/10", accent: "#10b981", tag: "E-Commerce", tagColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30" },
  { icon: <Megaphone className="w-7 h-7" />, title: "Facebook & Instagram Ads", desc: "Data-driven Meta campaigns engineered to maximize your return on ad spend.", color: "from-blue-600/20 to-indigo-900/10", accent: "#1877f2", tag: "Paid Ads", tagColor: "bg-blue-500/15 text-blue-400 border-blue-500/30" },
  { icon: <Video className="w-7 h-7" />, title: "TikTok Ads", desc: "Viral short-form marketing strategies for the next-generation audience.", color: "from-pink-600/20 to-rose-900/10", accent: "#ff2d55", tag: "Paid Ads", tagColor: "bg-pink-500/15 text-pink-400 border-pink-500/30" },
  { icon: <Search className="w-7 h-7" />, title: "Google Ads", desc: "High-intent search & display campaigns that capture ready buyers.", color: "from-yellow-500/20 to-orange-900/10", accent: "#fbbc04", tag: "Paid Ads", tagColor: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30" },
  { icon: <Code className="w-7 h-7" />, title: "Website Development", desc: "Custom, high-performance web applications engineered for scale and speed.", color: "from-cyan-500/20 to-blue-900/10", accent: "#06b6d4", tag: "Development", tagColor: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30" },
  { icon: <Briefcase className="w-7 h-7" />, title: "Ecommerce Solutions", desc: "Comprehensive platforms to digitize and accelerate your retail growth globally.", color: "from-violet-500/20 to-purple-900/10", accent: "#8b5cf6", tag: "E-Commerce", tagColor: "bg-violet-500/15 text-violet-400 border-violet-500/30" },
  { icon: <Palette className="w-7 h-7" />, title: "Graphic Design", desc: "Stunning visual assets that communicate your brand's power and authority.", color: "from-fuchsia-500/20 to-pink-900/10", accent: "#d946ef", tag: "Creative", tagColor: "bg-fuchsia-500/15 text-fuchsia-400 border-fuchsia-500/30" },
  { icon: <Monitor className="w-7 h-7" />, title: "Video Editing", desc: "Professional post-production turning raw footage into compelling masterpieces.", color: "from-red-500/20 to-rose-900/10", accent: "#ef4444", tag: "Creative", tagColor: "bg-red-500/15 text-red-400 border-red-500/30" },
  { icon: <Award className="w-7 h-7" />, title: "Branding", desc: "Memorable premium brand identities crafted to stand the test of time.", color: "from-amber-500/20 to-yellow-900/10", accent: "#f59e0b", tag: "Creative", tagColor: "bg-amber-500/15 text-amber-400 border-amber-500/30" },
  { icon: <TrendingUp className="w-7 h-7" />, title: "SEO Optimization", desc: "Dominate search rankings and drive compounding organic traffic to your site.", color: "from-lime-500/20 to-green-900/10", accent: "#84cc16", tag: "Marketing", tagColor: "bg-lime-500/15 text-lime-400 border-lime-500/30" },
  { icon: <Share2 className="w-7 h-7" />, title: "Social Media Marketing", desc: "Engaging content strategies that build loyal communities and brand advocacy.", color: "from-sky-500/20 to-blue-900/10", accent: "#38bdf8", tag: "Marketing", tagColor: "bg-sky-500/15 text-sky-400 border-sky-500/30" },
  { icon: <BarChart className="w-7 h-7" />, title: "Digital Marketing", desc: "Holistic multi-channel campaigns that systematically accelerate brand growth.", color: "from-blue-500/20 to-indigo-900/10", accent: "#3b82f6", tag: "Marketing", tagColor: "bg-blue-500/15 text-blue-400 border-blue-500/30" },
  { icon: <Layout className="w-7 h-7" />, title: "UI/UX Design", desc: "Intuitive, breathtaking interfaces that users love to navigate and return to.", color: "from-purple-500/20 to-violet-900/10", accent: "#a855f7", tag: "Design", tagColor: "bg-purple-500/15 text-purple-400 border-purple-500/30" },
  { icon: <Bot className="w-7 h-7" />, title: "AI Automation", desc: "Streamline repetitive workflows and cut overhead with cutting-edge AI systems.", color: "from-teal-500/20 to-cyan-900/10", accent: "#14b8a6", tag: "Technology", tagColor: "bg-teal-500/15 text-teal-400 border-teal-500/30" },
  { icon: <PenTool className="w-7 h-7" />, title: "Freelancing Services", desc: "On-demand elite talent seamlessly integrated into your most critical projects.", color: "from-orange-500/20 to-red-900/10", accent: "#f97316", tag: "Services", tagColor: "bg-orange-500/15 text-orange-400 border-orange-500/30" },
  { icon: <DollarSign className="w-7 h-7" />, title: "Fiverr Business Solutions", desc: "Curated outsourced workflows expertly managed by our elite coordinators.", color: "from-green-600/20 to-teal-900/10", accent: "#1dbf73", tag: "Services", tagColor: "bg-green-500/15 text-green-400 border-green-500/30" },
  { icon: <Wrench className="w-7 h-7" />, title: "Website Maintenance", desc: "Proactive security patches, updates, and performance optimization around the clock.", color: "from-slate-500/20 to-gray-900/10", accent: "#94a3b8", tag: "Development", tagColor: "bg-slate-500/15 text-slate-300 border-slate-500/30" },
  { icon: <Globe className="w-7 h-7" />, title: "Business Growth Strategy", desc: "Strategic blueprinting and execution to scale your operations on a global stage.", color: "from-indigo-500/20 to-blue-900/10", accent: "#6366f1", tag: "Strategy", tagColor: "bg-indigo-500/15 text-indigo-400 border-indigo-500/30" },
];

const reasons = [
  { icon: <Rocket className="w-8 h-8" />, title: "Fast Delivery", desc: "Agile workflows that hit deadlines every time — no excuses.", stat: "2x Faster" },
  { icon: <Users className="w-8 h-8" />, title: "Expert Team", desc: "18+ years of combined industry expertise across every digital discipline.", stat: "50+ Experts" },
  { icon: <HeadphonesIcon className="w-8 h-8" />, title: "24/7 Support", desc: "Round-the-clock monitoring and live assistance, always available.", stat: "24/7 Live" },
  { icon: <Globe className="w-8 h-8" />, title: "Worldwide Reach", desc: "Clients across 30+ countries, with localized strategy for every market.", stat: "30+ Countries" },
  { icon: <Shield className="w-8 h-8" />, title: "Quality Guaranteed", desc: "Every deliverable meets premium standards — or we redo it, free.", stat: "100% Quality" },
  { icon: <BarChart2 className="w-8 h-8" />, title: "Proven Results", desc: "Measurable ROI-focused campaigns backed by real data and transparency.", stat: "500+ Wins" },
];

const projects = [
  { name: "NovaTech AI", category: "Web Development", desc: "Enterprise AI analytics dashboard handling 1M+ data points daily.", color: "from-blue-600 via-indigo-700 to-slate-900", result: "+340% Performance" },
  { name: "Luxe Wear", category: "Shopify Store", desc: "Premium fashion Shopify store serving 50+ countries worldwide.", color: "from-emerald-600 via-teal-700 to-slate-900", result: "+220% Conversions" },
  { name: "FinFlow", category: "UI/UX Design", desc: "Modern banking app with 98% user satisfaction score.", color: "from-violet-600 via-purple-700 to-slate-900", result: "+180% Engagement" },
  { name: "Aura Skincare", category: "Digital Marketing", desc: "Facebook & TikTok ad campaigns reaching 5M+ targeted users.", color: "from-pink-600 via-rose-700 to-slate-900", result: "+300% ROAS" },
  { name: "Vertex Solutions", category: "Branding", desc: "Complete brand overhaul that elevated market positioning globally.", color: "from-amber-600 via-orange-700 to-slate-900", result: "5x Brand Value" },
  { name: "Omni Store", category: "Ecommerce", desc: "High-volume B2B marketplace platform processing $2M+/month.", color: "from-cyan-600 via-blue-700 to-slate-900", result: "$2M+ Revenue" },
];

const testimonials = [
  { name: "Sarah Jenkins", company: "TechNova Inc", country: "USA", text: "aiceSolutionCo transformed our digital presence completely. The new website is an absolute masterpiece — and revenue is up 40%.", initials: "SJ", color: "from-blue-600 to-indigo-600" },
  { name: "Michael Chen", company: "Luxe Retail", country: "UK", text: "Their Shopify expertise doubled our conversion rate in just two months. The ROI has been exceptional. Highly recommended.", initials: "MC", color: "from-emerald-600 to-teal-600" },
  { name: "Elena Rostova", company: "FinEdge", country: "UAE", text: "World-class UI/UX design. Our users engagement is up 180%. They delivered beyond every expectation we had.", initials: "ER", color: "from-violet-600 to-purple-600" },
  { name: "David Miller", company: "Growth Inc", country: "Australia", text: "Precise, effective ad campaigns with real measurable results. True professionals who deliver on every single promise.", initials: "DM", color: "from-amber-600 to-orange-600" },
];

const pricing = [
  { name: "Starter", price: "$199", period: "/mo", desc: "Perfect for small businesses getting started online.", features: ["Basic Website Maintenance", "Standard SEO Optimization", "Email Support (24h response)", "Monthly Analytics Report", "1 Landing Page Design"], recommended: false },
  { name: "Professional", price: "$499", period: "/mo", desc: "For growing brands ready to scale aggressively.", features: ["Advanced Web Development", "Full Digital Marketing Suite", "Priority 24/7 Support", "Weekly Strategy Calls", "UI/UX Design & Revisions", "Social Media Management"], recommended: true },
  { name: "Enterprise", price: "Custom", period: "", desc: "Tailored solutions for global enterprises.", features: ["Full-Scale AI Automation", "Global Ad Campaigns (Google, Meta, TikTok)", "Dedicated Account Manager", "Custom Ecommerce Platform", "On-site Consulting Available", "White-label Solutions"], recommended: false },
];

// Ticker component
function ServicesTicker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="relative overflow-hidden py-4 bg-gradient-to-r from-background via-primary/5 to-background border-y border-primary/10">
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="flex gap-0 whitespace-nowrap"
      >
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 px-6 text-slate-400 text-sm font-medium shrink-0">
            <span className="text-primary">{item.icon}</span>
            <span>{item.label}</span>
            <span className="ml-4 text-primary/30 text-lg">·</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [countryCode, setCountryCode] = useState(COUNTRY_CODES[0]);
  const [countryOpen, setCountryOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Loading screen */}
      <AnimatePresence>
        {loading && (
          <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
            <div className="flex flex-col items-center gap-5">
              <div className="relative w-16 h-16">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-primary/50" />
                <div className="absolute inset-2 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-black text-xl">A</span>
                </div>
              </div>
              <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.6, repeat: Infinity }}
                className="flex items-center gap-0.5 text-xl font-bold tracking-tight">
                <span className="text-white">aice</span>
                <span className="text-primary">Solution</span>
                <span className="text-white">Co</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden font-sans">
        {/* Global bg */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(rgba(59,130,246,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.3) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
          <motion.div animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.35, 0.2] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] left-[15%] w-[550px] h-[550px] bg-primary/20 rounded-full blur-[140px]" />
          <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.22, 0.1] }} transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[110px]" />
        </div>

        {/* ── PRO ANNOUNCEMENT BANNER ── */}
        <div className="relative z-50 overflow-hidden" style={{ background: "linear-gradient(90deg,#0f1f5c,#1a56db,#2563eb,#1a56db,#0f1f5c)" }}>
          {/* Shimmer overlay */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.07) 50%,transparent 100%)", width: "200%" }}
            animate={{ x: ["-100%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <div className="flex items-center justify-between px-4 py-2 gap-4">
            {/* Left badge */}
            <div className="hidden sm:flex items-center gap-2 shrink-0">
              <span className="flex items-center gap-1.5 bg-white/15 border border-white/20 text-white text-[11px] font-bold px-3 py-1 rounded-full tracking-wide uppercase">
                <Sparkles className="w-3 h-3 text-yellow-300" /> Global Agency
              </span>
            </div>

            {/* Scrolling marquee */}
            <div className="flex-1 overflow-hidden">
              <motion.div
                className="flex items-center gap-8 whitespace-nowrap w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              >
                {[
                  { icon: <Globe className="w-3.5 h-3.5" />, text: "Serving Clients in 30+ Countries" },
                  { icon: <Zap className="w-3.5 h-3.5 text-yellow-300" />, text: "Shopify Development" },
                  { icon: <Megaphone className="w-3.5 h-3.5" />, text: "Facebook & Instagram Ads" },
                  { icon: <Search className="w-3.5 h-3.5" />, text: "Google Ads Management" },
                  { icon: <Code className="w-3.5 h-3.5" />, text: "Website Development" },
                  { icon: <Bot className="w-3.5 h-3.5 text-cyan-300" />, text: "AI Automation" },
                  { icon: <TrendingUp className="w-3.5 h-3.5" />, text: "SEO & Digital Marketing" },
                  { icon: <Palette className="w-3.5 h-3.5 text-pink-300" />, text: "Branding & Graphic Design" },
                  { icon: <Star className="w-3.5 h-3.5 text-yellow-300" />, text: "18+ Years of Excellence" },
                  { icon: <Shield className="w-3.5 h-3.5 text-green-300" />, text: "100% Satisfaction Guaranteed" },
                  // duplicate for seamless loop
                  { icon: <Globe className="w-3.5 h-3.5" />, text: "Serving Clients in 30+ Countries" },
                  { icon: <Zap className="w-3.5 h-3.5 text-yellow-300" />, text: "Shopify Development" },
                  { icon: <Megaphone className="w-3.5 h-3.5" />, text: "Facebook & Instagram Ads" },
                  { icon: <Search className="w-3.5 h-3.5" />, text: "Google Ads Management" },
                  { icon: <Code className="w-3.5 h-3.5" />, text: "Website Development" },
                  { icon: <Bot className="w-3.5 h-3.5 text-cyan-300" />, text: "AI Automation" },
                  { icon: <TrendingUp className="w-3.5 h-3.5" />, text: "SEO & Digital Marketing" },
                  { icon: <Palette className="w-3.5 h-3.5 text-pink-300" />, text: "Branding & Graphic Design" },
                  { icon: <Star className="w-3.5 h-3.5 text-yellow-300" />, text: "18+ Years of Excellence" },
                  { icon: <Shield className="w-3.5 h-3.5 text-green-300" />, text: "100% Satisfaction Guaranteed" },
                ].map((item, i) => (
                  <span key={i} className="flex items-center gap-2 text-white/90 text-xs font-medium">
                    {item.icon}
                    {item.text}
                    <span className="text-white/30 ml-4">◆</span>
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right CTA */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 bg-white text-[#1a56db] text-[11px] font-black px-4 py-1.5 rounded-full hover:bg-blue-50 transition-colors shrink-0 tracking-wide uppercase"
            >
              <Rocket className="w-3 h-3" /> Get Free Quote
            </a>
          </div>
        </div>

        {/* ── TOP BAR ── */}
        <div className="relative z-50 bg-[#030712] border-b border-white/[0.06] py-2 px-4">
          <div className="container mx-auto flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-5 text-xs text-slate-400">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-primary" /> {EMAIL}
              </a>
              <span className="hidden sm:block w-px h-4 bg-white/10" />
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-green-400" /> +92 316 0401431
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-xs text-yellow-400 font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>18+ Years of Excellence</span>
              </div>
              <span className="hidden sm:flex items-center gap-1 text-xs text-slate-400">
                <Globe className="w-3.5 h-3.5 text-primary" /> Worldwide Services
              </span>
            </div>
          </div>
        </div>

        {/* ── NAVBAR ── */}
        <nav className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-[#050a14]/95 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : "bg-[#050a14]/80 backdrop-blur-xl"} py-4`}>
          <div className="container mx-auto px-6 flex items-center gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2.5 cursor-pointer shrink-0 mr-auto lg:mr-0" onClick={() => scrollTo("home")}>
              <div className="relative w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg,#1a56db,#3b82f6)", boxShadow: "0 0 20px rgba(59,130,246,0.5)" }}>
                <span className="text-white font-black text-lg leading-none">A</span>
                <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background" />
              </div>
              <div className="leading-none">
                <div className="text-[17px] font-black tracking-tight">
                  <span className="text-white">aice</span><span className="text-primary">Solution</span><span className="text-white">Co</span>
                </div>
                <div className="text-[9px] text-slate-500 tracking-[0.15em] uppercase font-medium mt-0.5">Digital Agency</div>
              </div>
            </div>

            {/* Center nav */}
            <div className="hidden lg:flex items-center gap-1 mx-auto">
              {[
                { label: "About", id: "about" },
                { label: "Services", id: "services" },
                { label: "Portfolio", id: "portfolio" },
                { label: "Pricing", id: "pricing" },
                { label: "Contact", id: "contact" },
              ].map((item) => (
                <button key={item.id} onClick={() => scrollTo(item.id)}
                  className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-full hover:bg-white/5 transition-all duration-200">
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right CTAs */}
            <div className="hidden lg:flex items-center gap-3 ml-auto lg:ml-0">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="rounded-full border-green-500/30 text-green-300 hover:bg-green-500/10 gap-2 h-9">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </Button>
              </a>
              <Button size="sm" className="rounded-full bg-primary hover:bg-primary/90 text-white gap-2 h-9 px-5 font-semibold"
                style={{ boxShadow: "0 0 20px rgba(59,130,246,0.4)" }}
                onClick={() => scrollTo("contact")}>
                Get a Free Quote <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>

            {/* Mobile toggle */}
            <button className="lg:hidden text-white p-1.5 rounded-full bg-white/5 border border-white/10" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                className="lg:hidden bg-[#050a14]/98 backdrop-blur-2xl border-t border-white/5">
                <div className="flex flex-col p-5 gap-1">
                  {["About", "Services", "Portfolio", "Pricing", "Contact"].map((item) => (
                    <button key={item} onClick={() => scrollTo(item.toLowerCase())}
                      className="text-left px-4 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                      {item}
                    </button>
                  ))}
                  <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-white/5">
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button variant="outline" className="w-full rounded-full border-green-500/30 text-green-300 gap-2">
                        <MessageCircle className="w-4 h-4" /> WhatsApp
                      </Button>
                    </a>
                    <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-white font-semibold" onClick={() => scrollTo("contact")}>
                      Get a Free Quote
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* ── HERO ── */}
        <section id="home" className="relative min-h-[92vh] flex flex-col items-center justify-center pt-6 z-10">
          {/* Orbital rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute w-[800px] h-[800px] rounded-full border border-primary/8" />
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute w-[560px] h-[560px] rounded-full border border-primary/12" />
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              className="absolute w-[340px] h-[340px] rounded-full border border-primary/18" />
            <div className="absolute w-[160px] h-[160px] rounded-full bg-primary/8 blur-xl" />
          </div>

          <div className="container mx-auto px-6 relative text-center">
            <motion.div initial="hidden" animate="show" variants={staggerContainer} className="max-w-5xl mx-auto">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm text-sm font-medium text-slate-300 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Trusted by 200+ Clients Worldwide
                <span className="w-px h-4 bg-white/15" />
                <span className="text-primary font-semibold">18+ Years Experience</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-[84px] font-black text-white mb-7 leading-[1.02] tracking-tight">
                Transforming Businesses<br className="hidden md:block" /> Through{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-cyan-400">
                    Smart Digital
                  </span>
                  <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-blue-400 via-primary to-cyan-400" />
                </span>{" "}Solutions
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                We help brands grow with advanced IT services, Shopify solutions, digital marketing, AI automation, and creative technology — <span className="text-white font-medium">delivered worldwide.</span>
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
                <Button size="lg" className="w-full sm:w-auto text-base h-13 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-bold gap-2"
                  style={{ boxShadow: "0 0 32px rgba(59,130,246,0.45)", height: "52px" }}
                  onClick={() => scrollTo("services")}>
                  Explore Services <ArrowRight className="w-5 h-5" />
                </Button>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full text-base rounded-full border-green-500/40 text-green-300 hover:bg-green-500/10 font-semibold gap-2" style={{ height: "52px" }}>
                    <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                  </Button>
                </a>
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base rounded-full border-white/10 text-slate-300 hover:bg-white/5 font-medium gap-2" style={{ height: "52px" }}
                  onClick={() => scrollTo("contact")}>
                  Book Consultation
                </Button>
              </motion.div>

              {/* Stats pills */}
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-3">
                {[
                  { value: "500+", label: "Projects Completed" },
                  { value: "200+", label: "Happy Clients" },
                  { value: "18+", label: "Years Experience" },
                  { value: "30+", label: "Countries Served" },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/8 bg-white/[0.03] backdrop-blur-sm">
                    <span className="text-xl font-black text-primary">{s.value}</span>
                    <span className="text-xs text-slate-400 font-medium">{s.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── SERVICES TICKER ── */}
        <ServicesTicker />

        {/* ── ABOUT ── */}
        <section id="about" className="py-24 relative z-10 bg-black/40">
          <div className="container mx-auto px-6">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeInUp}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                  <Award className="w-4 h-4" /> About aiceSolutionCo
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Pioneering the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Digital Business</span>
                </h2>
                <p className="text-slate-400 text-lg mb-5 leading-relaxed">
                  <strong className="text-white">aiceSolutionCo</strong> is a premium worldwide digital transformation agency. With 18+ years of experience, we engineer immersive, high-performance digital solutions across every channel.
                </p>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  From Shopify development to global ad campaigns and AI automation — we handle the complex technology so you can focus entirely on growth.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Shopify Experts", "Meta Business Partners", "Google Certified", "18+ Years", "Worldwide"].map((badge) => (
                    <span key={badge} className="px-3 py-1.5 rounded-full border border-primary/20 bg-primary/8 text-primary text-xs font-semibold tracking-wide">{badge}</span>
                  ))}
                </div>
                <Button className="rounded-full gap-2 bg-primary hover:bg-primary/90 text-white font-semibold"
                  style={{ boxShadow: "0 0 18px rgba(59,130,246,0.35)" }} onClick={() => scrollTo("services")}>
                  Our Services <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
                {[
                  { label: "Projects Delivered", value: "500+", icon: <Rocket className="w-5 h-5" /> },
                  { label: "Happy Clients", value: "200+", icon: <Users className="w-5 h-5" /> },
                  { label: "Years Experience", value: "18+", icon: <Award className="w-5 h-5" /> },
                  { label: "Countries Served", value: "30+", icon: <Globe className="w-5 h-5" /> },
                ].map((stat, i) => (
                  <div key={i} className="rounded-2xl border border-white/6 bg-white/[0.03] p-7 flex flex-col items-center justify-center text-center group hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 cursor-default">
                    <div className="text-primary mb-2 opacity-60 group-hover:opacity-100 transition-opacity">{stat.icon}</div>
                    <span className="text-4xl font-black text-primary mb-1.5" style={{ textShadow: "0 0 24px rgba(59,130,246,0.45)" }}>{stat.value}</span>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section id="services" className="py-24 relative z-10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-5">
                <Layers className="w-4 h-4" /> What We Offer
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-5">Premium Services</h2>
              <p className="text-slate-400 text-lg">19 specialised digital services — each backed by 18 years of expertise and a track record of measurable results.</p>
            </div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s, i) => (
                <motion.div key={i} variants={fadeInUp}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#080e1c] transition-all duration-300 hover:-translate-y-2 hover:border-white/15 cursor-pointer"
                  style={{ "--accent": s.accent } as React.CSSProperties}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px ${s.accent}22`; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>

                  {/* Card visual header banner */}
                  <div className={`relative h-24 w-full bg-gradient-to-br ${s.color} overflow-hidden`}>
                    {/* Dot grid */}
                    <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(circle at 1.5px 1.5px,rgba(255,255,255,0.2) 1.5px,transparent 0)", backgroundSize: "18px 18px" }} />
                    {/* Large watermark icon */}
                    <div className="absolute -right-3 -bottom-4 opacity-[0.12] scale-[2.8] origin-bottom-right text-white">
                      {s.icon}
                    </div>
                    {/* Tag badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`text-[10px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full border ${s.tagColor}`}>
                        {s.tag}
                      </span>
                    </div>
                    {/* Bottom fade */}
                    <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#080e1c] to-transparent" />
                  </div>

                  <div className="px-6 pb-6 pt-4">
                    {/* Icon circle overlapping header */}
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 -mt-10 relative z-10 border border-white/10 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${s.accent}22`, color: s.accent }}>
                      {s.icon}
                    </div>
                    <h3 className="text-base font-bold text-white mb-2 leading-snug">{s.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                    <div className="mt-4 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: s.accent }}>
                      Get Started <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section className="py-24 relative z-10 bg-black/40">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-5">
                <Shield className="w-4 h-4" /> Our Advantages
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-5">Why Choose Us</h2>
              <p className="text-slate-400 text-lg">The pillars that make aiceSolutionCo the agency of choice for 200+ global brands.</p>
            </div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.map((r, i) => (
                <motion.div key={i} variants={fadeInUp}
                  className="group rounded-2xl border border-white/[0.07] bg-[#080e1c] p-7 hover:border-primary/25 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary/20 transition-colors">
                      {r.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">{r.stat}</div>
                      <h3 className="text-lg font-bold text-white mb-2">{r.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── PORTFOLIO ── */}
        <section id="portfolio" className="py-24 relative z-10">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-5">
                  <Monitor className="w-4 h-4" /> Our Work
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-3">Featured Projects</h2>
                <p className="text-slate-400 text-lg">Real results from real clients across 30+ countries worldwide.</p>
              </div>
              <Button variant="outline" className="rounded-full border-white/10 text-white hover:bg-white/5 shrink-0 gap-2" onClick={() => scrollTo("contact")}>
                Start Your Project <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p, i) => (
                <motion.div key={i} variants={fadeInUp}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#080e1c] transition-all duration-500 hover:-translate-y-2 hover:border-white/15"
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 50px rgba(59,130,246,0.18)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                  <div className={`h-48 w-full bg-gradient-to-br ${p.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 2px 2px,rgba(255,255,255,0.15) 1px,transparent 0)", backgroundSize: "22px 22px" }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl font-black text-white/15 tracking-widest uppercase">{p.name.split(" ")[0]}</span>
                    </div>
                    {/* Result badge */}
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/15 text-xs font-bold text-green-300">
                      {p.result}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#080e1c] to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary mb-3 uppercase tracking-wide">
                      {p.category}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{p.name}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-24 relative z-10 bg-black/40">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-5">Client Success Stories</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Don't take our word for it — hear from the brands we've transformed worldwide.</p>
            </div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {testimonials.map((t, i) => (
                <motion.div key={i} variants={fadeInUp}
                  className="rounded-2xl border border-white/[0.07] bg-[#080e1c] p-8 hover:border-primary/20 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex">
                      {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-amber-400 fill-current" />)}
                    </div>
                    <span className="text-xs text-slate-500 font-medium">Verified Review</span>
                  </div>
                  <p className="text-slate-300 text-base mb-7 leading-relaxed italic">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-black text-sm`}>
                      {t.initials}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">{t.name}</h4>
                      <p className="text-slate-400 text-xs">{t.company} · <span className="text-primary">{t.country}</span></p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section id="pricing" className="py-24 relative z-10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-5">
                <DollarSign className="w-4 h-4" /> Pricing
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-5">Transparent Pricing</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Premium digital solutions designed to scale with your ambition.</p>
            </div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pricing.map((plan, i) => (
                <motion.div key={i} variants={fadeInUp}
                  className={`relative rounded-2xl border ${plan.recommended ? "border-primary/50 bg-primary/5" : "border-white/[0.07] bg-[#080e1c]"} p-8 transition-all duration-300 hover:-translate-y-1 ${plan.recommended ? "md:-translate-y-5" : ""}`}
                  style={plan.recommended ? { boxShadow: "0 0 50px rgba(59,130,246,0.2)" } : {}}>
                  {plan.recommended && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-full tracking-wider uppercase">Most Popular</span>
                    </div>
                  )}
                  <h3 className="text-xl font-black text-white mb-1">{plan.name}</h3>
                  <p className="text-slate-400 text-xs mb-5 leading-relaxed">{plan.desc}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-black text-white">{plan.price}</span>
                    <span className="text-slate-400 text-sm">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-7">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-slate-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full rounded-full font-semibold ${plan.recommended ? "bg-primary hover:bg-primary/90 text-white" : "bg-white/5 hover:bg-white/10 text-white border border-white/10"}`}
                    style={plan.recommended ? { boxShadow: "0 0 22px rgba(59,130,246,0.4)" } : {}}
                    onClick={() => scrollTo("contact")}>
                    Get Started
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="py-24 relative z-10 bg-black/50 border-t border-white/[0.05]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/6 rounded-full blur-[160px] pointer-events-none" />
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
                {/* Left info */}
                <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                    <MessageCircle className="w-4 h-4" /> Get In Touch
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-5 leading-tight">Let's Build Something <span className="text-primary">Extraordinary</span></h2>
                  <p className="text-slate-400 mb-8 leading-relaxed">Ready to elevate your digital presence? Our team is available 24/7.</p>

                  <div className="space-y-3 mb-8">
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-2xl border border-green-500/20 bg-green-500/5 hover:bg-green-500/10 transition-colors group">
                      <div className="w-11 h-11 rounded-xl bg-green-500/15 flex items-center justify-center text-green-400 shrink-0 group-hover:scale-110 transition-transform">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[11px] text-slate-500 uppercase tracking-wider mb-0.5">WhatsApp</p>
                        <p className="text-white font-semibold text-sm">+92 316 0401431</p>
                      </div>
                    </a>
                    <a href={`mailto:${EMAIL}`}
                      className="flex items-center gap-4 p-4 rounded-2xl border border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10 transition-colors group">
                      <div className="w-11 h-11 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-110 transition-transform">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[11px] text-slate-500 uppercase tracking-wider mb-0.5">Email</p>
                        <p className="text-white font-semibold text-sm">{EMAIL}</p>
                      </div>
                    </a>
                  </div>

                  <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-3">Follow Us</p>
                  <div className="flex gap-2">
                    {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                      <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary/40 hover:bg-primary/10 transition-all">
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </motion.div>

                {/* Right form */}
                <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                  className="lg:col-span-3 rounded-2xl border border-white/[0.07] bg-[#080e1c] p-8 md:p-10">
                  <h3 className="text-lg font-bold text-white mb-6">Send Us a Message</h3>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Full Name <span className="text-primary">*</span></label>
                        <Input data-testid="input-name" required className="bg-black/40 border-white/8 text-white placeholder:text-slate-600 focus:border-primary/40 h-11 rounded-xl" placeholder="John Doe" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email <span className="text-primary">*</span></label>
                        <Input data-testid="input-email" required type="email" className="bg-black/40 border-white/8 text-white placeholder:text-slate-600 focus:border-primary/40 h-11 rounded-xl" placeholder="john@company.com" />
                      </div>
                    </div>

                    {/* Phone with country code */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone Number <span className="text-primary">*</span></label>
                      <div className="flex gap-2">
                        <div className="relative">
                          <button type="button" onClick={() => setCountryOpen(!countryOpen)}
                            className="h-11 px-3 rounded-xl border border-white/8 bg-black/40 text-white text-sm flex items-center gap-1.5 hover:border-primary/30 transition-colors whitespace-nowrap min-w-[100px]">
                            <span>{countryCode.flag}</span>
                            <span className="font-medium">{countryCode.code}</span>
                            <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${countryOpen ? "rotate-180" : ""}`} />
                          </button>
                          <AnimatePresence>
                            {countryOpen && (
                              <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.15 }}
                                className="absolute top-full left-0 mt-1 z-50 rounded-xl border border-white/10 bg-[#0a1020] shadow-2xl w-52 max-h-52 overflow-y-auto">
                                {COUNTRY_CODES.map((c) => (
                                  <button key={c.code} type="button"
                                    className="w-full text-left px-3 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-primary/15 transition-colors flex items-center gap-2.5 border-b border-white/5 last:border-0"
                                    onClick={() => { setCountryCode(c); setCountryOpen(false); }}>
                                    <span>{c.flag}</span>
                                    <span className="font-medium">{c.code}</span>
                                    <span className="text-slate-500 text-xs ml-auto">{c.name}</span>
                                  </button>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        <Input data-testid="input-phone" required type="tel" className="flex-1 bg-black/40 border-white/8 text-white placeholder:text-slate-600 focus:border-primary/40 h-11 rounded-xl" placeholder="316 0401431" />
                      </div>
                    </div>

                    {/* Service dropdown */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Service Required <span className="text-primary">*</span></label>
                      <div className="relative">
                        <button type="button" data-testid="select-service" onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
                          className="w-full h-11 px-4 rounded-xl border border-white/8 bg-black/40 text-left flex items-center justify-between text-sm hover:border-primary/30 focus:outline-none transition-colors">
                          <span className={selectedService ? "text-white" : "text-slate-600"}>{selectedService || "Select a service..."}</span>
                          <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${serviceDropdownOpen ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {serviceDropdownOpen && (
                            <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.15 }}
                              className="absolute top-full left-0 right-0 mt-1 z-50 rounded-xl border border-white/10 bg-[#0a1020] shadow-2xl max-h-52 overflow-y-auto">
                              {SERVICE_LIST.map((s) => (
                                <button key={s} type="button"
                                  className="w-full text-left px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-primary/15 transition-colors border-b border-white/5 last:border-0"
                                  onClick={() => { setSelectedService(s); setServiceDropdownOpen(false); }}>
                                  {s}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Message</label>
                      <Textarea data-testid="input-message" className="bg-black/40 border-white/8 text-white placeholder:text-slate-600 focus:border-primary/40 min-h-[110px] resize-none rounded-xl" placeholder="Tell us about your project..." />
                    </div>

                    <Button data-testid="button-send" type="submit" className="w-full rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-base gap-2"
                      style={{ height: "50px", boxShadow: "0 0 28px rgba(59,130,246,0.38)" }}>
                      Send Message <ArrowRight className="w-4 h-4" />
                    </Button>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="py-14 bg-[#020509] border-t border-white/[0.05] relative z-10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
              <div className="md:col-span-2">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "linear-gradient(135deg,#1a56db,#3b82f6)", boxShadow: "0 0 16px rgba(59,130,246,0.45)" }}>
                    <span className="text-white font-black text-base">A</span>
                  </div>
                  <span className="text-[17px] font-black tracking-tight">
                    <span className="text-white">aice</span><span className="text-primary">Solution</span><span className="text-white">Co</span>
                  </span>
                </div>
                <p className="text-slate-500 text-sm max-w-xs mb-5 leading-relaxed">Premium worldwide digital transformation agency. 18+ years of excellence in IT, e-commerce, marketing, and AI.</p>
                <div className="flex flex-col gap-2">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm">
                    <Phone className="w-3.5 h-3.5" /> +92 316 0401431
                  </a>
                  <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
                    <Mail className="w-3.5 h-3.5" /> {EMAIL}
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Navigate</h4>
                <ul className="space-y-3">
                  {["About", "Services", "Portfolio", "Pricing", "Contact"].map((item) => (
                    <li key={item}><button onClick={() => scrollTo(item.toLowerCase())} className="text-slate-500 hover:text-white transition-colors text-sm">{item}</button></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Top Services</h4>
                <ul className="space-y-3">
                  {["Shopify Development", "Facebook & Instagram Ads", "Google Ads", "SEO Optimization", "AI Automation"].map((s) => (
                    <li key={s}><button onClick={() => scrollTo("services")} className="text-slate-500 hover:text-white transition-colors text-sm">{s}</button></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-600 text-xs">&copy; {new Date().getFullYear()} aiceSolutionCo. All rights reserved. Worldwide Digital Agency.</p>
              <div className="flex gap-2">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-8 h-8 rounded-full border border-white/8 bg-white/[0.03] flex items-center justify-center text-slate-500 hover:text-white hover:border-primary/40 transition-all">
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>

        {/* ── FLOATING WHATSAPP BUBBLE ── */}
        <motion.div
          className="fixed bottom-8 right-6 z-50"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="relative group">
            {/* Ring 1 */}
            <motion.span
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{ background: "#25d366" }}
              animate={{ scale: [1, 2.4], opacity: [0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />
            {/* Ring 2 — delayed */}
            <motion.span
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{ background: "#25d366" }}
              animate={{ scale: [1, 2.4], opacity: [0.4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.9 }}
            />

            {/* The green circle button */}
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-whatsapp-float"
              className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(145deg, #2ecc71, #25d366, #1aad50)",
                boxShadow: "0 6px 28px rgba(37,211,102,0.7), 0 2px 10px rgba(0,0,0,0.5)"
              }}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.93 }}
            >
              {/* WhatsApp SVG — official Simple Icons path, white */}
              <svg viewBox="0 0 24 24" className="w-8 h-8" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </motion.a>

            {/* Tooltip on hover */}
            <div className="absolute right-[72px] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0 pointer-events-none whitespace-nowrap z-20">
              <span className="bg-[#0d1117] text-white text-xs font-semibold px-3 py-2 rounded-lg shadow-xl border border-white/10 block">
                Chat on WhatsApp
              </span>
              <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 border-[6px] border-transparent border-l-[#0d1117]" />
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          {scrolled && (
            <motion.button data-testid="button-back-to-top"
              initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.7 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center z-50 text-white transition-all hover:scale-110"
              style={{ background: "linear-gradient(135deg,#1a56db,#3b82f6)", boxShadow: "0 0 22px rgba(59,130,246,0.55)" }}>
              <ChevronUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
