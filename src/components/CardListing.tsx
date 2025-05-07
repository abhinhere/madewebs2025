
import { Project } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface CardListingProps {
  project: Project;
}

const CardListing = ({ project }: CardListingProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg active:scale-[0.98] animate-scale-in">
      {project.imageUrl && (
        <div className="relative h-48 w-full overflow-hidden bg-muted">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <div className="p-5">
        <h3 className="mb-2 font-semibold tracking-tight">{project.title}</h3>
        <p className="mb-4 text-sm text-muted-foreground">
          {project.description}
        </p>
        {project.tags && (
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-secondary px-2 py-1 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <Button className="w-full" asChild>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            Visit Site <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </Card>
  );
};

export default CardListing;
