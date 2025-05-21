"use client";

import React, { useEffect, useState } from 'react';
import { FaRobot, FaTools, FaUsers, FaCalendarCheck } from 'react-icons/fa';
import { MdAutoAwesome } from 'react-icons/md';
import { IoIosChatbubbles } from 'react-icons/io';
import { SiN8N } from 'react-icons/si';
import { TbBrandOpenai } from 'react-icons/tb';
import { BsArrowsFullscreen } from 'react-icons/bs';

import Slide from '@/components/Slide';
import Navigation from '@/components/Navigation';
import ContinuousBackground from '@/components/ContinuousBackground';
import TabInterface from '../components/TabInterface';

const slides = [
  { id: 'intro', title: 'Introductie' },
  { id: 'agenda', title: 'Agenda' },
  { id: 'over-mij', title: 'Over Mij' },
  { id: 'clients', title: 'Klanten' },
  { id: 'what-is-ai', title: 'Wat is AI & Automatisering?' },
  { id: 'core-concepten', title: 'Core-concepten van AI Automation' },
  { id: 'automation-tools', title: 'Automation Tools' },
  { id: 'ai-automation-explained', title: 'AI & Automatisering Toegelicht' },
  { id: 'voorbeelden', title: 'Voorbeelden voor Zoomin\'' },
  { id: 'ai-tools', title: 'AI Tools' },
  { id: 'ai-coded', title: 'AI-Gecodeerde Presentatie' },
  { id: 'opdracht', title: 'Jouw Automatiseringskansen' },
  { id: 'conclusie', title: 'Conclusie' },
];

