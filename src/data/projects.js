import TodoLogo from "../assets/images/TodoLogo.jpg"
import vidtubeLogo from "../assets/images/VidtubeLogo.png"
import awsLogo from "../assets/images/aws_logo.jpg"

export const projects = [
  {
    id: 1,
    logo: vidtubeLogo,
    title: "VIDTUBE",
    subtitle: "Video Streaming Platform",
    tech: ["React", "Node", "MongoDB"],
    size: "large"
  },
  {
    id: 2,
    logo: TodoLogo,
    title: "TASKFLOW",
    subtitle: "Productivity Manager",
    tech: ["React", "Firebase"],
    size: "large"
  },
  {
    id: 3,
    logo: awsLogo,
    title: "CLOUDOPS",
    subtitle: "AWS Deployment Toolkit",
    tech: ["AWS", "Docker"],
    size: "large"
  }
]