import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  FileText, File, Image, Video, Table2, Grid, Download, Search, Share2, 
  Upload, Calendar, CheckCircle, ThumbsUp, MessageSquare, Globe 
} from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from "@/components/ui/sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Document data
const featuredDocuments = [
  {
    id: 1,
    title: "Campus to Corporate Program",
    type: "pdf",
    description: "Complete guide for transitioning from campus to corporate environment",
    downloads: 3250,
    category: "Career Development",
    longDescription: "A comprehensive roadmap for students to transition from academic life to professional work environments. This guide covers everything from resume building and interview preparation to workplace etiquette and professional communication."
  },
  {
    id: 2,
    title: "Scholar Benefits Booklet",
    type: "pdf",
    description: "A booklet covering all scholar benefits and privileges",
    downloads: 5230,
    category: "Benefits & Privileges",
    longDescription: "An official compilation of all benefits, privileges, and opportunities available to Unifier Scholars. Includes details on mentorship programs, networking events, financial support options, and career advancement resources."
  },
  {
    id: 3,
    title: "Uniford Scholar Council",
    type: "ppt",
    description: "Empowering scholars to lead and grow within the community",
    downloads: 1430,
    category: "Leadership",
    longDescription: "Detailed presentation on the structure, responsibilities, and opportunities within the Uniford Scholar Council. Learn how to join the council, contribute to community initiatives, and develop leadership skills through practical experience."
  },
  {
    id: 4,
    title: "Leadership & Management by YLS",
    type: "pdf",
    description: "Roadmap for student entrepreneurs & leaders initiatives",
    downloads: 2670,
    category: "Professional Development",
    longDescription: "Advanced leadership curriculum developed by Young Leaders Society (YLS) specifically for emerging student entrepreneurs and community leaders. This document outlines key competencies, case studies, and practical exercises to build management capabilities."
  },
  {
    id: 5,
    title: "Entrepreneurship & Financial Literacy",
    type: "pdf",
    description: "Unlock entrepreneurial potential with cutting-edge AI programs",
    downloads: 3120,
    category: "Entrepreneurship",
    longDescription: "Comprehensive guide on entrepreneurial development integrated with financial literacy education. Includes sections on business model development, startup funding options, financial planning, and leveraging AI technologies in modern business environments."
  },
  {
    id: 6,
    title: "Illusion - A Black Hole Campaign",
    type: "pdf",
    description: "Uncover the truth about scams, myths, and facts to make informed decisions",
    downloads: 980,
    category: "Awareness",
    longDescription: "Educational campaign materials designed to help scholars identify and avoid common scams targeting students and early-career professionals. Includes sections on identifying legitimate opportunities, protecting personal information, and reporting suspicious activities."
  },
];

// Library documents data
const libraryDocuments = [
  {
    id: 1,
    title: "International parameter",
    description: "Outsources platforms & old curriculum Program",
    category: "Guide",
    type: "pdf",
    date: "8/15/2023",
    size: "4.2 MB",
    downloads: 3250,
  },
  {
    id: 2,
    title: "Platforms & Programs",
    description: "Outsources platforms & old curriculum Program",
    category: "Guide",
    type: "pdf",
    date: "8/15/2023",
    size: "4.2 MB",
    downloads: 3250,
  },
  {
    id: 3,
    title: "Uniford Platforms & Programs",
    description: "Step-by-step roadmap for transitioning from campus to corporate",
    category: "Guide",
    type: "pdf",
    date: "9/22/2024",
    size: "2.8 MB",
    downloads: 2180,
  },
  {
    id: 4,
    title: "Uniford Portals",
    description: "Email: info@uniford.org & password 1 to 8 in uniford.org",
    category: "Guides",
    type: "pdf",
    date: "7/10/2023",
    size: "3.5 MB",
    downloads: 4120,
  },
  {
    id: 5,
    title: "Intern in organization",
    description: "on-boarding detail & benefits",
    category: "Guide",
    type: "pdf",
    date: "10/5/2023",
    size: "1.2 MB",
    downloads: 1850,
  },
  {
    id: 6,
    title: "Scholar Benefits Booklet",
    description: "a booklet cover scholar benefits",
    category: "Guide",
    type: "pdf",
    date: "11/12/2023",
    size: "0.8 MB",
    downloads: 5230,
  },
  {
    id: 7,
    title: "Scholar Guide 2023 old",
    description: "Guidelines and rules for participating using ID card",
    category: "Guides",
    type: "pdf",
    date: "12/1/2023",
    size: "2.1 MB",
    downloads: 1920,
  },
  {
    id: 8,
    title: "Uniford Scholar Council",
    description: "Empowering scholars to lead and grow",
    category: "Guide",
    type: "ppt",
    date: "1/15/2024",
    size: "5.6 MB",
    downloads: 1430,
  },
  {
    id: 9,
    title: "Leadership & Management by YLS",
    description: "Roadmap for student entrepreneurs & initiator",
    category: "Roadmaps",
    type: "pdf",
    date: "2/20/2024",
    size: "3.2 MB",
    downloads: 2670,
  },
  {
    id: 10,
    title: "Entrepreneurship (AI & Financial Literacy Advancement)",
    description: "Unlock entrepreneurial potential with cutting-edge AI and financial literacy programs",
    category: "Guides",
    type: "pdf",
    date: "3/8/2024",
    size: "1.5 MB",
    downloads: 3120,
  },
];

