import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import Seo from "@/components/Seo";

const projects = [
  { name: "NIT – Trichy", location: "Tamil Nadu", category: "Education" },
  { name: "KMCH Hospital", location: "Kerala", category: "Healthcare" },
  { name: "SRIHARIKOTA (ISRO)", location: "Andhra Pradesh", category: "Aerospace" },
  { name: "Rajagiri Hospital", location: "Kochi", category: "Healthcare" },
  { name: "Cochin Airport Cargo (CIAL)", location: "Kerala", category: "Aviation" },
  { name: "KSDP", location: "Kerala", category: "Pharmaceutical" },
  { name: "TP Solar (Tata Project)", location: "Tirunelveli", category: "Energy" },
  { name: "Lakeshore Hospital", location: "Kerala", category: "Healthcare" },
  { name: "Techno Park Phase-03", location: "Thiruvananthapuram", category: "IT Park" },
  { name: "IBM World Trade Centre", location: "Kakkanad", category: "Commercial" },
  { name: "Vijaya Convention Centre", location: "Thiruvalla", category: "Hospitality" },
  { name: "IBM", location: "Kakkanad, Kochi", category: "Commercial" },
];

const categories = [...new Set(projects.map((p) => p.category))];

const ProjectsPage = () => (
  <Layout>
    <Seo
      title="Projects"
      description="View TAB Technical Services project experience across hospitals, airports, commercial buildings, IT parks, and industrial facilities in South India."
      path="/projects"
      keywords="HVAC projects India, hospital TAB projects, airport commissioning, commercial HVAC balancing, TAB portfolio"
    />
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Projects</h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">Successfully completed across multiple sectors and states</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Category badges */}
        <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((c) => (
            <span key={c} className="bg-accent/10 text-accent border border-accent/20 px-4 py-1.5 rounded-full text-xs font-semibold">{c}</span>
          ))}
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <AnimatedSection key={p.name} delay={i * 0.05}>
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-lg">
                <span className="text-[10px] uppercase tracking-widest text-accent font-semibold">{p.category}</span>
                <h3 className="font-bold text-foreground text-lg mt-1 mb-1">{p.name}</h3>
                <p className="text-muted-foreground text-sm">{p.location}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default ProjectsPage;
