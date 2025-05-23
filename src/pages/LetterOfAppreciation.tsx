
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Badge } from '@/components/ui/badge';
import { Heart, MessageCircle, Star, Users, Award, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  studentName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  queryId: z.string().optional(),
  institution: z.string().min(2, 'Institution name is required'),
  appreciationMessage: z.string().min(10, 'Please write at least 10 characters'),
  rating: z.string().min(1, 'Please select a rating'),
});

type FormData = z.infer<typeof formSchema>;

const LetterOfAppreciation = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: '',
      email: '',
      queryId: '',
      institution: '',
      appreciationMessage: '',
      rating: '',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    toast({
      title: "Thank you! 💙",
      description: "Your appreciation letter has been submitted successfully.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-wsy-blue via-wsy-teal to-wsy-purple">
        <div className="container mx-auto px-4 py-16 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <CheckCircle size={80} className="mx-auto mb-6 text-green-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Thank You! 🎉</h1>
            <p className="text-xl mb-8">Your appreciation letter has been received and will help us unlock more opportunities for students worldwide.</p>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-bold mb-4">What Happens Next?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Award className="text-yellow-300" />
                  <span>WSY? Digital Badge Earned</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="text-yellow-300" />
                  <span>Added to Impact Wall</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-green-300" />
                  <span>Helps Unlock More Grants</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="text-red-300" />
                  <span>Inspires Other Students</span>
                </div>
              </div>
            </div>
            <Button variant="outline" size="lg" className="bg-white text-wsy-blue hover:bg-white/90">
              Return to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-wsy-blue via-wsy-teal to-wsy-purple">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-yellow-400 text-black">
              🎓 Powered by Youngburg
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
              You Spoke. We Listened.
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-medium">
              ✅ Your Voice Mattered, and We Took Action!
            </p>
            <p className="text-lg mb-8 opacity-90">
              "Who Stop's You?" isn't just a question — it's a movement.<br />
              You reached out. You trusted us. We responded.<br />
              Now, let's complete the loop with a moment of acknowledgment.
            </p>
            
            {/* Stats Counter */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-400">15,000+</div>
                <div className="text-sm opacity-80">Queries Solved</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <div className="text-3xl font-bold text-green-400">5,000+</div>
                <div className="text-sm opacity-80">Letters of Appreciation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-400">50+</div>
                <div className="text-sm opacity-80">Volunteers Active Now</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-wsy-blue to-wsy-teal p-8 text-white text-center">
              <MessageCircle size={48} className="mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">Letter of Appreciation</h2>
              <p className="text-lg opacity-90">Help us celebrate your success and unlock opportunities for others</p>
            </div>
            
            <div className="p-8">
              <div className="mb-8 bg-wsy-light rounded-lg p-6">
                <h3 className="text-xl font-bold text-wsy-blue mb-3">💙 Message from the WSY? Help Desk</h3>
                <p className="text-gray-700 mb-4">
                  <strong>To the Student Who Took a Step Forward,</strong>
                </p>
                <p className="text-gray-700 mb-4">
                  Not every student asks for help — but you did. And that makes you courageous.
                </p>
                <p className="text-gray-700">
                  WSY?, powered by Youngburg, exists to break the walls created by expensive vendors, 
                  lack of guidance, and closed doors of opportunity. We didn't solve everything — 
                  but we showed up, listened, and cleared the fog.
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="studentName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-wsy-blue font-semibold">Student Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-wsy-blue font-semibold">Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="queryId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-wsy-blue font-semibold">WSY? Query ID (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., WSY-2024-001" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="institution"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-wsy-blue font-semibold">Institution/University *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your institution name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="rating"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-wsy-blue font-semibold">How would you rate our support? *</FormLabel>
                        <FormControl>
                          <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((rating) => (
                              <Button
                                key={rating}
                                type="button"
                                variant={field.value === rating.toString() ? "default" : "outline"}
                                size="sm"
                                onClick={() => field.onChange(rating.toString())}
                                className="flex items-center gap-1"
                              >
                                <Star size={16} />
                                {rating}
                              </Button>
                            ))}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="appreciationMessage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-wsy-blue font-semibold">Your Appreciation Message *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Share how WSY? helped you and what it means to have received support..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h4 className="font-bold text-wsy-blue mb-2">🎯 By Submitting This Letter</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>✔️ You acknowledge that your voice was heard</li>
                      <li>✔️ You validate the impact our team made</li>
                      <li>✔️ You help us close the loop with mutual respect</li>
                      <li>✔️ You power future campaigns with your success</li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="flex-1 bg-gradient-to-r from-wsy-blue to-wsy-teal hover:from-wsy-blue/90 hover:to-wsy-teal/90"
                    >
                      💙 Submit My Appreciation Letter
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="lg"
                      className="border-wsy-teal text-wsy-teal hover:bg-wsy-teal hover:text-white"
                    >
                      💬 Need Help Still?
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LetterOfAppreciation;
