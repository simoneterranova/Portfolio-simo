import { Hero } from "@/components/sections/Hero";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { PortfolioItem } from "@/components/ui/PortfolioItem";
import { 
  Download, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink, 
  Cpu, 
  Activity, 
  Database 
} from "lucide-react";

const Index = () => {
  return (
    <main className="bg-white overflow-hidden">
      <Hero />

      {/* Services Section */}
      <section id="services-section" className="bg-[rgba(253,240,233,1)] flex w-full flex-col items-center pt-[92px] max-md:max-w-full pb-20">
        <h2 className="text-[#EF6D58] text-center text-base font-normal leading-8 tracking-[3px] uppercase">
          Technical Expertise
        </h2>
        <h3 className="text-[#391400] text-center text-4xl md:text-5xl font-extrabold leading-tight md:leading-[64px] tracking-[-1px] mt-5 px-4 max-w-3xl mx-auto">
          Capabilities
        </h3>

        <div className="w-full max-w-[1171px] mt-16 max-md:mt-10 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7536a91837422362247aa79c66f7364be655e3d409453097ae25df8589c8cc9d?placeholderIfAbsent=true"
              title="IoT Ecosystem Development"
              description="Architecting comprehensive Internet of Things solutions that seamlessly connect physical and digital worlds through intelligent sensor networks and responsive systems."
              differentiation="Each implementation is engineered for scalability, security, and real-world application."
              actionText="Explore IoT Solutions"
            />
            <ServiceCard
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/5d41cf189d2141f5c6c1f8178a5e0173ef3e4b54b8212a834222e11987d6d7f3?placeholderIfAbsent=true"
              title="Simulation Engineering"
              description="Designing sophisticated simulation frameworks that model complex systems, identify inefficiencies, and implement optimization algorithms for measurable performance improvements."
              differentiation="Combining mathematical precision with practical application to deliver tangible efficiency gains."
              actionText="Review Optimization Case Studies"
            />
            <ServiceCard
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7536a91837422362247aa79c66f7364be655e3d409453097ae25df8589c8cc9d?placeholderIfAbsent=true"
              title="Advanced Analytics & ML"
              description="Transforming raw data into actionable intelligence through custom machine learning models and comprehensive analytical frameworks."
              differentiation="Focused on delivering predictive capabilities and decision support systems that drive operational excellence."
              actionText="Examine Analytics Projects"
            />
          </div>
        </div>

        <div className="max-w-[1171px] mt-[60px] text-[#391400] text-center px-4 max-md:mt-10">
          <p className="text-base font-normal leading-8">
            Looking for technical implementation expertise in Python, Java, or C++? My programming proficiency spans multiple languages and application domains.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio-section" className="bg-[rgba(40,41,62,1)] w-full py-[94px] max-md:py-[60px]">
        <div className="max-w-[1171px] mx-auto px-5">
          <div className="flex justify-between items-center flex-wrap gap-5 mb-16">
            <div>
              <span className="text-[#EF6D58] text-base font-normal leading-8 tracking-[3px] uppercase block">
                Portfolio
              </span>
              <h2 className="text-white text-3xl md:text-5xl font-extrabold leading-tight tracking-[-1px] mt-5">
                Featured Engineering Solutions
              </h2>
            </div>
            <a 
              href="https://github.com/simoneterranova" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-white font-black text-center uppercase border px-[31px] py-[17px] rounded-md border-[rgba(255,255,255,0.296)] hover:bg-white hover:text-[rgba(40,41,62,1)] transition-colors flex items-center gap-2"
            >
              View Complete Portfolio
              <ExternalLink size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <PortfolioItem
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/523ff950d7673d8b7dc901f913c977697f1b97a44c0bb00fb4c4d5aeacf2b265?placeholderIfAbsent=true"
              domain="IoT Architecture & ML"
              title="Precision Indoor Positioning System"
              brief="Engineered an intelligent indoor positioning framework leveraging wireless sensor networks and advanced machine learning algorithms to achieve sub-meter location accuracy in complex indoor environments."
              innovation="Implementation of novel signal processing techniques to overcome traditional positioning limitations."
              category="Current M.Sc Research"
            />
            <PortfolioItem
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/af718d39718c44a0d416b572d57ec738fc3e328a9fb09bab3c7aeec2cd9a9949?placeholderIfAbsent=true"
              domain="IoT Systems Integration"
              title="Ambient Intelligence Environment"
              brief="Developed a comprehensive smart environment solution that dynamically optimizes ambient parameters based on real-time sensor data and user preferences."
              innovation="Multi-parameter optimization system balancing lighting, acoustic, and thermal conditions simultaneously."
              category="Project"
            />
            <PortfolioItem
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/6e39076dd89b58070f8ca48f9ca347e06d9b2a4abff62960f83f75bd4ca1af62?placeholderIfAbsent=true"
              domain="Smart Grid Systems"
              title="Intelligent Energy Trading Platform"
              brief="Created an automated energy trading system utilizing real-time grid data, advanced forecasting models, and optimization algorithms to maximize efficiency and value."
              innovation="Implementation of time-series forecasting models with adaptive learning capabilities."
              category="Project"
            />
            <PortfolioItem
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/523ff950d7673d8b7dc901f913c977697f1b97a44c0bb00fb4c4d5aeacf2b265?placeholderIfAbsent=true"
              domain="Healthcare Technology"
              title="Telemedicine Diagnostic Platform"
              brief="Architected a specialized telemedicine solution incorporating secure data transmission, image analysis algorithms, and remote consultation functionality for dermatological applications."
              innovation="Integration of image processing techniques with secure medical data handling protocols."
              category="Project"
            />
            <PortfolioItem
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/af718d39718c44a0d416b572d57ec738fc3e328a9fb09bab3c7aeec2cd9a9949?placeholderIfAbsent=true"
              domain="Operations Research"
              title="High-Efficiency Logistics Simulation"
              brief="Engineered a comprehensive simulation model for baggage handling systems, implementing custom optimization algorithms to reduce transfer times by 23%."
              innovation="Multi-objective optimization approach balancing throughput, reliability, and resource utilization."
              category="Project"
            />
            <PortfolioItem
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/6e39076dd89b58070f8ca48f9ca347e06d9b2a4abff62960f83f75bd4ca1af62?placeholderIfAbsent=true"
              domain="Electronic Systems Engineering"
              title="Precision Instrumentation Enhancement"
              brief="Designed and implemented a specialized hardware filter solution for atomic force microscopy, significantly enhancing signal quality and measurement resolution."
              innovation="Novel filter topology optimized for nanoscale measurement applications."
              category="Project"
            />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about-section" className="bg-[rgba(253,240,233,1)] py-24">
        <div className="max-w-[1171px] mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-[#EF6D58] text-base font-normal leading-8 tracking-[3px] uppercase">
              About Me
            </h2>
            <h3 className="text-[#391400] text-3xl md:text-5xl font-extrabold leading-tight md:leading-[64px] tracking-[-1px] mt-5">
              Professional Background
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a2c38714444cb191a0edee555e3cd5ac78fa81d2dea1c566a866f95a1266a84?placeholderIfAbsent=true"
                alt="Simone Terranova Profile" 
                className="rounded-lg w-full h-auto shadow-lg"
              />
            </div>
            <div className="text-[#391400]">
              <h4 className="text-3xl font-bold mb-6">Simone Terranova</h4>
              <p className="text-base leading-8 mb-6">
                As an ICT Engineer with specialized expertise in emergent technologies, I focus on creating intelligent systems that bridge theoretical capabilities with practical implementation. My academic and project work at Politecnico di Torino has established my capability to deliver sophisticated technical solutions across multiple domains.
              </p>
              
              <div className="mb-6">
                <h5 className="text-xl font-semibold mb-3">Academic Qualifications</h5>
                <ul className="list-disc pl-5 space-y-2">
                  <li>M.Sc. in ICT for Smart Societies, Politecnico di Torino (In progress, 2023-Present)</li>
                  <li>B.Sc. in Electronic Engineering, Politecnico di Torino (Completed 2023)</li>
                  <li>Scientific Lyceum, Advanced Mathematics and Physics Focus (2020)</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h5 className="text-xl font-semibold mb-3">Technical Competencies</h5>
                <ul className="list-disc pl-5 space-y-2">
                  <li>IoT System Architecture & Implementation</li>
                  <li>Simulation Engineering & Computational Optimization</li>
                  <li>Data Analytics & Machine Learning Applications</li>
                  <li>Multi-language Programming Proficiency (Python, Java, C++)</li>
                  <li>Systems Integration & Collaborative Engineering</li>
                </ul>
              </div>
              
              <p className="text-base leading-8 mb-10">
                My engineering approach centers on creating technological solutions that elegantly address complex challenges. I believe effective systems must balance technical sophistication with practical implementation, always focusing on delivering measurable value.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://example.com/cv" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[rgba(239,109,88,1)] text-sm text-white font-black uppercase px-8 py-4 rounded-md hover:bg-[rgba(239,109,88,0.9)] transition-colors flex items-center gap-2"
                >
                  <Download size={16} />
                  Download Comprehensive CV
                </a>
                <button
                  onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border border-[#391400] text-sm text-[#391400] font-black uppercase px-8 py-4 rounded-md hover:bg-[#391400] hover:text-white transition-colors flex items-center gap-2"
                >
                  <Calendar size={16} />
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Enhanced with clickable buttons */}
      <section id="contact-section" className="bg-[rgba(40,41,62,1)] py-24">
        <div className="max-w-[1140px] mx-auto px-5">
          <div className="text-white max-w-2xl mx-auto text-center">
            <span className="text-[#EF6D58] text-base leading-8 tracking-[3px] uppercase block">
              Contact
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-[-1px] mt-5 mb-7">
              Professional Inquiries
            </h2>
            <p className="text-base leading-8 mb-10">
              I welcome discussions regarding technical collaborations, research opportunities, and consulting engagements in IoT development, simulation engineering, or data analytics implementations.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10">
              <a 
                href="https://maps.app.goo.gl/gX5XZfSW5jwqZLVo7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-[#EF6D58] transition-colors"
              >
                <div className="bg-[rgba(58,60,86,1)] p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-[#EF6D58]" />
                </div>
                <span>Torino (TO), Italy</span>
              </a>
              
              <a 
                href="tel:+393809023956" 
                className="flex items-center gap-4 hover:text-[#EF6D58] transition-colors"
              >
                <div className="bg-[rgba(58,60,86,1)] p-3 rounded-full">
                  <Phone className="w-6 h-6 text-[#EF6D58]" />
                </div>
                <span>(+39) 380 902 39 56</span>
              </a>
              
              <a 
                href="mailto:simonet835@gmail.com" 
                className="flex items-center gap-4 hover:text-[#EF6D58] transition-colors"
              >
                <div className="bg-[rgba(58,60,86,1)] p-3 rounded-full">
                  <Mail className="w-6 h-6 text-[#EF6D58]" />
                </div>
                <span>simonet835@gmail.com</span>
              </a>
            </div>
            
            <div className="flex justify-center mt-12">
              <a 
                href="https://calendly.com/simoneterranova" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#EF6D58] text-sm text-white font-black uppercase px-8 py-4 rounded-md hover:bg-[rgba(239,109,88,0.9)] transition-colors flex items-center gap-2"
              >
                <Calendar size={16} />
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Footer */}
      <footer className="bg-[rgba(40,41,62,1)] py-12 px-5">
        <div className="max-w-[1170px] mx-auto text-center">
          <div className="text-white text-base">
            Copyright © 2025 Simone Terranova. All Rights Reserved.
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