export default function Home() {
  // Disable default scrolling
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  
  return (
    <main className="slide-container" id="slide-container">
      {/* Continuous background for the entire presentation */}
      <ContinuousBackground />
      
      {/* Title Slide */}
      <Slide
        id="intro"
        className="text-white relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8 flex justify-center">
            <img 
              src="/images/zoomin-logo-met-achtergrond.webp"
              alt="Zoomin' Logo"
              className="h-32 object-contain logo-fade-out"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI & Automatisering voor <br />
            <span className="text-white">Zoomin' Marketing</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Van repetitieve taken naar strategische focus: meer resultaat met slimme automatisering
          </p>
          <div className="flex justify-center items-center space-x-4 text-sm md:text-base">
            <div className="flex items-center">
              <FaUsers className="mr-2" />
              <span>Voor Zoomin' Marketing</span>
            </div>
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="flex items-center">
              <FaTools className="mr-2" />
              <span>Door Bespoke Automation</span>
            </div>
          </div>
        </div>
      </Slide>

      {/* Agenda Slide */}
      <Slide
        id="agenda"
        className="overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Wat gaan we vandaag bespreken?</h2>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Column 1 */}
              <div>
                <div className="space-y-3">
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border-l-4 border-orange-400">
                    <div>
                      <h4 className="font-bold">Korte introductie</h4>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border-l-4 border-orange-400">
                    <div>
                      <h4 className="font-bold">Bekende klanten</h4>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border-l-4 border-orange-400">
                    <div>
                      <h4 className="font-bold">Wat is AI & automatisering?</h4>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border-l-4 border-orange-400">
                    <div>
                      <h4 className="font-bold">Technische termen</h4>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Column 2 */}
              <div>
                <div className="space-y-3">
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border-l-4 border-orange-400">
                    <div>
                      <h4 className="font-bold">Automation Tools & LLM's</h4>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border-l-4 border-orange-400">
                    <div>
                      <h4 className="font-bold">Hoe AI & automatisering toepassen</h4>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border-l-4 border-orange-400">
                    <div>
                      <h4 className="font-bold">Voorbeelden (voor Zoomin')</h4>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border-l-4 border-orange-400">
                    <div>
                      <h4 className="font-bold">Interessante AI tools</h4>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Column 3 */}
              <div>
                <div className="space-y-3">
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border-l-4 border-orange-400">
                    <div>
                      <h4 className="font-bold">Hoe deze presentatie is gemaakt</h4>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border-l-4 border-orange-400">
                    <div>
                      <h4 className="font-bold">Wat kunnen we nu automatiseren?</h4>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border-l-4 border-orange-400">
                    <div>
                      <h4 className="font-bold">Conclusie</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
 
            </div>

            <div className="mt-6 bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 text-center">
              <p className="text-lg font-medium">
                Voel je vooral vrij om vragen te stellen tijdens de presentatie, zeker als ik te snel ga! 🙋‍♂️
              </p>
            </div>
          </div>
        </div>
      </Slide>

      {/* About Me Slide */}
      <Slide 
        id="over-mij" 
        className="overflow-hidden"
      >
        <div className="max-w-6xl mx-auto h-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Korte introductie...</h2>
          
          <div className="flex flex-col md:flex-row h-[calc(100%-20rem)]">
            <div className="w-full md:w-1/2 p-4 flex flex-col items-center justify-center">
              <ImageToggler />
            </div>
            
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <div className="space-y-4 max-w-xl">
                <p className="text-lg">
                  Mijn naam is Leon Botzen, 25 jaar, geboren in Honselersdijk - een echte Westlander dus.
                </p>
                
                <p className="text-lg">
                  Mijn broer heeft een software bedrijf Boloo opgericht, met een logistiek dochterbedrijf (eerst Boloo Forwarding, nu Cargomate). Daar ben ik als manager aan de slag gegaan met de opdracht om processen te optimaliseren - er werkte toen nog iemand die alles met papier deed, en dat moest echt anders.
                </p>
                
                <p className="text-lg">
                  Elke week zat ik samen met een super nerd genaamd Jimmy die heel goed was met Zapier en Airtable. Uiteindelijk heb ik Cargomate helemaal de <span style={{ textDecoration: 'line-through', textDecorationThickness: '2px' }}>moeder</span> geautomatiseerd en dat vond ik eigenlijk zo leuk dat ik 3 jaar geleden de stap maakte om dit voor mijzelf te gaan doen als zzp'er.
                </p>
                
                <p className="text-lg">
                  Inmiddels heb ik ongeveer 8 klanten en het blijft groeien. Sinds kort heb ik ook een compagnon, en samen is ons doel om in 2025 15 klanten te krijgen.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-orange-50 p-6 rounded-xl border-l-4 border-brand">
            <h3 className="text-2xl font-bold text-brand mb-4">Eerst even jullie...</h3>
            <div className="space-y-4">
              <p className="text-xl flex items-center">
                <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">?</span>
                Wie gebruikt er nu dagelijks AI?
              </p>
              <p className="text-xl flex items-center">
                <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">?</span>
                Wie heeft er al eens een workflow/automatisering gebouwd?
              </p>
            </div>
          </div>
          
          <div className="mt-6 bg-orange-100 p-4 rounded-lg border border-brand italic text-gray-700 mx-auto max-w-2xl text-center">
            <p className="text-md">
              <span className="font-bold">P.S.</span> Dit is mijn eerste presentatie sinds de middelbare school, dus heb een beetje geduld met me.
            </p>
          </div>
        </div>
      </Slide>

      {/* Clients Slide */}
      <Slide 
        id="clients" 
        className="overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Wat van mijn klanten die je misschien herkent</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-xl shadow p-6 flex items-center justify-center h-40 w-full">
                <img 
                  src="/images/clients/Studio MVP.png" 
                  alt="Studio MVP" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <p className="mt-4 text-center font-medium text-lg">Studio MVP</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-xl shadow p-6 flex items-center justify-center h-40 w-full">
                <img 
                  src="/images/clients/WhatsNext.jpeg" 
                  alt="WhatsNext" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <p className="mt-4 text-center font-medium text-lg">WhatsNext</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-xl shadow p-6 flex items-center justify-center h-40 w-full">
                <img 
                  src="/images/clients/Green Bubble.png" 
                  alt="Green Bubble" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <p className="mt-4 text-center font-medium text-lg">Green Bubble</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-xl shadow p-6 flex items-center justify-center h-40 w-full">
                <img 
                  src="/images/clients/Clearly.eu.png" 
                  alt="Clearly.eu" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <p className="mt-4 text-center font-medium text-lg">Clearly.eu</p>
            </div>
          </div>
        </div>
      </Slide>

      {/* What is AI & Automation Slide */}
      <Slide 
        id="what-is-ai" 
        className="overflow-hidden"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Wat is AI & Automatisering?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-brand">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-brand text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">🤖</span>
                Kunstmatige intelligentie
              </h3>
              <p className="text-xl leading-relaxed">
                Software die kan leren en slimmer wordt door ervaring.
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-lg italic text-gray-700">
                  "AI doet het werk dat saai, herhalend of te complex is voor mensen."
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-brand">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-brand text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">⚙️</span>
                Automatisering
              </h3>
              <p className="text-xl leading-relaxed">
                Systemen die taken zelfstandig uitvoeren zonder menselijke tussenkomst.
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-lg italic text-gray-700">
                  "Computers doen het repetitieve werk, mensen doen het creatieve werk."
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6 border-l-4 border-brand">
            <h3 className="text-2xl font-bold mb-4 text-center">Voordelen</h3>
            <p className="text-xl text-center text-gray-700">
              Tijd besparen, minder fouten, meer focus op wat écht telt.
            </p>
          </div>
        </div>
      </Slide>

      {/* Core Concepts Slide */}
      <Slide 
        id="core-concepten" 
        className="overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Wat technische termen</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-l-4 border-brand overflow-hidden relative">
              <h3 className="text-2xl font-bold mb-4 text-brand">APIs & Webhooks</h3>
              <p className="text-lg mb-4">De bouwstenen voor alle automatisering:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>APIs zijn toegangspoorten tot functionaliteit van software</li>
                <li>Webhooks zijn 'luisterende' endpoints die reageren op gebeurtenissen</li>
                <li>Doorsturen van data tussen systemen zonder menselijke tussenkomst</li>
                <li>Basis voor alle integraties en automatisering</li>
              </ul>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-l-4 border-brand overflow-hidden relative">
              <h3 className="text-2xl font-bold mb-4 text-brand">No-Code Integraties</h3>
              <p className="text-lg mb-4">Verbinden van systemen zonder programmeerkennis:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Platforms zoals n8n en Make.com gebruiken APIs onder de motorkap</li>
                <li>Visuele interfaces voor het bouwen van werkstromen</li>
                <li>Vooraf gebouwde connectoren voor populaire diensten</li>
                <li>Drag-and-drop automatisering van complexe processen</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-l-4 border-brand">
              <h3 className="text-2xl font-bold mb-4 text-brand">LLM (Large Language Model)</h3>
              <p className="text-lg mb-4">De AI-technologie achter tools als ChatGPT:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Getraind op enorme tekstdatasets om taal te begrijpen</li>
                <li>Kan tekst begrijpen, genereren en vertalen</li>
                <li>Wordt gebruikt voor creative copywriting, samenvatting en meer</li>
                <li>Bekende voorbeelden: GPT-4, Claude, Gemini, Llama</li>
              </ul>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-l-4 border-brand">
              <h3 className="text-2xl font-bold mb-4 text-brand">Model Context Protocol (MCP)</h3>
              <p className="text-lg mb-4">
                MCP is een standaard die AI-systemen laat communiceren met externe tools en data. Denk aan een 'USB-C voor AI' waarmee verschillende systemen gemakkelijk kunnen aansluiten.
              </p>
              <p className="text-sm italic bg-gray-100 p-3 rounded-lg">
                Dit is voor nu niet heel relevant, maar wel leuk om te weten voor de toekomst - het maakt nieuwe AI-toepassingen veel makkelijker te ontwikkelen.
              </p>
            </div>
          </div>
        </div>
      </Slide>

      {/* Automation Tools Slide - Now before AI Tools */}
      <Slide 
        id="automation-tools" 
        className="overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Automation & AI Tools</h2>
          
          {/* Tabbed Interface for Automation Tools */}
          <div className="bg-white/80 rounded-xl shadow-lg">
            <AutomationTabInterface />
          </div>
        </div>
      </Slide>

      {/* AI & Automation Explained Slide - moved to here */}
      <Slide 
        id="ai-automation-explained" 
        className="overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Soorten en manieren van automatisering</h2>
          
          {/* Tabs with content */}
          <TabInterface />
          
          <div className="mt-8 bg-white/70 p-6 rounded-xl backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-3 text-center">Welke aanpak past bij jou?</h3>
            <p className="text-lg">
              Het kiezen van de juiste aanpak is zoals het kiezen van het juiste gereedschap. 
              Soms heb je een slimme AI nodig die zelfstandig problemen oplost, terwijl andere 
              keren een betrouwbare geautomatiseerde workflow precies doet wat je verwacht - 
              niet meer en niet minder. In mijn ervaring werkt een mix van deze technieken het beste.
            </p>
          </div>
        </div>
      </Slide>

      {/* Examples for Zoomin' Slide */}
      <Slide 
        id="voorbeelden" 
        className="overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Wat voorbeelden die voor Zoomin' interessant kunnen zijn</h2>
          
          <div className="bg-white/80 rounded-xl shadow-lg">
            {/* Custom Tab Interface for this slide */}
            <SimpleTabInterface />
          </div>
        </div>
      </Slide>

      {/* AI Tools Slide */}
      <Slide 
        id="ai-tools" 
        className="overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Interessante AI tools</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-l-4 border-brand">
              <h3 className="text-2xl font-bold mb-2 text-brand flex items-center">
                <span className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 text-xs">EL</span>
                ElevenLabs
              </h3>
              <p className="text-lg mb-2">AI stemgeneratie met emotie</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Realistische AI stemmen in 30+ talen</li>
                <li>Kloon je eigen stem voor voiceovers</li>
                <li>Voeg emotie en intonatie toe aan teksten</li>
                <li>Bijvoorbeeld voor klantenservice of sales</li>
              </ul>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-l-4 border-brand">
              <h3 className="text-2xl font-bold mb-2 text-brand flex items-center">
                <span className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 text-xs">HG</span>
                HeyGen
              </h3>
              <p className="text-lg mb-2">AI video avatar generator</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Maak professionele video's met AI avatars</li>
                <li>Creëer je eigen digitale kloon</li>
                <li>Vertaal video's naar meerdere talen</li>
                <li>Ideaal voor marketing en trainingsvideo's</li>
              </ul>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-l-4 border-brand">
              <h3 className="text-2xl font-bold mb-2 text-brand flex items-center">
                <span className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 text-xs">SV</span>
                Skyvern
              </h3>
              <p className="text-lg mb-2">AI browser automatisering</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Automatiseer complexe taken op websites</li>
                <li>Vul formulieren in en doorloop workflows</li>
                <li>Lost captchas op en ondersteunt 2FA</li>
                <li>Perfect voor repetitieve web-taken</li>
              </ul>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-l-4 border-brand">
              <h3 className="text-2xl font-bold mb-2 text-brand flex items-center">
                <span className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 text-xs">CR</span>
                Cursor
              </h3>
              <p className="text-lg mb-2">AI code editor</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Begrijpt je codebase en suggereert code</li>
                <li>Transformeert code op basis van instructies</li>
                <li>Voorspelt je volgende aanpassingen</li>
                <li>Versnelt software-ontwikkeling aanzienlijk</li>
              </ul>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-l-4 border-brand">
              <h3 className="text-2xl font-bold mb-2 text-brand flex items-center">
                <span className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 text-xs">AP</span>
                Apify
              </h3>
              <p className="text-lg mb-2">Web scraping & data extractie</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Haal gestructureerde data van websites</li>
                <li>Uitgebreide scraping tools voor bekende sites</li>
                <li>Web data voor AI training en analyses</li>
                <li>API's voor integratie in je systemen</li>
              </ul>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-l-4 border-brand">
              <h3 className="text-2xl font-bold mb-2 text-brand text-center">En vele anderen...</h3>
              <p className="text-lg mb-4 text-center">De AI-tooling evolueert razendsnel</p>
              <div className="flex justify-center">
                <div className="bg-orange-50 p-4 rounded-lg text-sm">
                  <p className="font-semibold text-center">Tip:</p>
                  <p>Blijf experimenteren met nieuwe tools en vind wat werkt voor jouw specifieke use cases!</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/70 p-6 rounded-xl shadow-lg backdrop-blur-sm mt-4">
            <h3 className="text-xl font-bold mb-3">Hoe kies je de juiste AI tools?</h3>
            <p className="text-lg">
              De beste AI tools zijn degene die de specifieke uitdagingen van jouw bedrijf oplossen. Begin met het identificeren van tijdrovende taken die geautomatiseerd kunnen worden, en kies vervolgens tools die daarbij passen. Experimenteer met verschillende veelbelovende tools om te ontdekken welke het beste werken voor jouw specifieke use cases.
            </p>
          </div>
        </div>
      </Slide>

      {/* AI Coded Presentation Slide */}
      <Slide 
        id="ai-coded" 
        className="overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Wist je dat...</h2>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 border-l-4 border-brand">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <img 
                  src="/images/Cursor-AI.png" 
                  alt="Cursor AI Coding" 
                  className="rounded-lg shadow-md w-full"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <p className="text-lg">
                  Deze gehele presentatie is een Next.js applicatie, volledig gecodeerd met behulp van AI. Ik heb alleen de instructies gegeven en de AI heeft:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-lg">
                  <li>De volledige React-structuur opgezet</li>
                  <li>Alle animaties geprogrammeerd</li>
                  <li>UI componenten ontworpen en geïmplementeerd</li>
                  <li>De navigatie tussen slides werkend gemaakt</li>
                  <li>Wijzigingen doorgevoerd op basis van feedback</li>
                </ul>
                <p className="text-lg mt-4 italic">
                  Dit is een praktijkvoorbeeld van hoe AI kan helpen bij het snel bouwen van tools, zelfs zonder diepgaande technische kennis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* Assignment Slide */}
      <Slide 
        id="opdracht" 
        className="overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-brand">Wat zou je nu al automatiseren?</h2>
          
          <div className="bg-orange-50 p-8 rounded-xl shadow-lg border-l-4 border-brand">
            <h3 className="text-2xl font-bold mb-6">Kleine oefening (5 minuten)</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg mb-4 font-medium">1. Bedenk twee concrete voorbeelden van processen binnen Zoomin' die je zou willen automatiseren.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border-2 border-dashed border-orange-200 p-4 rounded-lg min-h-[100px]">
                    <p className="text-gray-500 italic">Voorbeeld 1:</p>
                  </div>
                  <div className="border-2 border-dashed border-orange-200 p-4 rounded-lg min-h-[100px]">
                    <p className="text-gray-500 italic">Voorbeeld 2:</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg mb-2 font-medium">2. Voor elk voorbeeld, beantwoord deze vragen:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Hoeveel tijd kost dit proces nu per week?</li>
                  <li>Wat zou het team kunnen doen met die vrijgekomen tijd?</li>
                  <li>Welke fouten of inconsistenties kunnen worden geëlimineerd?</li>
                </ul>
              </div>
            </div>
            
            <p className="mt-8 text-lg font-medium text-center">We kunnen dit straks samen bespreken!</p>
          </div>
        </div>
      </Slide>

      {/* Conclusion Slide */}
      <Slide 
        id="conclusie" 
        className="text-white relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Wat nemen we mee?</h2>
          <p className="text-xl mb-8">
            Jullie hebben veel kansen om met AI en automatisering jullie werk leuker en makkelijker te maken.
          </p>
          <div className="bg-white/20 backdrop-blur-sm p-8 rounded-xl text-left">
            <h3 className="text-2xl font-bold mb-6">Hoe beginnen we hiermee?</h3>
            <ul className="space-y-5 text-lg">
              <li className="flex items-start">
                <div className="bg-white text-orange-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">1</div>
                <span>Begin klein - kies één proces dat veel tijd kost en automatiseer dat eerst</span>
              </li>
              <li className="flex items-start">
                <div className="bg-white text-orange-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">2</div>
                <span>Zorg dat de basis op orde is - een goed CRM-systeem is belangrijker dan geavanceerde AI</span>
              </li>
              <li className="flex items-start">
                <div className="bg-white text-orange-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">3</div>
                <span>Word een AI-first bedrijf door stap voor stap automatisering en AI te integreren in jullie dagelijkse werkwijze</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-8 bg-white/20 backdrop-blur-sm p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Vragen?</h3>
            <p className="text-lg mb-6">Hebben jullie nog vragen over wat jullie kunnen doen met AI of automatisering?</p>
            <p className="text-lg">Ik help graag met het nadenken over welke processen jullie als eerste zouden kunnen aanpakken.</p>
          </div>
        </div>
      </Slide>

      <Navigation slides={slides} />
    </main>
  );
}

