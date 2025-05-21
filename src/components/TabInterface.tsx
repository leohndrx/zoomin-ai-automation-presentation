"use client";

import React, { useState } from 'react';
import { FaRobot } from 'react-icons/fa';
import { TbBrandOpenai } from 'react-icons/tb';
import { HiOutlineArrowsExpand } from 'react-icons/hi';
import { MdBuildCircle } from 'react-icons/md';

interface TabData {
  id: string;
  label: string;
  icon: React.ReactNode;
  activeClass: string;
  inactiveClass: string;
  titleClass: string;
  borderClass: string;
  image: string;
  alt: string;
  placeholder: string;
  description: string;
  bulletPoints: string[];
}

const TabInterface: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Normale workflows');

  const tabs: TabData[] = [
    {
      id: 'Normale workflows',
      label: 'Normale workflows',
      icon: <HiOutlineArrowsExpand className="mr-2" />,
      activeClass: 'bg-orange-500 text-white',
      inactiveClass: 'bg-white hover:bg-orange-100 border-b-2 border-orange-200',
      titleClass: 'text-orange-700',
      borderClass: 'border-l-4 border-orange-500',
      image: '/images/regular-workflow.png',
      alt: 'Regular Workflows Example',
      placeholder: 'https://via.placeholder.com/800x500/fff7ed/ea580c?text=Regular+Workflows',
      description: 'Geautomatiseerde processen op basis van if-then logica zonder AI.',
      bulletPoints: [
        'Volgen strikte regels en vooraf gedefinieerde paden',
        'Ideaal voor herhaalbare taken met vaste stappen',
        'Bijvoorbeeld: Automatisch doorsturen van nieuwe leads',
        'Eenvoudig te begrijpen en te onderhouden'
      ]
    },
    {
      id: 'ai-workflows',
      label: 'AI Workflows',
      icon: <TbBrandOpenai className="mr-2" />,
      activeClass: 'bg-orange-500 text-white',
      inactiveClass: 'bg-white hover:bg-orange-100 border-b-2 border-orange-200',
      titleClass: 'text-orange-700',
      borderClass: 'border-l-4 border-orange-500',
      image: '/images/make-workflow.png',
      alt: 'AI Workflows Diagram',
      placeholder: 'https://via.placeholder.com/800x500/fff7ed/ea580c?text=AI+Workflows',
      description: 'Processen met AI-componenten als onderdeel van een geautomatiseerde flow.',
      bulletPoints: [
        'Combineren AI met vooraf gedefinieerde logica',
        'Kunnen data analyseren en inhoud genereren',
        'Bijvoorbeeld: Email categorisatie met sentiment analyse',
        'Maken gebruik van AI voor specifieke stappen in een proces'
      ]
    },
    {
      id: 'agents',
      label: 'AI Agents',
      icon: <FaRobot className="mr-2" />,
      activeClass: 'bg-orange-500 text-white',
      inactiveClass: 'bg-white hover:bg-orange-100 border-b-2 border-orange-200',
      titleClass: 'text-orange-700',
      borderClass: 'border-l-4 border-orange-500',
      image: '/images/ai-agents2.webp',
      alt: 'AI Agents Visualization',
      placeholder: 'https://via.placeholder.com/800x500/fff7ed/ea580c?text=AI+Agents',
      description: 'Zelfstandige AI-systemen die taken uitvoeren met minimale menselijke input.',
      bulletPoints: [
        'Kunnen complexe beslissingen nemen op basis van context',
        'Verwerken natuurlijke taal en begrijpen bedoelingen',
        'Bijvoorbeeld: ChatGPT, Claude, of een custom agent',
        'Werken vaak met een vorm van "geheugen" of "context"'
      ]
    },
    {
      id: 'custom-tools',
      label: 'Custom tools',
      icon: <MdBuildCircle className="mr-2" />,
      activeClass: 'bg-orange-500 text-white',
      inactiveClass: 'bg-white hover:bg-orange-100 border-b-2 border-orange-200',
      titleClass: 'text-orange-700',
      borderClass: 'border-l-4 border-orange-500',
      image: '/images/custom-tool.png',
      alt: 'Custom Tools Interface',
      placeholder: 'https://via.placeholder.com/800x500/fff7ed/ea580c?text=Custom+Tools',
      description: 'Op maat gemaakte oplossingen voor specifieke bedrijfsbehoeften.',
      bulletPoints: [
        'Speciaal ontwikkeld voor unieke workflows',
        'Kunnen elementen van AI en traditionele automatisering combineren',
        'Bijvoorbeeld: Een dashboardtool voor campagneanalyse',
        'Bieden optimale integratie met bestaande systemen'
      ]
    }
  ];

  const getTabClasses = (tabId: string, activeClass: string, inactiveClass: string) => {
    const baseClasses = "flex flex-1 items-center justify-center px-3 py-2 text-base font-medium rounded-t-lg transition-colors mx-0.5";
    
    if (tabId === activeTab) {
      return `${baseClasses} ${activeClass}`;
    }
    
    return `${baseClasses} ${inactiveClass}`;
  };

  const getImageContainerClasses = (tabId: string) => {
    return `transition-opacity duration-300 ${
      tabId === activeTab ? 'opacity-100' : 'opacity-0 hidden'
    }`;
  };

  return (
    <div className="bg-white/80 rounded-xl shadow-lg">
      <div className="flex w-full overflow-x-auto p-2 pb-0 whitespace-nowrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={getTabClasses(tab.id, tab.activeClass, tab.inactiveClass)}
            onClick={() => setActiveTab(tab.id)}
            aria-selected={activeTab === tab.id}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>
      
      {tabs.map((tab) => (
        <div key={tab.id} className={getImageContainerClasses(tab.id)}>
          <div className="flex flex-col md:flex-row gap-6 p-4">
            <div className="w-full md:w-3/5 flex items-center justify-center h-[400px]">
              <img 
                src={tab.image} 
                alt={tab.alt} 
                className="max-h-full max-w-full object-contain rounded-xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = tab.placeholder;
                }}
              />
            </div>
            
            <div className={`w-full md:w-2/5 bg-gray-800/90 text-white rounded-lg shadow-lg p-6 ${tab.borderClass} relative overflow-hidden`}>
              <h3 className={`text-2xl font-bold text-white mb-4 relative z-10`}>{tab.label}</h3>
              <p className="mb-3 text-lg text-gray-300 relative z-10">{tab.description}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300 relative z-10">
                {tab.bulletPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TabInterface; 