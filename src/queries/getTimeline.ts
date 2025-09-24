// queries/getTimeline.ts
import { TimelineItem } from '../types';

export async function getTimeline(): Promise<TimelineItem[]> {
  // You can either fetch from CMS or return hardcoded for now
  return [
    // Professional Experience
    {
      timelineType: "work",
      title: "Data Science Intern",
      name: "Western Digital, Bangalore",
      dateRange: "Sep 2024 – June 2025",
      techStack: "Claude, Titan, Cohere, LLaMA, LangChain, PostgreSQL, AWS Bedrock, Kubernetes",
      summaryPoints: `• Designed and deployed a Generative AI production system to automate insights from 500K+ records.
• Elevated query accuracy from 37% → 85% by experimenting with prompting strategies and optimizing model selection.
• Replaced knowledge base with SQL Agent + metadata filtering, cutting embedding costs and increasing retrieval precision by 40%.
• Engineered RAG pipelines (LangChain + PostgreSQL vector DBs) for context-aware SQL generation.
• Deployed workflows on AWS Bedrock + Kubernetes for scalable GenAI solutions.`
    },
    {
      timelineType: "work",
      title: "Web Developer Intern",
      name: "National Informatics Centre, Delhi",
      dateRange: "Dec 2022 – Jan 2023",
      techStack: "Java, Spring, Hibernate, PostgreSQL, Bootstrap, JavaScript, jQuery",
      summaryPoints: `• Delivered 3+ production-ready modules for the ePanchayat Mission Mode Project (250K+ records).
• Implemented state-wise theme prioritization for the Vibrant Gram Sabha app across 29 states/UTs.
• Introduced entity-wise tracking in Sankalp Taken module, improving resolution monitoring by 30%.
• Collaborated on frontend & backend to deliver scalable, user-friendly solutions.`
    },

    // Education
    {
      timelineType: "education",
      title: "Bachelor of Engineering in Computer Science with Big Data Analytics",
      name: "Chandigarh University",
      dateRange: "2021 – 2025",
      techStack: "",
      summaryPoints: "CGPA: 8.2/10.0"
    },
    {
      timelineType: "education",
      title: "Intermediate (CBSE)",
      name: "Bal Bharati Public School, Delhi",
      dateRange: "2021",
      techStack: "",
      summaryPoints: "Score: 92.0%"
    },
    {
      timelineType: "education",
      title: "Matriculation (CBSE)",
      name: "Bal Bharati Public School, Delhi",
      dateRange: "2019",
      techStack: "",
      summaryPoints: "Score: 96.0%"
    }
  ];
}
