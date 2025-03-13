import { Hero } from "@/components/sections/Hero";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { PortfolioItem } from "@/components/ui/PortfolioItem";
import { AboutMe } from "@/components/sections/AboutMe";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { useSectionTransition } from "@/hooks/use-section-transition";
import { 
  Download, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink, 
  Cpu, 
  Activity, 
  Database,
  Github
} from "lucide-react";

const Index = () => {
  // Create refs and visibility states for each section but initialize as true for immediate visibility
  const [portfolioRef, portfolioVisible] = useSectionTransition(0.1);
  const [capabilitiesRef, capabilitiesVisible] = useSectionTransition(0.1);
  const [contactRef, contactVisible] = useSectionTransition(0.1);
  
  // Function to smoothly scroll to a specific section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="bg-[var(--main-bg-color)] overflow-hidden">
      {/* HERO Section */}
      <Hero />

      {/* BACKGROUND Section */}
      <AboutMe />

      {/* PORTFOLIO Section */}
      <section 
        id="portfolio-section" 
        className="themed-section w-full py-[94px] max-md:py-[60px]"
        ref={portfolioRef as React.RefObject<HTMLDivElement>}
      >
        {/* Use a simpler approach without conditional section visibility */}
        <div className="max-w-[1171px] mx-auto px-5">
          {/* Centered Portfolio Heading */}
          <div className="text-center mb-16">
            <span className="text-[var(--accent-color)] text-base font-normal leading-8 tracking-[3px] uppercase block">
              Portfolio
            </span>
            <h2 className="text-[var(--text-color)] text-3xl md:text-5xl font-extrabold leading-tight tracking-[-1px] mt-5">
              Featured Engineering Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
            {/* Portfolio items */}
            <PortfolioItem
              image="/UIP_IMAGE.png"
              domain="IoT Architecture & ML"
              title="Indoor Positioning System"
              brief="Engineered an intelligent indoor positioning framework leveraging Bluetooth Low Energy, ESP32, BLE tags and machine learning algorithms to enhance location accuracy in complex indoor environments."
              innovation="Implementation of Machine Learning techniques to overcome traditional positioning limitations."
              category="M.Sc Research"
            />
            <PortfolioItem
              image="/IOT_IMAGE.png"
              domain="IoT Systems Integration"
              title="Smart Relax Room"
              brief="Designed and implemented an IoT-based smart relax room that optimizes ambient conditions—lighting, temperature, humidity to create a comfortable environment."
              innovation="Integrated sensor-driven informations coupled with a machine learning model that predicts the optimal room occupancy."
              category="Project"
            />
            <PortfolioItem
              image="/SG_IMAGE.jpeg"
              domain="Smart Grid Systems"
              title="Smart Trading System"
              brief="Developed a prototype that integrates smart grid data to automate energy trading using forecasting and optimization algorithms."
              innovation="Combined forecasting and optimization techniques to enhance trading efficiency."
              category="Project"
            />
            <PortfolioItem
              image="/INTERDISC_IMAGE.jpeg"
              domain="Healthcare Technology & DL"
              title="Telemedicine and Skin"
              brief="Built a telemedicine platform focused on dermatological applications, incorporating image analysis and remote consultation features."
              innovation="Leveraged image processing methods to support diagnostic accuracy."
              category="Project"
            />
            <PortfolioItem
              image="/OR_IMAGE.jpeg"
              domain="Operational Research"
              title="Baggage Handling System"
              brief="Developed a simulation model for an efficient baggage handling system, utilizing optimization techniques to minimize transfer times and improve throughput."
              innovation="Employed multi-objective optimization strategies to balance efficiency and resource utilization."
              category="Project"
            />
            <PortfolioItem
              image="/tesi_triennale.jpeg"
              domain="Electronic Systems Engineering"
              title="Hardware Filter for AFM"
              brief="Designed and implemented a custom hardware filter to enhance signal quality and resolution in atomic force microscopy."
              innovation="Developed an innovative filter topology optimized for nanoscale measurements."
              category="B.Sc Research"
            />

          </div>
          
          {/* View Complete Portfolio button */}
          <div className="flex justify-center mt-16">
            <a 
              href="https://github.com/simoneterranova" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block relative"
            >
              <span className="text-[var(--text-color)] text-lg font-medium px-8 py-3 border-2 border-[var(--accent-color)] rounded-full inline-flex items-center gap-2 relative z-10 hover:bg-[var(--accent-color)] hover:text-white transition-colors duration-300 cursor-pointer">
                View Github Profile
                <ExternalLink size={16} />
              </span>
              <div className="absolute -inset-1 bg-[var(--accent-color)] rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
            </a>
          </div>
        </div>
      </section>

      {/* CAPABILITIES Section (previously Technical Expertise) - FIXED */}
      <section 
        id="capabilities-section" 
        className="themed-section w-full flex flex-col items-center pt-[92px] max-md:max-w-full pb-24 relative overflow-hidden"
        ref={capabilitiesRef as React.RefObject<HTMLDivElement>}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[var(--accent-color)] to-transparent opacity-5 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[var(--accent-color)] to-transparent opacity-5 blur-3xl rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-[1171px] mx-auto px-5 w-full">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-[var(--accent-color)] rounded-full mb-6 mx-auto"></div>
            <h2 className="text-[var(--accent-color)] text-center text-base font-normal leading-8 tracking-[3px] uppercase">
              Technical Expertise
            </h2>
            <h3 className="text-[var(--text-color)] text-center text-4xl md:text-5xl font-extrabold leading-tight md:leading-[64px] tracking-[-1px] mt-5 px-4 max-w-3xl mx-auto">
              Capabilities
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Cpu className="w-full h-full" />}
              title="IoT Ecosystem Development"
              description="Architecting comprehensive Internet of Things solutions that seamlessly connect physical and digital worlds through intelligent sensor networks and responsive systems."
              differentiation="Each implementation is engineered for scalability, security, and real-world application."
            />
            <ServiceCard
              icon={<Activity className="w-full h-full" />}
              title="Simulation Engineering"
              description="Designing simulation frameworks that model systems, identify inefficiencies, and implement optimization algorithms for measurable performance improvements."
              differentiation="Combining mathematical precision with practical application to deliver tangible efficiency gains."
            />
            <ServiceCard
              icon={<Database className="w-full h-full" />}
              title="Advanced Analytics & ML"
              description="Transforming raw data into actionable intelligence through custom machine learning models and comprehensive analytical frameworks."
              differentiation="Focused on delivering predictive capabilities and decision support systems that drive operational excellence."
            />
          </div>



          {/* Let's Connect button */}
          <div className="mt-16 text-center">
            <div className="inline-block relative group">
              <button 
                onClick={() => scrollToSection('contact-section')}
                className="text-[var(--text-color)] text-lg font-medium px-8 py-3 border-2 border-[var(--accent-color)] rounded-full inline-block relative z-10 hover:bg-[var(--accent-color)] hover:text-white transition-colors duration-300 cursor-pointer"
              >
                Let's Connect!
              </button>
              <div className="absolute -inset-1 bg-[var(--accent-color)] rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT Section */}
      <section 
        id="contact-section" 
        className="themed-section py-24 relative overflow-hidden"
        ref={contactRef as React.RefObject<HTMLDivElement>}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-[var(--accent-color)] to-transparent opacity-10 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-gradient-to-l from-[var(--accent-color)] to-transparent opacity-10 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#EF6D5820] rounded-full opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#EF6D5830] rounded-full opacity-20"></div>
        </div>
        
        <div className="max-w-[1140px] mx-auto px-5 relative z-10">
          <div className="text-[var(--text-color)] max-w-3xl mx-auto text-center mb-16">
            <span className="text-[var(--accent-color)] text-base leading-8 tracking-[3px] uppercase block">
              Contact
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-[-1px] mt-5 mb-7">
              Professional Inquiries
            </h2>
            <p className="text-base leading-8 mb-10">
              I welcome discussions regarding technical collaborations, research opportunities, and consulting engagements in IoT development, simulation engineering, or data analytics implementations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {/* Contact cards - location */}
            <a 
              href="https://maps.app.goo.gl/SHYTEUv5g3JNzDj67" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-card group bg-[var(--card-bg)] backdrop-blur-sm p-8 rounded-xl border border-[var(--card-border)] flex flex-col items-center text-center transition-all duration-300 hover:bg-[var(--card-hover-bg)] hover:border-[#EF6D5850] hover:shadow-lg hover:shadow-[#EF6D5820] hover:-translate-y-1"
            >
              <div className="bg-[var(--accent-subtle)] p-4 rounded-full mb-5 group-hover:bg-[var(--accent-color)] transition-colors duration-300">
                <MapPin className="w-7 h-7 text-[var(--accent-color)] group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-[var(--text-muted)] group-hover:text-[var(--text-color)] transition-colors duration-300">Torino (TO), Italy</p>
            </a>
            
            {/* Contact cards - email */}
            <a 
              href="mailto:simonet835@gmail.com" 
              className="contact-card group bg-[var(--card-bg)] backdrop-blur-sm p-8 rounded-xl border border-[var(--card-border)] flex flex-col items-center text-center transition-all duration-300 hover:bg-[var(--card-hover-bg)] hover:border-[#EF6D5850] hover:shadow-lg hover:shadow-[#EF6D5820] hover:-translate-y-1"
            >
              <div className="bg-[var(--accent-subtle)] p-4 rounded-full mb-5 group-hover:bg-[var(--accent-color)] transition-colors duration-300">
                <Mail className="w-7 h-7 text-[var(--accent-color)] group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-[var(--text-muted)] group-hover:text-[var(--text-color)] transition-colors duration-300">simonet835@gmail.com</p>
            </a>
            
            {/* Contact cards - GitHub */}
            <a 
              href="https://github.com/simoneterranova" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-card group bg-[var(--card-bg)] backdrop-blur-sm p-8 rounded-xl border border-[var(--card-border)] flex flex-col items-center text-center transition-all duration-300 hover:bg-[var(--card-hover-bg)] hover:border-[#EF6D5850] hover:shadow-lg hover:shadow-[#EF6D5820] hover:-translate-y-1"
            >
              <div className="bg-[var(--accent-subtle)] p-4 rounded-full mb-5 group-hover:bg-[var(--accent-color)] transition-colors duration-300">
                <Github className="w-7 h-7 text-[var(--accent-color)] group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-[var(--text-muted)] group-hover:text-[var(--text-color)] transition-colors duration-300">simoneterranova</p>
            </a>
          </div>

          {/* Add animation keyframes */}
          <style>{`
            @keyframes pulse-slow {
              0%, 100% { opacity: 0.3; }
              50% { opacity: 0.4; }
            }
            .animate-pulse-slow {
              animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }
            .contact-card {
              transform: perspective(1000px) rotateY(0deg);
              backface-visibility: hidden;
            }
            .contact-card:hover {
              transform: perspective(1000px) rotateY(5deg) translateY(-4px);
            }
          `}</style>
        </div>
      </section>

      {/* Simplified Footer */}
      <footer className="themed-section py-12 px-5">
        <div className="max-w-[1170px] mx-auto text-center">
          <div className="text-[var(--text-color)] text-base">
            Copyright © 2025 Simone Terranova. All Rights Reserved.
          </div>
        </div>
      </footer>
      
      {/* Scroll to top button */}
      <ScrollToTop />
    </main>
  );
};

export default Index;