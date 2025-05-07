
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface TileListingProps {
  project: Project;
  gradientClass?: string;
}

const TileListing = ({ project, gradientClass }: TileListingProps) => {
  // Rotate between gradient classes if not provided
  const gradients = ["gradient-peach", "gradient-purple", "gradient-blue"];
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
  
  return (
    <a 
      href={project.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl p-6 text-center text-white shadow-md transition-transform duration-300 hover:scale-[1.02] active:scale-95",
        gradientClass || randomGradient
      )}
    >
      <h3 className="mb-2 font-semibold">{project.title}</h3>
      <p className="text-sm text-white/80">{project.description}</p>
    </a>
  );
};

export default TileListing;
