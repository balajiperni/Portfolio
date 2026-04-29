export const projects = [
  {
    title: "Shrimp Count Prediction",
    description:
      "Government-sponsored project. Trained YOLOv8 on 8,000+ labeled images achieving 91% mAP at 24 FPS for real-time shrimp counting in aquaculture pond images.",
    techStack: ["Python", "YOLOv8", "OpenCV", "TensorFlow", "Pandas", "NumPy"],
    highlights: ["91% mAP", "24 FPS", "8,000+ images"],
    liveDemo: "https://huggingface.co/spaces/BalajiPerni3535/Shrimp-detector",   // replace with your actual live demo link
    github: "https://github.com/balajiperni/Shrimp",     // replace with your GitHub repo link
    tag: "Government Sponsored",
  },
  {
    title: "Deepfake / AI-Generated Image Detection",
    description:
      "Binary image classification model using PyTorch and ResNet50 transfer learning to distinguish real photographs from AI-generated synthetic images.",
    techStack: ["Python", "PyTorch", "ResNet50", "OpenCV", "NumPy", "Scikit-learn"],
    highlights: ["Transfer Learning", "Fine-Tuning", "Production-ready"],
    liveDemo: null,
    github: "https://github.com/balajiperni/DeepFake-DL",     // replace with your GitHub repo link
    tag: "Deep Learning",
  },
  {
    title: "AI-Powered Task Management Platform",
    description:
      "Full-stack REST API with Node.js/Express and PostgreSQL. Integrated FastAPI ML microservice using sentence-transformer embeddings with intent classifier to auto-generate intelligent subtasks.",
    techStack: ["Python", "Node.js", "Express", "PostgreSQL", "FastAPI", "Docker", "JWT"],
    highlights: ["JWT Auth", "Role-based Access", "ML Microservice"],
    liveDemo: null,
    github: "https://github.com/balajiperni/Task-Manager",     // replace with your GitHub repo link
    tag: "Full Stack",
  },
]