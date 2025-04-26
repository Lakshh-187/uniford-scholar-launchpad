
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      title: "Share Your Query",
      description: "Submit your requirements via our Google form or DM us on social media."
    },
    {
      title: "Get Connected",
      description: "Within a week, we'll connect you with relevant free opportunities and resources."
    },
    {
      title: "Show Appreciation",
      description: "If we helped, provide a Letter of Appreciation to support our UN seat & funding goals."
    }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {steps.map((step, index) => (
        <Card key={index} className="relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <CheckCircle className="h-6 w-6 text-wsy-blue" />
          </div>
          <CardHeader>
            <CardTitle>Step {index + 1}</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <CardDescription>{step.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
