
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Episode7 from "./pages/Episode7";
import NotFound from "./pages/NotFound";
import Query from "./pages/Query";
import Mentor from "./pages/Mentor";
import CareersPage from "./pages/Careers";
import LetterOfAppreciation from "./pages/LetterOfAppreciation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/episode-7" element={<Episode7 />} />
          <Route path="/query" element={<Query />} />
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/letter-of-appreciation" element={<LetterOfAppreciation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
