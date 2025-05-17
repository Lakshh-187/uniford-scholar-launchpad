
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Briefcase, Tag, ListChecks, Award } from 'lucide-react';

export interface Opportunity {
  id: string;
  title: string;
  company: string;
  shortDescription: string;
  longDescription?: string;
  requirements?: string[];
  benefits?: string[];
  tags: string[];
  detailsLink: string;
}

export interface OpportunityDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  opportunity: Opportunity | null;
}

export function OpportunityDetailsDialog({ open, onOpenChange, opportunity }: OpportunityDetailsDialogProps) {
  if (!opportunity) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-hidden flex flex-col">
        <DialogHeader className="border-b pb-4">
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="h-5 w-5 text-wsy-purple" />
            <DialogTitle className="text-xl font-bold">{opportunity.title}</DialogTitle>
          </div>
          <DialogDescription className="text-base mt-1">
            {opportunity.company} - {opportunity.shortDescription}
          </DialogDescription>
          <div className="flex flex-wrap gap-2 mt-2">
            {opportunity.tags.map((tag, index) => (
              <Badge key={index} variant="secondary">
                <Tag className="h-3 w-3 mr-1" /> {tag}
              </Badge>
            ))}
          </div>
        </DialogHeader>
        
        <ScrollArea className="flex-1 px-1 py-4">
          {opportunity.longDescription && (
            <div className="bg-gray-50 p-4 rounded-md mb-4">
              <h3 className="font-semibold text-gray-800 mb-2">Full Description:</h3>
              <p className="text-gray-700 whitespace-pre-line">{opportunity.longDescription}</p>
            </div>
          )}
          
          {opportunity.requirements && opportunity.requirements.length > 0 && (
            <div className="mb-4">
              <h3 className="font-semibold text-gray-800 mb-2 flex items-center"><ListChecks className="mr-2 h-5 w-5 text-wsy-blue"/>Requirements:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
                {opportunity.requirements.map((req, index) => <li key={index}>{req}</li>)}
              </ul>
            </div>
          )}

          {opportunity.benefits && opportunity.benefits.length > 0 && (
            <div className="mb-4">
              <h3 className="font-semibold text-gray-800 mb-2 flex items-center"><Award className="mr-2 h-5 w-5 text-green-500"/>Benefits:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
                {opportunity.benefits.map((ben, index) => <li key={index}>{ben}</li>)}
              </ul>
            </div>
          )}
        </ScrollArea>

        <DialogFooter className="border-t pt-4 flex-shrink-0">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
          <Button asChild>
            <a href={opportunity.detailsLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" /> Visit Opportunity
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
