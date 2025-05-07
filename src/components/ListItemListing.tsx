
import { Project } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ListItemListingProps {
  project: Project;
}

const ListItemListing = ({ project }: ListItemListingProps) => {
  const [isSwipedLeft, setIsSwipedLeft] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    
    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;
    
    if (diff > 50) {
      setIsSwipedLeft(true);
    } else if (diff < -50) {
      setIsSwipedLeft(false);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  return (
    <div 
      className={cn(
        "relative flex items-center overflow-hidden rounded-md border bg-background p-4 transition-all duration-300",
        isSwipedLeft ? "transform translate-x-[-80px]" : ""
      )}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {project.imageUrl ? (
        <div className="mr-4 h-12 w-12 flex-shrink-0 overflow-hidden rounded-md bg-muted">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-primary text-lg font-bold text-primary-foreground">
          {project.title.charAt(0)}
        </div>
      )}
      
      <div className="flex-1 min-w-0">
        <h3 className="font-medium truncate">{project.title}</h3>
        <p className="text-sm text-muted-foreground truncate">{project.description}</p>
      </div>
      
      <Button variant="ghost" size="sm" className="ml-2 flex-shrink-0" asChild>
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <ArrowRight className="h-4 w-4" />
        </a>
      </Button>
      
      <div className="absolute right-0 top-0 bottom-0 flex items-center transform translate-x-full transition-transform duration-300">
        <Button 
          variant="destructive" 
          size="sm" 
          className="h-full rounded-none px-3 mr-1"
          onClick={() => setIsSwipedLeft(false)}
        >
          Close
        </Button>
        <Button 
          variant="default" 
          size="sm" 
          className="h-full rounded-none px-3"
          asChild
        >
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            Visit
          </a>
        </Button>
      </div>
      
      {isSwipedLeft && (
        <div className="absolute inset-0 bg-transparent" onClick={() => setIsSwipedLeft(false)} />
      )}
    </div>
  );
};

export default ListItemListing;
