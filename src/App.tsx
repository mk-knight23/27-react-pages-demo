import { motion } from 'framer-motion';
import { Menu, Search, ArrowUpRight, Instagram, Twitter, Linkedin, ChevronDown, Sparkles, BookOpen, PenTool, Type, Layout } from 'lucide-react';
import { useState } from 'react';

const SECTIONS = [
    { title: "Typography", desc: "The art of arrangement", icon: <Type className="w-5 h-5" /> },
    { title: "Grid Systems", desc: "Structured chaos", icon: <Layout className="w-5 h-5" /> },
    { title: "Editorial", desc: "Storytelling via design", icon: <PenTool className="w-5 h-5" /> }
];

export default function App() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="min-h-screen">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 h-24 border-b border-black/5 bg-white/80 backdrop-blur-xl z-50 px-8 flex justify-between items-center">
                <div className="flex items-center gap-12">
                    <h1 className="text-2xl font-black uppercase tracking-tighter italic font-serif">Page<span className="text-accent">Craft</span></h1>
                    <div className="hidden lg:flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                        {['Anthology', 'Techniques', 'About', 'Contact'].map(m => (
                            <a key={m} href="#" className="hover:text-black transition-colors">{m}</a>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <Search className="w-5 h-5 cursor-pointer hover:rotate-12 transition-transform" />
                    <Menu className="w-5 h-5 cursor-pointer" />
                </div>
            </nav>

            <main className="pt-24">
                {/* Cover Section */}
                <section className="px-8 lg:px-20 py-24 min-h-[90vh] flex flex-col justify-center border-b border-black/5">
                    <div className="grid lg:grid-cols-12 gap-12 items-end">
                        <div className="lg:col-span-8">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-block text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-8"
                            >
                                Volume 01 / Issue 27
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="text-7xl md:text-[9rem] font-black leading-[0.8] tracking-tighter uppercase font-serif mb-12"
                            >
                                DESIGNING <br /> FOR THE <br /> <span className="italic text-transparent bg-clip-text bg-gradient-to-br from-black to-slate-400">MODERN</span> WEB
                            </motion.h1>
                            <div className="flex items-center gap-6">
                                <button className="px-10 py-5 bg-black text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-accent transition-colors flex items-center gap-3 group">
                                    Explore The Issue <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                                <div className="text-[10px] font-bold text-slate-400 max-w-[120px] leading-tight uppercase tracking-widest">
                                    Curated selection of layouts and systems.
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-4 hidden lg:block border-l border-black/5 pl-12 pb-12">
                            <div className="space-y-12">
                                {SECTIONS.map((s, i) => (
                                    <div key={i} className="group cursor-pointer">
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-accent group-hover:text-white transition-colors">{s.icon}</div>
                                            <span className="text-xs font-black uppercase tracking-[0.2em]">{s.title}</span>
                                        </div>
                                        <p className="text-xs text-slate-400 uppercase tracking-widest group-hover:text-black transition-colors">{s.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Article Preview Section */}
                <section className="grid lg:grid-cols-2">
                    <div className="border-r border-black/5 p-8 lg:p-24 space-y-12">
                        <div className="drop-cap text-lg text-slate-600 leading-relaxed font-serif pt-10">
                            The evolution of web layouts has transitioned from rigid tables to fluid, expressive canvases that rival the most prestigious print publications. PageCraft celebrates this intersection of traditional editorial aesthetics and modern performance-driven React architecture.
                        </div>
                        <p className="text-lg text-slate-600 leading-relaxed font-serif">
                            Through the use of CSS Grid, subgrid, and modern typography engines, we can create experiences that feel grounded yet dynamic, timeless yet interactive.
                        </p>
                        <div className="pt-12">
                            <div className="text-[10px] font-black uppercase tracking-[0.4em] mb-4">By Marcus Knight</div>
                            <div className="w-20 h-px bg-black" />
                        </div>
                    </div>
                    <div className="relative group overflow-hidden bg-slate-100 min-h-[500px]">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Sparkles className="w-20 h-20 text-accent/20 animate-pulse" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent p-12 flex flex-col justify-end">
                            <h2 className="text-4xl font-black uppercase font-serif mb-4 tracking-tighter leading-none italic">The Future <br /> is Modular.</h2>
                            <button className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest editorial-stroke pb-2">
                                Read the feature
                            </button>
                        </div>
                    </div>
                </section>

                {/* Featured Showcase Grid */}
                <section className="px-8 lg:px-20 py-32 border-t border-black/5">
                    <div className="mb-20 flex justify-between items-end">
                        <div>
                            <h2 className="text-5xl font-black uppercase font-serif tracking-tighter">Case <span className="text-accent italic">Studies</span></h2>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-4">Exploring 4 distinct layout patterns</p>
                        </div>
                        <ChevronDown className="w-8 h-8 text-slate-300 animate-bounce" />
                    </div>

                    <div className="grid md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 0.98 }}
                                className="aspect-[4/5] bg-slate-50 border border-black/5 p-10 flex flex-col group cursor-pointer"
                            >
                                <span className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-accent transition-colors">Pattern 0{i}</span>
                                <div className="flex-1 flex items-center justify-center">
                                    <BookOpen className="w-12 h-12 text-slate-200 group-hover:text-accent/20 transition-all duration-700 group-hover:scale-150" />
                                </div>
                                <h3 className="text-xl font-black uppercase font-serif tracking-tighter leading-tight italic opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                                    Expressive <br /> Narratives
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Newsletter / CTA */}
                <section className="bg-black text-white py-32 px-8 lg:px-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 p-40 bg-accent/10 blur-[100px] rounded-full" />
                    <div className="relative z-10">
                        <h2 className="text-5xl md:text-7xl font-black uppercase font-serif tracking-tighter mb-12">Join The <br /> Collective.</h2>
                        <div className="max-w-md mx-auto relative group">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-white/5 border-b border-white/20 py-4 px-2 text-sm focus:outline-none focus:border-accent transition-colors uppercase tracking-widest font-black"
                            />
                            <button className="absolute right-0 bottom-4 text-xs font-black uppercase tracking-widest hover:text-accent transition-colors">Submit</button>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="py-16 px-8 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-12 border-t border-black/5 bg-slate-50">
                <div className="flex items-center gap-8 text-slate-400">
                    <Instagram className="w-4 h-4 cursor-pointer hover:text-black" />
                    <Twitter className="w-4 h-4 cursor-pointer hover:text-black" />
                    <Linkedin className="w-4 h-4 cursor-pointer hover:text-black" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">© 2026 PAGECRAFT // EDITORIAL • 27/30 DISPATCHED</p>
                <div className="flex items-center gap-2 text-sm font-serif italic text-slate-500">
                    Design for the <span className="text-black font-black uppercase not-italic">future</span>
                </div>
            </footer>
        </div>
    );
}
