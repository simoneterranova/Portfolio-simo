
export const Hero = () => {
  return (
    <section className="bg-[rgba(40,41,62,1)] flex w-full flex-col items-center pt-4 pb-[139px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <div className="w-full max-w-[1171px] -mb-7 max-md:max-w-full max-md:mb-2.5">
        <header className="flex w-full items-stretch gap-5 flex-wrap justify-between max-md:max-w-full">
          <div className="flex items-stretch gap-[15px] text-2xl text-white font-bold whitespace-nowrap leading-none">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c14c6972187000ae889da930f881ec151cc5542732e64f39e5666efdf17c47b?placeholderIfAbsent=true"
              className="aspect-[1.07] object-contain w-[46px] shrink-0"
              alt="Logo"
            />
            <span>Personal</span>
          </div>
          <nav className="flex items-stretch gap-[40px_100px] text-center flex-wrap max-md:max-w-full">
            <div className="text-white text-base font-normal leading-8 mt-3 max-md:max-w-full">
              About Services Pricing Blog
            </div>
            <button className="text-sm text-white font-black uppercase border px-[34px] py-[17px] rounded-md border-[rgba(255,255,255,0.296)] border-solid hover:bg-white hover:text-[rgba(40,41,62,1)] transition-colors">
              Contact
            </button>
          </nav>
        </header>

        <div className="mt-[122px] max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[45%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col self-stretch items-stretch text-base font-normal my-auto max-md:max-w-full max-md:mt-10">
                <span className="text-[#EF6D58] leading-8 tracking-[3px] uppercase">
                  Simone Terranova
                </span>
                <h1 className="text-white text-7xl font-extrabold leading-[80px] tracking-[-2px] mt-6 max-md:max-w-full max-md:text-[40px] max-md:leading-[49px]">
                  The Simple, <br />
                  Clean Design
                </h1>
                <p className="text-white leading-8 mr-6 mt-6 max-md:max-w-full max-md:mr-2.5">
                  Agency provides a full service range including technical
                  skills, design, business understanding.
                </p>
                <button className="bg-[rgba(239,109,88,1)] text-sm text-white font-black text-center uppercase mt-[52px] px-[27px] py-[17px] rounded-md max-md:mt-10 hover:bg-[rgba(239,109,88,0.9)] transition-colors">
                  See My Work
                </button>
              </div>
            </div>
            <div className="w-[55%] ml-5 max-md:w-full max-md:ml-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a2c38714444cb191a0edee555e3cd5ac78fa81d2dea1c566a866f95a1266a84?placeholderIfAbsent=true"
                className="aspect-[1.03] object-contain w-full grow rounded-[0px_0px_0px_0px] max-md:max-w-full max-md:mt-10"
                alt="Hero illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
