import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Code2, PlayCircle, BookOpen, CheckCircle2 } from 'lucide-react';
import { projects } from '@/data/projects';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.name} | AI Developer Portfolio`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50">
      <header className="w-full max-w-3xl mx-auto px-6 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>
        
        <div className="flex items-center gap-3 mb-4">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-zinc-900">
            {project.name}
          </h1>
          {project.status && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-200 text-zinc-800">
              {project.status}
            </span>
          )}
        </div>
        <p className="text-xl text-zinc-600 mb-8">{project.tagline}</p>

        <div className="flex flex-wrap gap-4">
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors text-sm font-medium">
              <ExternalLink className="w-4 h-4" />
              Visit Live Demo
            </a>
          )}
          {project.links.repo && (
            <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 text-zinc-900 rounded-lg hover:bg-zinc-50 transition-colors text-sm font-medium shadow-sm">
              <Code2 className="w-4 h-4" />
              View Source
            </a>
          )}
          {project.links.video && (
            <a href={project.links.video} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 text-zinc-900 rounded-lg hover:bg-zinc-50 transition-colors text-sm font-medium shadow-sm">
              <PlayCircle className="w-4 h-4" />
              Watch Video
            </a>
          )}
          {project.links.caseStudy && (
            <a href={project.links.caseStudy} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 text-zinc-900 rounded-lg hover:bg-zinc-50 transition-colors text-sm font-medium shadow-sm">
              <BookOpen className="w-4 h-4" />
              Read Case Study
            </a>
          )}
        </div>
      </header>

      <main className="flex-1 w-full max-w-3xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl border border-zinc-200 p-8 md:p-10 shadow-sm">
          <section className="mb-10">
            <h2 className="font-display text-xl font-bold text-zinc-900 mb-4">Overview</h2>
            <p className="text-zinc-600 leading-relaxed whitespace-pre-wrap">
              {project.description}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-xl font-bold text-zinc-900 mb-4">Key Highlights</h2>
            <ul className="space-y-3">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3 text-zinc-600">
                  <CheckCircle2 className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-zinc-900 mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map(tech => (
                <span key={tech} className="inline-flex items-center px-3 py-1.5 rounded-lg bg-zinc-50 border border-zinc-200 text-sm font-medium text-zinc-700">
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="w-full max-w-3xl mx-auto px-6 py-8 mt-auto">
        <div className="flex items-center justify-between border-t border-zinc-200 pt-8">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Alex.
          </p>
          <Link href="/" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
            Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
