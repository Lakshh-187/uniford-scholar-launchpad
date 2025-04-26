
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

const queries = [
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

export function PreviousQueries() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Previous Student Queries</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are some real examples of queries shared by students. We've helped them find solutions - let us help you too!
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {queries.map((query, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                <MessageSquare className="h-6 w-6 text-wsy-blue" />
                <CardTitle className="text-sm text-wsy-blue">Query #{index + 1}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{query}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
