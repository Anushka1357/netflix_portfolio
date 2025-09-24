import { Project } from '../types';

export async function getProjects(): Promise<Project[]> {
  return [
    {
      title: "Jobello: AI Job Portal",
      description: `Hello to new jobs! My AI job portal with GenAI parses resumes and performs RAG-based searches. Features recommendation system, dashboards, and analytics.`,
      techUsed: "Python, Streamlit, PostgreSQL, RAG, PyPDF, LangChain, FAISS, Data Visualization, Machine Learning",
      image: { url: "/projects/jobello.png" }
    },
    {
      title: "Gender Gap Analysis Report — Data Analytics",
      description: `Analyzed 100K+ global labor and wage records across 20+ countries to uncover key drivers of gender inequality. Achieved 92% accuracy in identifying wage-gap patterns using Python (Pandas, NumPy, Matplotlib, Seaborn). Created dashboards and NLP-based flowcharts to highlight disparities.`,
      techUsed: "Python, Pandas, NumPy, Matplotlib, Seaborn, NLP, Power BI",
      image: { url: "/Projects/Gender-gap.png" }
    },
    {
      title: "Eye Disease Classification — Deep Learning (CNN)",
      description: `Constructed a CNN model for retinal disease detection, attaining 92% accuracy on test data. Enhanced dataset quality by preprocessing and augmenting 10K+ labeled images with OpenCV, reducing overfitting by 15%.`,
      techUsed: "Python, TensorFlow, Keras, OpenCV, CNN, NumPy, Pandas",
      image: { url: "/Projects/eye-disease.png" }
    },
    {
      title: "Sentiment Analysis",
      description: `Built a sentiment analysis system to classify social media posts and product reviews as positive, negative, or neutral. Integrated NLP preprocessing, embeddings, and visualization dashboards.`,
      techUsed: "Python, NLP, Scikit-learn, Pandas, Matplotlib, Seaborn, Streamlit",
      image: { url: "/Projects/sentiment-analysis.jpeg" }
    },
    {
      title: "House Price Prediction",
      description: `Developed a predictive model to estimate housing prices using regression techniques. Explored features like location, size, amenities, and historical prices to improve accuracy.`,
      techUsed: "Python, Scikit-learn, Pandas, NumPy, Matplotlib, Seaborn",
      image: { url: "/Projects/house-price.jpg" }
    },
    {
      title: "BusQuest: Public Bus Finder Website",
      description: `The Bus Finder Website offers users a platform to search for available buses based on departure and arrival locations. Displays fare, arrival time, route details, and bus type.`,
      techUsed: "HTML, CSS, JavaScript, Flask, Bootstrap",
      image: { url: "/Projects/Busquest.png" }
    },
  ];
}
