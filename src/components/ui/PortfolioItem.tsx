import { FC, useState } from "react";

interface PortfolioItemProps {
  image: string;
  domain: string;
  title: string;
  brief: string;
  innovation: string;
  category?: string;
}

export const PortfolioItem: FC<PortfolioItemProps> = ({
  image,
  domain,
  title,
  brief,
  innovation,
  category,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="h-full border border-[rgba(255,255,255,0.05)] rounded-xl overflow-hidden relative group flex flex-col bg-[var(--card-bg)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent-color)]/5 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Portfolio image with overlay - Fixed height */}
      <div className="h-[200px] w-full overflow-hidden relative flex-shrink-0">
        <div className={`absolute inset-0 bg-black bg-opacity-40 z-10 transition-opacity duration-500 ${isHovered ? 'opacity-20' : 'opacity-50'}`}></div>
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        
        {/* Category badge */}
        {category && (
          <div className="absolute top-4 right-4 bg-[var(--accent-color)] bg-opacity-70 backdrop-blur-sm px-3 py-1 rounded-full z-20">
            <span className="text-[white] text-xs font-medium">{category}</span>
          </div>
        )}
      </div>
      
      {/* Content area - Flex grow to fill remaining space */}
      <div className="flex-grow p-6 flex flex-col">
        <div className="flex flex-col gap-3 h-full">
          {/* Domain tag */}
          <span className="inline-block bg-[rgba(239,109,88,0.15)] text-base text-[var(--text-color)] font-normal px-4 py-[3px] rounded-[19px] border border-[rgba(239,109,88,0.3)] self-start">
            {domain}
          </span>

          {/* Title */}
          <h3 className="text-[var(--text-color)] text-xl font-extrabold leading-tight">
            {title}
          </h3>

          {/* Brief description */}
          <p className={`text-[var(--text-muted)] text-sm flex-grow transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-80'}`}>
            {brief}
          </p>

          {/* Innovation section */}
          <div className={`text-[var(--accent-color)] text-sm transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-90'}`}>
            <span className="font-semibold">Key Innovation:</span> {innovation}
          </div>
          
          {/* Bottom accent line */}
          <div className={`h-1 bg-[var(--accent-color)] rounded-full mt-auto transition-all duration-500 ${isHovered ? 'w-full' : 'w-12'}`}></div>
        </div>
      </div>
    </div>
  );
};