// Monthly solutions data
const monthlySolutions = [
  {
    id: 1,
    month: "January 2024",
    title: "Year-end Financial Reporting Guidelines",
    description: "Comprehensive solution for financial reporting compliance and year-end tax preparation for Unifier Scholars.",
    category: "Finance",
    participants: 156,
    attachments: 3,
    status: "Approved",
    tags: ["Finance", "Tax", "Reporting"],
    longDescription: "This solution provides a detailed framework for end-of-year financial reporting in compliance with the latest regulations. It includes sections on tax optimization, scholarship reporting requirements, and documentation standards for financial aid recipients."
  },
  {
    id: 2,
    month: "February 2024",
    title: "Campus Leadership Program: Spring Cohort Structure",
    description: "Solution framework for organizing and managing the spring cohort of the Campus Leadership Program.",
    category: "Leadership",
    participants: 89,
    attachments: 5,
    status: "Approved",
    tags: ["Leadership", "Program Management", "Mentorship"],
    longDescription: "A complete solution for structuring the spring cohort of our flagship Campus Leadership Program. Includes session outlines, mentorship pairing methodology, project assessment criteria, and impact measurement frameworks."
  },
  {
    id: 3,
    month: "March 2024",
    title: "International Exchange Program Improvements",
    description: "Proposed solutions to enhance the international exchange program based on participant feedback and outcome analysis.",
    category: "International",
    participants: 124,
    attachments: 4,
    status: "Under Review",
    tags: ["International", "Exchange", "Program Development"],
    longDescription: "This solution addresses key areas for improvement in our international exchange program, including hosting capacity, cultural integration support, academic credit transfer processes, and post-exchange career development opportunities."
  },
  {
    id: 4,
    month: "April 2024",
    title: "Scholar Mentorship Platform Technical Specifications",
    description: "Technical solution for developing the new digital platform to facilitate scholar-mentor connections.",
    category: "Technology",
    participants: 72,
    attachments: 8,
    status: "Approved",
    tags: ["Technology", "Mentorship", "Platform"],
    longDescription: "Comprehensive technical specifications for our new scholar mentorship platform, including system architecture, feature requirements, user flow diagrams, integration points with existing systems, and implementation timeline."
  },
  {
    id: 5,
    month: "May 2024",
    title: "Academic Research Funding Distribution Framework",
    description: "Solution for equitable distribution of research funding across disciplines and scholar categories.",
    category: "Research",
    participants: 67,
    attachments: 2,
    status: "Draft",
    tags: ["Research", "Funding", "Academia"],
    longDescription: "This solution presents a new framework for allocating research funding that balances support across disciplines while accounting for varying research costs, project durations, and potential for scholarly impact."
  }
];

const getFileIcon = (type: string) => {
  switch(type.toLowerCase()) {
    case 'pdf':
      return <File className="text-red-500" />;
    case 'ppt':
      return <FileText className="text-orange-500" />;
    case 'doc':
    case 'docx':
      return <FileText className="text-blue-500" />;
    case 'img':
    case 'png':
    case 'jpg':
      return <Image className="text-green-500" />;
    case 'video':
      return <Video className="text-purple-500" />;
    default:
      return <FileText className="text-gray-500" />;
  }
};

