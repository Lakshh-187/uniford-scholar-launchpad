
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, ArrowRight, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { QueryDetailsDialog } from "@/components/QueryDetailsDialog";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const queries = [
  {
    id: 1,
    question: "I'm a fresher. How can I gain practical exposure and build a credible resume without paying any fees?",
    date: "May 5, 2024",
    tags: ["Career", "Resume", "Fresher"],
    answers: 12,
    status: "Resolved",
    longDescription: "I've just graduated with a degree in Computer Science, but I'm finding it difficult to land my first job. Companies are asking for experience, but how can I get experience without a job? I don't have money to pay for expensive bootcamps or trainings. Are there any free resources or programs that can help me gain practical skills and build a resume that stands out to employers? I'm particularly interested in web development and data science fields."
  },
  {
    id: 2,
    question: "I have projects and practical skills, but due to filters like Aptitude tests, DSA rounds, and ATS-based resume systems, I can't even get interview calls!",
    date: "May 3, 2024",
    tags: ["Interviews", "Technical", "ATS"],
    answers: 8,
    status: "Trending",
    longDescription: "I've built several personal projects using modern technologies and even contributed to open source, but I'm still struggling to get past the initial screening stages of job applications. The automated filtering systems seem to be rejecting my applications before a human even sees them. How can I optimize my resume for ATS systems? And what's the best approach to prepare for aptitude tests and DSA rounds that seem disconnected from the actual work I want to do?"
  },
  {
    id: 3,
    question: "I'm tired of applying for internships and jobs daily but getting no response. Is there a better way to get referrals?",
    date: "April 29, 2024",
    tags: ["Internship", "Referrals", "Job Search"],
    answers: 23,
    status: "Resolved",
    longDescription: "Over the past three months, I've applied to more than 200 positions but have only received a handful of responses, all rejections. I've heard that referrals significantly increase the chances of getting an interview, but I don't know many people in the industry. What are some effective strategies for building a network and getting referrals when you're just starting out? Are there any platforms or communities specifically designed to help students connect with professionals who can refer them?"
  },
  {
    id: 4,
    question: "I'm from a Tier-2 university with an outdated curriculum. I feel my skills are becoming irrelevant for the job market. What should I do?",
    date: "April 27, 2024",
    tags: ["Curriculum", "Skills", "Education"],
    answers: 15,
    status: "Featured",
    longDescription: "My university's computer science program is teaching technologies and programming languages that aren't in high demand anymore. We're still focusing on older versions of languages and frameworks while companies are looking for experience with the latest tools. How can I supplement my education to ensure I'm learning relevant, marketable skills? Should I focus on self-study alongside my degree, or are there structured programs that can help bridge the gap between my university education and industry requirements?"
  },
  {
    id: 5,
    question: "I struggle with coding and DSA, and I have less time for placements. Are there any faster, industry-relevant programs?",
    date: "April 25, 2024",
    tags: ["Coding", "DSA", "Placement"],
    answers: 19,
    status: "Trending",
    longDescription: "I find Data Structures and Algorithms particularly challenging, and I'm concerned this will prevent me from clearing technical interviews. With placement season approaching in just a few months, I don't have much time to become proficient. Are there any accelerated programs or resources that focus specifically on the most common interview questions and patterns? I'm also interested in roles that might not require extensive DSA knowledge but still offer good career prospects in tech."
  },
  {
    id: 6,
    question: "I'm in my second year and want to do an online internship, but most ask for ₹10K–₹70K for training. Is there any free alternative?",
    date: "April 22, 2024",
    tags: ["Internship", "Free", "Training"],
    answers: 31,
    status: "Resolved",
    longDescription: "I'm looking to gain some practical experience early in my college career, but I've noticed that many online internship programs require substantial payment for training before you can actually start working. As a student with limited financial resources, I can't afford these fees. Are there legitimate online internship opportunities that don't require payment? How can I distinguish between valuable learning opportunities and potential scams in the online internship space?"
  },
  {
    id: 7,
    question: "I joined an internship but had to leave it due to academic pressure. Is there any internship that can balance with college work?",
    date: "April 20, 2024",
    tags: ["Work-Life", "Balance", "College"],
    answers: 7,
    status: "In Review",
    longDescription: "I recently had to quit an internship because I couldn't manage it alongside my coursework and exams. However, I still want to gain industry experience without compromising my academic performance. Are there part-time internship models or flexible work arrangements that are specifically designed for students? What strategies do successful students use to balance internships with their studies? I'm particularly interested in hearing from people who have managed both successfully."
  },
  {
    id: 8,
    question: "Is there any organization that gives referrals or recommendations based on portfolio, not exams?",
    date: "Coming Soon",
    tags: ["Referrals", "Portfolio", "Organization"],
    answers: 0,
    status: "Coming Soon",
    longDescription: "I believe my portfolio of projects better demonstrates my abilities than my performance on standardized tests or exams. Are there organizations or companies that evaluate candidates primarily based on their practical work and portfolio rather than academic credentials or aptitude test scores? I'm looking for opportunities where my actual coding projects and problem-solving abilities can speak for themselves."
  },
  {
    id: 9,
    question: "I found unpaid internships easily, but finding a paid internship or job is tough. Any solution?",
    date: "Coming Soon",
    tags: ["Paid", "Internship", "Job Search"],
    answers: 0,
    status: "Coming Soon",
    longDescription: "While I've been able to secure several unpaid internships to build my experience, I'm now at a point where I need paid opportunities to support myself. However, I'm finding it much more difficult to land paid positions. What's the best strategy for transitioning from unpaid to paid roles? How can I demonstrate that my experience in unpaid positions has prepared me for paid responsibilities? Are there specific industries or company types that are more likely to offer paid opportunities to students with mainly unpaid experience?"
  }
];

