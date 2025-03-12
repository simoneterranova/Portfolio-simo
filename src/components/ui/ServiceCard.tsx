
import { FC } from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  differentiation: string;
}

export const ServiceCard: FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  differentiation,
}) => {
  return (
    <div className="bg-[rgba(253,240,233,1)] p-8 rounded-md flex flex-col h-full border border-gray-200">
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
    </div>
  );
};
