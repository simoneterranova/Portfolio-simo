
import { FC } from "react";

interface PortfolioItemProps {
  image: string;
  category: string;
  title: string;
  brief: string;
  innovation: string;
  domain: string;
}

export const PortfolioItem: FC<PortfolioItemProps> = ({
  image,
  category,
  title,
  brief,
  innovation,
  domain,
}) => {
  return (
    <div className="border border-[rgba(58,60,86,1)] p-4 h-full">
      <div className="relative min-h-[576px] flex flex-col justify-end p-6 max-md:p-4 bg-[rgba(40,41,62,0.9)]">
        <img
          src={image}
          className="absolute inset-0 w-full h-full object-cover z-0"
          alt={title}
        />
        <div className="relative z-10 mt-auto bg-[rgba(40,41,62,0.85)] p-6 rounded-md backdrop-blur-sm">
          <span className="relative bg-white text-base text-[#391400] font-normal leading-8 px-4 py-[3px] rounded-[19px] inline-block">
            {domain}
          </span>
          <h3 className="text-white text-[32px] font-extrabold leading-[1.2] mt-[15px]">
            {title}
          </h3>
          <p className="text-white text-sm mt-3">{brief}</p>
          <div className="mt-3 text-[#EF6D58] text-sm">
            <span className="font-semibold">Key Innovation:</span> {innovation}
          </div>
        </div>
      </div>
    </div>
  );
};
