import { FC, useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="bg-[var(--service-card-bg)] backdrop-blur-sm p-8 rounded-xl flex flex-col h-full border border-[var(--card-border)] relative overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Decorative elements */}
      <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full border-2 border-[var(--accent-color)] border-opacity-10 group-hover:border-opacity-20 transition-all duration-500"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full border-2 border-[var(--accent-color)] border-opacity-10 group-hover:border-opacity-20 transition-all duration-500"></div>
      
      <motion.div 
        className="bg-[var(--accent-subtle)] p-4 rounded-md w-16 h-16 flex items-center justify-center relative z-10"
        animate={isHovered ? { scale: 1.05, y: -3 } : { scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-[var(--accent-color)] w-8 h-8">
          {icon}
        </div>
      </motion.div>
      
      <motion.h3 
        className="text-[var(--text-color)] text-xl md:text-2xl font-bold leading-tight mt-5 relative z-10"
        animate={isHovered ? { x: 3 } : { x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h3>
      
      <motion.div 
        className="w-12 h-1 bg-[var(--accent-color)] rounded-full mt-3 mb-2 relative z-10"
        animate={isHovered ? { width: "3rem" } : { width: "2rem" }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.p 
        className="text-[var(--text-muted)] text-base leading-7 mt-2 break-words relative z-10"
        animate={isHovered ? { opacity: 1 } : { opacity: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        {description}
      </motion.p>
      
      <motion.p 
        className="text-[var(--accent-color)] text-base mt-4 italic break-words relative z-10 font-medium"
        animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0.8, y: 5 }}
        transition={{ duration: 0.3 }}
      >
        {differentiation}
      </motion.p>
      
      {/* Hover indicator */}
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-[var(--accent-color)] rounded-b-md"
        initial={{ width: 0 }}
        animate={isHovered ? { width: "100%" } : { width: 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};
