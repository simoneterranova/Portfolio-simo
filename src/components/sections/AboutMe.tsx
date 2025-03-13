import React, { useEffect } from 'react';
import { Download, Calendar, ArrowRight } from 'lucide-react';
import { useSectionTransition } from '@/hooks/use-section-transition';

// Define the skill type for the progress bars
type Skill = {
  name: string;
  percentage: number;
  color: string;
};

export const AboutMe = () => {
  const [sectionRef, isVisible] = useSectionTransition(0.1);
  
  // Technical skills with proficiency percentages
  const technicalSkills: Skill[] = [
    { name: 'IoT System Architecture', percentage: 90, color: 'var(--accent-color)' },
    { name: 'Simulation Engineering', percentage: 85, color: '#4E7FDD' },
    { name: 'Data Analytics & ML', percentage: 80, color: '#45B26B' },
    { name: 'Programming', percentage: 90, color: '#8A3FFC' },
    { name: 'Systems Integration', percentage: 85, color: '#FF7A00' },
  ];
  
  // Academic timeline data
  const academicTimeline = [
    {
      year: '2023-2025',
      degree: 'M.Sc. in ICT for Smart Societies',
      institution: 'Politecnico di Torino',
      current: true,
    },
    {
      year: '2020-2023',
      degree: 'B.Sc. in Electronic Engineering',
      institution: 'Politecnico di Torino',
      current: false,
    },
    {
      year: '2015-2020',
      degree: 'Scientific Lyceum',
      institution: 'Istituto Statale di Istruzione Superiore "Giosuè Carducci" di Comiso',
      current: false,
    },
  ];

  return (
    <section 
      id="about-section" 
      className="themed-section py-24 relative overflow-hidden"
      ref={sectionRef as React.RefObject<HTMLDivElement>}
    >
      {/* Decorative background elements for visual interest */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-l from-[var(--accent-color)] to-transparent opacity-5 blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[var(--accent-color)] to-transparent opacity-5 blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className={`section-container max-w-[1171px] mx-auto px-5 relative z-10 ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-16 reveal-item">
          <h2 className="text-[var(--accent-color)] text-base font-normal leading-8 tracking-[3px] uppercase">
            About Me
          </h2>
          <h3 className="text-[var(--text-color)] text-3xl md:text-5xl font-extrabold leading-tight md:leading-[64px] tracking-[-1px] mt-5">
            Professional Background
          </h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left column - Personal info */}
          <div className="lg:col-span-5 reveal-item">
            <div className="bg-[var(--card-bg)] backdrop-blur-sm rounded-xl shadow-lg p-8 hover-lift border border-[var(--card-border)] transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[rgba(239,109,88,0.15)] flex items-center justify-center mr-4">
                  <span className="text-[var(--accent-color)] text-xl font-bold">ST</span>
                </div>
                <h4 className="text-3xl font-bold text-[var(--text-color)]">Simone Terranova</h4>
              </div>
              
              <p className="text-base leading-8 mb-6 text-[var(--text-color)]">
                As an ICT Engineer with specialized expertise in emergent technologies, I focus on creating intelligent systems that bridge theoretical capabilities with practical implementation. My academic and project work at Politecnico di Torino has established my capability to deliver technical solutions across multiple domains.
              </p>
              
              <div className="mb-8">
                <h5 className="text-xl font-semibold mb-4 text-[var(--text-color)] flex items-center">
                  <span className="w-8 h-8 rounded-full bg-[rgba(239,109,88,0.15)] flex items-center justify-center mr-3">
                    <span className="text-[var(--accent-color)] text-sm font-bold">🎓</span>
                  </span>
                  Academic Journey
                </h5>
                
                <div className="space-y-6">
                  {academicTimeline.map((item, index) => (
                    <div key={index} className="relative">
                      <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-[var(--card-bg)] border-2 border-[var(--accent-color)]"></div>
                      <div className={`pl-6 ${item.current ? 'text-[var(--accent-color)]' : 'text-[var(--text-color)]'}`}>
                        <div className="font-semibold">{item.year}</div>
                        <div className="font-bold">{item.degree}</div>
                        <div className="text-sm text-[var(--text-muted)]">{item.institution}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="text-base leading-8 mb-8 text-[var(--text-color)]">
                I believe effective systems must balance technical sophistication with practical implementation, always focusing on delivering measurable value.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="inline-block relative">
                  <a 
                    href="/Simone_Terranova_CV.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-color)] text-lg font-medium px-8 py-3 border-2 border-[var(--accent-color)] rounded-full inline-flex items-center gap-2 relative z-10 hover:bg-[var(--accent-color)] hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    <Download size={16} className="group-hover:animate-bounce" />
                    Download CV
                  </a>
                  <div className="absolute -inset-1 bg-[var(--accent-color)] rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Skills */}
          <div className="lg:col-span-7 reveal-item">
            <div className="bg-[var(--card-bg)] backdrop-blur-sm rounded-xl shadow-lg p-8 hover-lift h-full border border-[var(--card-border)] transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[rgba(239,109,88,0.15)] flex items-center justify-center mr-4">
                  <span className="text-[var(--accent-color)] text-xl font-bold">⚙️</span>
                </div>
                <h5 className="text-2xl font-semibold text-[var(--text-color)]">Technical Competencies</h5>
              </div>
              
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-[var(--text-color)]">{skill.name}</span>
                      <span className="text-[var(--accent-color)] font-bold">{skill.percentage}%</span>
                    </div>
                    <div className="w-full h-3 bg-[var(--accent-subtle)] rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.percentage}%` : '0%', 
                          backgroundColor: skill.color,
                          transition: 'width 1.5s ease-out'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 pt-8 border-t border-[var(--card-border)]">
                <h5 className="text-xl font-semibold mb-4 text-[var(--text-color)]">Areas of Expertise</h5>
                <div className="flex flex-wrap gap-3">
                  {[
                    'IoT Architecture', 'Embedded Systems', 'Sensor Networks', 
                    'Data Visualization', 'Machine Learning', 'Computational Modeling',
                    'System Optimization', 'Edge Computing',
                    'Real-time Analytics', 'Deep Learning'
                  ].map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 bg-[var(--accent-subtle)] text-[var(--text-color)] rounded-full text-sm font-medium hover:bg-[rgba(239,109,88,0.3)] transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-10 pt-6 border-t border-[var(--card-border)]">
                <div className="inline-block relative">
                  <a 
                    href="#portfolio-section" 
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('portfolio-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-[var(--text-color)] text-lg font-medium px-8 py-3 border-2 border-[var(--accent-color)] rounded-full inline-flex items-center gap-2 relative z-10 hover:bg-[var(--accent-color)] hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    View My Project Portfolio
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <div className="absolute -inset-1 bg-[var(--accent-color)] rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add custom CSS for animations */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.4; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};