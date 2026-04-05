import AnimatedSection from "@/components/AnimatedSection";

const projects = [
  { name: "NIT Trichy", location: "Tamil Nadu" },
  { name: "KMCH Hospital", location: "Kerala" },
  { name: "Sriharikota (ISRO)", location: "Andhra Pradesh" },
  { name: "Rajagiri Hospital", location: "Kochi" },
  { name: "Cochin Airport Cargo", location: "Kerala" },
  { name: "KSDP", location: "Kerala" },
  { name: "TP Solar", location: "Tirunelveli" },
  { name: "Lakeshore Hospital", location: "Kerala" },
  { name: "Techno Park Phase 03", location: "Thiruvananthapuram" },
  { name: "IBM World Trade Centre", location: "Kakkanad" },
  { name: "Vijaya Convention Centre", location: "Thiruvalla" },
  { name: "IBM", location: "Kakkanad, Kochi" },
];

const Projects = () => (
  <section className="bg-primary py-16 text-primary-foreground sm:py-20">
    <div className="container mx-auto px-4">
      <AnimatedSection className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Selected Projects</h2>
        <div className="mx-auto h-1 w-16 rounded-full bg-accent" />
      </AnimatedSection>

      <div className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <AnimatedSection key={project.name} delay={index * 0.05}>
            <div className="flex items-center gap-3 rounded-2xl bg-primary-foreground/10 px-4 py-4 backdrop-blur-sm transition-transform duration-200 hover:scale-[1.02]">
              <span className="h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
              <div>
                <span className="block text-sm font-medium">{project.name}</span>
                <span className="text-xs opacity-70">{project.location}</span>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
