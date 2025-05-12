
import { useState } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { HelpCircle, FileText, Calendar, BookOpen } from 'lucide-react';
import { Input } from '@/components/ui/input';

// FAQ data structure
const faqCategories = [
  { id: 'faq-cards', label: 'FAQ Cards' },
  { id: 'faq-accordion', label: 'FAQ Accordion' },
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

export function FAQ() {
  const [activeTab, setActiveTab] = useState('faq-cards');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQs = faqItems.filter(
    faq => faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
           faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
           faq.category.toLowerCase().includes(searchQuery.toLowerCase())
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
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
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
            {filteredFAQs.map(faq => (
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

        {activeTab === 'faq-accordion' && (
          <div className="max-w-3xl mx-auto border rounded-lg overflow-hidden">
            <div className="divide-y">
              {filteredFAQs.map(faq => (
                <div key={faq.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className={`rounded-full p-2 ${faq.iconBg}`}>
                      {faq.icon}
                    </div>
                    <div className="space-y-2">
                      <span className="inline-block text-sm font-medium px-3 py-1 bg-gray-100 rounded-full">
                        {faq.category}
                      </span>
                      <h3 className="text-lg font-semibold">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                      <div className="pt-2">
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'latest-updates' && (
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-dashed border-gray-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-lg font-medium text-gray-600">No recent updates available</h3>
                <p className="text-gray-500 mt-2">Check back later for the latest announcements</p>
              </CardContent>
            </Card>
          </div>
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
