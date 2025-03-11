import { FC } from "react";

interface TestimonialCardProps {
  content: string;
  avatar: string;
  name: string;
  company: string;
  isActive?: boolean;
}

export const TestimonialCard: FC<TestimonialCardProps> = ({
  content,
  avatar,
  name,
  company,
  isActive = false,
}) => {
  return (
    <div
      className={`border w-full pt-[108px] pb-12 px-12 rounded-md border-[rgba(243,209,191,1)] border-solid ${
        isActive ? "bg-white shadow-[0px_32px_64px_rgba(57,20,0,0.04)]" : ""
      }`}
    >
      <div className="text-[#391400] text-base font-normal leading-8">
        {content}
      </div>
      <div className="flex items-stretch gap-5 text-[#391400] justify-between mt-[84px]">
        <img
          src={avatar}
          className="aspect-[1] object-contain w-20 shrink-0 rounded-[50%]"
          alt={name}
        />
        <div className="flex flex-col items-stretch mt-[9px]">
          <div className="text-2xl font-bold leading-none">{name}</div>
          <div className="text-base font-normal leading-8">{company}</div>
        </div>
      </div>
    </div>
  );
};
