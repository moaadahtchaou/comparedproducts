// ... existing code ...
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Button } from "@/components/ui/button";
  import { Badge } from "@/components/ui/badge";
  import { Separator } from "@/components/ui/separator";
  import {
    Card,
    CardContent,
  } from "@/components/ui/card";
  import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card";
  import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";
  import { ThumbsUp, ThumbsDown, Sparkles, Zap, Trophy, Info } from "lucide-react";
  
  // Define the structure of a single feature
  export interface Feature { // EXPORTED
    name: string;
    value: string | number;
    isBest?: boolean;
    higherIsBetter?: boolean;
  }
  
  // Define the structure of a product to be compared
  export interface ProductData { // EXPORTED
    id: string;
    imageUrl: string;
    name: string;
    price: string;
    aiBestForTag: string;
    storeUrl: string;
    aiSummary: {
      pros: string[];
      cons: string[];
    };
    features: Feature[]; // Uses the Feature interface
  }
  
  interface ComparisonTableProps {
    products: ProductData[];
    featureKeys: string[];
  }
  
  export function ComparisonTable({ products, featureKeys }: ComparisonTableProps) {
    if (!products || products.length === 0) {
      return (
        <div className="text-center py-16 px-4">
          <p className="text-xl text-gray-400 animate-fade-in">No products to compare.</p>
        </div>
      );
    }
  
    const displayProducts = products.slice(0, 3);
  
    return (
      <div className="bg-gradient-to-b from-gray-lightdark to-gray-lightdark/95 rounded-xl shadow-2xl overflow-x-auto border border-gray-700/50 backdrop-blur-sm">
        <Table className="min-w-[1000px] lg:min-w-full relative">
          <TableHeader>
            <TableRow className="border-b-2 border-gray-700/50">
              <TableHead className="w-[200px] md:w-1/4 sticky left-0 bg-gradient-to-r from-gray-lightdark to-gray-lightdark/95 z-10 px-6 py-5">
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-gray-100 tracking-tight">Features</span>
                  <Zap className="w-5 h-5 text-blue-400" />
                </div>
              </TableHead>
              {displayProducts.map((product) => (
                <TableHead key={product.id} className="w-[300px] md:w-1/4 text-center p-6">
                  <Card className="bg-gray-800/50 border-gray-700/50 transform hover:scale-[1.02] transition-all duration-300">
                    <CardContent className="p-6 space-y-4">
                      <div className="relative group">
                        <div className="relative overflow-hidden rounded-lg">
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-full h-48 object-cover rounded-lg shadow-xl"
                          />
                        </div>
                        <Badge
                          variant="secondary"
                          className="absolute top-2 right-2 bg-blue-500/90 text-white border-none px-3 py-1 text-xs font-medium backdrop-blur-sm"
                        >
                          Featured
                        </Badge>
                      </div>
  
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-gray-50 leading-tight hover:text-blue-400 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                          {product.price}
                        </p>
                      </div>
  
                      <HoverCard>
                        <HoverCardTrigger>
                          <Badge
                            variant="secondary"
                            className="bg-gradient-to-r from-green-500/20 to-blue-500/20 text-white border border-green-500/30 px-3 py-1.5 text-sm font-medium flex items-center gap-1.5 hover:from-green-500/30 hover:to-blue-500/30 transition-all duration-300"
                          >
                            <Sparkles className="h-3.5 w-3.5" />
                            {product.aiBestForTag}
                          </Badge>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80 bg-gray-800/95 border-gray-700">
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-gray-100">Why this tag?</h4>
                            <p className="text-sm text-gray-300">
                              Our AI analysis determined this product excels in this particular use case based on its specifications and user feedback.
                            </p>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
  
                      <Button
                        onClick={() => window.open(product.storeUrl, "_blank")}
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold px-8 py-3 text-base rounded-lg shadow-lg hover:shadow-blue-500/25 transform hover:scale-[1.02] transition-all duration-300"
                      >
                        Buy Now
                      </Button>
                    </CardContent>
                  </Card>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
  
          <TableBody className="divide-y divide-gray-700/50">
            {/* AI Summary Row */}
            <TableRow className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors duration-300">
              <TableCell className="font-semibold text-base text-gray-200 px-6 py-5 sticky left-0 bg-gray-800/30 z-10">
                <div className="flex items-center space-x-2">
                  <span>AI Analysis</span>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-sm">AI-powered analysis of product strengths and limitations</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableCell>
              {displayProducts.map((product) => (
                <TableCell key={product.id + "-summary"} className="p-5">
                  <div className="space-y-4 bg-gray-800/20 rounded-lg p-4">
                    <div>
                      <h4 className="flex items-center font-semibold text-green-400 mb-2 text-md">
                        <ThumbsUp className="h-5 w-5 mr-2 flex-shrink-0" />
                        Advantages
                      </h4>
                      <ul className="space-y-2">
                        {product.aiSummary.pros.map((pro, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-300 leading-relaxed">
                            <span className="mr-2 mt-1">•</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Separator className="bg-gray-700/50" />
                    
                    <div>
                      <h4 className="flex items-center font-semibold text-red-400 mb-2 text-md">
                        <ThumbsDown className="h-5 w-5 mr-2 flex-shrink-0" />
                        Limitations
                      </h4>
                      <ul className="space-y-2">
                        {product.aiSummary.cons.map((con, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-300 leading-relaxed">
                            <span className="mr-2 mt-1">•</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TableCell>
              ))}
            </TableRow>
  
            {/* Feature Comparison Rows */}
            {featureKeys.map((featureKey) => (
              <TableRow key={featureKey} className="group hover:bg-gray-800/30 transition-all duration-300">
                <TableCell className="font-medium text-gray-300 px-6 py-4 sticky left-0 bg-gray-lightdark z-10 group-hover:bg-gray-800/30 transition-colors">
                  {featureKey}
                </TableCell>
                {displayProducts.map((product) => {
                  const feature = product.features.find(f => f.name === featureKey);
                  const cellContent = feature ? String(feature.value) : "-";
                  const isWinningSpec = feature?.isBest;
  
                  return (
                    <TableCell
                      key={product.id + "-" + featureKey}
                      className="px-6 py-4 relative"
                    >
                      <div className={`
                        flex items-center justify-center space-x-2
                        ${isWinningSpec ? 'text-gray-50 font-semibold' : 'text-gray-400'}
                      `}>
                        {isWinningSpec && (
                          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5" />
                        )}
                        <span>{cellContent}</span>
                        {isWinningSpec && (
                          <Trophy className="h-4 w-4 text-yellow-500" />
                        )}
                      </div>
                      {isWinningSpec && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-blue-500" />
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
  // ... existing code ...