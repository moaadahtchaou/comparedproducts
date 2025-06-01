import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const EXAMPLE_PROMPTS = [
  "Best noise-cancelling headphones for travel",
  "Gaming phones under $600 with great battery",
  "Lightweight laptop with 12+ hour battery life under $1000"
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log("Searching for:", searchQuery);
  };

  const handleExampleClick = (prompt: string) => {
    setSearchQuery(prompt);
  };

  return (
    <div className="min-h-screen bg-charcoal-deep flex flex-col">
      {/* Header */}
      <header className="w-full py-6 px-8">
        <Link to="/" className="inline-block">
          <h1 className="text-2xl font-bold text-gray-50">
            Compare<span className="text-green-400">AI</span>
          </h1>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 -mt-16">
        <div className="max-w-3xl w-full text-center space-y-6">
          {/* Headlines */}
          <div className="space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-50 tracking-tight">
              Compare Smarter, Not Harder
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Describe your perfect product, and let our AI do the rest
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-green-600/10 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500 opacity-75" />
              <div className="relative flex items-center">
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g., a lightweight laptop with long battery life for under $1000..."
                  className="w-full bg-gray-800/50 border-gray-700/50 text-gray-100 placeholder:text-gray-500 py-6 pr-12 text-lg rounded-lg focus:ring-2 focus:ring-green-500/20 focus:border-green-500/20 transition-all duration-300"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="absolute right-2 bg-transparent hover:bg-transparent text-gray-400 hover:text-green-400 transition-colors"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </form>

          {/* Example Prompts */}
          <div className="mt-8 space-y-3">
            <p className="text-sm text-gray-500 mb-4">Try these examples:</p>
            <div className="flex flex-col md:flex-row gap-3 justify-center items-center">
              {EXAMPLE_PROMPTS.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => handleExampleClick(prompt)}
                  className="group flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-gray-200 transition-colors duration-200"
                >
                  <ArrowRight className="h-3 w-3 text-green-500/50 group-hover:text-green-400 transition-colors" />
                  <span>{prompt}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-gray-300 transition-colors">About</Link>
            <Link to="/privacy" className="hover:text-gray-300 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-gray-300 transition-colors">Terms</Link>
          </div>
          <div>
            <p>© 2024 CompareAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 