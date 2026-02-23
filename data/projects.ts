export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  links: {
    demo?: string;
    repo?: string;
    caseStudy?: string;
    video?: string;
  };
  status?: "Production" | "Prototype" | "WIP";
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "ai-rag-pipeline",
    name: "Enterprise RAG Pipeline",
    tagline: "High-accuracy retrieval-augmented generation system",
    description: "A production-ready RAG pipeline built for processing thousands of internal documents with high retrieval accuracy and low latency. Designed to scale horizontally and integrate seamlessly with existing enterprise data lakes.",
    stack: ["Next.js", "Python", "LangChain", "Postgres", "Pinecone"],
    highlights: [
      "Reduced hallucination rate by 45% using advanced reranking.",
      "Handles 10k+ queries per day with <800ms p95 latency.",
      "Integrated with internal SSO and role-based access control."
    ],
    links: {
      repo: "https://github.com/example/rag-pipeline",
      demo: "https://example.com/demo"
    },
    status: "Production",
    featured: true
  },
  {
    slug: "llm-eval-framework",
    name: "LLM Evaluation Framework",
    tagline: "Automated testing for LLM outputs",
    description: "An open-source framework for evaluating LLM outputs against predefined rubrics and ground truth datasets. It helps teams catch regressions early in the prompt engineering lifecycle.",
    stack: ["TypeScript", "Jest", "OpenAI API", "GitHub Actions"],
    highlights: [
      "Supports custom evaluation metrics and LLM-as-a-judge.",
      "Seamless CI/CD integration for automated regression testing.",
      "Adopted by 5+ teams internally for prompt engineering."
    ],
    links: {
      repo: "https://github.com/example/llm-eval",
      video: "https://youtube.com/watch?v=example"
    },
    status: "Production",
    featured: true
  },
  {
    slug: "agentic-workflow-builder",
    name: "Agentic Workflow Builder",
    tagline: "Visual node-based editor for AI agents",
    description: "A drag-and-drop interface for building complex multi-agent workflows with human-in-the-loop capabilities. Empowers domain experts to design AI processes without writing code.",
    stack: ["React", "Zustand", "React Flow", "FastAPI"],
    highlights: [
      "Intuitive visual editor for non-technical users.",
      "Real-time execution monitoring and debugging.",
      "Extensible plugin system for custom agent tools."
    ],
    links: {
      demo: "https://example.com/agent-builder"
    },
    status: "Prototype",
    featured: false
  }
];
