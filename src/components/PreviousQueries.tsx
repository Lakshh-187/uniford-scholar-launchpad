
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, ArrowRight, Calendar, CheckCircle, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const queries = [
  {
    id: 1,
    question: "I'm a fresher. How can I gain practical exposure and build a credible resume without paying any fees?",
    date: "May 5, 2024",
    tags: ["Career", "Resume", "Fresher"],
    answers: 12,
    status: "Resolved"
  },
  {
    id: 2,
    question: "I have projects and practical skills, but due to filters like Aptitude tests, DSA rounds, and ATS-based resume systems, I can't even get interview calls!",
    date: "May 3, 2024",
    tags: ["Interviews", "Technical", "ATS"],
    answers: 8,
    status: "Trending"
  },
  {
    id: 3,
    question: "I'm tired of applying for internships and jobs daily but getting no response. Is there a better way to get referrals?",
    date: "April 29, 2024",
    tags: ["Internship", "Referrals", "Job Search"],
    answers: 23,
    status: "Resolved"
  },
  {
    id: 4,
    question: "I'm from a Tier-2 university with an outdated curriculum. I feel my skills are becoming irrelevant for the job market. What should I do?",
    date: "April 27, 2024",
    tags: ["Curriculum", "Skills", "Education"],
    answers: 15,
    status: "Featured"
  },
  {
    id: 5,
    question: "I struggle with coding and DSA, and I have less time for placements. Are there any faster, industry-relevant programs?",
    date: "April 25, 2024",
    tags: ["Coding", "DSA", "Placement"],
    answers: 19,
    status: "Trending"
  },
  {
    id: 6,
    question: "I'm in my second year and want to do an online internship, but most ask for ₹10K–₹70K for training. Is there any free alternative?",
    date: "April 22, 2024",
    tags: ["Internship", "Free", "Training"],
    answers: 31,
    status: "Resolved"
  },
  {
    id: 7,
    question: "I joined an internship but had to leave it due to academic pressure. Is there any internship that can balance with college work?",
    date: "April 20, 2024",
    tags: ["Work-Life", "Balance", "College"],
    answers: 7,
    status: "In Review"
  },
  {
    id: 8,
    question: "Is there any organization that gives referrals or recommendations based on portfolio, not exams?",
    date: "Coming Soon",
    tags: ["Referrals", "Portfolio", "Organization"],
    answers: 0,
    status: "Coming Soon"
  },
  {
    id: 9,
    question: "I found unpaid internships easily, but finding a paid internship or job is tough. Any solution?",
    date: "Coming Soon",
    tags: ["Paid", "Internship", "Job Search"],
    answers: 0,
    status: "Coming Soon"
  }
];

export function PreviousQueries() {
  const currentQueries = queries.filter(q => q.status !== "Coming Soon").slice(0, 7);
  const comingSoonQueries = queries.filter(q => q.status === "Coming Soon");

  const getStatusColor = (status: string) => {
    switch(status) {
      case "Resolved":
        return "bg-green-100 text-green-700 border-green-300";
      case "Trending":
        return "bg-orange-100 text-orange-700 border-orange-300";
      case "Featured":
        return "bg-purple-100 text-purple-700 border-purple-300";
      case "In Review":
        return "bg-blue-100 text-blue-700 border-blue-300";
      case "Coming Soon":
        return "bg-gray-100 text-gray-500 border-gray-300";
      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Previous Student Queries</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are some real examples of queries shared by students. We've helped them find solutions - let us help you too!
          </p>
        </div>
        
        <div className="space-y-8">
          {/* Active Queries */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {currentQueries.map((query, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden border-t-4 border-t-wsy-teal">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(query.status)}`}>
                      {query.status}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {query.date}
                    </span>
                  </div>
                  <span className="text-xs bg-gray-50 px-2 py-1 rounded-full flex items-center">
                    <MessageSquare className="h-3 w-3 mr-1" /> {query.answers} answers
                  </span>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800 font-medium mb-3 line-clamp-3">{query.question}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {query.tags.map((tag, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs flex items-center">
                        <Tag className="h-3 w-3 mr-1" /> {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="text-wsy-teal hover:text-wsy-teal/80 p-0 h-auto">
                    View full question <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-6">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">5</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">6</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">7</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>

          {/* Coming Soon Queries */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Coming Soon</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {comingSoonQueries.map((query, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden border border-dashed border-gray-300 bg-gray-50">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(query.status)}`}>
                        {query.status}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 font-medium mb-3">{query.question}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {query.tags.map((tag, i) => (
                        <span key={i} className="bg-gray-200 text-gray-600 px-2 py-0.5 rounded text-xs flex items-center">
                          <Tag className="h-3 w-3 mr-1" /> {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <Button variant="outline" size="sm" className="text-gray-500" disabled>
                        Available soon
                      </Button>
                      <span className="text-xs text-gray-400">Get notified when published</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