export function PreviousQueries() {
  const [currentPage, setCurrentPage] = useState(1);
  const queriesPerPage = 6;
  
  // Calculate current queries
  const indexOfLastQuery = currentPage * queriesPerPage;
  const indexOfFirstQuery = indexOfLastQuery - queriesPerPage;
  const currentQueries = queries.filter(q => q.status !== "Coming Soon").slice(indexOfFirstQuery, indexOfLastQuery);
  const comingSoonQueries = queries.filter(q => q.status === "Coming Soon");
  
  // Calculate total pages
  const totalPages = Math.ceil(queries.filter(q => q.status !== "Coming Soon").length / queriesPerPage);
  
  const [selectedQuery, setSelectedQuery] = useState<(typeof queries)[0] | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const openQueryDetails = (query: typeof queries[0]) => {
    setSelectedQuery(query);
    setDialogOpen(true);
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case "Resolved":
        return "success";
      case "Trending":
        return "warning";
      case "Featured":
        return "purple";
      case "In Review":
        return "info";
      case "Coming Soon":
        return "gray";
      default:
        return "gray";
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
            {currentQueries.map((query) => (
              <Card key={query.id} className="hover:shadow-lg transition-shadow overflow-hidden border-t-4 border-t-wsy-teal">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div className="flex items-center gap-2">
                    <Badge variant={getStatusBadge(query.status)}>
                      {query.status}
                    </Badge>
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
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-wsy-teal hover:text-wsy-teal/80 p-0 h-auto"
                    onClick={() => openQueryDetails(query)}
                  >
                    View full question <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(prev => Math.max(prev - 1, 1));
                    }}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
                
                {Array.from({ length: Math.min(totalPages, 7) }).map((_, i) => {
                  // Calculate which page numbers to show
                  let pageNumber;
                  if (totalPages <= 7) {
                    pageNumber = i + 1;
                  } else if (currentPage <= 3) {
                    // Near the start
                    if (i < 5) {
                      pageNumber = i + 1;
                    } else if (i === 5) {
                      // Show ellipsis instead of a number
                      return <PaginationItem key="ellipsis-end"><PaginationEllipsis /></PaginationItem>;
                    } else {
                      pageNumber = totalPages;
                    }
                  } else if (currentPage >= totalPages - 2) {
                    // Near the end
                    if (i === 0) {
                      pageNumber = 1;
                    } else if (i === 1) {
                      // Show ellipsis instead of a number
                      return <PaginationItem key="ellipsis-start"><PaginationEllipsis /></PaginationItem>;
                    } else {
                      pageNumber = totalPages - (6 - i);
                    }
                  } else {
                    // In the middle
                    if (i === 0) {
                      pageNumber = 1;
                    } else if (i === 1) {
                      // Show ellipsis instead of a number
                      return <PaginationItem key="ellipsis-start"><PaginationEllipsis /></PaginationItem>;
                    } else if (i === 5) {
                      // Show ellipsis instead of a number
                      return <PaginationItem key="ellipsis-end"><PaginationEllipsis /></PaginationItem>;
                    } else if (i === 6) {
                      pageNumber = totalPages;
                    } else {
                      pageNumber = currentPage + (i - 3);
                    }
                  }
                  
                  // Render the page number
                  return (
                    <PaginationItem key={pageNumber}>
                      <PaginationLink 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(pageNumber);
                        }}
                        isActive={currentPage === pageNumber}
                      >
                        {pageNumber}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}
                
                <PaginationItem>
                  <PaginationNext 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(prev => Math.min(prev + 1, totalPages));
                    }}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>

          {/* Coming Soon Queries */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Coming Soon</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {comingSoonQueries.map((query) => (
                <Card key={query.id} className="hover:shadow-lg transition-shadow overflow-hidden border border-dashed border-gray-300 bg-gray-50">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div className="flex items-center gap-2">
                      <Badge variant={getStatusBadge(query.status)}>
                        {query.status}
                      </Badge>
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
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-gray-500"
                        onClick={() => openQueryDetails(query)}
                      >
                        Preview details
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
      
      {/* Query Details Dialog */}
      <QueryDetailsDialog 
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        query={selectedQuery}
      />
    </section>
  );
}
