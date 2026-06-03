import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Globe, Lightbulb, Users, Languages, Star, CheckCircle } from 'lucide-react';
import { SKILLS, CLUBS, LANGUAGES } from '../data';

export default function SkillsGrid() {
  const [activeTab, setActiveTab] = useState<'skills' | 'clubs'>('skills');

  return (
    <section id="skills" className="py-24 bg-[#0A0A0A] border-b border-zinc-900/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16 border-b border-zinc-900/60 pb-6">
          <div className="space-y-1 text-center md:text-left">
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Skills, Clubs &amp; Languages
            </h2>
            <p className="text-zinc-400 text-sm max-w-md">
              A comprehensive showcase of my core mindset, academic leadership, and language fluency.
            </p>
          </div>
          
          <div className="inline-flex bg-zinc-900 p-1.5 rounded-2xl border border-zinc-805" role="tablist" aria-label="Skills, Clubs and Languages tabs">
            <button
              onClick={() => setActiveTab('skills')}
              id="tab-skills"
              role="tab"
              aria-selected={activeTab === 'skills'}
              aria-controls="skills-panel"
              className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                activeTab === 'skills'
                  ? 'bg-zinc-800 text-emerald-450 shadow-sm'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-850/45'
              }`}
            >
              Expertise &amp; Skills
            </button>
            <button
              onClick={() => setActiveTab('clubs')}
              id="tab-clubs"
              role="tab"
              aria-selected={activeTab === 'clubs'}
              aria-controls="clubs-panel"
              className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                activeTab === 'clubs'
                  ? 'bg-zinc-800 text-emerald-450 shadow-sm'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-850/45'
              }`}
            >
              Clubs &amp; Languages
            </button>
          </div>
        </div>

        {activeTab === 'skills' && (
          <div id="skills-panel" role="tabpanel" aria-labelledby="tab-skills" className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              <div className="space-y-6">
                <div className="flex items-center gap-2 pb-2 border-b border-zinc-900">
                  <Star id="star-core" className="w-4 h-4 text-emerald-400 fill-emerald-950/20" />
                  <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider font-mono">Professional Mindset</h3>
                </div>
                <div className="space-y-4">
                  {SKILLS.filter(s => s.category === 'core').map((skill) => (
                    <div key={skill.name} className="p-5 bg-zinc-950/45 border border-zinc-900 rounded-2xl shadow-sm hover:shadow-md hover:border-zinc-800 transition-all duration-200">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-white text-sm">{skill.name}</span>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-3.5 h-3.5 ${
                                  i < skill.level ? 'text-emerald-400 fill-emerald-400' : 'text-zinc-800'
                                }`}
                              />
                            ))}
                        </div>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed mt-2">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-2 pb-2 border-b border-zinc-900">
                  <Star id="star-power" className="w-4 h-4 text-emerald-400 fill-emerald-950/20" />
                  <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider font-mono">Teamwork &amp; Strategy</h3>
                </div>
                <div className="space-y-4">
                  {SKILLS.filter(s => s.category === 'power').map((skill) => (
                    <div key={skill.name} className="p-5 bg-zinc-950/45 border border-zinc-900 rounded-2xl shadow-sm hover:shadow-md hover:border-zinc-800 transition-all duration-200">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-white text-sm">{skill.name}</span>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-3.5 h-3.5 ${
                                  i < skill.level ? 'text-emerald-400 fill-emerald-400' : 'text-zinc-800'
                                }`}
                              />
                            ))}
                        </div>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed mt-2">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {activeTab === 'clubs' && (
          <div id="clubs-panel" role="tabpanel" aria-labelledby="tab-clubs" className="grid grid-cols-1 grid-rows-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-8 space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
                <Sparkles id="clubs-heading-icon" className="w-5 h-5 text-emerald-400" />
                Co-Curricular Engagements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {CLUBS.map((club) => (
                  <div key={club.name} className="bg-zinc-950/45 border border-zinc-900 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 space-y-4 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-zinc-900/30 rounded-bl-full z-0 group-hover:scale-110 transition-transform" />
                    
                    <div className="relative z-10 space-y-3">
                      <div className="p-3 bg-zinc-900 text-emerald-400 rounded-2xl border border-zinc-800 inline-block">
                        {club.iconType === 'innovation' ? (
                          <Lightbulb id="inc-icon" className="w-5 h-5" />
                        ) : (
                          <Globe id="dip-icon" className="w-5 h-5" />
                        )}
                      </div>

                      <div className="space-y-1">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-450 font-mono">
                          {club.period}
                        </span>
                        <h4 className="font-bold text-white leading-tight text-base mt-1">{club.name}</h4>
                        <p className="text-xs font-semibold text-emerald-400 font-sans mt-0.5">{club.role}</p>
                      </div>

                      <p className="text-xs text-zinc-400 leading-relaxed">{club.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6 bg-zinc-950/45 p-6 md:p-8 rounded-3xl border border-zinc-900 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-zinc-900/30 rounded-bl-full z-0" />
              
              <div className="relative z-10 space-y-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Languages id="lang-heading-icon" className="w-5 h-5 text-emerald-400" />
                  Languages Fluency
                </h3>

                <div className="space-y-5">
                  {LANGUAGES.map((lang) => (
                    <div key={lang.name} className="space-y-2 border-b border-zinc-900/60 pb-4 last:border-0 last:pb-0">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-zinc-200 text-sm">{lang.name}</span>
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full font-bold border border-emerald-800/20">
                          {lang.proficiency}
                        </span>
                      </div>
                      <div className="flex gap-1 pt-1">
                        {[...Array(5)].map((_, idx) => (
                          <CheckCircle
                            key={idx}
                            className={`w-4 h-4 ${
                              idx < lang.rating ? 'text-emerald-400 fill-emerald-950/40' : 'text-zinc-800'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