// Simple Tab Interface Component for Examples Slide
const SimpleTabInterface: React.FC = () => {
  const [activeTab, setActiveTab] = useState('rag-agent');
  const [showModal, setShowModal] = useState(false);

  const tabs = [
    {
      id: 'rag-agent',
      label: 'Zoomin\' RAG Agent',
      icon: <FaRobot className="mr-2" />,
      description: 'AI assistent getraind op jullie interne kennis',
      content: (
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4 text-brand text-center">AI Kennisbank Assistant</h3>
          <div className="mb-8 mx-auto max-w-4xl">
            <img 
              src="/images/examples/zoom-rag-agent.png"
              alt="Zoomin RAG Agent"
              className="rounded-xl shadow-lg w-full object-contain"
            />
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="mb-4 text-lg">
              Een AI-assistent die getraind is op alle beschikbare data en documenten van Zoomin', waardoor je team direct antwoorden krijgt op specifieke vragen.
            </p>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-brand mt-4">
              <h4 className="font-bold text-lg mb-2">Voordelen voor Zoomin':</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Directe toegang tot bedrijfskennis zonder te zoeken</li>
                <li>Snellere onboarding van nieuwe medewerkers</li>
                <li>Consistent en betrouwbaar antwoorden op klantenvragen</li>
                <li>Automatisch bijgewerkt wanneer er nieuwe informatie beschikbaar is</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'calls-analyser',
      label: 'Calls/Meetings Analyseren',
      icon: <IoIosChatbubbles className="mr-2" />,
      description: 'Automatisch samenvatten en actie-items genereren',
      content: (
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4 text-brand text-center">Meeting Analyse Tool</h3>
          <div className="mb-8 mx-auto max-w-4xl">
            <img 
              src="/images/examples/calls-analyser.png"
              alt="Calls Analyser Workflow"
              className="rounded-xl shadow-lg w-full object-contain"
            />
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="mb-4 text-lg">
              Dit systeem neemt audio-opnames van vergaderingen, analyseert ze met AI, en zet automatisch actiepunten om in concrete taken in Asana.
            </p>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-brand mt-4">
              <h4 className="font-bold text-lg mb-2">Voordelen voor Zoomin':</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Minder verloren informatie uit meetings</li>
                <li>Automatische toewijzing van actiepunten</li>
                <li>Gedetailleerde samenvattingen voor afwezige teamleden</li>
                <li>Aanzienlijke tijdsbesparing op administratie na calls</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'seo-content',
      label: 'AI Content Creator',
      icon: <TbBrandOpenai className="mr-2" />,
      description: 'Automatisch SEO-optimale content creëren',
      content: (
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4 text-brand text-center">SEO Content Automatisering</h3>
          <div className="mb-8 mx-auto max-w-4xl">
            <img 
              src="/images/examples/keyword-seo-content-writer.png"
              alt="SEO Content Creator Workflow"
              className="rounded-xl shadow-lg w-full object-contain"
            />
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="mb-4 text-lg">
              Van keywords naar gepubliceerde content - Dit systeem genereert volledig geoptimaliseerde blogs op basis van gewenste keywords en publiceert ze direct.
            </p>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-brand mt-4">
              <h4 className="font-bold text-lg mb-2">Voordelen voor Zoomin':</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Hogere content productiecapaciteit met dezelfde resources</li>
                <li>Consistente SEO-optimalisatie voor alle content</li>
                <li>Gebaseerd op actuele zoekresultaten</li>
                <li>Menselijke redacteurs focussen op verfijning in plaats van creatie</li>
              </ul>
            </div>
            
            <div className="flex justify-center mt-6">
              <button 
                onClick={() => setShowModal(true)}
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all flex items-center"
              >
                <span className="mr-2">Voorbeeld artikel bekijken</span>
                <BsArrowsFullscreen />
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'gratis-scan',
      label: 'Gratis Scan Automatisering',
      icon: <MdAutoAwesome className="mr-2" />,
      description: 'Volledige automatisering van bestaande scan-service',
      content: (
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4 text-brand text-center">Gratis Scan Automatisering</h3>
          <div className="mb-8 mx-auto max-w-4xl">
            <img 
              src="/images/examples/gratis-call-automatisering.png"
              alt="Gratis Scan Automation Workflow"
              className="rounded-xl shadow-lg w-full object-contain"
            />
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="mb-4 text-lg">
              Volledig geautomatiseerde verwerking van jullie bestaande scan-service - van formulier invullen tot rapport versturen, zonder menselijke tussenkomst.
            </p>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-brand mt-4">
              <h4 className="font-bold text-lg mb-2">Voordelen voor Zoomin':</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Volledig geautomatiseerd proces zonder handmatig werk</li>
                <li>Snellere service voor potentiële klanten</li>
                <li>Automatische opslag van scan-data in jullie systeem</li>
                <li>Schaalt mee met toenemend aantal aanvragen</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'onboarding',
      label: 'Klant Onboarding',
      icon: <FaCalendarCheck className="mr-2" />,
      description: 'Gestroomlijnde klant onboarding automatisering',
      content: (
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4 text-brand text-center">Onboarding Automatisering</h3>
          <div className="mb-8 mx-auto max-w-4xl">
            <img 
              src="/images/examples/onboarding-automatiseren.png"
              alt="Client Onboarding Automation"
              className="rounded-xl shadow-lg w-full object-contain"
            />
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="mb-4 text-lg">
              Automatiseer het hele onboardingsproces voor nieuwe klanten: contracten, projectsetup, teamnotificaties en client intake in één workflow.
            </p>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-brand mt-4">
              <h4 className="font-bold text-lg mb-2">Voordelen voor Zoomin':</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Consistente ervaring voor elke nieuwe klant</li>
                <li>Geen gemiste stappen in het onboardingsproces</li>
                <li>Aanzienlijke tijdsbesparing op administratieve handelingen</li>
                <li>Betere taakverdeling en projectvoorbereiding</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div>
      <div className="flex w-full overflow-x-auto p-2 pb-0 whitespace-nowrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex flex-1 items-center justify-center px-3 py-2 text-base font-medium rounded-t-lg transition-colors mx-0.5 ${
              tab.id === activeTab 
                ? 'bg-orange-500 text-white' 
                : 'bg-white hover:bg-orange-100 border-b-2 border-orange-200'
            }`}
            onClick={() => setActiveTab(tab.id)}
            aria-selected={activeTab === tab.id}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>
      
      {tabs.map((tab) => (
        <div 
          key={tab.id} 
          className={`transition-opacity duration-300 ${
            tab.id === activeTab ? 'opacity-100' : 'opacity-0 hidden'
          }`}
        >
          {tab.content}
        </div>
      ))}

      {/* Google Docs Popup Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full h-full max-w-6xl max-h-[90vh] flex flex-col">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-xl font-bold">Voorbeeld artikel door AI geschreven</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-black"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <iframe 
                src="https://docs.google.com/document/d/1z9FvVBEngUfiqdUPM_9A7pwE9ENpQoTvi0NTxbMxhLU/edit?tab=t.0&embedded=true" 
                width="100%" 
                height="100%" 
                className="border-0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Add the new AutomationTabInterface component at the end of the file
const AutomationTabInterface: React.FC = () => {
  const [activeTab, setActiveTab] = useState('automation');

  const tabs = [
    {
      id: 'automation',
      label: 'Automation Tools',
      icon: <FaTools className="mr-2" />,
      content: (
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-6 text-center text-brand">Automation Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-l-4 border-brand">
              <h3 className="text-2xl font-bold mb-4 text-brand flex items-center">
                <SiN8N className="text-2xl mr-3" />
                n8n
              </h3>
              <div className="mb-3">
                <span className="bg-brand text-black font-bold text-xs px-2 py-1 rounded-full">Mijn favoriete tool</span>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                <li>Open-source en zelf te hosten</li>
                <li>350+ integraties</li>
                <li>Krachtige code-injectie mogelijkheden</li>
                <li>Zeer uitgebreide gratis versie</li>
              </ul>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-l-4 border-brand">
              <h3 className="text-2xl font-bold mb-4 text-brand flex items-center">
                <span className="flex items-center justify-center w-8 h-8 bg-orange-500 text-white rounded-full mr-3 text-xs font-bold">Z</span>
                Zapier
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Meest gebruikte tool</li>
                <li>5000+ integraties</li>
                <li>Eenvoudig te gebruiken</li>
                <li>Relatief duur bij intensief gebruik</li>
              </ul>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-l-4 border-brand">
              <h3 className="text-2xl font-bold mb-4 text-brand flex items-center">
                <span className="flex items-center justify-center w-8 h-8 bg-purple-600 text-white rounded-full mr-3 text-xs font-bold">M</span>
                Make.com
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Voorheen Integromat</li>
                <li>1000+ integraties</li>
                <li>Zeer geavanceerde mogelijkheden</li>
                <li>Goed geprijsd voor de kracht</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white/70 p-6 rounded-xl shadow-lg backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-3">Welke tool past bij jou?</h3>
            <p className="text-lg">
              De perfecte tool hangt af van je specifieke behoeften. Voor beginners is Zapier ideaal, terwijl Make en n8n meer flexibiliteit bieden voor complexere workflows. Ik gebruik voornamelijk n8n vanwege de open-source aard en uitstekende prijs-kwaliteitverhouding.
            </p>
          </div>
          
          <div className="mt-4 relative">
            <p className="text-xs italic text-gray-600 opacity-70 whitespace-normal max-w-[250px]">
              dit is een reminder voor Leon om een voorbeeld te laten zien van een systeem dat hij heeft gebouwd voor Green Bubble, hiervoor heeft een combinatie van n8n, make.com en Airtable gebruikt
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'llms',
      label: 'AI Modellen (LLMs)',
      icon: <TbBrandOpenai className="mr-2" />,
      content: (
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-6 text-center text-brand">Populaire AI-modellen (LLMs)</h3>
          <p className="text-lg mb-4 text-center">
            Dit zijn de bekendste AI-tekstmodellen, gesorteerd van simpel naar geavanceerd:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-l-4 border-brand">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-xs">GPT</span>
                ChatGPT / GPT-4
              </h3>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>Van OpenAI (meest bekend)</li>
                <li>Goed in algemene vragen en taken</li>
                <li>Chat: €20/maand onbeperkt gebruik</li>
              </ul>
              <div className="bg-blue-50 p-2 rounded-md text-sm">
                <span className="font-semibold">API-kosten:</span> €0,01 - €0,06 per 1.000 tokens (±750 woorden)
              </div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-l-4 border-brand">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-xs">CL</span>
                Claude
              </h3>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>Van Anthropic</li>
                <li>Uitblinker in creatief schrijven</li>
                <li>Chat: €20/maand onbeperkt gebruik</li>
              </ul>
              <div className="bg-purple-50 p-2 rounded-md text-sm">
                <span className="font-semibold">API-kosten:</span> €0,008 - €0,03 per 1.000 tokens (lager dan GPT)
              </div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-l-4 border-brand">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-xs">GM</span>
                Gemini
              </h3>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>Van Google</li>
                <li>Goed met afbeeldingen en data-analyse</li>
                <li>Chat: €20/maand onbeperkt gebruik</li>
              </ul>
              <div className="bg-red-50 p-2 rounded-md text-sm">
                <span className="font-semibold">API-kosten:</span> €0,0035 - €0,01 per 1.000 tokens (goedkoopste optie)
              </div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-l-4 border-brand">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <span className="bg-gray-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-xs">OS</span>
                Open Source opties
              </h3>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>Llama (Meta), Mistral, DeepSeek</li>
                <li>Zelf te hosten op eigen server</li>
                <li>Volledige controle over de data</li>
              </ul>
              <div className="bg-gray-100 p-2 rounded-md text-sm">
                <span className="font-semibold">Kosten:</span> Alleen serverkosten (€50-500/maand, vaste prijs ongeacht gebruik)
              </div>
            </div>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-xl text-center">
            <p className="text-lg">
              Alle modellen hebben verschillende sterktes - de beste keuze hangt af van je specifieke behoefte.
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div>
      <div className="flex w-full overflow-x-auto p-2 pb-0 whitespace-nowrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex flex-1 items-center justify-center px-3 py-2 text-base font-medium rounded-t-lg transition-colors mx-0.5 ${
              tab.id === activeTab 
                ? 'bg-orange-500 text-white' 
                : 'bg-white hover:bg-orange-100 border-b-2 border-orange-200'
            }`}
            onClick={() => setActiveTab(tab.id)}
            aria-selected={activeTab === tab.id}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>
      
      {tabs.map((tab) => (
        <div 
          key={tab.id} 
          className={`transition-opacity duration-300 ${
            tab.id === activeTab ? 'opacity-100' : 'opacity-0 hidden'
          }`}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
};

// Simple Image Toggler component
const ImageToggler: React.FC = () => {
  const [showAiVersion, setShowAiVersion] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setShowAiVersion(prev => !prev);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {showAiVersion ? (
        <img 
          src="/images/about-me-ai.png" 
          alt="Leon Botzen AI Version" 
          className="rounded-xl shadow-lg h-[400px] w-auto"
        />
      ) : (
        <img 
          src="/images/about-me.jpeg" 
          alt="Leon Botzen" 
          className="rounded-xl shadow-lg h-[400px] w-auto"
        />
      )}
      <div className="absolute bottom-4 right-4 bg-black/60 text-white p-2 rounded-lg text-sm italic max-w-[200px]">
        "Hoe het gros van mijn dag eruitziet"
      </div>
    </div>
  );
};
