
import { useState } from 'react';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, Star, Award, FileText, Briefcase, UserCheck, HelpCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Mentor() {
  const { toast } = useToast();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formStep, setFormStep] = useState(1);

  const submitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Received",
      description: "Your mentor application has been submitted for review.",
    });
    setIsFormOpen(false);
    setFormStep(1);
  };

  const mentorRequirements = [
    "Bachelor's degree or higher in relevant field",
    "Minimum 2 years of professional experience",
    "Strong communication skills",
    "Knowledge of industry trends and practices",
    "Ability to commit at least 5 hours per week"
  ];

  const mentorBenefits = [
    "Letter of Appreciation (LOA) for each successfully resolved query",
    "Performance-based compensation",
    "Exclusive networking opportunities",
    "Recognition on WSY? platform and events",
    "Professional development workshops"
  ];

  const mentorRoles = [
    "Review and respond to student queries in your expertise area",
    "Connect students with relevant resources and opportunities",
    "Provide guidance using the SEP-700 methodology",
    "Participate in monthly mentor community meetings",
    "Help improve the mentor program through feedback"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-wsy-purple to-wsy-blue text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Become a WSY? Mentor</h1>
              <p className="text-xl mb-8">Share your expertise, guide the next generation, and unlock exclusive opportunities</p>
              <Button 
                size="lg" 
                onClick={() => setIsFormOpen(true)}
                className="bg-white text-wsy-purple hover:bg-gray-100"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </section>

        {/* About the Mentor Program */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">About the Mentor Program</h2>
              
              <div className="grid gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <HelpCircle className="text-wsy-purple" />
                      What is SEP-700?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      SEP-700 (Student Empowerment Protocol) is our proprietary methodology for mentoring and guiding students. 
                      It's a structured approach that focuses on 7 key areas: Problem Identification, Resource Allocation, 
                      Opportunity Mapping, Growth Planning, Roadmap Creation, Execution Support, and Success Measurement.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="text-wsy-purple" />
                      Recognition & Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Our mentors receive recognition and rewards for their contributions. For each successfully resolved query, mentors earn:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {mentorBenefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mentor Journey */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Your Mentor Journey</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border-l-4 border-l-wsy-purple">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-wsy-purple/20 flex items-center justify-center">
                      <FileText className="text-wsy-purple" />
                    </div>
                  </div>
                  <CardTitle className="text-center">1. Application</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-700">Submit your application with professional experience and areas of expertise.</p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-wsy-purple">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-wsy-purple/20 flex items-center justify-center">
                      <UserCheck className="text-wsy-purple" />
                    </div>
                  </div>
                  <CardTitle className="text-center">2. Verification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-700">Our team verifies your credentials and conducts an interview.</p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-wsy-purple">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-wsy-purple/20 flex items-center justify-center">
                      <Briefcase className="text-wsy-purple" />
                    </div>
                  </div>
                  <CardTitle className="text-center">3. Onboarding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-700">Complete mentor training and SEP-700 methodology certification.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Roles & Responsibilities */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Mentor Roles & Responsibilities</h2>
              
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Key Responsibilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {mentorRoles.map((role, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 bg-wsy-purple/20 p-1 rounded-full">
                          <Star className="h-4 w-4 text-wsy-purple" />
                        </div>
                        <span className="text-gray-700">{role}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Standard Operating Procedure (SOP)</CardTitle>
                </CardHeader>
                <CardContent>
                  <Collapsible className="space-y-2">
                    <CollapsibleTrigger className="flex items-center gap-2 text-lg font-medium text-wsy-purple">
                      <ChevronDown className="h-5 w-5" />
                      View Mentor SOP
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-4 pt-2">
                      <div>
                        <h4 className="font-semibold text-lg">1. Query Assignment</h4>
                        <p className="text-gray-700">Queries are assigned based on mentor expertise and availability.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">2. Initial Assessment</h4>
                        <p className="text-gray-700">Review the query and categorize it according to the SEP-700 framework.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">3. Response Timeline</h4>
                        <p className="text-gray-700">Provide initial response within 24 hours and detailed guidance within 72 hours.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">4. Follow-up Protocol</h4>
                        <p className="text-gray-700">Schedule follow-up sessions as needed to ensure student progress.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">5. Documentation</h4>
                        <p className="text-gray-700">Document all interactions and resources shared in the mentor portal.</p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Requirements & Application */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Become a Mentor</h2>
              
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Eligibility Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {mentorRequirements.map((requirement, index) => (
                      <li key={index}>{requirement}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {!isFormOpen ? (
                <div className="text-center">
                  <Button 
                    onClick={() => setIsFormOpen(true)}
                    className="bg-wsy-purple hover:bg-wsy-purple/90"
                    size="lg"
                  >
                    Apply to Become a Mentor
                  </Button>
                </div>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>Mentor Application Form</CardTitle>
                    <CardDescription>Please fill out the form below to apply for the mentor program.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={submitApplication} className="space-y-6">
                      {formStep === 1 && (
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                            <Input id="name" required placeholder="Your full name" />
                          </div>
                          
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                            <Input id="email" type="email" required placeholder="your.email@example.com" />
                          </div>
                          
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                            <Input id="phone" required placeholder="Your phone number" />
                          </div>
                          
                          <div>
                            <label htmlFor="linkedIn" className="block text-sm font-medium text-gray-700 mb-1">LinkedIn Profile URL</label>
                            <Input id="linkedIn" placeholder="https://linkedin.com/in/your-profile" />
                          </div>
                        </div>
                      )}
                      
                      {formStep === 2 && (
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">Highest Education *</label>
                            <Input id="education" required placeholder="e.g. MBA, Marketing, University Name" />
                          </div>
                          
                          <div>
                            <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Professional Experience (years) *</label>
                            <Input id="experience" type="number" min="0" required />
                          </div>
                          
                          <div>
                            <label htmlFor="expertise" className="block text-sm font-medium text-gray-700 mb-1">Areas of Expertise *</label>
                            <Textarea id="expertise" required placeholder="List your key areas of expertise" className="h-24" />
                          </div>
                        </div>
                      )}
                      
                      {formStep === 3 && (
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1">Motivation for Becoming a Mentor *</label>
                            <Textarea id="motivation" required placeholder="Why do you want to be a WSY? mentor?" className="h-24" />
                          </div>
                          
                          <div>
                            <label htmlFor="approach" className="block text-sm font-medium text-gray-700 mb-1">Your Mentoring Approach *</label>
                            <Textarea id="approach" required placeholder="Describe your approach to mentoring" className="h-24" />
                          </div>
                          
                          <div>
                            <label htmlFor="commitment" className="block text-sm font-medium text-gray-700 mb-1">Time Commitment (hours/week) *</label>
                            <Input id="commitment" type="number" min="1" max="20" required />
                          </div>
                        </div>
                      )}
                    </form>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    {formStep > 1 && (
                      <Button variant="outline" onClick={() => setFormStep(prev => prev - 1)}>
                        Previous
                      </Button>
                    )}
                    {formStep < 3 ? (
                      <Button className="bg-wsy-purple hover:bg-wsy-purple/90" onClick={() => setFormStep(prev => prev + 1)}>
                        Next
                      </Button>
                    ) : (
                      <Button className="bg-wsy-purple hover:bg-wsy-purple/90" onClick={submitApplication}>
                        Submit Application
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Mentor Community</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 mx-auto"></div>
                    <h3 className="font-semibold">Dr. Aisha Patel</h3>
                    <p className="text-gray-600 text-sm">Technology Mentor</p>
                    <div className="flex justify-center mt-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                  <p className="text-gray-700 text-center">
                    "Being a WSY? mentor has been incredibly rewarding. I've helped over 50 students find their path in tech, and received amazing career opportunities as a result."
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 mx-auto"></div>
                    <h3 className="font-semibold">Raj Sharma</h3>
                    <p className="text-gray-600 text-sm">Finance Mentor</p>
                    <div className="flex justify-center mt-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                  <p className="text-gray-700 text-center">
                    "The SEP-700 framework provides a structured approach to mentoring that truly works. I've seen students transform their career trajectories with this guidance."
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 mx-auto"></div>
                    <h3 className="font-semibold">Maria Rodriguez</h3>
                    <p className="text-gray-600 text-sm">Creative Arts Mentor</p>
                    <div className="flex justify-center mt-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                  <p className="text-gray-700 text-center">
                    "The LOA recognition and networking opportunities have opened doors I never imagined. I'm grateful to be part of such an impactful community."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>What is a Letter of Appreciation (LOA)?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      A Letter of Appreciation (LOA) is an official recognition from WSY? acknowledging your expertise and contribution. 
                      LOAs can be added to your professional portfolio and are recognized by our partner organizations for career advancement opportunities.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>How much time do I need to commit?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      We require a minimum commitment of 5 hours per week. This includes time spent reviewing and responding to queries, 
                      follow-ups, and participation in mentor community activities. You can increase your commitment based on your availability.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>How are mentors compensated?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Mentors receive compensation based on their activity level and quality of guidance. You'll earn credits for each resolved query, 
                      which can be converted to monetary compensation. Top-performing mentors also receive additional benefits like exclusive event invitations 
                      and professional development opportunities.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
