import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, GraduationCap, Calendar, MapPin, ChevronDown, ChevronUp, Sparkles, BookOpen } from 'lucide-react';
import { EXPERIENCE, EDUCATION } from '../data';

export default function PortfolioTimeline() {
  const [expandedId, setExpandedId] = useState<string | null>('exp1'); // Default open the internship details

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 bg-[#0A0A0A] border-b border-zinc-900/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white animate-fade-in">
            Professional Journey &amp; Academic Roots
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
          <p className="text-zinc-400 text-sm">
            Discover my active internship details, university coursework, and academic credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5 mb-2 pb-2 border-b border-zinc-900/80">
              <div className="p-2 bg-zinc-900 text-emerald-400 rounded-xl border border-zinc-800">
                <Briefcase id="journey-work-icon" className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Work Experience</h3>
            </div>

            <div className="relative border-l border-zinc-800 pl-6 ml-4 space-y-8">
              {EXPERIENCE.map((exp) => {
                const isOpen = expandedId === exp.id;
                return (
                  <div key={exp.id} className="relative group">
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-emerald-500 bg-[#0A0A0A] group-hover:bg-emerald-500 transition-all duration-200 z-10" />
                    
                    <motion.div
                      layout
                      onClick={() => toggleExpand(exp.id)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          toggleExpand(exp.id);
                        }
                      }}
                      tabIndex={0}
                      role="button"
                      aria-expanded={isOpen}
                      aria-label={`${exp.role} at ${exp.company}. Click to expand Details.`}
                      className={`cursor-pointer p-6 rounded-2xl border transition-all duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                        isOpen 
                          ? 'bg-zinc-900/50 border-emerald-500/25 shadow-md shadow-emerald-500/5' 
                          : 'bg-zinc-950/40 border-zinc-900 hover:border-zinc-800 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 uppercase tracking-wider">
                            Active Placement
                          </span>
                          <h4 className="text-lg font-bold text-white leading-snug">{exp.role}</h4>
                          <p className="text-emerald-450 font-semibold text-sm">{exp.company}</p>
                        </div>
                        <div className="p-1.5 bg-zinc-900 text-zinc-400 group-hover:text-emerald-400 rounded-lg border border-zinc-800 transition-colors" aria-hidden="true">
                          {isOpen ? <ChevronUp id="chevron-up" className="w-4 h-4" /> : <ChevronDown id="chevron-down" className="w-4 h-4" />}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 text-xs text-zinc-450 font-medium">
                        <div className="flex items-center gap-1">
                          <Calendar id="calendar-icon" className="w-3.5 h-3.5 text-zinc-500" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin id="map-pin-icon" className="w-3.5 h-3.5 text-zinc-500" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-5 pt-4 border-t border-zinc-900 space-y-3">
                              {exp.description.map((bullet, idx) => (
                                <div key={idx} className="flex gap-2.5 items-start text-sm text-zinc-400">
                                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400/85 flex-shrink-0" />
                                  <span>{bullet}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5 mb-2 pb-2 border-b border-zinc-900/80">
              <div className="p-2 bg-zinc-900 text-emerald-400 rounded-xl border border-zinc-800">
                <GraduationCap id="journey-edu-icon" className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Education</h3>
            </div>

            <div className="relative border-l border-zinc-800 pl-6 ml-4 space-y-8">
              {EDUCATION.map((edu) => {
                const isOpen = expandedId === edu.id;
                return (
                  <div key={edu.id} className="relative group">
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-emerald-500 bg-[#0A0A0A] group-hover:bg-emerald-500 transition-all duration-200 z-10" />

                    <motion.div
                      layout
                      onClick={() => toggleExpand(edu.id)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          toggleExpand(edu.id);
                        }
                      }}
                      tabIndex={0}
                      role="button"
                      aria-expanded={isOpen}
                      aria-label={`${edu.degree} at ${edu.institution}. Click to expand Details.`}
                      className={`cursor-pointer p-6 rounded-2xl border transition-all duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                        isOpen 
                          ? 'bg-zinc-900/50 border-emerald-500/25 shadow-md shadow-emerald-500/5' 
                          : 'bg-zinc-950/40 border-zinc-900 hover:border-zinc-800 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <h4 className="text-lg font-bold text-white leading-snug">{edu.degree}</h4>
                          <p className="text-emerald-450 font-semibold text-sm">{edu.institution}</p>
                        </div>
                        <div className="p-1.5 bg-zinc-900 text-zinc-400 group-hover:text-emerald-405 rounded-lg border border-zinc-800 transition-colors" aria-hidden="true">
                          {isOpen ? <ChevronUp id="chevron-up" className="w-4 h-4" /> : <ChevronDown id="chevron-down" className="w-4 h-4" />}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 text-xs text-zinc-450 font-medium">
                        <div className="flex items-center gap-1">
                          <Calendar id="calendar-icon" className="w-3.5 h-3.5 text-zinc-500" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin id="map-pin-icon" className="w-3.5 h-3.5 text-zinc-500" />
                          <span>{edu.location}</span>
                        </div>
                      </div>

                      <AnimatePresence initial={false}>
                        {isOpen && edu.courses && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-5 pt-4 border-t border-zinc-900">
                              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 mb-2">
                                <BookOpen id="book-icon" className="w-3.5 h-3.5" />
                                Key Academic Focus:
                              </span>
                              <div className="flex flex-wrap gap-1.5 pt-1">
                                {edu.courses.map((course, idx) => (
                                  <span
                                    key={idx}
                                    className="inline-block px-2.5 py-1 text-xs text-zinc-300 bg-zinc-900 hover:bg-zinc-800 hover:text-emerald-400 border border-zinc-855 rounded-lg transition-all"
                                  >
                                    {course}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
