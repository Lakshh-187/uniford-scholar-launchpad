import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Roadmap } from '@/components/Roadmap';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, AlertTriangle, Award, Book, Rocket, Users } from 'lucide-react';

const Episode7 = () => {
  const roadmapSteps = [
    {
      title: "Resources to Learn ",
      description: "Using membership card you get premium portals , kits , resources ."
    },
    {
      title: " Platform to Perform ",
      description: "Get internship , Cohort , Project expo , Uni-pitch , Compete ."
    },
    {
      title: "Opportunity via profile screening ",
      description: "Get Refreal , LOR , Recommendation, invitation & other carrer opportunities"
    },
    {
      title: "Vintage Cohort ",
      description: "Learn AI Automation , agents , AI Creation & build nextgen Portfolio"
    },
    {
      title: "Uniford Talent Hunt Alliance ",
      description: "Based on your portfolio get CAF , paid internship , Featured , profile listing & other carrer opportunities"
    }
  ];

  const commonQueries = [
    "I'm a fresher. How can I gain practical exposure and build a credible resume without paying any fees?",
    "I have projects and practical skills, but due to filters like Aptitude tests, DSA rounds, and ATS-based resume systems, I can't even get interview calls!",
    "I'm tired of applying for internships and jobs daily but getting no response. Is there a better way to get referrals?",
    "I'm from a Tier-2 university with an outdated curriculum. I feel my skills are becoming irrelevant for the job market. What should I do?",
    "I struggle with coding and DSA, and I have less time for placements. Are there any faster, industry-relevant programs?",
    "I'm in my second year and want to do an online internship, but most ask for ₹10K–₹70K for training. Is there any free alternative?",
    "I joined an internship but had to leave it due to academic pressure. Is there any internship that can balance with college work?",
    "Is there any organization that gives referrals or recommendations based on portfolio, not exams?",
    "I found unpaid internships easily, but finding a paid internship or job is tough. Any solution?",
    "I've done internships in Graphic and Web Development but still struggle to find good paid opportunities.",
    "Is there any program to learn AI, Automation, or NextGen Skills relevant to industry demands, without heavy fees?",
    "Is there an organization that connects students directly to companies using referrals, since 90% of hiring today happens via referrals?"
  ];

  const challenges = [
    {
      title: "Lack of Awareness",
      description: "80% of students unknowingly pay fees for things that are actually free. 90% never utilize simple tools like student ID discounts, academic resources, and direct platforms.",
      icon: <AlertTriangle className="h-6 w-6 text-amber-500" />
    },
    {
      title: "Old-School Methods",
      description: "Applying manually to internships and jobs one-by-one wastes time and reduces chances.",
      icon: <AlertTriangle className="h-6 w-6 text-amber-500" />
    },
    {
      title: "Irrelevant Skills",
      description: "Outdated college curriculums don't align with modern job requirements like AI, Automation, Analytics, etc.",
      icon: <AlertTriangle className="h-6 w-6 text-amber-500" />
    },
    {
      title: "High Education Costs",
      description: "Many institutions charge ₹10k–₹1L for simple internships, skill certifications, and resume building.",
      icon: <AlertTriangle className="h-6 w-6 text-amber-500" />
    }
  ];

  const features = [
    {
      title: "CAF Access",
      description: "Apply to 100+ internships & programs with a single form submission."
    },
    {
      title: "THA Membership",
      description: "Get profile screening, portfolio evaluation, and direct referrals for opportunities."
    },
    {
      title: "Project Expo & Uni-Pitch",
      description: "Participate in national & international project showcases and startup pitch events."
    },
    {
      title: "Portfolio Based Hiring",
      description: "Skip DSA, aptitude rounds. Direct interview calls based on your projects & portfolio."
    },
    {
      title: "Next-Gen Curriculum",
      description: "Learn industry-demand skills like AI, Automation, No-Code App Development, ML, Analytics, Digital Transformation, etc."
    },
    {
      title: "Academics-Friendly Internships",
      description: "Special internships with flexible timings and academic leave policies."
    },
    {
      title: "LOR & Recommendation Letters",
      description: "Earn Letters of Recommendation, Scholarships, and Incubation Opportunities through your performance."
    },
    {
      title: "Global Access",
      description: "Join a community connecting students to opportunities worldwide!"
    }
  ];

  const problemSolutions = [
    {
      problem: "Struggling for practical internships without fees",
      solution: "Access free, credible internships through SEP-700"
    },
    {
      problem: "Can't crack aptitude, DSA filters for job interviews",
      solution: "Get referrals & recommendations based on your portfolio"
    },
    {
      problem: "Daily applications without response",
      solution: "Use CAF (Common Application Form) to apply once, and reach multiple companies"
    },
    {
      problem: "Outdated university curriculum",
      solution: "Learn NextGen Skills like AI, Automation, Product Building, Growth Hacking"
    },
    {
      problem: "No time to manage internships with academics",
      solution: "Get flexible internships with leave policies that respect college schedules"
    },
    {
      problem: "Finding it hard to get paid internships",
      solution: "Access talent hunts, referral programs, and partner organizations hiring paid interns"
    },
    {
      problem: "Lack of awareness of free resources",
      solution: "SEP-700 portal offers all internships, events, project expos, and learning resources for free"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white">Episode 7</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">The Uniford Scholar ID Card</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A Non-Profit Global Initiative designed to connect students with FREE internships, 
            projects, opportunities, and career-launching platforms — without any cost.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Common Student Challenges</h2>
            
            <div className="bg-slate-50 border rounded-lg p-6 mb-8">
              <p className="text-lg mb-4">
                Every day, we receive hundreds of queries from students struggling with career growth.
                Here are some of the most common challenges they share with us:
              </p>
              
              <div className="space-y-3">
                {commonQueries.map((query, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <span className="text-wsy-blue flex-shrink-0 mt-1">🔹</span>
                    <p className="text-gray-700">{query}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Why Most Students Struggle?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {challenges.map((challenge, index) => (
                <div key={index} className="flex gap-4 p-4 border rounded-lg bg-red-50">
                  <div className="flex-shrink-0 mt-1">
                    {challenge.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{challenge.title}</h4>
                    <p className="text-gray-700">{challenge.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-wsy-blue/10 border border-wsy-blue/20 rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-bold mb-4">Now Imagine:</h3>
              <p className="text-lg mb-4">
                What if one single ID card could solve all your problems?
              </p>
              
              <ul className="space-y-2">
                {[
                  "Guaranteed Internship Opportunities",
                  "Free Access to Practical Exposure Programs",
                  "Direct Referrals & Recommendations",
                  "Resources to Learn Industry-Relevant Skills",
                  "Portfolio-based Hiring Opportunities",
                  "Industry Events, Hackathons, Project Expos, and Uni-pitch Access",
                  "No Need to Pay Any Fees!"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-2 bg-wsy-teal text-white hover:bg-wsy-teal/90">Introducing</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-wsy-teal">One ID Card. Multiple Opportunities.</span>
              </h2>
              <p className="text-lg text-gray-600">
              Build a credible portfolio, gain real-world exposure,with  internships, cohorts, AI automation tools, project expos, Uni-Pitch platforms, and career-launching opportunities — without any cost.
              </p>
              <p className="mt-4 font-medium">
              Using AI Profile Screening and Talent Hunt Alliance, students can secure referrals, Letters of Recommendation (LORs), recommendations, and career opportunities — without facing traditional filters like 
              DSA tests, aptitude exams, or resume shortlisting barriers — unlocking millions of potentials
              </p>
            </div>

            {/* Problem-Solution Table */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">How the Uniford Scholar ID Card Solves Your Problems</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead className="bg-wsy-blue text-white">
                    <tr>
                      <th className="p-4 text-left">Problem Faced</th>
                      <th className="p-4 text-left">Solution with Uniford Scholar ID</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {problemSolutions.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-4 border-r">{item.problem}</td>
                        <td className="p-4 text-wsy-blue font-medium">{item.solution}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Key Features of the Uniford Scholar ID Card 🚀</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <Card key={index} className="border-l-4 border-l-wsy-teal">
                    <CardContent className="p-4">
                      <h4 className="font-bold text-wsy-blue mb-1">🔸 {feature.title}</h4>
                      <p className="text-gray-700">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* RPO Model */}
            <div className="bg-white p-6 rounded-lg shadow-sm border mb-12">
              <h3 className="text-2xl font-bold mb-4">How It Works? (The RPO Model)</h3>
              <p className="mb-4">Following YCL's RPO Placement Strategy:</p>
              
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-wsy-blue text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                    R
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Resources to Learn</h4>
                    <p>Courses, Notes, Mentorship</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-wsy-teal text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                    P
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Platforms to Perform</h4>
                    <p>Internships, Projects, Hackathons</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-wsy-purple text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                    O
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Opportunities Based on Portfolio</h4>
                    <p>Jobs, Referrals, Incubations</p>
                  </div>
                </div>
              </div>
              
              <p className="mt-4 font-medium text-wsy-blue">
                The Uniford Scholar ID Card gives you everything: R + P + O in one platform.
              </p>
            </div>
            
            {/* Tabs Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Why Choose the Uniford Scholar ID Card? 🌟</h3>
              
              <Tabs defaultValue="features">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="benefits">Benefits</TabsTrigger>
                  <TabsTrigger value="comparison">Comparison</TabsTrigger>
                </TabsList>
                <TabsContent value="features" className="p-4 border rounded-md mt-2">
                  <ul className="space-y-2">
                    {[
                      "Zero Fees — 100% Free to Use",
                      "Global Opportunities — Work & showcase your talent worldwide",
                      "AI Based Matching — Smart recommendations based on your skills",
                      "Portfolio Over Certificates — Skills & Proof of Work matter most",
                      "Flexible with College — Designed keeping your academics and exams in mind",
                      "Support Non-Coders — Programs for students in Management, Data Science, Design, Growth Hacking, etc."
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>✅ {item}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="benefits" className="p-4 border rounded-md mt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex gap-3 items-start">
                      <Award className="h-6 w-6 text-wsy-teal flex-shrink-0" />
                      <div>
                        <h4 className="font-bold">Recognition</h4>
                        <p>Globally recognized credential that adds value to your resume</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Book className="h-6 w-6 text-wsy-blue flex-shrink-0" />
                      <div>
                        <h4 className="font-bold">Learning</h4>
                        <p>Access to cutting-edge curriculum and industry mentors</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Users className="h-6 w-6 text-wsy-purple flex-shrink-0" />
                      <div>
                        <h4 className="font-bold">Network</h4>
                        <p>Connect with peers, mentors and industry professionals</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Rocket className="h-6 w-6 text-wsy-accent flex-shrink-0" />
                      <div>
                        <h4 className="font-bold">Career Growth</h4>
                        <p>Accelerated path to job opportunities and career advancement</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="comparison" className="mt-2">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead className="bg-slate-100">
                        <tr>
                          <th className="p-3 text-left">Feature</th>
                          <th className="p-3 text-center">Uniford Scholar ID</th>
                          <th className="p-3 text-center">Typical Programs</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr>
                          <td className="p-3">Cost</td>
                          <td className="p-3 text-center text-green-600 font-bold">Free</td>
                          <td className="p-3 text-center text-red-600">₹10K - ₹1L</td>
                        </tr>
                        <tr>
                          <td className="p-3">Portfolio-based Hiring</td>
                          <td className="p-3 text-center text-green-600">✓</td>
                          <td className="p-3 text-center text-red-600">✗</td>
                        </tr>
                        <tr>
                          <td className="p-3">Academic Flexibility</td>
                          <td className="p-3 text-center text-green-600">✓</td>
                          <td className="p-3 text-center text-red-600">✗</td>
                        </tr>
                        <tr>
                          <td className="p-3">NextGen Skills</td>
                          <td className="p-3 text-center text-green-600">✓</td>
                          <td className="p-3 text-center text-yellow-600">Limited</td>
                        </tr>
                        <tr>
                          <td className="p-3">Direct Referrals</td>
                          <td className="p-3 text-center text-green-600">✓</td>
                          <td className="p-3 text-center text-red-600">✗</td>
                        </tr>
                        <tr>
                          <td className="p-3">Global Opportunities</td>
                          <td className="p-3 text-center text-green-600">✓</td>
                          <td className="p-3 text-center text-yellow-600">Limited</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Roadmap */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-2 text-center">Using Uniford Scholar ID Card</h3>
              <p className="text-center mb-8 text-gray-600">Follow these simple steps to start your journey</p>
              
              <Roadmap steps={roadmapSteps} />
            </div>

            {/* CTA */}
            <div className="bg-wsy-blue/10 border border-wsy-blue/20 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Start Your Journey to Success</h3>
              <p className="mb-6 text-lg">Without paying a single penny!</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg" className="bg-wsy-blue hover:bg-wsy-blue/90"><a href="https://forms.gle/n5vXF2dnc5HZsYPJ7" target='_blank'>
                  Apply for Scholar ID Card Now</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://www.youngburg.com/sep-700" target="_blank" rel="noopener noreferrer">
                  Explore SEP-700 Portal
                  </a>
                </Button>
              </div>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <Button variant="link" className="text-wsy-blue" asChild>
                  <a href="https://scholar.uniford.org/id-card" target='_blank' rel="noopener noreferrer">
                  Know More About the ID Card</a>
                  </Button>

                <Button variant="link" className="text-wsy-blue" asChild>
                <a href="https://scholar.uniford.org/programs" target='_blank' rel="noopener noreferrer">
                  details about program
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Episode7;
