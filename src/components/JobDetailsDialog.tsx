
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Award, Briefcase, CalendarDays, CheckCircle, Users, TrendingUp, FileText, BookOpen, Gift, Plane, UsersRound, Newspaper, DollarSign, Handshake } from "lucide-react";

interface JobDetails {
  title: string;
  organization: string;
  mission: string;
  responsibilities: string[];
  impactCalculation: string;
  milestonesAndGrants: { milestone: string; grant: string }[];
  benefits: string[];
  training: string;
  noticePeriod: string;
  applicationLink?: string;
}

interface JobDetailsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  jobDetails: JobDetails;
}

const iconMap: { [key: string]: React.ElementType } = {
  "Certification": Award,
  "LOR": FileText,
  "Travel allowance": Plane,
  "Invitation in summits": UsersRound,
  "Promotion in core leadership team": TrendingUp,
  "Career opportunities": Briefcase,
  "Published on website": Newspaper,
  "Get tenders": Handshake,
  "More percentage on grants": DollarSign,
};


const JobDetailsDialog: React.FC<JobDetailsDialogProps> = ({ isOpen, onClose, jobDetails }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] flex flex-col">
        <DialogHeader className="p-6">
          <DialogTitle className="text-3xl font-bold text-wsy-blue flex items-center gap-2">
            <Briefcase size={28} /> {jobDetails.title}
          </DialogTitle>
          <DialogDescription className="text-lg text-slate-600">
            At {jobDetails.organization}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="flex-grow px-6 pb-6">
          <div className="space-y-6">
            <Section title="Our Mission" icon={<Users size={20} className="text-wsy-teal" />}>
              <p className="text-slate-700">{jobDetails.mission}</p>
            </Section>

            <Section title="Core Responsibilities" icon={<CheckCircle size={20} className="text-wsy-teal" />}>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                {jobDetails.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </Section>
            
            <Section title="Impact & Milestones" icon={<TrendingUp size={20} className="text-wsy-teal" />}>
              <p className="text-slate-700 font-semibold">Impact Calculation:</p>
              <p className="text-slate-700 mb-2">{jobDetails.impactCalculation}</p>
              <p className="text-slate-700 font-semibold">Milestones & Grants:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                {jobDetails.milestonesAndGrants.map((item, index) => (
                  <li key={index}><strong>{item.milestone}:</strong> {item.grant}</li>
                ))}
              </ul>
            </Section>

            <Section title="Benefits & Perks" icon={<Gift size={20} className="text-wsy-teal" />}>
              <div className="flex flex-wrap gap-2">
                {jobDetails.benefits.map((benefit, index) => {
                  const IconComponent = iconMap[benefit.split(' ')[0]] || iconMap[benefit.split(' - ')[0]] || Gift;
                  return (
                    <Badge key={index} variant="secondary" className="text-sm py-1 px-3 bg-wsy-teal/10 text-wsy-teal border-wsy-teal/30">
                      <IconComponent size={16} className="mr-2" />
                      {benefit}
                    </Badge>
                  );
                })}
              </div>
            </Section>

            <Section title="Training & Development" icon={<BookOpen size={20} className="text-wsy-teal" />}>
              <p className="text-slate-700">{jobDetails.training}</p>
            </Section>

            <Section title="Notice Period" icon={<CalendarDays size={20} className="text-wsy-teal" />}>
              <p className="text-slate-700">{jobDetails.noticePeriod}</p>
            </Section>
          </div>
        </ScrollArea>
        <DialogFooter className="p-6 border-t">
          {jobDetails.applicationLink && (
             <Button asChild size="lg" variant="teal">
                <a href={jobDetails.applicationLink} target="_blank" rel="noopener noreferrer">Apply Now</a>
            </Button>
          )}
          <Button variant="outline" size="lg" onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, icon, children }) => (
  <div>
    <h3 className="text-xl font-semibold text-wsy-blue mb-3 flex items-center gap-2">
      {icon}
      {title}
    </h3>
    {children}
  </div>
);

export default JobDetailsDialog;

