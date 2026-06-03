import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FolderGit2, ExternalLink, Github, Filter, Code, BarChart3, Binary, Globe } from 'lucide-react';
import { PROJECTS } from '../data';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'analytics' | 'web'>('all');

  const filteredProjects = activeFilter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  const filterTabs = [
    { id: 'all', name: 'All Scopes', icon: Binary },
    { id: 'analytics', name: 'Analytics & Distributed', icon: BarChart3 },
    { id: 'web', name: 'Web Applications', icon: Code },
  ] as const;

  return (
    <section id="projects" className="py-24 bg-[#0A0A0A] border-b border-zinc-900/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
            Selected Lab Projects
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
          <p className="text-zinc-400 text-sm">
            Technical prototypes highlighting practical software principles, API design, telemetry, and my key execution roles.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12" role="tablist" aria-label="Filter portfolio projects">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                id={`filter-btn-${tab.id}`}
                role="tab"
                aria-selected={isActive}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide uppercase transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                  isActive
                    ? 'bg-zinc-100 text-black shadow-md'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                <Icon id={`filter-icon-${tab.id}`} className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="flex flex-col h-full bg-zinc-950/45 border border-zinc-900 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-zinc-850 transition-all group"
              >
                <div className="flex justify-between items-start mb-5">
                  <div className="p-3 bg-zinc-900/60 text-zinc-450 rounded-xl border border-zinc-800 group-hover:bg-zinc-805 group-hover:text-emerald-400 group-hover:border-zinc-700/60 transition-all">
                    <FolderGit2 id={`proj-folder-${project.id}`} className="w-5 h-5" />
                  </div>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        id={`proj-github-${project.id}`}
                        className="p-1.5 text-zinc-400 hover:text-white rounded-lg transition-colors hover:bg-zinc-900 border border-transparent hover:border-zinc-805 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                        title="View Source on Github"
                        aria-label={`View source code of ${project.title} on GitHub`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Github id={`proj-github-icon-${project.id}`} className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        id={`proj-demo-${project.id}`}
                        className="p-1.5 text-zinc-400 hover:text-emerald-400 rounded-lg transition-colors hover:bg-zinc-900 border border-transparent hover:border-zinc-805 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                        title="Live Deployment Demo"
                        aria-label={`Visit live demo website of ${project.title}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ExternalLink id={`proj-demo-icon-${project.id}`} className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex-grow space-y-3">
                  <div className="flex items-center gap-2 flex-wrap pb-1">
                    <span className="text-[9px] font-bold font-mono tracking-widest text-emerald-400 uppercase bg-emerald-950/40 px-2.5 py-0.5 rounded-full inline-block border border-emerald-850/30">
                      {project.category}
                    </span>
                    {project.role && (
                      <span className="text-[9px] font-bold font-mono tracking-widest text-[#10B981] bg-emerald-950/25 border border-emerald-900/30 px-2.5 py-0.5 rounded-full inline-block uppercase">
                        {project.role}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-zinc-900">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block px-2.5 py-0.5 text-[10px] font-bold text-zinc-300 bg-zinc-900 rounded-md font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-zinc-500 space-y-3 font-mono text-sm border border-dashed border-zinc-900 rounded-3xl">
            <p>No active project prototypes found in this scope.</p>
            <p className="text-xs text-zinc-500 font-sans">Future projects will be committed dynamically.</p>
          </div>
        )}

      </div>
    </section>
  );
}
