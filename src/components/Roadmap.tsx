
import { Check } from 'lucide-react';

interface Step {
  title: string;
  description: string;
}

interface RoadmapProps {
  steps: Step[];
  title?: string;
}

export function Roadmap({ steps, title }: RoadmapProps) {
  return (
    <div className="py-8">
      {title && <h3 className="text-2xl font-bold mb-6 text-center">{title}</h3>}
      
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-1 bg-wsy-blue/20 -translate-x-1/2"></div>
        
        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Circle on the line */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-wsy-blue flex items-center justify-center shadow-md">
                <Check className="h-6 w-6 text-wsy-blue" />
              </div>
              
              {/* Content */}
              <div className={`md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                <div className="bg-white p-6 rounded-lg shadow-md border">
                  <h4 className="text-xl font-bold mb-2 text-wsy-blue">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
              
              {/* Empty space for alignment */}
              <div className="md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
