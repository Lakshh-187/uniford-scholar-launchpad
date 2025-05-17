
import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QueryDetailsDialog, QueryDetailsProps } from '@/components/QueryDetailsDialog';
import { OpportunityDetailsDialog, Opportunity } from '@/components/OpportunityDetailsDialog';
import { Briefcase, CheckCircle, ExternalLink, HelpCircle, Lightbulb, MessageSquare, FileText, Users, Zap, Target, BookOpen, GraduationCap, Link as LinkIcon, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Sample Data for Queries (compatible with QueryDetailsDialog)
const sampleQueries: QueryDetailsProps['query'][] = [
  {
    id: 1301,
    question: "Is a paid internship from an IIT/NIT collaboration more valuable than a free one?",
    description: "Students often wonder about the real value of paid internships, especially those marketed with prestigious university collaborations, versus free internships that offer practical experience.",
    longDescription: "Doing a paid internship is often like buying a course with a certificate. These programs can be business ventures using the names of IITs, NITs, or other companies to sell high-fee courses, internships, or workshops. An actual internship should be full of responsibility, management, stress, learning, implementation, and collaboration, which typically happens when you work on real projects in startups or companies.\n\nIf free opportunities, resources, and valuable experiences are available, why pay? Awareness is key. Here are some techniques to secure internships freely and some organizations that genuinely offer them.",
    date: "2025-05-10",
    tags: ["Internships", "Paid vs Free", "Career Advice"],
    answers: 8,
    status: "Resolved",
    category: "Internships",
    participants: 15,
    attachments: 2,
  },
  {
    id: 1302,
    question: "How can I get referrals if I'm tired of applying daily with no response?",
    description: "The manual application process can be time-consuming and yield few results in the modern AI & Automation Era.",
    longDescription: "In this modern AI & Automation Era, applying manually one by one is very time-consuming and hectic. It's better to use modern methods like AI-powered platforms that automatically match your profile and apply to multiple organizations or software applications. You apply once, and they recommend your profile directly to matched companies. Some organizations use a CAF (Common Application Form), where one application reaches multiple opportunities. Examples include Uniford Foundation and Mercor, which are AI-based profile screening organizations.",
    date: "2025-05-12",
    tags: ["Job Search", "Referrals", "Networking", "AI Tools"],
    answers: 12,
    status: "Trending",
    category: "Job Application",
  },
];

// Sample Data for Opportunities
const sampleOpportunities: Opportunity[] = [
  {
    id: 'opp1',
    title: "AI & Automation Internship",
    company: "Uniford Foundation",
    shortDescription: "Learn and implement AI automation tools in real-world projects. Non-profit initiative.",
    longDescription: "This internship focuses on practical application of AI and Automation tools. You'll work on projects that make you 10X faster and smarter, like using Firestore to edit websites, AI with Excel, and AI with Automate. This program is designed to provide hands-on experience and a UNSR verified certificate without heavy fees. We connect you with non-profit organizations offering valuable, free learning experiences.",
    requirements: ["Basic understanding of programming concepts", "Eagerness to learn AI tools", "Good communication skills"],
    benefits: ["Hands-on experience with cutting-edge AI tools", "Mentorship from industry experts", "UNSR verified certificate", "Networking opportunities"],
    tags: ["AI", "Automation", "Internship", "Non-profit"],
    detailsLink: "#" // Placeholder link
  },
  {
    id: 'opp2',
    title: "Open Source Contributor Program",
    company: "Tech Innovators Hub",
    shortDescription: "Contribute to exciting open-source projects and build your portfolio. Get LOR.",
    longDescription: "Join our community of developers contributing to impactful open-source projects. This is a great way to gain practical experience, enhance your portfolio, and earn a Letter of Recommendation (LOR). We list many opportunities on the SEP-700 portal, and you can also apply for a scholar ID card to get direct access to projects.",
    requirements: ["Proficiency in at least one programming language (e.g., Python, JavaScript)", "Experience with Git and GitHub", "Ability to collaborate in a team"],
    benefits: ["Gain real-world coding experience", "Build a strong portfolio", "Receive a Letter of Recommendation (LOR)", "Expand your professional network"],
    tags: ["Open Source", "Development", "Portfolio Building", "LOR"],
    detailsLink: "#" // Placeholder link
  }
];


const SEP1300Page: React.FC = () => {
  const [selectedQuery, setSelectedQuery] = useState<QueryDetailsProps['query']>(null);
  const [isQueryDialogOpen, setIsQueryDialogOpen] = useState(false);
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity | null>(null);
  const [isOpportunityDialogOpen, setIsOpportunityDialogOpen] = useState(false);

  const openQueryDialog = (query: QueryDetailsProps['query']) => {
    setSelectedQuery(query);
    setIsQueryDialogOpen(true);
  };

  const openOpportunityDialog = (opportunity: Opportunity) => {
    setSelectedOpportunity(opportunity);
    setIsOpportunityDialogOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-12 bg-gray-50">
      
      <header className="text-center py-8 bg-wsy-purple text-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-2">SEP-1300: Your Guide to Career Success</h1>
        <p className="text-xl text-purple-200">Roadmap, Portfolio Building, Internships, and Modern Skills</p>
      </header>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-wsy-blue flex items-center"><GraduationCap className="mr-2 h-6 w-6"/>Roadmap & Credible Portfolio for "Campus to Corporate" Aspirants</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-700">
          <p className="italic">Join a startup as a first internship where you try every domain and can explore many categories. After gaining exposure to various domains, you can choose one that aligns with your interests and strengths, then pursue 2-3 domain-based internships. Participate extensively in competitions and projects. Build and collaborate to complete major problem-solving projects.</p>
          <p className="font-semibold">Note: During this journey, focus on building as many connections and networks as possible. Practical exposure and connections will help build a credible portfolio and make it easier to get referrals and Letters of Recommendation (LOR) for direct career opportunities.</p>
          <div>
            <h4 className="font-semibold text-lg text-wsy-purple mb-2 flex items-center"><Target className="mr-2 h-5 w-5"/>Key Journey Steps:</h4>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Learn Automation tools</li>
              <li>Learn AI Tools and build with AI</li>
              <li>Complete 3-4 internships</li>
              <li>Undertake 2-3 major problem-solving projects</li>
              <li>Actively participate in competitions and events</li>
              <li>Build a strong LinkedIn profile & a compelling portfolio website</li>
              <li>Engage in open-source contributions & collaborations</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <section>
        <h2 className="text-3xl font-bold text-center mb-8 text-wsy-purple flex items-center justify-center"><HelpCircle className="mr-3 h-8 w-8"/>Common Career Challenges & Solutions</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {[
            {
              id: "problem1",
              question: "Paid internship from IIT, NIT & big company collaboration: Is there any free internship that's more valuable? Is it okay to enroll in paid training internships?",
              answer: "Doing a paid internship is often like buying a course with a certificate. These programs can be business ventures using the names of IITs, NITs, or other companies to sell high-fee courses, internships, or workshops. A real internship is full of responsibility, management, stress, learning, implementation, and collaboration – this typically happens when you work on real projects in startups or companies.\n\nNowadays, we see many business vendors that tie up with IITs, NITs & other companies and, using their name, sell high-fee courses, internships, and workshops.\n\nSo the question is, if there are free opportunities, resources, and everything available freely, why would you pay? You just need awareness to get everything. Here, I will share some techniques to get internships freely and some organizations that surely provide internships.\n\n**Tip - To get good placement you need 5 things:**\n• 3-5 internships in different domains\n• Problem-solving projects & major projects\n• Connections & Network\n• High participation to get LOR, referrals & Connections along with practical exposure\n• Use modern techniques like AI profile screening, Recommendation, CAF to get opportunities\n• AI tools, Automation to become 10x faster and stand out"
            },
            {
              id: "problem2",
              question: "I'm tired of applying for internships and jobs daily but getting no response. Is there a better way to get referrals?",
              answer: "In this modern AI & Automation Era, if you apply manually one by one, it's very time-consuming and hectic. Use modern methods like AI that automatically apply based on your profile to as many organizations, software, and applications. You apply once, and they recommend your profile directly to matched companies. I will mention some opportunities & organizations that use a CAF (Common Application Form), where you apply once, and your application reaches multiple opportunities."
            },
            {
              id: "problem3",
              question: "I'm from a Tier-2 university with an outdated curriculum. I feel my skills are becoming irrelevant for the job market. What should I do?",
              answer: "Be aware & follow what's relevant to the job industry and what really matters. Learn only that, not too much for exams. Be good in AI Automation, AI tools, and AI Creator, and be proficient in one domain. Check the given roadmap & opportunities."
            },
            {
              id: "problem4",
              question: "I struggle with coding and DSA, and I have less time for placements. Are there any faster, industry-relevant programs?",
              answer: "Many students face this challenge. Focus on building a strong portfolio through projects and practical skills. Explore programs that emphasize hands-on experience and industry-relevant technologies over traditional DSA-heavy approaches. Look for bootcamps or specialized training in areas like AI, cloud computing, or specific development stacks that are in high demand. Many organizations also value problem-solving abilities demonstrated through projects more than just DSA scores."
            },
            {
              id: "problem5",
              question: "I've done internships in Graphic and Web Development but still struggle to find good paid opportunities.",
              answer: "In today's era, things change very fast, and the tech market changes frequently because of the AI & Automation revolution. AI can displace 80% of the work of graphic & frontend developers. Try to learn skills that are relevant. You can become a Developer, Software Engineer, or Data Scientist, but the key is you have to use AI as an assistant to become 10X better & smarter – that's what companies need. If you are looking for any opportunity, I will mention them below."
            },
            {
              id: "problem6",
              question: "Is there any program to learn AI, Automation, or NextGen Skills relevant to industry demands, without heavy fees?",
              answer: "There are many non-profit organizations that tie up with other organizations to provide internships to students where they learn & implement AI Automation & AI Creator, prompting, etc. These skills make you 10X faster & smart using AI, like Firestore to edit websites, AI with Excel, AI with Automate, etc. Here are the Programs where you can apply."
            },
            {
              id: "problem7",
              question: "Is there an organization that connects students directly to companies using referrals, since 90% of hiring today happens via referrals? I have projects and practical skills, but due to filters like Aptitude tests, DSA rounds, and ATS-based resume systems, I can't even get interview calls! Is there any organization that gives referrals or recommendations based on portfolio, not exams?",
              answer: "There are many organizations that, based on your profile screening, give you LOR, referrals & direct recommendations. Many students are not good in DSA or Aptitude tests and get filtered out because of these rounds, and their practical skills don't get a chance in interviews. To save cost & time, companies often hire through internal referrals.\n\n**Uniford Foundation, Mercor, etc., are AI-based profile screening organizations.** You can apply to them via a link. These platforms focus on your skills and portfolio."
            }
          ].map(item => (
            <AccordionItem value={item.id} key={item.id} className="bg-white border rounded-md shadow-sm">
              <AccordionTrigger className="p-6 text-left font-medium text-wsy-blue hover:no-underline">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-yellow-500 mt-1 shrink-0" />
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 text-gray-700 whitespace-pre-line">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-wsy-blue flex items-center"><Briefcase className="mr-2 h-6 w-6"/>Internship Guidance</CardTitle>
          <CardDescription>We guide students with different methods, tips & ways.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-700">
          <p><strong className="text-red-600">Internship:</strong> Avoid paid internships (also called training programs) that have no value, as they are like a course with a certificate.</p>
          <p>Applying one-by-one is a traditional & old manual method. We are living in a modern automation & AI era; use hi-tech, time-saving methods like CAF (Common Application Form).</p>
          
          <div>
            <h4 className="font-semibold text-lg text-wsy-purple mb-2">Best Ways to Get Internships:</h4>
            <ol className="list-decimal list-inside space-y-2 pl-4">
              <li>Join startups & founders' communities, groups, and networks on LinkedIn, WhatsApp, social media apps, etc. Share your portfolio and contribute to their projects to get more highlighted & opportunities. This is the easiest way to get an opportunity.</li>
              <li>You can also use CAF – one application form for many opportunities, as many non-profit organizations provide it to their scholars. By checking eligibility, you can also apply & after getting an ID card, it's the organization's responsibility to provide an internship to you.
                <Button size="sm" className="ml-2 mt-1"><LinkIcon className="mr-1 h-4 w-4"/>Apply for CAF</Button>
              </li>
            </ol>
          </div>

          <p className="font-semibold mt-4">Note: We only suggest & connect with non-profit organizations, free & modern ways. We are totally against paid & high-fee opportunities.</p>
          <p><strong className="text-wsy-teal">Tip:</strong> If you find it struggles to get an internship because you're a fresher & lack a portfolio, then instead of paying for an internship or wasting time, you can connect & apply for an ID card. Here you get a guaranteed internship based on eligibility & seats.</p>
          <div className="flex flex-wrap gap-4 mt-4">
            <Button variant="teal"><Star className="mr-2 h-4 w-4"/>Apply Now (for ID Card)</Button>
            <Button variant="outline"><HelpCircle className="mr-2 h-4 w-4"/>Help Desk (Contact for Queries)</Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-wsy-blue flex items-center"><Users className="mr-2 h-5 w-5"/>Participate to Enhance Your Profile</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 space-y-2">
            <p>Participation enhances practical exposure, credibility, connections & portfolio with real-world experience.</p>
            <p>Participate in competitions, events, expos, SIH (Smart India Hackathon), hackathons, conferences that are listed on "<strong>Unstop</strong>", "<strong>SEP-700</strong>" portal. No need to pay any fees; just by using awareness & right platforms, you get free participation, as many companies ask for application fees because they are business vendors.</p>
            <p>If you are unable to get an opportunity/platform to participate, then you can apply for a Uniford scholar ID card and use it to participate in Pitchburg, expos & other competitions.</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-wsy-blue flex items-center"><FileText className="mr-2 h-5 w-5"/>LOR (Letter of Recommendation)</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 space-y-2">
            <p>A Letter of Recommendation enhances your portfolio, chances to get more opportunities, and credibility. It gives an edge & more importance, helping you stand out in the crowd.</p>
            <p>You can get an LOR by doing open-source contributions, by participating in projects (including international projects), and contributing to problem-solving initiatives.</p>
            <p>We list many opportunities on the <strong>SEP-700</strong> portal, and you can also apply for a scholar ID card to get direct opportunities.</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-wsy-blue flex items-center"><Zap className="mr-2 h-5 w-5"/>Modern Tools</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 space-y-2">
            <p>In today's world, we are living in the era of AI tools that do days' work in minutes. Use modern AI tools to create websites, images, videos, send bulk messages, manage Excel, data mine, scrape, create visuals, do academic assignments, edit, etc., to save time & stand out.</p>
            <p>You can learn these from open sources like YouTube and Google. Be aware of paid courses that teach what's already available on open sources; don't get stuck in business vendor traps.</p>
            <p>If you want a free certification internship where you learn & implement & get a UNSR verified certificate, you can apply <Button variant="link" className="p-0 h-auto">here</Button>.</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-wsy-blue flex items-center"><Lightbulb className="mr-2 h-5 w-5"/>AI Creator</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 space-y-2">
            <p>This is the most demanding skill of this time. We can create everything within a fraction of a second – apps, websites, graphics, songs, voiceovers, projects, software, automation, anything – just using AI. This saves your time and energy. Today, companies want you to be 10X faster & efficient. Don't be afraid of AI; use it and be 10X faster.</p>
            <p>There are many videos available. Be updated on what new tools are launched & what new things are happening in the market. You can use websites like "<strong>AIexploria</strong>" to be aware of tools and also use browsers and YouTube to learn and stay updated. Also, follow creators on socials that give updates on the latest tools.</p>
            <p>If you want to learn & implement with an internship certificate, you can go for a Uniford Foundation internship.</p>
            <p className="font-semibold mt-2">Note: You can access all resources, knowledge & internships without paying any fees. Be aware.</p>
          </CardContent>
        </Card>
      </div>

      <section className="pt-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-wsy-purple flex items-center justify-center"><MessageSquare className="mr-3 h-8 w-8"/>Featured Queries</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {sampleQueries.map((query) => (
            <Card key={query!.id} className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-semibold text-wsy-blue">{query!.question}</CardTitle>
                  <Badge variant={query!.status === "Trending" ? "warning" : "success"}>{query!.status}</Badge>
                </div>
                <CardDescription className="text-sm text-gray-600 pt-1">{query!.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-3">
                  {query!.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
                </div>
                <p className="text-xs text-gray-500">Category: {query!.category} | Answers: {query!.answers}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" onClick={() => openQueryDialog(query)}>
                  <BookOpen className="mr-2 h-4 w-4"/>View Full Query
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="pt-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-wsy-purple flex items-center justify-center"><Briefcase className="mr-3 h-8 w-8"/>Featured Opportunities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {sampleOpportunities.map((opp) => (
            <Card key={opp.id} className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                 <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-semibold text-wsy-blue">{opp.title}</CardTitle>
                    <Badge variant="secondary">{opp.company}</Badge>
                  </div>
                <CardDescription className="text-sm text-gray-600 pt-1">{opp.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-3">
                  {opp.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="teal" size="sm" onClick={() => openOpportunityDialog(opp)}>
                  <ExternalLink className="mr-2 h-4 w-4"/>View Details & Apply
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <QueryDetailsDialog open={isQueryDialogOpen} onOpenChange={setIsQueryDialogOpen} query={selectedQuery} />
      <OpportunityDetailsDialog open={isOpportunityDialogOpen} onOpenChange={setIsOpportunityDialogOpen} opportunity={selectedOpportunity} />

      <footer className="text-center mt-12 py-6 border-t">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} Unifier Scholar Platform. All rights reserved.</p>
        <p className="text-sm text-gray-500">Empowering students for a brighter future.</p>
      </footer>
    </div>
  );
}

export default SEP1300Page;
