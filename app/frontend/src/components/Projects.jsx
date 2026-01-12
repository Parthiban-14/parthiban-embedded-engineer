import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Badge } from './ui/badge';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

export const Projects = () => {
  const { projects } = resumeData;
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    if (selectedProject?.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedProject?.images) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  return (
    <section id="projects" className="py-24 lg:py-32 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="font-ibm font-semibold text-4xl sm:text-5xl tracking-tight" data-testid="projects-heading">
              Featured Projects
            </h2>
            <div className="h-1 w-20 bg-brand-600" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleProjectClick(project)}
                className="group cursor-pointer"
                data-testid={`project-card-${index}`}
              >
                <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-brand-600 transition-all duration-300 hover:shadow-lg hover:shadow-brand-600/10 hover:-translate-y-1">
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white text-sm font-mono flex items-center gap-2">
                        View Details <ExternalLink className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="space-y-2">
                      <h3 className="font-ibm font-semibold text-lg" data-testid={`project-title-${index}`}>
                        {project.title}
                      </h3>
                      <p className="font-mono text-xs text-brand-600 dark:text-brand-400">
                        {project.type}
                      </p>
                    </div>
                    <p className="font-manrope text-sm text-muted-foreground line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techStack.slice(0, 3).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="font-manrope text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 3 && (
                        <Badge variant="outline" className="font-manrope text-xs">
                          +{project.techStack.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto" data-testid="project-detail-modal">
          {selectedProject && (
            <div className="space-y-6">
              <DialogHeader>
                <DialogTitle className="font-ibm font-semibold text-2xl" data-testid="project-modal-title">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>

              {/* Image Gallery */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="space-y-4">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400">
                    Gallery ({currentImageIndex + 1} / {selectedProject.images.length})
                  </h4>
                  <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
                    <img
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.title} ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={handlePrevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 z-10"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={handleNextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 z-10"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </div>
                  {/* Thumbnail Gallery */}
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {selectedProject.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                          currentImageIndex === index
                            ? 'border-brand-600'
                            : 'border-border hover:border-brand-600/50'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Video Section */}
              {selectedProject.videos && selectedProject.videos.length > 0 && (
                <div className="space-y-4">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400">
                    Videos ({selectedProject.videos.length})
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.videos.map((video, index) => (
                      <div key={index} className="rounded-lg overflow-hidden bg-muted">
                        {video.type === 'youtube' ? (
                          <iframe
                            width="100%"
                            height="250"
                            src={video.url}
                            title={`${selectedProject.title} - Video ${index + 1}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <video width="100%" height="250" controls>
                            <source src={video.url} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-2">
                    Project Type
                  </h4>
                  <p className="font-manrope text-sm text-muted-foreground">
                    {selectedProject.type}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-2">
                    Description
                  </h4>
                  <p className="font-manrope text-sm text-muted-foreground leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-2">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((highlight, index) => (
                      <li key={index} className="font-manrope text-sm text-muted-foreground flex gap-2">
                        <span className="text-brand-600 mt-1">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, index) => (
                      <Badge key={index} variant="outline" className="font-manrope text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
