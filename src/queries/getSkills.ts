// queries/getSkills.ts
import { Skill } from "../types";

export async function getSkills(): Promise<Skill[]> {
  return [
    // 🟢 Programming & Analytics
    {
      name: "Python",
      category: "Programming & Analytics",
      description: "Data analysis, machine learning, and scripting.",
      icon: "FaPython"
    },
    {
      name: "C++",
      category: "Programming & Analytics",
      description: "Efficient programming for performance-critical tasks.",
      icon: "SiCplusplus"
    },
    {
      name: "SQL",
      category: "Programming & Analytics",
      description: "Database querying and data management.",
      icon: "SiMysql"
    },
    {
      name: "JavaScript",
      category: "Web & Backend Development",
      description: "Frontend and backend scripting for web apps.",
      icon: "SiJavascript"
    },
    {
      name: "Pandas",
      category: "Programming & Analytics",
      description: "Data wrangling and analysis in Python.",
      icon: "SiPython"
    },
    {
      name: "NumPy",
      category: "Programming & Analytics",
      description: "Numerical computing and scientific operations.",
      icon: "SiNumpy"
    },
    {
      name: "Power BI",
      category: "Programming & Analytics",
      description: "Business intelligence and visualization.",
      icon: "SiPowerbi"
    },

    // 🟣 Web & Backend Development
    {
      name: "HTML",
      category: "Web & Backend Development",
      description: "Building the structure of web applications.",
      icon: "SiHtml5"
    },
    {
      name: "CSS",
      category: "Web & Backend Development",
      description: "Styling and designing responsive websites.",
      icon: "SiCss3"
    },
    {
      name: "Bootstrap",
      category: "Web & Backend Development",
      description: "Rapid responsive UI design framework.",
      icon: "SiBootstrap"
    },
    {
      name: "FastAPI",
      category: "Web & Backend Development",
      description: "High-performance Python backend framework.",
      icon: "SiFastapi"
    },
    {
      name: "Flask",
      category: "Web & Backend Development",
      description: "Lightweight Python backend framework.",
      icon: "SiFlask"
    },

    // 🔵 Cloud & Databases
    {
      name: "AWS (S3, Bedrock)",
      category: "Cloud, Databases and Deployment",
      description: "Cloud storage, serverless functions & GenAI services.",
      icon: "FaAws"
    },
    {
      name: "Azure",
      category: "Cloud, Databases and Deployment",
      description: "Microsoft’s cloud computing platform.",
      icon: "SiMicrosoftazure"
    },
    {
      name: "Kubernetes",
      category: "Cloud, Databases and Deployment",
      description: "Container orchestration for scalable apps.",
      icon: "SiKubernetes"
    },
    {
      name: "PostgreSQL",
      category: "Cloud, Databases and Deployment",
      description: "Advanced relational database system.",
      icon: "SiPostgresql"
    },
    {
      name: "MySQL",
      category: "Cloud, Databases and Deployment",
      description: "Relational database management.",
      icon: "SiMysql"
    },

    // 🟡 AI/ML & Generative AI
    {
      name: "LangChain",
      category: "AI/ML & Generative AI",
      description: "Framework for building LLM-powered apps.",
      icon: "SiPython"
    },
    {
      name: "OpenAI API",
      category: "AI/ML & Generative AI",
      description: "Generative AI applications using GPT models.",
      icon: "SiOpenai"
    },
    {
      name: "Anthropic Claude",
      category: "AI/ML & Generative AI",
      description: "Conversational AI assistant for reasoning tasks.",
      icon: "SiOpenai"
    },
    {
      name: "Pinecone",
      category: "AI/ML & Generative AI",
      description: "Vector database for semantic search.",
      icon: "SiDatabricks"
    },
    {
      name: "FAISS",
      category: "AI/ML & Generative AI",
      description: "Efficient similarity search and clustering.",
      icon: "SiDatabricks"
    },
    {
      name: "RAG",
      category: "AI/ML & Generative AI",
      description: "Retrieval Augmented Generation for smarter AI.",
      icon: "SiDatabricks"
    },
    {
      name: "Scikit-learn",
      category: "AI/ML & Generative AI",
      description: "ML library for regression, classification, and clustering.",
      icon: "SiScikitlearn"
    },
    {
      name: "TensorFlow",
      category: "AI/ML & Generative AI",
      description: "Deep learning and neural networks.",
      icon: "SiTensorflow"
    },
    {
      name: "Keras",
      category: "AI/ML & Generative AI",
      description: "High-level API for TensorFlow.",
      icon: "SiKeras"
    },
    {
      name: "Prompting",
      category: "AI/ML & Generative AI",
      description: "Designing effective prompts for LLMs.",
      icon: "SiPrompt"
    },
  ];
}
