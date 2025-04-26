import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { EpisodeCard } from '@/components/EpisodeCard';
import { InfoCard } from '@/components/InfoCard';
import { QueryTable } from '@/components/QueryTable';
import { HowItWorks } from '@/components/HowItWorks';
import { Roadmap } from '@/components/Roadmap';
import { Button } from '@/components/ui/button';
import { Book, Users, Award, Rocket } from 'lucide-react';

const Index = () => {
  const episodes = [
    {
      number: 7,
      title: "Uniford Scholar ID Card",
      description: "Discover how the Uniford Scholar ID Card solves common career challenges for students without any fees.",
      categories: ["Career Growth", "Student Resources", "Free Opportunities"],
      link: "/episode-7",
      featured: true
    },
    {
      number: 6,
      title: "Navigating Internship Opportunities",
      description: "Learn how to find and secure valuable internship experiences that align with your career goals.",
      categories: ["Internships", "Career Planning"],
      link: "#"
    },
    {
      number: 5,
      title: "Building a Professional Portfolio",
      description: "Tips and strategies for creating a standout portfolio that showcases your skills and projects.",
      categories: ["Portfolio Development", "Career Skills"],
      link: "#"
    },
    {
      number: 4,
      title: "Technical Interview Preparation",
      description: "Prepare for technical interviews with practical advice and common challenges solved.",
      categories: ["Interviews", "Technical Skills"],
      link: "#"
    },
    {
      number: 3,
      title: "Networking for Students",
      description: "Effective networking strategies to build professional connections while still in university.",
      categories: ["Networking", "Professional Development"],
      link: "#"
    },
    {
      number: 2,
      title: "Resume Building Workshop",
      description: "Create a resume that stands out to employers and passes through ATS systems.",
      categories: ["Resume", "Job Applications"],
      link: "#"
    },
    {
      number: 1,
      title: "Introduction to WSY?",
      description: "Welcome to Why Should You? Your guide to navigating student career challenges.",
      categories: ["Introduction", "Platform Overview"],
      link: "#"
    }
  ];

  const missionSteps = [
    {
      title: "We Connect",
      description: "Bridging students with worldwide opportunities through our SEP-700 portal."
    },
    {
      title: "We Back",
      description: "Supporting students with mentorship, resources, and guidance at zero cost."
    },
    {
      title: "We Aware",
      description: "Fighting against business vendors and high fees in education."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Why Should You?</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Helping students navigate career challenges with practical solutions and expert guidance.
          </p>
          <Button size="lg" className="bg-white text-wsy-blue hover:bg-slate-100">
            Start Exploring
          </Button>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Who Stop's You? (WSY?)</h2>
            <p className="text-lg text-gray-600 mb-8">
              A Non-profit initiative dedicated to wiping out educator business vendors and tycoons that charge high fees.
              We connect & recommend only free & non-profit organizations' programs and opportunities.
            </p>
          </div>
          <Roadmap steps={missionSteps} title="Our Mission" />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <HowItWorks />
        </div>
      </section>

      {/* Common Queries */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">How We Help Students</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Check out some of our previously resolved queries and how we can support you
          </p>
          <QueryTable />
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About WSY?</h2>
            <p className="text-lg text-gray-600">
              Every day, we receive hundreds of queries from students struggling with career growth. 
              Why Should You? is our platform to address these challenges with practical, 
              accessible solutions and resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <InfoCard 
              icon={<Book className="h-6 w-6" />}
              title="Educational Resources"
              description="Access free learning materials and guides to enhance your skills."
              color="blue"
            />
            <InfoCard 
              icon={<Users className="h-6 w-6" />}
              title="Community Support"
              description="Join a network of students facing similar challenges and sharing solutions."
              color="teal"
            />
            <InfoCard 
              icon={<Award className="h-6 w-6" />}
              title="Career Guidance"
              description="Get expert advice on career paths, skills development, and job opportunities."
              color="purple"
            />
            <InfoCard 
              icon={<Rocket className="h-6 w-6" />}
              title="Growth Opportunities"
              description="Discover internships, projects, and programs to boost your professional profile."
              color="orange"
            />
          </div>
        </div>
      </section>
      
      {/* Episodes Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">Our Episodes</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Explore our collection of episodes addressing common student queries and challenges.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {episodes.map((episode) => (
              <EpisodeCard 
                key={episode.number}
                number={episode.number}
                title={episode.title}
                description={episode.description}
                categories={episode.categories}
                link={episode.link}
                featured={episode.featured}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Solve Your Career Challenges?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Explore our latest episodes and resources to find solutions tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-wsy-blue hover:bg-slate-100">
              <a href="/episode-7">Explore Episode 7</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <a href="#">Subscribe for Updates</a>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
