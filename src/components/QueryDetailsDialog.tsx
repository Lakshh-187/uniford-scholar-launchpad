
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Calendar, Tag, Download, Share2, ThumbsUp, CheckCircle } from 'lucide-react';

export interface QueryDetailsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  query: {
    id: number;
    question: string;
    description?: string;
    longDescription?: string;
    date: string;
    tags: string[];
    answers: number;
    status: string;
    category?: string;
    participants?: number;
    attachments?: number;
  } | null;
}

export function QueryDetailsDialog({ open, onOpenChange, query }: QueryDetailsProps) {
  if (!query) return null;
  
  const getStatusColor = (status: string) => {
    switch(status) {
      case "Resolved":
        return "bg-green-100 text-green-700";
      case "Trending":
        return "bg-orange-100 text-orange-700";
      case "Featured":
        return "bg-purple-100 text-purple-700";
      case "In Review":
        return "bg-blue-100 text-blue-700";
      case "Coming Soon":
        return "bg-gray-100 text-gray-500";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(
      () => {
        // We should add toast here but for simplicity we're using alert
        alert(`Link for "${query.question}" copied to clipboard`);
      },
      () => {
        alert("Failed to copy link");
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-hidden flex flex-col">
        <DialogHeader className="border-b pb-4">
          <div className="flex justify-between items-center gap-2 mb-2">
            <Badge variant="outline" className={`${getStatusColor(query.status)} px-2 py-1`}>
              {query.status}
            </Badge>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Calendar className="h-3 w-3" />
              {query.date}
            </div>
          </div>
          <DialogTitle className="text-xl font-bold">{query.question}</DialogTitle>
          {query.description && (
            <DialogDescription className="text-base mt-2">
              {query.description}
            </DialogDescription>
          )}
        </DialogHeader>
        
        <ScrollArea className="flex-1 px-1 py-4">
          {query.longDescription && (
            <div className="bg-gray-50 p-4 rounded-md mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Full Query:</h3>
              <p className="text-gray-700">{query.longDescription}</p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {query.category && (
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-semibold text-gray-800 mb-2">Category:</h3>
                <p className="text-gray-700">{query.category}</p>
              </div>
            )}
            
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-semibold text-gray-800 mb-2">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {query.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="bg-white">
                    <Tag className="h-3 w-3 mr-1" /> {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          {query.participants && (
            <div className="bg-gray-50 p-4 rounded-md mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Discussion Activity:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-wsy-purple" />
                  <span><strong>{query.participants}</strong> participants in discussion</span>
                </li>
                {query.attachments && (
                  <li className="flex items-center gap-2">
                    <Download className="h-4 w-4 text-wsy-purple" />
                    <span><strong>{query.attachments}</strong> supporting documents</span>
                  </li>
                )}
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Peer reviewed</span>
                </li>
              </ul>
            </div>
          )}

          {/* Sample top answers section */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">Top Answers:</h3>
            <div className="space-y-4">
              {[1, 2].map((item) => (
                <div key={item} className="border rounded-md p-4 bg-white">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-wsy-purple/20 flex items-center justify-center">
                        <span className="text-wsy-purple font-medium">MS</span>
                      </div>
                      <div>
                        <p className="font-medium">Mentor {item}</p>
                        <p className="text-xs text-gray-500">Verified Expert</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <ThumbsUp className="h-4 w-4 text-wsy-purple mr-1" />
                      <span className="text-sm">{23 + item * 10}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    This is a sample answer to the query. In a real implementation, 
                    this would contain the actual response from a mentor or expert
                    addressing the specific concerns raised in the query.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>

        <DialogFooter className="border-t pt-4 flex-shrink-0">
          <div className="flex justify-between w-full items-center">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-gray-50 text-gray-700">
                {query.answers} answers
              </Badge>
              {query.status !== "Coming Soon" && (
                <Badge variant="outline" className="bg-green-50 text-green-700">
                  <CheckCircle className="h-3 w-3 mr-1" /> Verified
                </Badge>
              )}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-2" /> Share
              </Button>
              <Button variant={query.status === "Coming Soon" ? "outline" : "youngburg"} 
                      disabled={query.status === "Coming Soon"}>
                <MessageSquare className="h-4 w-4 mr-2" /> 
                {query.status === "Coming Soon" ? "Coming Soon" : "Join Discussion"}
              </Button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
