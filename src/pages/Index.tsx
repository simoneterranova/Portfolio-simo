import { Hero } from "@/components/sections/Hero";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { ContactForm } from "@/components/ui/ContactForm";

const Index = () => {
  return (
    <main className="bg-white overflow-hidden">
      <Hero />

      {/* Services Section */}
      <section className="bg-[rgba(253,240,233,1)] flex w-full flex-col items-center pt-[92px] max-md:max-w-full">
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
              isActive
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
      <section className="bg-[rgba(40,41,62,1)] w-full py-[94px] max-md:py-[60px]">
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
            <button className="text-sm text-white font-black text-center uppercase border px-[31px] py-[17px] rounded-md border-[rgba(255,255,255,0.296)] hover:bg-white hover:text-[rgba(40,41,62,1)] transition-colors">
              Explore More
            </button>
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
                  <span className="relative bg-white text-base text-[#391400] font-normal leading-8 px-4 py-[3px] rounded-[19px] inline-block">
                    {item.category}
                  </span>
                  <h3 className="relative text-white text-[40px] font-extrabold leading-[1.2] mt-[23px]">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 max-w-[1171px] mx-auto px-5">
        <h2 className="text-[#EF6D58] text-center text-base font-normal leading-8 tracking-[3px] uppercase">
          Testimonials
        </h2>
        <h3 className="text-[#391400] text-center text-[56px] font-extrabold leading-[64px] tracking-[-1px] mt-5 max-md:text-[40px] max-md:leading-[51px]">
          What My Clients Saying
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
          <TestimonialCard
            content="Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety."
            avatar="https://cdn.builder.io/api/v1/image/assets/TEMP/fd1a3ddb838ae3fbb0be420c8269362fa315e46a4db5e131c4b496761770f830?placeholderIfAbsent=true"
            name="Graham Griffiths"
            company="Twitor"
          />
          <TestimonialCard
            content="A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions."
            avatar="https://cdn.builder.io/api/v1/image/assets/TEMP/9ccaaa63308bf50ffd8ee40e70c8fe6920fdacd5b7291f8e1fa15995f526932d?placeholderIfAbsent=true"
            name="Alan Martí"
            company="Meta Inc."
            isActive
          />
          <TestimonialCard
            content="Provide your business with a variety of digital solutions to promote your product or service online."
            avatar="https://cdn.builder.io/api/v1/image/assets/TEMP/d9d635055b6e5f949a8dc0301b44b6464c7389f80d26bf9131531c368ce344a5?placeholderIfAbsent=true"
            name="Richardo Kann"
            company="Photogram"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[rgba(40,41,62,1)] py-48 max-md:py-24">
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
                  <span>2247 Lunetta Street, TX 76301</span>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0265a5d3071b8272dab6d40cee8118505b2e2e3958482ad6c8f02c61ebe3c8c3?placeholderIfAbsent=true"
                    className="w-12 h-12 rounded-full"
                    alt="Phone"
                  />
                  <span>+1 (234) 567-89-00</span>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc6bc5d3ef4dd7a7ae9c890f743f9daf2de461eb291cad6ddaa0bc3be035a06e?placeholderIfAbsent=true"
                    className="w-12 h-12 rounded-full"
                    alt="Email"
                  />
                  <span>info@agency.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[rgba(40,41,62,1)] pt-[89px] pb-[52px] px-20 max-md:px-5">
        <div className="max-w-[1170px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-[68px]">
            <div>
              <h2 className="text-white text-2xl font-bold">Personal</h2>
            </div>
            <div>
              <h3 className="text-[#EF6D58] text-base tracking-[3px] uppercase mb-4">
                Menu
              </h3>
              <nav className="text-white space-y-2">
                <a
                  href="#"
                  className="block hover:text-[#EF6D58] transition-colors"
                >
                  About
                </a>
                <a
                  href="#"
                  className="block hover:text-[#EF6D58] transition-colors"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="block hover:text-[#EF6D58] transition-colors"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="block hover:text-[#EF6D58] transition-colors"
                >
                  Contact
                </a>
              </nav>
            </div>
            <div>
              <h3 className="text-[#EF6D58] text-base tracking-[3px] uppercase mb-4">
                Service
              </h3>
              <nav className="text-white space-y-2">
                <a
                  href="#"
                  className="block hover:text-[#EF6D58] transition-colors"
                >
                  Design
                </a>
                <a
                  href="#"
                  className="block hover:text-[#EF6D58] transition-colors"
                >
                  Development
                </a>
                <a
                  href="#"
                  className="block hover:text-[#EF6D58] transition-colors"
                >
                  Marketing
                </a>
                <a
                  href="#"
                  className="block hover:text-[#EF6D58] transition-colors"
                >
                  See More
                </a>
              </nav>
            </div>
          </div>

          <div className="border-t border-[rgba(58,60,86,1)] pt-[43px]">
            <div className="flex flex-wrap justify-between gap-5 text-white text-base">
              <div>Copyright © 2022 Laaqiq. All Rights Reserved.</div>
              <div className="flex gap-[40px]">
                <a href="#" className="hover:text-[#EF6D58] transition-colors">
                  Terms of Use
                </a>
                <a href="#" className="hover:text-[#EF6D58] transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
