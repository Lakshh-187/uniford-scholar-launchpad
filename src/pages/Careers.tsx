
import { useState } from 'react';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import JobDetailsDialog from '@/components/JobDetailsDialog';
import { Briefcase, MapPin, ExternalLink } from 'lucide-react';

const jobOpenings = [
  {
    id: 'leader-wsy',
    title: "Representative or Leader for WSY?",
    location: "Remote / Global",
    shortDescription: "Lead campaigns, connect students with opportunities, and drive impact in a non-profit setting.",
    details: {
      title: "Representative or Leader for WSY?",
      organization: "WSY? (Why Should You?)",
      mission: "WSY? is a world-first help-desk connecting students with worldwide free opportunities to tackle business vendors & high fees. We are a non-profit initiative dedicated to wiping out educator business vendors and tycoons that charge high fees. We connect & recommend only free & non-profit organizations' programs and opportunities.",
      responsibilities: [
        "Organize and lead awareness campaigns about WSY? and its mission.",
        "Collect student queries via designated forms and channels.",
        "Establish and maintain connections with university departments, NGOs, and other relevant organizations.",
        "Ensure every student query is addressed and guided towards a resolution or opportunity.",
        "Track and report on impact metrics.",
      ],
      impactCalculation: "Impact is measured by the number of 'Letters of Appreciation' received from successfully guided students and partner institutions. Grants are issued based on demonstrated impact and milestone achievement.",
      milestonesAndGrants: [
        { milestone: "Impact 1000 students (verified)", grant: "₹1 Lakh Grant" },
        { milestone: "Guide 100 students to successful outcomes (e.g., internships, scholarships, problem resolution)", grant: "₹2 Lakhs - ₹4 Lakhs Grant (range based on complexity and scale of success)" },
      ],
      benefits: [
        "Certification of Participation/Leadership",
        "Letter of Recommendation (LOR) detailing contributions and impact",
        "Travel allowance for approved WSY? related activities and events",
        "Invitation to national/international summits and conferences as a WSY? representative (performance-based)",
        "Opportunity for promotion to the core leadership team of WSY?",
        "Significant career development opportunities in social impact and education sectors",
        "Profile and contributions published on the WSY? official website and social media",
        "Potential to lead or secure tenders for larger educational/social projects under WSY?",
        "Eligibility for a higher percentage share on future large-scale grants or successful fundraising initiatives",
      ],
      training: "Comprehensive onboarding and continuous training will be provided. This includes modules on WSY? operations, communication strategies, campaign management, ethical considerations, and networking skills.",
      noticePeriod: "18 days",
      applicationLink: "https://forms.gle/yourApplyFormLinkHere", // Replace with actual link
    },
  },
  // Add more job openings here if needed
];

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState<typeof jobOpenings[0] | null>(null);

  const handleOpenDialog = (job: typeof jobOpenings[0]) => {
    setSelectedJob(job);
  };

  const handleCloseDialog = () => {
    setSelectedJob(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Nav />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        <section className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-wsy-blue mb-4">Join Our Mission</h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
            Become a part of WSY? and help us connect students with global opportunities, fighting against exploitation in education. We're looking for passionate individuals to drive change.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-wsy-blue mb-8 text-center">Current Openings</h2>
          {jobOpenings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {jobOpenings.map((job) => (
                <Card key={job.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-2xl text-wsy-teal flex items-center gap-2">
                      <Briefcase size={24} /> {job.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 flex items-center gap-1 pt-1">
                      <MapPin size={16} /> {job.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-slate-700">{job.shortDescription}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="teal" className="w-full" onClick={() => handleOpenDialog(job)}>
                      View Details <ExternalLink size={18} className="ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-center text-slate-600 text-lg">
              We currently don't have any open positions. Please check back later!
            </p>
          )}
        </section>
      </main>
      <Footer />
      {selectedJob && selectedJob.details && (
        <JobDetailsDialog
          isOpen={!!selectedJob}
          onClose={handleCloseDialog}
          jobDetails={selectedJob.details}
        />
      )}
    </div>
  );
};

export default CareersPage;

