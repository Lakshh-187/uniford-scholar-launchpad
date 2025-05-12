
import { useState } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from "@/components/ui/pagination";
import { Button } from '@/components/ui/button';
import { HelpCircle, FileText, Calendar, BookOpen } from 'lucide-react';
import { Input } from '@/components/ui/input';

// FAQ data structure
const faqCategories = [
  { id: 'faq-cards', label: 'FAQ Cards' },
  { id: 'latest-updates', label: 'Latest Updates' }
];

// FAQ items data
const faqItems = [
  {
    id: 1,
    category: 'ID Card',
    question: 'How do I apply for a Unifier ID?',
    answer: 'You can apply for a Unifier ID through our online portal by completing the application form and submitting the required documents.',
    icon: <FileText className="text-white" />,
    iconBg: 'bg-blue-500'
  },
  {
    id: 2,
    category: 'Social Internship',
    question: 'What are the eligibility criteria for Social Internship?',
    answer: 'Current Unifier Scholar members who have completed at least one semester can apply for our Social Internship program.',
    icon: <HelpCircle className="text-white" />
,
    iconBg: 'bg-green-500'
  },
  {
    id: 3,
    category: 'Payments',
    question: 'How can I get a refund for my registration fee?',
    answer: 'You can request a refund for your registration fee within 30 days of payment if you meet our refund policy criteria.',
    icon: <Calendar className="text-white" />
,
    iconBg: 'bg-purple-500'
  },
  {
    id: 4,
    category: 'Benefits',
    question: 'What benefits do I get with a Unifier ID Card?',
    answer: 'Unifier ID card holders receive numerous benefits including access to exclusive resources, events, and networking opportunities.',
    icon: <BookOpen className="text-white" />
,
    iconBg: 'bg-orange-400'
  },
];

// Placeholder query data
const queryItems = [
  {
    id: 101,
    category: 'Application Status',
    question: 'Check the status of your Unifier ID application.',
    answer: 'You can track your application status in real-time through your dashboard after logging in.',
    icon: <FileText className="text-white" />,
    iconBg: 'bg-indigo-500'
  },
  {
    id: 102,
    category: 'Event Registration',
    question: 'Register for the upcoming Unifier Scholars Summit.',
    answer: 'Registration for the Unifier Scholars Summit is open. Visit the events section to secure your spot.',
    icon: <Calendar className="text-white" />,
    iconBg: 'bg-teal-500'
  },
  {
    id: 103,
    category: 'Resource Access',
    question: 'How to access exclusive research papers?',
    answer: 'As a Unifier ID holder, you have access to our digital library with exclusive research papers and journals.',
    icon: <BookOpen className="text-white" />,
    iconBg: 'bg-red-500'
  },
];


export function FAQ() {
  const [activeTab, setActiveTab] = useState('faq-cards');
  const [searchQuery, setSearchQuery] = useState('');
  const [faqCurrentPage, setFaqCurrentPage] = useState(1);
  const [queryCurrentPage, setQueryCurrentPage] = useState(1);
  const itemsPerPage = 4; // You can adjust this number

  const filteredFAQs = faqItems.filter(
    faq => faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
           faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
           faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedFAQs = filteredFAQs.slice(
    (faqCurrentPage - 1) * itemsPerPage,
    faqCurrentPage * itemsPerPage
  );

  return (
    <section className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-wsy-purple mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions and stay updated with the latest announcements
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search questions..."
                className="w-full sm:w-80"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button>
              Submit a Question
            </Button>
          </div>
        </div>

        <div className="mb-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-md mx-auto">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              {faqCategories.map(category => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {activeTab === 'faq-cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paginatedFAQs.map(faq => (
              <Card key={faq.id} className="border hover:shadow-md transition-shadow overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`rounded-full p-2 ${faq.iconBg}`}>
                      {faq.icon}
                    </div>
                    <div className="space-y-2">
                      <span className="inline-block text-sm font-medium px-3 py-1 bg-gray-100 rounded-full">
                        {faq.category}
                      </span>
                      <h3 className="text-lg font-semibold">{faq.question}</h3>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t p-4 flex justify-end">
                  <Button variant="outline" size="sm">View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'faq-cards' && filteredFAQs.length > itemsPerPage && (
          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  href="#" 
                  onClick={() => setFaqCurrentPage(prev => Math.max(prev - 1, 1))}
                  className={faqCurrentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
              {[...Array(Math.ceil(filteredFAQs.length / itemsPerPage))].map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink 
                    href="#" 
                    onClick={() => setFaqCurrentPage(index + 1)}
                    isActive={faqCurrentPage === index + 1}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext 
                  href="#" 
                  onClick={() => setFaqCurrentPage(prev => Math.min(prev + 1, Math.ceil(filteredFAQs.length / itemsPerPage)))}
                  className={faqCurrentPage === Math.ceil(filteredFAQs.length / itemsPerPage) ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}


        {activeTab === 'latest-updates' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {queryItems.slice(
              (queryCurrentPage - 1) * itemsPerPage,
              queryCurrentPage * itemsPerPage
            )
            .map(query => (

              <Card key={query.id} className="border hover:shadow-md transition-shadow overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`rounded-full p-2 ${query.iconBg}`}>
                      {query.icon}
                    </div>
                    <div className="space-y-2">
                      <span className="inline-block text-sm font-medium px-3 py-1 bg-gray-100 rounded-full">
                        {query.category}
                      </span>
                      <h3 className="text-lg font-semibold">{query.question}</h3>
                      <p className="text-gray-600 text-sm">{query.answer}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t p-4 flex justify-end">
                  <Button variant="outline" size="sm">View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

        )}

        {activeTab === 'latest-updates' && queryItems.length > itemsPerPage && (
          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  href="#" 
                  onClick={() => setQueryCurrentPage(prev => Math.max(prev - 1, 1))}
                  className={queryCurrentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
              {[...Array(Math.ceil(queryItems.length / itemsPerPage))].map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink 
                    href="#" 
                    onClick={() => setQueryCurrentPage(index + 1)}
                    isActive={queryCurrentPage === index + 1}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext 
                  href="#" 
                  onClick={() => setQueryCurrentPage(prev => Math.min(prev + 1, Math.ceil(queryItems.length / itemsPerPage)))}
                  className={queryCurrentPage === Math.ceil(queryItems.length / itemsPerPage) ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>

        )}

        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-gray-600 mb-6">
            Our support team is ready to help. Reach out to us with any questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button>Contact Support</Button>
            <Button variant="outline">Browse Documentation</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
