import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import Seo from "@/components/Seo";
import { MessageCircle, Phone, Mail, Globe, MapPin } from "lucide-react";

const ContactPage = () => (
  <Layout>
    <Seo
      title="Contact"
      description="Contact TAB Technical Services in Chennai and Kerala for HVAC testing, adjusting, balancing, and commissioning support."
      path="/contact"
      keywords="Contact TAB Technical Services, HVAC company Chennai phone number, commissioning support Kerala"
    />
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">Get in touch for all your HVAC testing and commissioning needs</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <AnimatedSection direction="left" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Reach Out to Us</h2>
              <p className="text-muted-foreground mb-8">We are ready to assist you with your HVAC testing, adjusting, and balancing requirements. Contact us through any of the channels below.</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+916380513174"
                  className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
                >
                  <Phone size={18} />
                  Call Us
                </a>
                <a
                  href="https://chat.whatsapp.com/LbIjl9dvfdJ9CBNSe3cWJG?mode=gi_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-border bg-card px-6 py-3 rounded-md font-semibold text-foreground hover:bg-muted transition-colors"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
            </div>

            {[
              {
                icon: Phone,
                title: "Phone",
                content: (
                  <>
                    <a href="tel:+916380513174" className="text-muted-foreground hover:text-accent transition-colors block">+91 6380513174</a>
                    <a href="tel:+918848908880" className="text-muted-foreground hover:text-accent transition-colors block">+91 8848908880</a>
                  </>
                ),
              },
              {
                icon: Mail,
                title: "Email",
                content: <a href="mailto:tabtechnicalservice@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">tabtechnicalservice@gmail.com</a>,
              },
              {
                icon: Globe,
                title: "Website",
                content: <a href="https://www.tabtechnicalservices.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">www.tabtechnicalservices.com</a>,
              },
              {
                icon: MapPin,
                title: "Offices",
                content: (
                  <>
                    <p className="text-muted-foreground text-sm">Nandampakkam, Kundrathur, Chennai 600069</p>
                    <p className="text-muted-foreground text-sm mt-1">Udhayanapuram, Vaikom, Kottayam, Kerala 686146</p>
                  </>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-accent" size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  {item.content}
                </div>
              </div>
            ))}
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="bg-card border border-border rounded-lg p-8 shadow-md">
              <h3 className="font-bold text-foreground text-xl mb-6">Send us a message</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Your Name</label>
                  <input type="text" placeholder="Enter your name" className="w-full border border-border rounded-md px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-shadow" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Your Email</label>
                  <input type="email" placeholder="Enter your email" className="w-full border border-border rounded-md px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-shadow" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Subject</label>
                  <input type="text" placeholder="Enter subject" className="w-full border border-border rounded-md px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-shadow" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea placeholder="Enter your message" rows={5} className="w-full border border-border rounded-md px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none transition-shadow" />
                </div>
                <a href="mailto:tabtechnicalservice@gmail.com" className="inline-block w-full text-center bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity">
                  Send Message
                </a>
              </form>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-12 text-center">
          <p className="text-xs text-muted-foreground max-w-xl mx-auto">
            <strong>Note:</strong> There are no other branches of TAB Technical Service in India. Any identical name available is not related to us and nobody is representing TAB Technical Services aside from the name mentioned above.
          </p>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default ContactPage;
