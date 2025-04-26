
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, Award, Rocket, Link, Star, CheckCircle } from "lucide-react";

const queries = [
  {
    query: "I need a mentor for placements",
    solution: "Connects you with industry mentors via Uni-Talks, IEP, CFA, and UIRAD programs.",
    icon: Users
  },
  {
    query: "I want to get published or featured",
    solution: "Get your articles, research, or achievements published in top magazines and platforms.",
    icon: Star
  },
  {
    query: "I need financial support or grants",
    solution: "Gain access to startup grants, social welfare funds, and innovation scholarships.",
    icon: Award
  },
  {
    query: "I want to build my network & get referrals",
    solution: "Connect with companies, hiring managers, and referral networks.",
    icon: Link
  },
  {
    query: "Need a platform to showcase talent",
    solution: "Be featured in news, events, and talent platforms under Who Stop's You? Recognition Programs.",
    icon: Rocket
  }
];

export function QueryTable() {
  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]"></TableHead>
            <TableHead>Query</TableHead>
            <TableHead>How We Help</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {queries.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <item.icon className="h-5 w-5 text-wsy-blue" />
              </TableCell>
              <TableCell className="font-medium">{item.query}</TableCell>
              <TableCell>{item.solution}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
