
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface EpisodeCardProps {
  number: number;
  title: string;
  description: string;
  categories: string[];
  link: string;
  featured?: boolean;
}

export function EpisodeCard({ 
  number, 
  title, 
  description, 
  categories, 
  link,
  featured = false 
}: EpisodeCardProps) {
  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${featured ? 'border-wsy-teal border-2' : ''}`}>
      <CardHeader className={`${featured ? 'bg-gradient-to-r from-wsy-teal to-wsy-blue text-white' : 'bg-muted'}`}>
        <div className="flex justify-between items-center">
          <Badge variant={featured ? "outline" : "secondary"} className={featured ? "border-white text-white" : ""}>
            Episode {number}
          </Badge>
          {featured && (
            <Badge variant="outline" className="border-white text-white">
              Featured
            </Badge>
          )}
        </div>
        <CardTitle className="mt-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-muted-foreground line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {categories.map((category) => (
            <Badge key={category} variant="outline" className="bg-slate-50">
              {category}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link 
          to={link}
          className="text-wsy-blue hover:text-wsy-teal transition-colors font-medium"
        >
          Read More →
        </Link>
      </CardFooter>
    </Card>
  );
}
