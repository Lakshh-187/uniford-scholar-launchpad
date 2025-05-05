
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
import { FilePdf, FileText, FileImage, FileVideo, Table2, Grid, Download, Search } from 'lucide-react';

// Document data
const featuredDocuments = [
  {
    id: 1,
    title: "Campus to Corporate Program",
    type: "pdf",
    description: "Complete guide for transitioning from campus to corporate environment",
    downloads: 3250,
  },
  {
    id: 2,
    title: "Scholar Benefits Booklet",
    type: "pdf",
    description: "A booklet covering all scholar benefits and privileges",
    downloads: 5230,
  },
  {
    id: 3,
    title: "Uniford Scholar Council",
    type: "ppt",
    description: "Empowering scholars to lead and grow within the community",
    downloads: 1430,
  },
  {
    id: 4,
    title: "Leadership & Management by YLS",
    type: "pdf",
    description: "Roadmap for student entrepreneurs & leaders initiatives",
    downloads: 2670,
  },
  {
    id: 5,
    title: "Entrepreneurship & Financial Literacy",
    type: "pdf",
    description: "Unlock entrepreneurial potential with cutting-edge AI programs",
    downloads: 3120,
  },
  {
    id: 6,
    title: "Illusion - A Black Hole Campaign",
    type: "pdf",
    description: "Uncover the truth about scams, myths, and facts to make informed decisions",
    downloads: 980,
  },
];

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

const getFileIcon = (type: string) => {
  switch(type.toLowerCase()) {
    case 'pdf':
      return <FilePdf className="text-red-500" />;
    case 'ppt':
      return <FileText className="text-orange-500" />;
    case 'doc':
    case 'docx':
      return <FileText className="text-blue-500" />;
    case 'img':
    case 'png':
    case 'jpg':
      return <FileImage className="text-green-500" />;
    case 'video':
      return <FileVideo className="text-purple-500" />;
    default:
      return <FileText className="text-gray-500" />;
  }
};

export default function Query() {
  const [view, setView] = useState<'table' | 'grid'>('table');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

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
              <FilePdf className="mr-2 h-4 w-4" />
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
              <FileImage className="mr-2 h-4 w-4" />
              Image
            </Button>
            <Button 
              variant={selectedType === 'video' ? "default" : "outline"}
              onClick={() => setSelectedType('video')}
            >
              <FileVideo className="mr-2 h-4 w-4" />
              Video
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Documents Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDocuments.map(doc => (
              <Card key={doc.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gray-50">
                  <div className="flex items-center gap-2">
                    {getFileIcon(doc.type)}
                    <CardTitle className="text-lg">{doc.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <CardDescription className="text-sm min-h-16">
                    {doc.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <p className="text-sm text-gray-500">{doc.downloads.toLocaleString()} downloads</p>
                  <Button size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
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
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-1" /> Download
                        </Button>
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
                  <CardFooter className="pt-2 border-t">
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" /> Download
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white text-center">
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
