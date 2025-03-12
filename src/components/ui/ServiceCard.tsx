
import { FC } from "react";
import { ExternalLink } from "lucide-react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  differentiation: string;
  actionText: string;
  isActive?: boolean;
}

export const ServiceCard: FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  differentiation,
  actionText,
  isActive = false,
}) => {
  return (
    <div
      className="border flex w-full flex-col text-base text-[#391400] font-normal leading-8 p-12 rounded-md border-[rgba(243,209,191,1)] border-solid bg-[rgba(253,240,233,1)] h-full"
    >
      <div className="flex items-stretch gap-6 text-2xl font-bold whitespace-nowrap leading-none">
        <img
          src={icon}
          className="aspect-[1] object-contain w-20 shrink-0 rounded-[50%]"
          alt={title}
        />
        <div className="my-auto">{title}</div>
      </div>
      <div className="text-[#391400] mt-7 flex flex-col gap-4">
        <p>{description}</p>
        <p className="italic">{differentiation}</p>
      </div>
      <div className="flex items-stretch gap-4 mt-auto pt-10">
        <button 
          onClick={() => {
            document.getElementById('portfolio-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex items-center gap-2 mt-3 cursor-pointer hover:text-[#EF6D58] transition-colors"
        >
          {actionText}
          <ExternalLink size={18} />
        </button>
      </div>
    </div>
  );
};
