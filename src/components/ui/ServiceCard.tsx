import { FC } from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  isActive?: boolean;
}

export const ServiceCard: FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  isActive = false,
}) => {
  return (
    <div
      className={`border flex w-full flex-col text-base text-[#391400] font-normal leading-8 p-12 rounded-md border-[rgba(243,209,191,1)] border-solid ${
        isActive
          ? "bg-white shadow-[0px_32px_64px_rgba(57,20,0,0.04)]"
          : "bg-[rgba(253,240,233,1)]"
      }`}
    >
      <div className="flex items-stretch gap-6 text-2xl font-bold whitespace-nowrap leading-none">
        <img
          src={icon}
          className="aspect-[1] object-contain w-20 shrink-0 rounded-[50%]"
          alt={title}
        />
        <div className="my-auto">{title}</div>
      </div>
      <div className="text-[#391400] mt-7">{description}</div>
      <div className="flex items-stretch gap-4 mt-[52px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4097f1ec6204805735d68bb83408d00584c75533eb5552085a153727d6d3c23d?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-12 shadow-[0px_3px_9px_rgba(57,20,0,0.08)] shrink-0 rounded-3xl"
          alt="Learn more"
        />
        <div className="mt-3">Learn More</div>
      </div>
    </div>
  );
};
