
import { FC } from "react";
import { ChevronRight } from "lucide-react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  differentiation: string;
  actionText: string;
}

export const ServiceCard: FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  differentiation,
  actionText,
}) => {
  return (
    <div className="bg-[rgba(253,240,233,1)] p-8 rounded-md flex flex-col h-full">
      <img src={icon} alt="" className="w-12 h-12 object-contain" />
      <h3 className="text-[#391400] text-xl md:text-2xl font-bold leading-tight mt-5">
        {title}
      </h3>
      <p className="text-[#391400] text-base leading-7 mt-4 break-words">
        {description}
      </p>
      <p className="text-[#EF6D58] text-base mt-3 italic break-words">
        {differentiation}
      </p>
      <a
        href="#"
        className="mt-auto text-[#391400] font-bold text-base flex items-center gap-2 group pt-5"
      >
        {actionText}
        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
};
