/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  ChevronRight,
  Code2,
  Rocket,
  Layout,
  Globe,
  Bug,
  Palette,
  Gamepad2,
  ExternalLink,
  ChevronDown,
  Calendar,
  Check,
  Send,
  Github,
  Linkedin,
  Clock,
  Sparkles,
  Smartphone,
  CheckCircle2,
  Tv,
  ArrowRight,
  Laptop,
  Flame,
  Award,
  BookOpen,
  Settings,
  ShieldAlert,
  Dribbble,
  FileSpreadsheet,
  FileText,
  Terminal
} from 'lucide-react';

// Define project, skill, and game types for clarity
interface Game {
  id: string;
  title: string;
  developer: string;
  category: string;
  description: string;
  mechanics: string;
  imageKey: string;
  rating: string;
  downloads: string;
}

export default function App() {
  // Mobile navigation menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Active navigation section state
  const [activeSection, setActiveSection] = useState('home');

  // Elite Fitness interactive simulator state
  const [eliteDevice, setEliteDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [eliteActiveTab, setEliteActiveTab] = useState<'HOME' | 'FEATURES' | 'CLASSES'>('HOME');

  // TrendPulse interactive state
  const [trendPulseCategory, setTrendPulseCategory] = useState<'LATEST' | 'TECHNOLOGY' | 'SCIENCE'>('LATEST');
  const [newsPipelineStatus, setNewsPipelineStatus] = useState<'IDLE' | 'SYNCING' | 'SYNCED'>('IDLE');
  const [pulseCount, setPulseCount] = useState(25800);
  const [trendSearch, setTrendSearch] = useState('');

  // Selected Game for detail modal
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  // Timeline interactive focus state
  const [focusedMilestone, setFocusedMilestone] = useState<number | null>(null);

  // Image load error fallback handlers
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Contact form submission states
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formService, setFormService] = useState('Landing Page Development');
  const [formDetails, setFormDetails] = useState('');
  const [formStatus, setFormStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS'>('IDLE');
  const [formSubmittedData, setFormSubmittedData] = useState<any>(null);

  // Scroll spy references and effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'services', 'projects', 'games', 'timeline', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleImageError = (key: string) => {
    setImageErrors((prev) => ({ ...prev, [key]: true }));
  };

  const handleTriggerSync = () => {
    setNewsPipelineStatus('SYNCING');
    setTimeout(() => {
      setNewsPipelineStatus('SYNCED');
      setPulseCount((prev) => prev + Math.floor(Math.random() * 150) + 50);
      setTimeout(() => {
        setNewsPipelineStatus('IDLE');
      }, 2000);
    }, 1200);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formEmail.trim() || !formName.trim()) return;

    setFormStatus('SENDING');
    setTimeout(() => {
      setFormStatus('SUCCESS');
      setFormSubmittedData({
        id: `REQ-${Math.floor(100000 + Math.random() * 900000)}`,
        name: formName,
        email: formEmail,
        service: formService,
        details: formDetails || 'No additional specifications provided.',
        timestamp: new Date().toLocaleString(),
      });
    }, 1500);
  };

  const resetContactForm = () => {
    setFormName('');
    setFormEmail('');
    setFormService('Landing Page Development');
    setFormDetails('');
    setFormStatus('IDLE');
    setFormSubmittedData(null);
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const gamesList: Game[] = [
    {
      id: 'mazemenia',
      title: 'MazeMenia',
      developer: 'Zentrot',
      category: 'Puzzle / Strategy',
      description: 'An immersive pathfinding and labyrinth simulation game that tests your spatial planning and speed. Solve complex procedural puzzles, avoid traps, and race against the clock to escape the mazes.',
      mechanics: 'Intelligent level generator, smooth touch navigation sliders, timed levels, and unique escape mechanisms.',
      imageKey: 'mazemenia',
      rating: '4.7/5',
      downloads: '1,000+ Downloads',
    },
    {
      id: 'sumandwin',
      title: 'Sum & Win',
      developer: 'Zentrot',
      category: 'Educational / Numbers',
      description: 'A brain-training numerical puzzle game where players solve progressive arithmetic additions within tight timelines. Perfect for improving calculation speed, mental agility, and logical reasoning.',
      mechanics: 'Variable grids (3x3 to 6x6), targeted math goals, combo achievements, and high-score leaderboards.',
      imageKey: 'sum_n_win',
      rating: '4.6/5',
      downloads: '500+ Downloads',
    },
    {
      id: 'universesaver',
      title: 'Universe Saver',
      developer: 'Zentrot',
      category: 'Arcade / Space Shooter',
      description: 'A retro-styled vertical space shooter arcade game. Steer a defensive spaceship to annihilate alien fleets, dodge incoming asteroids, collect shielding capsules, and protect the cosmic systems.',
      mechanics: 'Smooth touchscreen arcade physics, modular weapons upgrading, projectile mechanics, and infinite boss wave levels.',
      imageKey: 'universe_saver',
      rating: '4.8/5',
      downloads: '2,500+ Downloads',
    },
    {
      id: 'decaystreet',
      title: 'Decay Street',
      developer: 'Zentrot',
      category: 'Action / Zombie Survival',
      description: 'A top-down survival game situated in post-apocalyptic streets overrun with decaying forces. Loot resources, reinforce strategic barriers, and survive against escalating waves.',
      mechanics: 'Looting system, defensive construction elements, dynamic lighting, and variable difficulty mechanics.',
      imageKey: 'decay_street',
      rating: '4.5/5',
      downloads: '5,000+ Downloads',
    },
  ];

  return (
    <div id="app-root" className="min-h-screen bg-slate-50 text-slate-800 antialiased flex flex-col relative">
      
      {/* HEADER / NAVIGATION */}
      <header id="header" className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-shadow duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection('home')}>
            <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-sm shadow-orange-500/30 group-hover:bg-orange-600 transition-colors">
              S
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">Saquib</span>
              <div className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">Portfolio</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'services', label: 'Services' },
              { id: 'projects', label: 'Projects' },
              { id: 'games', label: 'Games' },
              { id: 'timeline', label: 'Timeline' },
              { id: 'contact', label: 'Contact' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`px-4 py-2 rounded-none font-medium text-sm transition-all duration-200 ${
                  activeSection === tab.id
                    ? 'text-orange-600 bg-orange-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Extra action - Open to Work status */}
          <div className="hidden lg:flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/50">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-soft" />
              Open to Work
            </span>
          </div>

          {/* Mobile navigation button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-none text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            id="mobile-menu-btn"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 absolute w-full left-0 px-4 py-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col gap-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'services', label: 'Services' },
                { id: 'projects', label: 'Projects' },
                { id: 'games', label: 'Games' },
                { id: 'timeline', label: 'Timeline' },
                { id: 'contact', label: 'Contact' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`w-full text-left px-4 py-3 rounded-none text-base font-medium transition-all ${
                    activeSection === tab.id
                      ? 'text-orange-600 bg-orange-50 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
              <div className="border-t border-slate-100 mt-4 pt-4 flex justify-between items-center px-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-soft" />
                  Open to Work
                </span>
                <span className="text-xs text-slate-400">Prayagraj, India</span>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="home" className="relative bg-white pt-10 pb-20 md:py-24 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start gap-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full border border-slate-200">
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-xs font-bold text-slate-700 tracking-wide uppercase font-mono">Frontend Web Developer</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-none">
                  Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-600">Mohd Saquib</span>
                </h1>
                <p className="text-xl sm:text-2xl font-semibold text-slate-700">
                  Frontend Developer passionate about creating modern websites and web applications.
                </p>
                <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl">
                  I build responsive websites, web apps, and user-friendly digital experiences using modern web technologies. Currently improving my frontend expertise and working toward full-stack development.
                </p>
              </div>

              {/* Badges/Tags strip */}
              <div className="flex flex-wrap gap-2.5 mt-2">
                <span className="text-xs px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-slate-600 font-medium">✨ Full Responsive</span>
                <span className="text-xs px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-slate-600 font-medium">⚡ Fast Deployment</span>
                <span className="text-xs px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-slate-600 font-medium">🐛 Bug Fix Expert</span>
                <span className="text-xs px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-slate-600 font-medium">🎮 App Publisher</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-none shadow-lg shadow-orange-500/25 hover:shadow-orange-600/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer group"
                >
                  View Projects
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-none hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Contact Me
                </button>
              </div>
            </div>

            {/* Right Photo Area */}
            <div className="lg:col-span-5 relative flex items-center justify-center pt-8 lg:pt-0">
              
              {/* Outer decorative items */}
              <div className="absolute -z-10 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-orange-50 to-rose-50 blur-2xl opacity-80" />

              {/* Profile Image Frame */}
              <div id="profile-container" className="relative p-3 bg-white border border-slate-100 rounded-3xl shadow-xl max-w-sm w-full mx-auto sm:mx-0 group overflow-hidden">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                  
                  {/* Real Image Loader */}
                  {!imageErrors['profile'] ? (
                    <img
                      src="/assets/saquib_original.jpeg"
                      alt="Mohd Saquib - Profile"
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      onError={() => handleImageError('profile')}
                    />
                  ) : (
                    // Fallback Developer Render (extremely beautiful dynamic portrait fallback)
                    <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col justify-between p-6 text-white relative">
                      <div className="absolute top-2 right-2 bg-orange-500/20 text-orange-400 border border-orange-500/30 text-[10px] uppercase tracking-wider font-mono px-2 py-0.5 rounded">
                        Active Dev
                      </div>
                      
                      {/* Stylized code elements inside background fallback */}
                      <div className="opacity-15 font-mono text-[9px] leading-tight space-y-1">
                        <div>const developer = {'{'}</div>
                        <div className="pl-4">name: "Mohd Saquib",</div>
                        <div className="pl-4">role: "Frontend Engineer",</div>
                        <div className="pl-4">focus: ["UI Style", "Responsive"],</div>
                        <div className="pl-4">projectsCount: "10+ Live"</div>
                        <div>{'}'}</div>
                      </div>

                      {/* Developer Avatar Silhouette */}
                      <div className="flex-grow flex items-center justify-center flex-col py-6">
                        <div className="w-24 h-24 rounded-full bg-slate-700 border-2 border-orange-500 flex items-center justify-center text-3xl font-extrabold text-orange-500 shadow-md">
                          MS
                        </div>
                        <div className="mt-3 text-slate-300 text-sm font-semibold tracking-wide">Mohd Saquib</div>
                        <div className="text-[11px] text-slate-400 font-mono">@Saquib630</div>
                      </div>

                      <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/60 flex items-center gap-2.5">
                        <Terminal size={14} className="text-orange-500" />
                        <span className="text-[10px] text-slate-300 font-mono">const status = 'OpenToWork';</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Sub-label under photo frame */}
                <div className="mt-4 flex items-center justify-between px-2 pb-1">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Mohd Saquib</h3>
                    <p className="text-xs text-slate-400">Prayagraj, India</p>
                  </div>
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                    <span className="w-2 h-2 rounded-full bg-slate-200" />
                    <span className="w-2 h-2 rounded-full bg-slate-200" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section id="about" className="py-20 md:py-28 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-bold tracking-widest text-orange-600 font-mono uppercase bg-orange-50 px-3 py-1 rounded-full border border-orange-100 inline-block">Introduction</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">About Me</h2>
            <div className="w-12 h-1 bg-orange-500 mx-auto rounded" />
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100 relative overflow-hidden">
            <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-48 h-48 bg-orange-50 rounded-full -z-0 opacity-40 blur-lg" />
            
            <div className="relative z-10 space-y-6 text-slate-600 leading-relaxed text-lg">
              
              <p className="font-semibold text-slate-800">
                Hi, I'm Saquib. My journey with technology kicked off early, sparked by a genuine curiosity about how the web functions.
              </p>

              <p>
                My interest in technology started back when I was in <span className="font-bold text-slate-900 underline decoration-orange-300 decoration-3">Class 6</span>. HTML and CSS were the very first tools that introduced me to the creative universe of programming. Being able to code something and see it render immediately in the browser felt like magic.
              </p>

              <blockquote className="border-l-4 border-orange-500 pl-4 py-1.5 my-4 bg-orange-50/50 rounded-r-lg text-slate-700 italic font-mono text-base block">
                "I believe the best way to learn is by building real projects and solving practical, real-world problems."
              </blockquote>

              <p>
                As I grew older, this simple curiosity expanded into other interconnected technical domains: web hosting, deployment, domains, customized web applications, and software creation.
              </p>

              <p>
                Today, I focus on mastering modern frontend architectures (building with React, TypeScript, and Tailwind) while progressing toward becoming a highly competent Full Stack Developer. I enjoy designing clean user screens, implementing secure responsive structures, deploying assets with custom domains, and debugging problematic codebases.
              </p>

              <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-100 text-sm">
                <div>
                  <span className="text-slate-400 block font-mono text-xs uppercase">Location</span>
                  <span className="font-bold text-slate-800">Prayagraj, India</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-mono text-xs uppercase">Preferred Tech</span>
                  <span className="font-bold text-slate-800">React, Tailwind, JS</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-mono text-xs uppercase">Interests</span>
                  <span className="font-bold text-slate-800">Android, Web Apps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-20 md:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-bold tracking-widest text-orange-600 font-mono uppercase bg-orange-50 px-3 py-1 rounded-full border border-orange-100 inline-block">Expertise</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Skills &amp; Capabilities</h2>
            <div className="w-12 h-1 bg-orange-500 mx-auto rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Frontend Category */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-orange-200 hover:bg-white hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
                <Code2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Frontend</h3>
              
              <div className="space-y-5">
                {[
                  { name: 'HTML5', value: 95, context: 'Semantics, SEO, markup' },
                  { name: 'CSS3', value: 92, context: 'Tailwind, Grid, animations' },
                  { name: 'JavaScript', value: 88, context: 'DOM, ES6+, async tasks' }
                ].map((skill, index) => (
                  <div key={index} className="space-y-1.5">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-slate-700">{skill.name}</span>
                      <span className="text-xs text-orange-600 font-bold font-mono">{skill.value}%</span>
                    </div>
                    {/* Meter bar */}
                    <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500 rounded-full transition-all duration-1000" style={{ width: `${skill.value}%` }} />
                    </div>
                    <span className="text-[10px] text-slate-400 block font-mono">{skill.context}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Category */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-orange-200 hover:bg-white hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 mb-6 group-hover:scale-110 transition-transform">
                <Settings size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Developer Tools</h3>
              
              <div className="space-y-5">
                {[
                  { name: 'VS Code', value: 90, context: 'Extension configs, scripting' },
                  { name: 'GitHub', value: 85, context: 'Git workflow, CI/CD, pages' },
                  { name: 'ChatGPT & Gemini', value: 95, context: 'AI-assisted debugging, outline' },
                  { name: 'YouTube', value: 90, context: 'Continuous tech research' }
                ].map((skill, index) => (
                  <div key={index} className="space-y-1.5">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-slate-700">{skill.name}</span>
                      <span className="text-xs text-slate-600 font-bold font-mono">{skill.value}%</span>
                    </div>
                    {/* Meter bar */}
                    <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-500 rounded-full" style={{ width: `${skill.value}%` }} />
                    </div>
                    <span className="text-[10px] text-slate-400 block font-mono">{skill.context}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Productivity Category */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-orange-200 hover:bg-white hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                <FileSpreadsheet size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-sans">Productivity</h3>
              
              <div className="space-y-5">
                {[
                  { name: 'MS Excel', value: 82, context: 'Formulas, tables, analysis' },
                  { name: 'MS Word', value: 85, context: 'Layout design, documentation' }
                ].map((skill, index) => (
                  <div key={index} className="space-y-1.5">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-slate-700">{skill.name}</span>
                      <span className="text-xs text-emerald-600 font-bold font-mono">{skill.value}%</span>
                    </div>
                    {/* Meter bar */}
                    <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${skill.value}%` }} />
                    </div>
                    <span className="text-[10px] text-slate-400 block font-mono">{skill.context}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning/Future Category */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-orange-200 hover:bg-white hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Under Active Study</h3>
              
              <div className="space-y-5">
                {[
                  { name: 'Full Stack Dev', value: 75, context: 'Client integration with DBs' },
                  { name: 'APIs & Integration', value: 78, context: 'Rest APIs, SDK pipelines' },
                  { name: 'Backend Architectures', value: 70, context: 'Node, Express servers, SQL' }
                ].map((skill, index) => (
                  <div key={index} className="space-y-1.5">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-slate-700">{skill.name}</span>
                      <span className="text-xs text-indigo-600 font-bold font-mono">{skill.value}%</span>
                    </div>
                    {/* Meter bar */}
                    <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 rounded-full animate-pulse-soft" style={{ width: `${skill.value}%` }} />
                    </div>
                    <span className="text-[10px] text-slate-400 block font-mono">{skill.context}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 md:py-28 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-bold tracking-widest text-orange-600 font-mono uppercase bg-orange-50 px-3 py-1 rounded-full border border-orange-100 inline-block">Offered Help</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">What I Can Help With</h2>
            <div className="w-12 h-1 bg-orange-500 mx-auto rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket size={24} />,
                title: 'Landing Page Development',
                desc: 'Modern responsive landing pages for businesses, start-up projects, and products focusing on conversions, clean performance, and structure.',
              },
              {
                icon: <Layout size={24} />,
                title: 'Portfolio Websites',
                desc: 'Professional personal resumes, visual cv portfolios, and service branding templates tailored specifically to stand out with pristine design.',
              },
              {
                icon: <Code2 size={24} />,
                title: 'Frontend Development',
                desc: 'Turning design systems, Figma sketches, or static structures into high-performance, robust, and clean semantic React or TypeScript applications.',
              },
              {
                icon: <Globe size={24} />,
                title: 'Website Deployment',
                desc: 'Configuring servers, static hostings, establishing domain links, and setting up secure deployment flows (on Netlify, Vercel, and Cloud infrastructures).',
              },
              {
                icon: <Bug size={24} />,
                title: 'Bug Fixing',
                desc: 'Debugging troublesome javascript states, clearing layout misalignments, isolating broken libraries, and optimizing load speeds.',
              },
              {
                icon: <Palette size={24} />,
                title: 'Website UI Design',
                desc: 'Crafting responsive website layout plans, color palettes, vector typography sets, and professional visual concepts.',
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md hover:border-orange-200 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 group-hover:bg-orange-500 group-hover:text-white group-hover:rotate-6 transition-all">
                  {service.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{service.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="projects" className="py-20 md:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-bold tracking-widest text-orange-600 font-mono uppercase bg-orange-50 px-3 py-1 rounded-full border border-orange-100 inline-block">Work Show</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Featured Projects</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base mt-2">
              Explore live projects, and test structural responsivity in my interactive embedded simulator frame!
            </p>
            <div className="w-12 h-1 bg-orange-500 mx-auto rounded" />
          </div>

          <div className="space-y-24">
            
            {/* Project 1: Elite Fitness */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Simulator Frame (Left Component) */}
              <div className="lg:col-span-6 flex flex-col gap-4">
                
                {/* Simulator controls */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 rounded-xl text-white text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="ml-2 font-mono text-slate-400">Elite Fitness Preview</span>
                  </div>
                  <div className="flex bg-slate-800 rounded-none p-0.5">
                    <button
                      onClick={() => setEliteDevice('desktop')}
                      className={`px-3 py-1 rounded-none font-semibold transition-all flex items-center gap-1.5 ${
                        eliteDevice === 'desktop' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Laptop size={12} />
                      Desktop
                    </button>
                    <button
                      onClick={() => setEliteDevice('mobile')}
                      className={`px-3 py-1 rounded-none font-semibold transition-all flex items-center gap-1.5 ${
                        eliteDevice === 'mobile' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Smartphone size={12} />
                      Mobile View
                    </button>
                  </div>
                </div>

                {/* Simulator Body (The Interactive Webpage Preview) */}
                <div className="relative w-full overflow-hidden flex justify-center bg-slate-100 p-4 sm:p-6 rounded-2xl border border-slate-200 max-h-[420px]">
                  
                  <div
                    className={`bg-white shadow-md rounded-xl overflow-y-auto overflow-x-hidden relative transition-all duration-500 border border-slate-200 select-none ${
                      eliteDevice === 'desktop' ? 'w-full h-[320px]' : 'w-[280px] h-[320px]'
                    }`}
                  >
                    
                    {/* Interactive Simulated Web Header */}
                    <div className="sticky top-0 bg-white shadow-xs px-3 py-2 border-b border-slate-100 flex items-center justify-between text-[10px] sm:text-xs z-10">
                      <span className="font-extrabold text-slate-900 italic tracking-wider uppercase text-orange-500 text-[10px]">Elite Fitness</span>
                      
                      {eliteDevice === 'desktop' ? (
                        <div className="flex gap-2 text-slate-500 font-bold scale-90">
                          {['HOME', 'FEATURES', 'CLASSES'].map((tab) => (
                            <button
                              key={tab}
                              onClick={() => setEliteActiveTab(tab as any)}
                              className={`px-1 hover:text-orange-500 transition-colors ${
                                eliteActiveTab === tab ? 'text-orange-500 border-b border-orange-500' : ''
                              }`}
                            >
                              {tab}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <Menu size={10} className="text-slate-600" />
                      )}

                      <button className="bg-orange-500 text-white font-extrabold rounded-none px-2.5 py-1 text-[8px] sm:text-[9px] hover:bg-orange-600">
                        JOIN NOW
                      </button>
                    </div>

                    {/* Simulated Content Area based on Simulated Tab */}
                    <div className="p-4 space-y-4">
                      {eliteActiveTab === 'HOME' && (
                        <div className="space-y-4 animate-fadeIn">
                          
                          {/* Hero Header */}
                          <div className="text-center space-y-1 mt-2">
                            <span className="text-[7px] font-bold text-slate-400 uppercase tracking-widest">Premium Conditioning Studio</span>
                            <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-tight">
                              ELEVATE YOUR <span className="text-orange-500">FITNESS.</span>
                            </h4>
                            <p className="text-[8px] sm:text-[9px] text-slate-400 max-w-xs mx-auto leading-normal">
                              Achieve your body goals at Elite Fitness Studio. Expert coaching, modular setups, and supportive team.
                            </p>
                          </div>

                          {/* Action Button inside mockup */}
                          <div className="text-center">
                            <button className="bg-orange-500 text-white text-[8px] sm:text-[9px] font-bold px-3 py-1.5 rounded-none shadow-sm hover:bg-orange-600 cursor-pointer">
                              START FREE TRIAL
                            </button>
                          </div>

                          {/* Quick details row */}
                          <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-slate-100">
                            <div>
                              <div className="text-xs font-extrabold text-slate-900 leading-none">120k+</div>
                              <span className="text-[6px] text-slate-400 uppercase font-mono block">Sessions</span>
                            </div>
                            <div>
                              <div className="text-xs font-extrabold text-slate-900 leading-none">25+</div>
                              <span className="text-[6px] text-slate-400 uppercase font-mono block">Coaches</span>
                            </div>
                            <div>
                              <div className="text-xs font-extrabold text-slate-900 leading-none">100%</div>
                              <span className="text-[6px] text-slate-400 uppercase font-mono block">Success</span>
                            </div>
                          </div>

                        </div>
                      )}

                      {eliteActiveTab === 'FEATURES' && (
                        <div className="space-y-3 pt-1 animate-fadeIn">
                          <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider text-center">Our Core Features</h4>
                          
                          <div className="space-y-2">
                            {[
                              { title: 'Personalized Coaching', detail: 'Step-by-step program tailoring' },
                              { title: 'Cardio Zones', detail: 'High performance metabolic setups' },
                              { title: 'Community Support', detail: 'Group runs and wellness meetups' }
                            ].map((feat, idx) => (
                              <div key={idx} className="p-2 border border-slate-100 rounded bg-slate-50 flex items-start gap-2">
                                <CheckCircle2 size={10} className="text-orange-500 mt-0.5" />
                                <div>
                                  <h5 className="text-[9px] font-bold text-slate-800">{feat.title}</h5>
                                  <p className="text-[7px] text-slate-400 leading-none">{feat.detail}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {eliteActiveTab === 'CLASSES' && (
                        <div className="space-y-3 pt-1 animate-fadeIn">
                          <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider text-center">Available Classes</h4>
                          
                          <div className="grid grid-cols-2 gap-2 text-[8px]">
                            <div className="border border-slate-100 rounded-lg p-2 hover:border-orange-200 bg-orange-50/20 text-center">
                              <Flame size={12} className="text-orange-500 mx-auto" />
                              <h5 className="font-bold text-slate-800 mt-1">CrossFit Elite</h5>
                              <p className="text-[7px] text-orange-600 font-mono mt-0.5">Mon, Wed, Fri</p>
                            </div>
                            <div className="border border-slate-100 rounded-lg p-2 hover:border-orange-200 bg-sky-50/20 text-center">
                              <Sparkles size={12} className="text-sky-500 mx-auto" />
                              <h5 className="font-bold text-slate-800 mt-1">Yoga Flow</h5>
                              <p className="text-[7px] text-sky-600 font-mono mt-0.5">Tue, Thu</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Developer Info Tag overlaid on mockup bottom */}
                    <div className="bg-slate-900 text-white py-1 px-3 text-[7px] font-mono tracking-widest flex justify-between items-center sticky bottom-0 border-t border-slate-800 shadow-xl opacity-90">
                      <span>STABLE PROTOTYPE</span>
                      <span className="text-orange-400">SAQUIB DEV</span>
                    </div>

                  </div>

                </div>

                {/* Simulated message for responsive interactions */}
                <p className="text-center text-xs text-slate-400 italic">
                  *Click "Mobile View" or "Desktop" buttons above to toggle browser layout!
                </p>

              </div>

              {/* Project Info (Right Component) */}
              <div className="lg:col-span-6 flex flex-col justify-center gap-5">
                
                <span className="text-xs font-bold font-mono tracking-widest text-orange-600 uppercase bg-orange-50 border border-orange-100 px-3 py-1.5 rounded-full w-fit">
                  Landing Page
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Elite Fitness Landing Page
                </h3>

                <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                  A high-performing, conversion-oriented fitness landing page optimized for gym ecosystems. Features robust design layout segments, program breakdowns, trainers tables, active customer widgets, and optimized accessibility standards. Fully adaptive across ultra-wide, standard desktop, medium tablets, and mobile screens.
                </p>

                <div className="space-y-3.5">
                  <h4 className="font-bold text-slate-900 text-sm">Key Features Built:</h4>
                  <ul className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                      Desktop-first Fluid Scaling
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                      Optimized Lead Generation
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                      Dynamic Schedule Blocks
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                      Pristine Layout Spacings
                    </li>
                  </ul>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  <a
                    href="https://efwe.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-md shadow-orange-500/10 hover:shadow-orange-600/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    Launch Live Site
                    <ExternalLink size={16} />
                  </a>
                  <span className="text-xs text-slate-400 font-mono">Hosted on Netlify</span>
                </div>

              </div>

            </div>

            {/* Project 2: TrendPulse */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-slate-100">
              
              {/* Project Info (Left Component) */}
              <div className="lg:col-span-6 lg:order-2 flex flex-col justify-center gap-5">
                
                <span className="text-xs font-bold font-mono tracking-widest text-orange-600 uppercase bg-orange-50 border border-orange-100 px-3 py-1.5 rounded-full w-fit">
                  Web Application Tool
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  TrendPulse News Website
                </h3>

                <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                  TrendPulse is a complex dynamic dashboard layout displaying news topics, social data velocities, and analytical widgets. Structured with multi-grid columns, responsive sidebar frames, customizable search tools, and dynamic timelines. It mimics real-time operations by rendering trending statistics beautifully across screen breakpoints.
                </p>

                <div className="space-y-3.5">
                  <h4 className="font-bold text-slate-900 text-sm">Main Application Blocks:</h4>
                  <ul className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                      Dynamic Category Filtering
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                      Global Ticker Crawlers
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                      Simulated Pipeline Syncing
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                      Modern Card Grid rhythm
                    </li>
                  </ul>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  <a
                    href="https://dulcet-kitsune-d77d8a.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    Open Live App
                    <ExternalLink size={16} />
                  </a>
                  <span className="text-xs text-slate-400 font-mono">Vite Standard App</span>
                </div>

              </div>

              {/* Interactive Mockup (Right Component - Simulator) */}
              <div className="lg:col-span-6 lg:order-1 flex flex-col gap-4">
                
                {/* Simulator frame shell */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 rounded-xl text-white text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="ml-2 font-mono text-slate-400">TrendPulse Client Simulator</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-soft" />
                    <span className="text-[10px] text-emerald-400 font-mono uppercase tracking-wider">LIVE REPL</span>
                  </div>
                </div>

                {/* Dashboard layout inside mockup container */}
                <div className="w-full bg-slate-950 p-4 sm:p-5 rounded-2xl border border-slate-800 text-slate-100 max-h-[440px] overflow-hidden select-none">
                  
                  {/* Mock Navbar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-3 gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-rose-600 flex items-center justify-center text-white text-xs font-bold font-mono">TP</div>
                      <span className="text-xs font-black tracking-tight text-white uppercase flex items-center gap-1 font-mono">
                        TrendPulse<span className="text-rose-500 text-base leading-none">.</span>
                      </span>
                    </div>

                    {/* Integrated Sync pipeline button */}
                    <button
                      onClick={handleTriggerSync}
                      disabled={newsPipelineStatus === 'SYNCING'}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold rounded-none bg-rose-600 hover:bg-rose-700 text-white transition-colors cursor-pointer"
                    >
                      <Tv size={10} className={newsPipelineStatus === 'SYNCING' ? 'animate-spin' : ''} />
                      {newsPipelineStatus === 'SYNCING' ? 'SYNCING PIPELINE...' : 'SYNC PIPELINE'}
                    </button>
                  </div>

                  {/* Categories Row */}
                  <div className="flex gap-2.5 mt-3 text-[10px] pb-2 border-b border-slate-800/50 overflow-x-auto text-slate-400 font-mono uppercase">
                    {(['LATEST', 'TECHNOLOGY', 'SCIENCE'] as const).map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setTrendPulseCategory(cat)}
                        className={`hover:text-white transition-colors py-0.5 px-2.5 rounded-none ${
                          trendPulseCategory === cat ? 'bg-rose-500/10 text-rose-400 border border-rose-500/25' : ''
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  {/* Dashboard body */}
                  <div className="mt-4 grid grid-cols-12 gap-3 pb-2">
                    
                    {/* Primary News Card */}
                    <div className="col-span-12 sm:col-span-8 bg-slate-900 border border-slate-800/60 rounded-xl p-3.5 space-y-3.5">
                      
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] bg-rose-500/15 text-rose-400 font-bold px-2 py-0.5 rounded font-mono uppercase">
                          {trendPulseCategory === 'LATEST' ? 'TRENDING' : trendPulseCategory}
                        </span>
                        <div className="flex items-center gap-1.5 text-[8px] text-slate-500 font-mono">
                          <Clock size={8} />
                          <span>Just Updated</span>
                        </div>
                      </div>

                      {/* Headline display based on category */}
                      <div className="space-y-1.5 animate-fadeIn">
                        {trendPulseCategory === 'LATEST' && (
                          <>
                            <h4 className="text-xs sm:text-sm font-extrabold text-white leading-snug">
                              OpenAI Unveils Multi-Modal Reasoning Agent System 'Orion'
                            </h4>
                            <p className="text-[9px] text-slate-400 leading-relaxed">
                              Developers globally begin integrating API pipelines designed to handle continuous reasoning models across real-time video networks.
                            </p>
                          </>
                        )}
                        {trendPulseCategory === 'TECHNOLOGY' && (
                          <>
                            <h4 className="text-xs sm:text-sm font-extrabold text-white leading-snug">
                              Next-Gen CSS framework standards simplify multi-variable styling
                            </h4>
                            <p className="text-[9px] text-slate-400 leading-relaxed">
                              World-wide developer survey indicates a massive paradigm shift toward lightning-fast client-side builds using modular CSS architectures.
                            </p>
                          </>
                        )}
                        {trendPulseCategory === 'SCIENCE' && (
                          <>
                            <h4 className="text-xs sm:text-sm font-extrabold text-white leading-snug">
                              Breakthrough in Fusion Energy Ignition achieves Commercial Viability
                            </h4>
                            <p className="text-[9px] text-slate-400 leading-relaxed">
                              Magnetic confinement fusion chambers sustain record energy gains, paving the road for green industrial grids worldwide.
                            </p>
                          </>
                        )}
                      </div>

                      <div className="flex items-center justify-between border-t border-slate-800/50 pt-2.5">
                        <span className="text-[8px] text-emerald-400 font-mono">Velocity Score: 94%</span>
                        <span className="text-[8px] text-slate-500 underline font-mono">source_info</span>
                      </div>

                    </div>

                    {/* Right column sidebar widgets */}
                    <div className="hidden sm:col-span-4 flex flex-col gap-3">
                      
                      {/* Widget 1: Pipeline status */}
                      <div className="bg-slate-900 border border-slate-800/80 rounded-xl p-2.5 text-center flex flex-col justify-center items-center">
                        <span className="text-[7px] text-slate-500 font-semibold uppercase font-mono block">Data Stream Feed</span>
                        <div className="text-xs font-bold font-mono text-white mt-1">
                          {newsPipelineStatus === 'SYNCING' ? 'SYNC' : 'ACTIVE'}
                        </div>
                        <div className="text-[8px] text-slate-400 font-mono mt-0.5">
                          {pulseCount.toLocaleString()} items
                        </div>
                      </div>

                      {/* Widget 2: Regional check */}
                      <div className="bg-slate-900 border border-slate-800/80 rounded-xl p-2.5 flex flex-col justify-center gap-1">
                        <span className="text-[7px] text-slate-500 font-semibold uppercase font-mono block">Active Sensors</span>
                        <div className="flex items-center justify-between text-[9px] text-slate-300 font-mono mt-0.5">
                          <span>India Feed</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        </div>
                        <div className="flex items-center justify-between text-[9px] text-slate-300 font-mono">
                          <span>Global Ticker</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-soft" />
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

                <p className="text-center text-xs text-slate-400 italic">
                  *Click "Sync Pipeline" or different categories to interact with the mock dashboard!
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* GOOGLE PLAY GAMES */}
      <section id="games" className="py-20 md:py-28 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-bold tracking-widest text-orange-600 font-mono uppercase bg-orange-50 px-3 py-1 rounded-full border border-orange-100 inline-block">Android Store</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Published Android Games</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base mt-2">
              Discover official games integrated, debugged, and published on the Google Play Store under publisher <strong>Zentrot</strong>.
            </p>
            <div className="w-12 h-1 bg-orange-500 mx-auto rounded" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {gamesList.map((game) => (
              <div
                key={game.id}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-orange-200 transition-all group"
              >
                <div>
                  
                  {/* Game visual representation */}
                  <div className="relative aspect-video w-full bg-slate-900 overflow-hidden flex items-center justify-center p-3">
                    
                    {/* Retro background graphics */}
                    <div className="absolute inset-0 bg-radial-gradient from-slate-800 to-slate-950 opacity-90 group-hover:scale-105 transition-transform duration-500" />
                    
                    {/* Specialized custom game icons inside mockup */}
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-slate-950 shadow-lg border border-slate-700/50 overflow-hidden flex items-center justify-center">
                      
                      {!imageErrors[game.id] ? (
                        <img
                          src={
                            game.id === 'mazemenia'
                              ? '/assets/maze.png'
                              : game.id === 'sumandwin'
                              ? '/assets/sumnwin.png'
                              : game.id === 'universesaver'
                              ? '/assets/universe.png'
                              : game.id === 'decaystreet'
                              ? '/assets/decay_street.png'
                              : ''
                          }
                          alt={`${game.title} Logo`}
                          className="w-full h-full object-cover"
                          onError={() => handleImageError(game.id)}
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <>
                          {game.id === 'mazemenia' && (
                            <div className="w-full h-full p-2">
                              <div className="w-full h-full bg-orange-500 rounded-lg flex items-center justify-center text-white relative">
                                <div className="absolute inset-1 border border-white/20 rounded font-mono font-black text-center text-xs flex items-center justify-center">
                                  M
                                </div>
                              </div>
                            </div>
                          )}

                          {game.id === 'sumandwin' && (
                            <div className="w-full h-full p-2">
                              <div className="w-full h-full bg-sky-500 rounded-lg flex items-center justify-center text-white relative">
                                <span className="font-mono font-black text-lg">H#</span>
                              </div>
                            </div>
                          )}

                          {game.id === 'universesaver' && (
                            <div className="w-full h-full p-2">
                              <div className="w-full h-full bg-indigo-600 rounded-lg flex items-center justify-center text-white relative font-mono font-extrabold text-xs">
                                ⭐
                              </div>
                            </div>
                          )}

                          {game.id === 'decaystreet' && (
                            <div className="w-full h-full p-2">
                              <div className="w-full h-full bg-emerald-600 rounded-lg flex items-center justify-center text-white relative font-bold text-xs uppercase font-mono">
                                ☣️
                              </div>
                            </div>
                          )}
                        </>
                      )}

                    </div>

                    {/* Developer Name badge overlay */}
                    <span className="absolute bottom-2.5 right-2.5 text-[8px] bg-black/80 text-orange-400 font-bold tracking-widest font-mono uppercase px-2 py-0.5 rounded border border-orange-500/20">
                      ZENTROT
                    </span>
                  </div>

                  {/* Game Text */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{game.title}</h3>
                      <span className="text-[10px] bg-slate-100 text-slate-600 font-bold tracking-wide font-mono uppercase py-0.5 px-2 rounded-full inline-block">
                        {game.id === 'mazemenia' ? 'Puzzle' : game.id === 'sumandwin' ? 'Math' : game.id === 'universesaver' ? 'Arcade' : 'Survival'}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                      {game.description}
                    </p>

                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-slate-50 pt-2.5">
                      <span>Rating: <strong className="text-orange-500">{game.rating}</strong></span>
                      <span>{game.downloads}</span>
                    </div>
                  </div>

                </div>

                {/* Game Actions */}
                <div className="px-5 pb-5 pt-1.5 flex gap-2">
                  <button
                    onClick={() => setSelectedGame(game)}
                    className="flex-1 py-2 lg:py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-none transition-colors cursor-pointer text-center"
                  >
                    View Mechanics
                  </button>
                  <a
                    href="https://play.google.com/store/apps/developer?id=Zentrot&hl=en_IN"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-orange-100 hover:bg-orange-500 hover:text-white text-orange-600 rounded-none transition-all flex items-center justify-center"
                    title="Download on Google Play"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>

              </div>
            ))}
          </div>

          {/* Central CTAs */}
          <div className="mt-14 text-center">
            <a
              href="https://play.google.com/store/apps/developer?id=Zentrot&hl=en_IN"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm sm:text-base rounded-none shadow-lg shadow-orange-500/10 hover:shadow-orange-600/25 transition-all cursor-pointer group"
            >
              <Gamepad2 size={18} />
              View Google Play Profile
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

        {/* Game Details Expansion Dialog Modal */}
        {selectedGame && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-55 p-4 animate-fadeIn">
            <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden relative border border-slate-100">
              
              {/* Header Visual overlay */}
              <div className="bg-slate-950 p-6 flex items-center justify-between text-white relative">
                <div className="absolute inset-0 bg-radial-gradient from-slate-800 to-slate-950 opacity-80" />
                
                <div className="relative z-10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white text-base font-bold font-mono">
                    {selectedGame.title[0]}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{selectedGame.title}</h3>
                    <p className="text-[10px] text-orange-400 font-mono tracking-widest uppercase">Zentrot Play Publisher</p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedGame(null)}
                  className="relative z-10 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Modal Core Contents */}
              <div className="p-6 sm:p-8 space-y-6">
                
                <div className="space-y-1.5">
                  <h4 className="text-xs text-slate-400 font-mono uppercase tracking-wider">Game Summary</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {selectedGame.description}
                  </p>
                </div>

                <div className="space-y-1.5 p-4 rounded-xl bg-orange-50/50 border border-orange-100/30">
                  <h4 className="text-xs text-orange-850 font-bold font-mono uppercase tracking-wider flex items-center gap-1.5">
                    <Award size={13} className="text-orange-600" />
                    Built gameplay Mechanics:
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed font-sans">
                    {selectedGame.mechanics}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2.5 text-center text-xs py-1 border-t border-b border-slate-100">
                  <div>
                    <span className="text-slate-450 uppercase text-[9px] block">Category</span>
                    <strong className="text-slate-800 text-[11px] font-sans">{selectedGame.category}</strong>
                  </div>
                  <div>
                    <span className="text-slate-450 uppercase text-[9px] block">Global Rating</span>
                    <strong className="text-orange-600 text-[11px] font-sans">⭐ {selectedGame.rating}</strong>
                  </div>
                  <div>
                    <span className="text-slate-450 uppercase text-[9px] block">Active metrics</span>
                    <strong className="text-slate-800 text-[11px] font-mono">{selectedGame.downloads}</strong>
                  </div>
                </div>

                {/* Action Row */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedGame(null)}
                    className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-bold rounded-none transition-all"
                  >
                    Close Settings
                  </button>
                  <a
                    href="https://play.google.com/store/apps/developer?id=Zentrot&hl=en_IN"
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-none shadow-lg shadow-orange-500/20 text-sm inline-flex items-center justify-center gap-2"
                  >
                    Get on Play Store
                    <ExternalLink size={15} />
                  </a>
                </div>

              </div>

            </div>
          </div>
        )}

      </section>

      {/* JOURNEY TIMELINE */}
      <section id="timeline" className="py-20 md:py-28 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-bold tracking-widest text-orange-600 font-mono uppercase bg-orange-50 px-3 py-1 rounded-full border border-orange-100 inline-block">Milestones</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Saquib's Coding Road</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base mt-2">
              Trace my progression from my first Class 6 web trials to Android app shipping and modern full-stack development.
            </p>
            <div className="w-12 h-1 bg-orange-500 mx-auto rounded" />
          </div>

          {/* Timeline Node Chain */}
          <div className="relative border-l border-slate-200 ml-4 sm:ml-6 space-y-10 py-4 select-none">
            {[
              {
                title: 'Class 6 Discovered HTML & CSS',
                detail: 'Identified syntax rendering. Built first raw HTML file structures, setting font sizes and background colors inside local browser windows.',
                icon: <Code2 size={14} />,
                sub: 'Starting Moment',
              },
              {
                title: 'Started Web Development Studies',
                detail: 'Stepped into advanced JavaScript frameworks, studying clean layouts, state synchronizations, local browsers inputs, and DOM logic structures.',
                icon: <BookOpen size={14} />,
                sub: 'Framework Mastering',
              },
              {
                title: 'Mastered Custom Domains & Hosting',
                detail: 'Studied network name servers, setup records, optimized static CDNs, and configured security layers across live hosting structures.',
                icon: <Globe size={14} />,
                sub: 'Production Ready',
              },
              {
                title: 'Built and Deployed Live Websites',
                detail: 'Launched robust freelancing landing page systems and customized business portfolios featuring semantic performance parameters.',
                icon: <Rocket size={14} />,
                sub: 'Client Solutions',
              },
              {
                title: 'Published Games on Google Play',
                detail: 'Developed puzzle simulators, numbers brain teasers, and vertical arcade shootouts. Successfully published under Zentrot publisher on Play Store.',
                icon: <Gamepad2 size={14} />,
                sub: 'Store Publisher',
              },
              {
                title: 'Mastering Advanced Frontend (Now)',
                detail: 'Fine-tuning full TypeScript architectures, complex responsive layouts, optimization parameters, and interactive UI states.',
                icon: <Laptop size={14} />,
                sub: 'Current Objective',
                active: true,
              },
              {
                title: 'Goal: Full Stack Developer',
                detail: 'To establish complete data persistence networks, back-end servers, complex database schemas, and modular full-stack web architectures.',
                icon: <Award size={14} />,
                sub: 'Final Target',
                goal: true,
              }
            ].map((node, index) => (
              <div
                key={index}
                className="relative pl-8 group cursor-pointer"
                onMouseEnter={() => setFocusedMilestone(index)}
                onMouseLeave={() => setFocusedMilestone(null)}
              >
                {/* Visual Bubble Indicator along vertical line */}
                <span
                  className={`absolute -left-[9px] top-1.5 w-4.5 h-4.5 rounded-full border-2 flex items-center justify-center transition-all duration-300 z-10 ${
                    node.goal
                      ? 'bg-rose-50 border-rose-500 text-rose-600 scale-110'
                      : node.active
                      ? 'bg-orange-50 border-orange-500 text-orange-600 scale-110'
                      : focusedMilestone === index
                      ? 'bg-orange-500 border-orange-500 text-white scale-110 shadow-md shadow-orange-500/20'
                      : 'bg-white border-slate-300 text-slate-400 group-hover:border-orange-500 group-hover:text-orange-500'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                </span>

                {/* Main Card */}
                <div
                  className={`p-6 rounded-2xl border transition-all duration-300 ${
                    node.goal
                      ? 'bg-gradient-to-tr from-rose-50/50 to-orange-50/50 border-rose-100 hover:shadow-md'
                      : node.active
                      ? 'bg-orange-50/30 border-orange-100 hover:shadow-md'
                      : focusedMilestone === index
                      ? 'bg-white border-orange-200 shadow-md translate-x-1'
                      : 'bg-slate-50 border-slate-100 hover:bg-white hover:border-slate-200'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2.5">
                    <h3 className={`text-base sm:text-lg font-bold ${node.active || node.goal ? 'text-slate-900' : 'text-slate-800'}`}>
                      {node.title}
                    </h3>
                    <span
                      className={`text-[9px] font-bold font-mono tracking-wider uppercase px-2.5 py-0.5 rounded-full block w-fit ${
                        node.goal
                          ? 'bg-rose-100 text-rose-700'
                          : node.active
                          ? 'bg-orange-100 text-orange-700'
                          : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {node.sub}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{node.detail}</p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TOOLS I USE */}
      <section id="tools" className="py-20 md:py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-bold tracking-widest text-orange-600 font-mono uppercase bg-orange-50 px-3 py-1 rounded-full border border-orange-100 inline-block">Arsenal</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Tools I Use</h2>
            <div className="w-12 h-1 bg-orange-500 mx-auto rounded" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-5">
            {[
              { name: 'VS Code', context: 'Primary IDE setup', desc: 'Code writing' },
              { name: 'GitHub', context: 'Source control Hub', desc: 'Repositories' },
              { name: 'ChatGPT', context: 'Logic assistance', desc: 'Query solver' },
              { name: 'Gemini', context: 'Framework assistant', desc: 'AI partner' },
              { name: 'YouTube', context: 'Knowledge library', desc: 'Daily studies' },
              { name: 'MS Word', context: 'Documentation suite', desc: 'Contracts' },
              { name: 'MS Excel', context: 'Tabular calculation', desc: 'Loot tables' },
            ].map((tool, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-slate-100 text-center flex flex-col items-center justify-between gap-3 shadow-xs hover:border-orange-200 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200/50 flex items-center justify-center font-extrabold text-slate-600 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  {tool.name[0]}
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900 group-hover:text-orange-600 transition-colors">{tool.name}</h4>
                  <span className="text-[9px] text-slate-400 block font-mono mt-0.5">{tool.desc}</span>
                </div>
                <div className="border-t border-slate-50 w-full pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[8px] text-slate-400 font-mono leading-none">{tool.context}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-slate-400 text-center text-xs mt-10 max-w-lg mx-auto leading-relaxed">
            These tools help me learn, build, debug, deploy, and improve my frontend projects and publishing schedules every single day.
          </p>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 md:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-bold tracking-widest text-orange-600 font-mono uppercase bg-orange-50 px-3 py-1 rounded-full border border-orange-100 inline-block">Get Connected</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Let's Build Something Together</h2>
            <div className="w-12 h-1 bg-orange-500 mx-auto rounded" />
          </div>

          <div className="max-w-2xl mx-auto">
            
            {/* Direct Connect Card */}
            <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/30 flex flex-col items-center text-center gap-8">
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">Want to coordinate a project?</h3>
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-lg">
                  Need a responsive landing page, a personalized portfolio website, specific frontend bug-fixing, or live domain hosting deployment help? Ask or coordinate directly via these platforms!
                </p>
              </div>

              {/* Channel buttons list */}
              <div className="space-y-3.5 w-full max-w-md">
                {[
                  {
                    name: 'Connect on LinkedIn',
                    url: 'https://www.linkedin.com/in/mohd-saquib-974b143ba/',
                    extra: 'Mohd Saquib',
                    icon: <Linkedin size={18} />,
                    color: 'bg-[#0077b5] text-white hover:bg-[#006297] hover:scale-[1.02] shadow-md shadow-[#0077b5]/15 transition-all duration-300',
                  },
                  {
                    name: 'Review GitHub Profile',
                    url: 'https://github.com/Saquib630',
                    extra: '@Saquib630',
                    icon: <Github size={18} />,
                    color: 'bg-[#24292e] text-white hover:bg-[#1c2024] hover:scale-[1.02] shadow-md shadow-slate-900/15 transition-all duration-300',
                  },
                  {
                    name: 'Order on Fiverr',
                    url: 'https://www.fiverr.com/s/Zm8egxp',
                    extra: 'Freelance Workspace',
                    icon: <BriefcaseIcon size={18} />,
                    color: 'bg-[#1dbf73] text-white hover:bg-[#179c5e] hover:scale-[1.02] shadow-md shadow-[#1dbf73]/15 transition-all duration-300',
                  }
                ].map((channel, idx) => (
                  <a
                    key={idx}
                    href={channel.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`px-6 py-4 w-full rounded-none flex items-center justify-between font-bold text-sm focus:outline-none ${channel.color}`}
                  >
                    <div className="flex items-center gap-3">
                      {channel.icon}
                      <span>{channel.name}</span>
                    </div>
                    <span className="text-[10px] font-mono opacity-80 uppercase tracking-widest block">
                      {channel.extra}
                    </span>
                  </a>
                ))}
              </div>

              <div className="w-full border-t border-slate-200/65 pt-6 text-xs text-slate-400 font-mono tracking-wider">
                <span>RESPONDING WITHIN 24 HOURS</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer" className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            
            {/* Branding segment */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white font-extrabold text-base">S</div>
                <span className="text-lg font-black tracking-tight text-white font-sans">Mohd Saquib</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                Frontend Developer focusing on crafting semantic responsive web mockups and publishing Android packages.
              </p>
            </div>

            {/* Quick links columns */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-100">Quick Links</h4>
              <ul className="text-xs space-y-2">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Home Landing</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Story</button></li>
                <li><button onClick={() => scrollToSection('skills')} className="hover:text-white transition-colors">Skill Inventory</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Capabilities</button></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-100">Solutions</h4>
              <ul className="text-xs space-y-2">
                <li><button onClick={() => scrollToSection('projects')} className="hover:text-white transition-colors">Interactive Mockups</button></li>
                <li><button onClick={() => scrollToSection('games')} className="hover:text-white transition-colors">Zentrot Games List</button></li>
                <li><button onClick={() => scrollToSection('timeline')} className="hover:text-white transition-colors">Journey Milestones</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Freelance Connect</button></li>
              </ul>
            </div>

            {/* Active profile status */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-100">Status Info</h4>
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-900 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
                  Open to Work: 2026
                </span>
                <p className="text-[10px] text-slate-500 leading-normal">
                  Actively examining internship vacancies and freelance project opportunities.
                </p>
              </div>
            </div>

          </div>

          {/* Social icons row and legal layout */}
          <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500 font-mono tracking-wide">
              Mohd Saquib © 2026. All Rights Reserved. India.
            </span>

            {/* Anchors panel */}
            <div className="flex items-center gap-4 text-xs font-mono">
              <a href="https://github.com/Saquib630" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
              <span className="text-slate-800">|</span>
              <a href="https://www.linkedin.com/in/mohd-saquib-974b143ba/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <span className="text-slate-800">|</span>
              <a href="https://www.fiverr.com/s/Zm8egxp" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Fiverr</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}

// Simple custom inline SVG Briefcase replacement icon just in case
function BriefcaseIcon({ size }: { size: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

