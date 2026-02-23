import Link from 'next/link';
import { Github, Linkedin, Mail, FileText, ExternalLink, Code2, PlayCircle } from 'lucide-react';
import { projects } from '@/data/projects';

export default function Home() {
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured === b.featured) return 0;
    return a.featured ? -1 : 1;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 mb-6">
            Hi, I&apos;m Alex. <br className="hidden md:block" />
            <span className="text-zinc-500">AI Product Engineer.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 mb-8 leading-relaxed">
            I build production-ready AI applications, focusing on high-accuracy RAG pipelines, 
            robust LLM evaluation frameworks, and intuitive agentic workflows.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors text-sm font-medium">
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 text-zinc-900 rounded-lg hover:bg-zinc-50 transition-colors text-sm font-medium shadow-sm">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 text-zinc-900 rounded-lg hover:bg-zinc-50 transition-colors text-sm font-medium shadow-sm">
              <Mail className="w-4 h-4" />
              Email
            </a>
            <a href="/cv.pdf" className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 text-zinc-900 rounded-lg hover:bg-zinc-50 transition-colors text-sm font-medium shadow-sm">
              <FileText className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 className="font-display text-2xl font-bold text-zinc-900 mb-2">Selected Projects</h2>
          <p className="text-zinc-500">A collection of my recent work in AI and software engineering.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProjects.map((project) => (
            <Link href={`/projects/${project.slug}`} key={project.slug} className="group flex flex-col bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-md transition-all duration-200 hover:border-zinc-300">
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-xl font-bold text-zinc-900 group-hover:text-zinc-700 transition-colors">
                    {project.name}
                  </h3>
                  {project.status && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-800">
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="text-sm font-medium text-zinc-900 mb-2">{project.tagline}</p>
                <p className="text-sm text-zinc-600 mb-6 line-clamp-2">{project.description}</p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.slice(0, 3).map(tech => (
                      <span key={tech} className="inline-flex items-center px-2 py-1 rounded-md bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="inline-flex items-center px-2 py-1 rounded-md bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm font-medium text-zinc-500">
                    {project.links.demo && (
                      <span className="flex items-center gap-1.5 hover:text-zinc-900 transition-colors">
                        <ExternalLink className="w-4 h-4" /> Demo
                      </span>
                    )}
                    {project.links.repo && (
                      <span className="flex items-center gap-1.5 hover:text-zinc-900 transition-colors">
                        <Code2 className="w-4 h-4" /> Repo
                      </span>
                    )}
                    {project.links.video && (
                      <span className="flex items-center gap-1.5 hover:text-zinc-900 transition-colors">
                        <PlayCircle className="w-4 h-4" /> Video
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="w-full max-w-5xl mx-auto px-6 py-8 border-t border-zinc-200 mt-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Alex. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium text-zinc-500">
            <a href="https://github.com" className="hover:text-zinc-900 transition-colors">GitHub</a>
            <a href="https://linkedin.com" className="hover:text-zinc-900 transition-colors">LinkedIn</a>
            <a href="mailto:hello@example.com" className="hover:text-zinc-900 transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
