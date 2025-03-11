
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
                <div className="flex items-center gap-4">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/32a102ca2fb2a4512bf99904e938d75595e48653a5d2ade0f0067039404bdaac?placeholderIfAbsent=true"
                    className="w-12 h-12 rounded-full"
                    alt="Location"
                  />
                  <span>10125, Torino, TO</span>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0265a5d3071b8272dab6d40cee8118505b2e2e3958482ad6c8f02c61ebe3c8c3?placeholderIfAbsent=true"
                    className="w-12 h-12 rounded-full"
                    alt="Phone"
                  />
                  <span>(+39) 380 902 39 56</span>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc6bc5d3ef4dd7a7ae9c890f743f9daf2de461eb291cad6ddaa0bc3be035a06e?placeholderIfAbsent=true"
                    className="w-12 h-12 rounded-full"
                    alt="Email"
                  />
                  <span>simonet835@gmail.com</span>
                </div>
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
