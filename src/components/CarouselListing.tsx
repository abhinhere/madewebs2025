
import { Project } from "@/data/projects";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselListingProps {
  projects: Project[];
}

const CarouselListing = ({ projects }: CarouselListingProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollability = () => {
    const el = scrollRef.current;
    if (!el) return;
    
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth);
  };
  
  const scrollTo = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    
    const scrollAmount = direction === 'left' ? -el.clientWidth / 2 : el.clientWidth / 2;
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScrollability();
    
    const handleScroll = () => {
      checkScrollability();
    };
    
    el.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      el.removeEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold">Featured Projects</h3>
        <div className="flex space-x-1">
          <Button 
            variant="outline" 
            size="icon" 
            className={cn(
              "h-8 w-8 rounded-full",
              !canScrollLeft && "opacity-50 cursor-not-allowed"
            )} 
            onClick={() => scrollTo('left')}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Scroll left</span>
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className={cn(
              "h-8 w-8 rounded-full",
              !canScrollRight && "opacity-50 cursor-not-allowed"
            )} 
            onClick={() => scrollTo('right')}
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Scroll right</span>
          </Button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none"
      >
        {projects.map((project) => (
          <a 
            key={project.id} 
            href={project.url}
            target="_blank" 
            rel="noopener noreferrer" 
            className="min-w-[260px] flex-shrink-0 snap-start"
          >
            <div className="relative h-44 w-full overflow-hidden rounded-lg">
              <img 
                src={project.imageUrl || "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"} 
                alt={project.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                <div className="absolute bottom-0 p-4">
                  <h4 className="text-white font-medium mb-1">{project.title}</h4>
                  <p className="text-white/80 text-sm line-clamp-2">{project.description}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CarouselListing;