const shareDocument = (documentTitle: string) => {
  // In a real application, this would use the Web Share API or create a shareable link
  if (navigator.share) {
    navigator.share({
      title: documentTitle,
      text: `Check out this document: ${documentTitle}`,
      url: window.location.href,
    })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  } else {
    // Fallback for browsers that don't support the Web Share API
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(
      () => {
        toast("Link copied to clipboard", {
          description: `Share link for "${documentTitle}" copied to clipboard`,
        });
      },
      () => {
        toast("Failed to copy link", { 
          description: "Please try again or copy the URL manually"
        });
      }
    );
  }
};

export default function Query() {
  const [view, setView] = useState<'table' | 'grid'>('table');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [solutionTab, setSolutionTab] = useState('all');
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null);

  const filteredDocuments = libraryDocuments.filter(doc => {
    // Filter by search query
    const matchesSearch = searchQuery === '' || 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by type
    const matchesType = selectedType === 'all' || doc.type === selectedType;
    
    // Filter by category
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    
    return matchesSearch && matchesType && matchesCategory;
  });

  // Filter monthly solutions based on selected tab
  const filteredSolutions = monthlySolutions.filter(solution => {
    if (solutionTab === 'all') return true;
    return solution.status.toLowerCase() === solutionTab.toLowerCase();
  });

  const getStatusColor = (status: string) => {
    switch(status.toLowerCase()) {
      case 'approved':
        return 'bg-green-100 text-green-700';
      case 'under review':
        return 'bg-yellow-100 text-yellow-700';
      case 'draft':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-blue-100 text-blue-700';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      
      {/* Header Section */}
      <div className="bg-gradient-to-r from-wsy-purple to-wsy-blue py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Query</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Access all curriculum, roadmap guides, and official documents for Unifier Scholars.
          </p>
          <div className="max-w-xl mx-auto relative">
            <Input
              type="text"
              placeholder="Search for documents..."
              className="pl-10 bg-white/90 text-black"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Document Types Filter */}
      <div className="bg-gray-50 py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto pb-2 space-x-3">
            <Button 
              variant={selectedType === 'all' ? "default" : "outline"}
              onClick={() => setSelectedType('all')}
            >
              All Types
            </Button>
            <Button 
              variant={selectedType === 'pdf' ? "default" : "outline"}
              onClick={() => setSelectedType('pdf')}
            >
              <File className="mr-2 h-4 w-4" />
              PDF
            </Button>
            <Button 
              variant={selectedType === 'doc' ? "default" : "outline"}
              onClick={() => setSelectedType('doc')}
            >
              <FileText className="mr-2 h-4 w-4 text-blue-500" />
              Word Document
            </Button>
            <Button 
              variant={selectedType === 'ppt' ? "default" : "outline"}
              onClick={() => setSelectedType('ppt')}
            >
              <FileText className="mr-2 h-4 w-4 text-orange-500" />
              Presentation
            </Button>
            <Button 
              variant={selectedType === 'img' ? "default" : "outline"}
              onClick={() => setSelectedType('img')}
            >
              <Image className="mr-2 h-4 w-4" />
              Image
            </Button>
            <Button 
              variant={selectedType === 'video' ? "default" : "outline"}
              onClick={() => setSelectedType('video')}
            >
              <Video className="mr-2 h-4 w-4" />
              Video
            </Button>
          </div>
        </div>
      </div>

      {/* New Expanded Featured Documents Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-wsy-purple">Featured Educational Resources</h2>
          
          <div className="grid grid-cols-1 gap-6">
            {featuredDocuments.map(doc => (
              <Card 
                key={doc.id} 
                className={`transition-all duration-300 hover:shadow-lg cursor-pointer ${
                  expandedCard === doc.id ? 'border-wsy-purple' : ''
                }`}
                onClick={() => setExpandedCard(expandedCard === doc.id ? null : doc.id)}
              >
                <CardHeader className="flex flex-row items-start justify-between gap-4 bg-gray-50">
                  <div className="flex items-start gap-4">
                    {getFileIcon(doc.type)}
                    <div>
                      <CardTitle className="text-xl">{doc.title}</CardTitle>
                      <CardDescription className="text-sm">{doc.description}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      doc.category === 'Career Development' ? 'bg-blue-100 text-blue-700' : 
                      doc.category === 'Benefits & Privileges' ? 'bg-green-100 text-green-700' : 
                      doc.category === 'Leadership' ? 'bg-purple-100 text-purple-700' : 
                      doc.category === 'Professional Development' ? 'bg-orange-100 text-orange-700' : 
                      doc.category === 'Entrepreneurship' ? 'bg-yellow-100 text-yellow-700' : 
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {doc.category}
                    </span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {doc.type.toUpperCase()}
                    </span>
                  </div>
                </CardHeader>
                
                {expandedCard === doc.id && (
                  <CardContent className="pt-4 animate-in fade-in duration-200">
                    <div className="bg-gray-50 p-4 rounded-md mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">About this resource:</h4>
                      <p className="text-gray-700">{doc.longDescription}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h4 className="font-semibold text-gray-800 mb-2">Who should read this:</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          <li>Students transitioning to professional environments</li>
                          <li>Early-career professionals seeking guidance</li>
                          <li>Mentors and educators supporting student development</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h4 className="font-semibold text-gray-800 mb-2">Key topics covered:</h4>
                        <div className="flex flex-wrap gap-2">
                          {['Professional Growth', 'Career Planning', 'Skill Development', 'Leadership', 'Communication'].map(topic => (
                            <span key={topic} className="bg-white px-2 py-1 rounded text-xs border border-gray-200">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
                
                <CardFooter className="flex justify-between border-t pt-4">
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-500">{doc.downloads.toLocaleString()} downloads</p>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Updated: May 2024</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={(e) => {
                      e.stopPropagation();
                      shareDocument(doc.title);
                    }}>
                      <Share2 className="h-4 w-4" />
                      Share
                    </Button>
                    <Button>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Library Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Documents Library</h2>
          
          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Programs" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Guide">Guide</SelectItem>
                  <SelectItem value="Guides">Guides</SelectItem>
                  <SelectItem value="Roadmaps">Roadmaps</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="pdf">PDF</SelectItem>
                  <SelectItem value="ppt">Presentation</SelectItem>
                  <SelectItem value="doc">Word Document</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex gap-3">
              <div className="relative w-full md:w-64">
                <Input
                  type="text"
                  placeholder="Search documents..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              </div>
              
              <div className="flex border rounded-md overflow-hidden">
                <Button 
                  variant={view === 'table' ? "default" : "ghost"} 
                  className="rounded-none"
                  onClick={() => setView('table')}
                >
                  <Table2 className="h-5 w-5" />
                </Button>
                <Button 
                  variant={view === 'grid' ? "default" : "ghost"} 
                  className="rounded-none"
                  onClick={() => setView('grid')}
                >
                  <Grid className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Table View */}
          {view === 'table' ? (
            <div className="border rounded-lg overflow-hidden bg-white">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[300px]">Document</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Downloads</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDocuments.map((doc) => (
                    <TableRow key={doc.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-start gap-3">
                          {getFileIcon(doc.type)}
                          <div>
                            <div className="font-medium">{doc.title}</div>
                            <div className="text-xs text-gray-500">{doc.description}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{doc.category}</TableCell>
                      <TableCell>
                        <span className={`inline-block px-2 py-0.5 rounded text-xs uppercase ${
                          doc.type === 'pdf' ? 'bg-red-100 text-red-700' : 
                          doc.type === 'ppt' ? 'bg-orange-100 text-orange-700' : 
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {doc.type}
                        </span>
                      </TableCell>
                      <TableCell>{doc.date}</TableCell>
                      <TableCell>{doc.size}</TableCell>
                      <TableCell>{doc.downloads.toLocaleString()}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex gap-2 justify-end">
                          <Button size="sm" variant="outline" onClick={() => shareDocument(doc.title)}>
                            <Share2 className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-1" /> Download
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            // Grid View
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredDocuments.map((doc) => (
                <Card key={doc.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      {getFileIcon(doc.type)}
                      <div>
                        <CardTitle className="text-lg">{doc.title}</CardTitle>
                        <CardDescription className="text-xs">{doc.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="grid grid-cols-2 text-sm gap-y-1">
                      <span className="text-gray-500">Category:</span>
                      <span>{doc.category}</span>
                      <span className="text-gray-500">Type:</span>
                      <span className="uppercase">{doc.type}</span>
                      <span className="text-gray-500">Date:</span>
                      <span>{doc.date}</span>
                      <span className="text-gray-500">Size:</span>
                      <span>{doc.size}</span>
                      <span className="text-gray-500">Downloads:</span>
                      <span>{doc.downloads.toLocaleString()}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2 border-t flex justify-between">
                    <Button variant="outline" onClick={() => shareDocument(doc.title)}>
                      <Share2 className="h-4 w-4" /> Share
                    </Button>
                    <Button>
                      <Download className="mr-2 h-4 w-4" /> Download
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Monthly Solutions Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-wsy-purple">Monthly Query Solutions</h2>
          <p className="text-gray-600 mb-8 max-w-4xl">
            Access comprehensive solutions to monthly queries submitted by the Unifier Scholar community. 
            These solutions are reviewed by domain experts and made available as reference materials.
          </p>
          
          <Tabs defaultValue="all" className="mb-8" onValueChange={setSolutionTab}>
            <TabsList className="grid w-full max-w-md grid-cols-3 mb-6">
              <TabsTrigger value="all">All Solutions</TabsTrigger>
              <TabsTrigger value="approved">Approved</TabsTrigger>
              <TabsTrigger value="draft">In Progress</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 gap-6">
            {filteredSolutions.map(solution => (
              <Card 
                key={solution.id} 
                className={`transition-all duration-300 hover:shadow-lg cursor-pointer ${
                  expandedSolution === solution.id ? 'border-wsy-purple' : ''
                }`}
                onClick={() => setExpandedSolution(expandedSolution === solution.id ? null : solution.id)}
              >
                <CardHeader className="flex flex-row items-start justify-between gap-4 bg-gray-50">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center bg-wsy-purple text-white w-12 h-12 rounded-full shrink-0">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-gray-500">{solution.month}</span>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(solution.status)}`}>
                          {solution.status}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{solution.title}</CardTitle>
                      <CardDescription className="text-sm">{solution.description}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      solution.category === 'Finance' ? 'bg-blue-100 text-blue-700' : 
                      solution.category === 'Leadership' ? 'bg-purple-100 text-purple-700' : 
                      solution.category === 'International' ? 'bg-green-100 text-green-700' : 
                      solution.category === 'Technology' ? 'bg-orange-100 text-orange-700' : 
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {solution.category}
                    </span>
                  </div>
                </CardHeader>
                
                {expandedSolution === solution.id && (
                  <CardContent className="pt-4 animate-in fade-in duration-200">
                    <div className="bg-gray-50 p-4 rounded-md mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Solution Overview:</h4>
                      <p className="text-gray-700">{solution.longDescription}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h4 className="font-semibold text-gray-800 mb-2">Solution Details:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-center gap-2">
                            <MessageSquare className="h-4 w-4 text-wsy-purple" />
                            <span><strong>{solution.participants}</strong> participants in discussion</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-wsy-purple" />
                            <span><strong>{solution.attachments}</strong> supporting documents</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Globe className="h-4 w-4 text-wsy-purple" />
                            <span>Published for {solution.status === 'Approved' ? 'all scholars' : 'reviewers only'}</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h4 className="font-semibold text-gray-800 mb-2">Tags:</h4>
                        <div className="flex flex-wrap gap-2">
                          {solution.tags.map(tag => (
                            <span key={tag} className="bg-white px-2 py-1 rounded text-xs border border-gray-200">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
                
                <CardFooter className="flex justify-between border-t pt-4">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                      Peer reviewed
                    </span>
                    <span className="flex items-center text-sm text-gray-500">
                      <ThumbsUp className="h-4 w-4 mr-1 text-blue-500" />
                      Recommended
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={(e) => {
                      e.stopPropagation();
                      shareDocument(solution.title);
                    }}>
                      <Share2 className="h-4 w-4" />
                      Share
                    </Button>
                    {solution.status === 'Approved' ? (
                      <Button>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    ) : (
                      <Button variant="outline" disabled={solution.status === 'Draft'}>
                        <Upload className="mr-2 h-4 w-4" />
                        Submit Feedback
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button size="lg" variant="outline" className="border-dashed border-2">
              <Upload className="mr-2 h-4 w-4" />
              Submit New Solution
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            If you can't find a specific document, you can request it and our team will help you locate it.
          </p>
          <Button size="lg">
            Request Document
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
