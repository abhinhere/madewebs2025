
import { Project } from "@/data/projects";
import { ArrowRight } from "lucide-react";

interface MinimalistListingProps {
  project: Project;
}

const MinimalistListing = ({ project }: MinimalistListingProps) => {
  return (
    <div className="group border-b border-border py-4 transition-colors duration-300 hover:bg-secondary/30">
      <a 
        href={project.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-between"
      >
        <div>
          <h3 className="font-medium link-underline">{project.title}</h3>
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </div>
        <ArrowRight className="h-4 w-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </a>
    </div>
  );
};

export default MinimalistListing;
