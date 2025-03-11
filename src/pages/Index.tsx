import { Hero } from "@/components/sections/Hero";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ContactForm } from "@/components/ui/ContactForm";

const Index = () => {
  return (
    <main className="bg-white overflow-hidden">
      <Hero />

      {/* Services Section */}
      <section id="services-section" className="bg-[rgba(253,240,233,1)] flex w-full flex-col items-center pt-[92px] max-md:max-w-full">
        <h2 className="text-[#EF6D58] text-center text-base font-normal leading-8 tracking-[3px] uppercase">
          Service
        </h2>
        <h3 className="text-[#391400] text-center text-[56px] font-extrabold leading-[64px] tracking-[-1px] mt-5 max-md:max-w-full max-md:text-[40px] max-md:leading-[51px]">
          How I Can Help You With
        </h3>

        <div className="w-full max-w-[1171px] mt-16 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <ServiceCard
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7536a91837422362247aa79c66f7364be655e3d409453097ae25df8589c8cc9d?placeholderIfAbsent=true"
              title="Design"
              description="Agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house."
            />
            <ServiceCard
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/5d41cf189d2141f5c6c1f8178a5e0173ef3e4b54b8212a834222e11987d6d7f3?placeholderIfAbsent=true"
              title="Development"
              description="Hire to outsource your digital marketing efforts, instead of handling in-house can provide your business."
            />
          </div>
        </div>

        <div className="flex w-[261px] max-w-full items-stretch gap-2 text-base font-normal leading-8 mt-[60px] max-md:mt-10">
          <span className="text-[#391400] text-right grow">
            Want more service?
          </span>
          <a
            href="#"
            className="text-[#391400] hover:text-[#EF6D58] transition-colors"
          >
            Explore Now
          </a>
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
              <h2 className="text-white text-[56px] font-extrabold leading-none tracking-[-1px] mt-5 max-md:text-[40px]">
                Latest Work
              </h2>
            </div>
            <a 
              href="https://github.com/simoneterranova" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-white font-black text-center uppercase border px-[31px] py-[17px] rounded-md border-[rgba(255,255,255,0.296)] hover:bg-white hover:text-[rgba(40,41,62,1)] transition-colors"
            >
              Explore More
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Portfolio Items */}
            {[
              {
                image:
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/523ff950d7673d8b7dc901f913c977697f1b97a44c0bb00fb4c4d5aeacf2b265?placeholderIfAbsent=true",
                category: "Design",
                title: "SOFA",
              },
              {
                image:
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/af718d39718c44a0d416b572d57ec738fc3e328a9fb09bab3c7aeec2cd9a9949?placeholderIfAbsent=true",
                category: "Branding",
                title: "KeyBoard",
              },
              {
                image:
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/6e39076dd89b58070f8ca48f9ca347e06d9b2a4abff62960f83f75bd4ca1af62?placeholderIfAbsent=true",
                category: "Illustration",
                title: "Work Media",
              },
            ].map((item, index) => (
              <div key={index} className="border border-[rgba(58,60,86,1)] p-4">
                <div className="relative min-h-[576px] flex flex-col justify-end p-12 max-md:p-5">
                  <img
                    src={item.image}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt={item.title}
                  />
                  <div className="relative z-10 mt-auto">
                    <span className="relative bg-white text-base text-[#391400] font-normal leading-8 px-4 py-[3px] rounded-[19px] inline-block">
                      {item.category}
                    </span>
                    <h3 className="text-white text-[40px] font-extrabold leading-[1.2] mt-[23px]">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
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
            <h3 className="text-[#391400] text-[56px] font-extrabold leading-[64px] tracking-[-1px] mt-5 max-md:text-[40px] max-md:leading-[51px]">
              Who I Am
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
                I am a passionate designer and developer with over 5 years of experience in creating beautiful, functional digital experiences.
              </p>
              <p className="text-base leading-8 mb-6">
                My expertise includes UI/UX design, web development, and brand identity creation. I believe in the power of clean, user-centered design to solve complex problems.
              </p>
              <p className="text-base leading-8 mb-10">
                When I'm not designing or coding, you'll find me exploring new technologies, participating in design communities, and seeking inspiration from art and nature.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://example.com/cv" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[rgba(239,109,88,1)] text-sm text-white font-black uppercase px-8 py-4 rounded-md hover:bg-[rgba(239,109,88,0.9)] transition-colors"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Contact Section */}
      <section id="contact-section" className="bg-[rgba(40,41,62,1)] py-48 max-md:py-24">
        <div className="max-w-[1140px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <ContactForm />

            <div className="text-white">
              <span className="text-[#EF6D58] text-base leading-8 tracking-[3px] uppercase block">
                Contact
              </span>
              <h2 className="text-[56px] font-extrabold leading-none tracking-[-1px] mt-5 max-md:text-[40px]">
                Contact Me
              </h2>
              <p className="text-base leading-8 mt-7">
                A digital agency is a business you hire to outsource your
                digital marketing efforts, instead of handling in-house.
              </p>

              <div className="mt-[52px] space-y-4">
                {/* Location Button - Opens Google Maps */}
                <a 
                  href="https://www.google.com/maps/place/Turin,+Metropolitan+City+of+Turin,+Italy/@45.0677304,7.6443319,13z" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group hover:bg-[rgba(239,109,88,0.1)] p-3 rounded-lg transition-all cursor-pointer"
                  aria-label="View location on map"
                >
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center group-hover:bg-[#EF6D58] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EF6D58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors">
                      <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <span className="group-hover:text-[#EF6D58] transition-colors">10125, Torino, TO</span>
                </a>

                {/* Phone Button - Initiates Call */}
                <a 
                  href="tel:+393809023956" 
                  className="flex items-center gap-4 group hover:bg-[rgba(239,109,88,0.1)] p-3 rounded-lg transition-all cursor-pointer"
                  aria-label="Call me"
                >
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center group-hover:bg-[#EF6D58] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EF6D58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <span className="group-hover:text-[#EF6D58] transition-colors">(+39) 380 902 39 56</span>
                </a>

                {/* Email Button - Opens Mail Client */}
                <a 
                  href="mailto:simonet835@gmail.com" 
                  className="flex items-center gap-4 group hover:bg-[rgba(239,109,88,0.1)] p-3 rounded-lg transition-all cursor-pointer"
                  aria-label="Send me an email"
                >
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center group-hover:bg-[#EF6D58] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EF6D58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <span className="group-hover:text-[#EF6D58] transition-colors">simonet835@gmail.com</span>
                </a>
              </div>
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