
import { useState } from "react";
import { projects } from "@/data/projects";
import Header from "@/components/Header";
import CardListing from "@/components/CardListing";
import ListItemListing from "@/components/ListItemListing";
import MinimalistListing from "@/components/MinimalistListing";
import TileListing from "@/components/TileListing";
import CarouselListing from "@/components/CarouselListing";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [activeTab, setActiveTab] = useState("cards");

  const featuredProjects = projects.filter(project => project.featured);
  const gradients = ["gradient-peach", "gradient-purple", "gradient-blue"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 pb-16">
        <div className="mx-auto max-w-3xl">
          <Tabs
            defaultValue="cards"
            value={activeTab}
            onValueChange={setActiveTab}
            className="mb-8"
          >
            <div className="mb-6 overflow-x-auto pb-2">
              <TabsList className="w-full">
                <TabsTrigger value="cards" className="flex-1">Cards</TabsTrigger>
                <TabsTrigger value="list" className="flex-1">List</TabsTrigger>
                <TabsTrigger value="minimal" className="flex-1">Minimal</TabsTrigger>
                <TabsTrigger value="tiles" className="flex-1">Tiles</TabsTrigger>
                <TabsTrigger value="carousel" className="flex-1">Carousel</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="cards" className="space-y-6 animate-slide-in">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {projects.map((project) => (
                  <CardListing key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="list" className="space-y-3 animate-slide-in">
              {projects.map((project) => (
                <ListItemListing key={project.id} project={project} />
              ))}
              <div className="mt-6 text-center text-sm text-muted-foreground">
                <p>👆 Swipe items left to reveal actions (on touch devices)</p>
              </div>
            </TabsContent>

            <TabsContent value="minimal" className="animate-slide-in">
              <div className="rounded-lg border bg-card p-6">
                {projects.map((project) => (
                  <MinimalistListing key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tiles" className="animate-slide-in">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {projects.map((project, index) => (
                  <TileListing 
                    key={project.id} 
                    project={project} 
                    gradientClass={gradients[index % gradients.length]}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="carousel" className="animate-slide-in">
              <CarouselListing projects={projects} />
              
              <div className="mt-12 space-y-8">
                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold mb-4">Recent Projects</h3>
                  <div className="space-y-3">
                    {projects.slice(0, 3).map((project) => (
                      <ListItemListing key={project.id} project={project} />
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4">Minimal Links</h3>
                  <div className="rounded-lg border bg-card p-6">
                    {projects.slice(0, 4).map((project) => (
                      <MinimalistListing key={project.id} project={project} />
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 flex justify-center">
            <Button 
              variant="outline" 
              onClick={() => {
                const tabs = ["cards", "list", "minimal", "tiles", "carousel"];
                const currentIndex = tabs.indexOf(activeTab);
                const nextIndex = (currentIndex + 1) % tabs.length;
                setActiveTab(tabs[nextIndex]);
              }}
            >
              Try Another Style
            </Button>
          </div>
        </div>
      </main>
      
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        <div className="container">
          <p>© 2025 Madewebs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
