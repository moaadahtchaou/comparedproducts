import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Star, Plus, ShoppingCart, ChevronRight, ThumbsUp, Cpu, CircuitBoard, HardDrive, Monitor, Battery, Scale, LayoutGrid, Gpu } from "lucide-react";
import { motion } from "framer-motion";
import productImage1 from "@/assets/88888.20.webp";
import productImage2 from "@/assets/main-pic_ca840ba1-8fef-4e19-abd3-d30a59df4497.webp";
import productImage3 from "@/assets/Samsung-Mobile-Galaxy-Tab-S10-Series-Samsungs-First-Galaxy-AI-Tablet_main1_F.jpg";

// Sample data - In a real app, this would come from an API or props
const productData = {
  id: "prod1",
  name: "AI Powerhouse Pro X",
  price: "$1,299",
  rating: 4.8,
  reviewCount: 256,
  aiTag: "Best for AI Development",
  summary: "The ultimate AI-powered laptop featuring blazing-fast performance, stunning 4K display, and exceptional battery life. Perfect for developers, creators, and AI enthusiasts.",
  images: [
    productImage1,
    productImage2,
    productImage3,
  ],
  specifications: [
    { name: "Processor", value: "AI Core X1000", icon: Cpu, description: "Next-gen AI processor with dedicated neural engine" },
    { name: "RAM", value: "32GB DDR5", icon: CircuitBoard, description: "Ultra-fast DDR5 memory for seamless multitasking" },
    { name: "Storage", value: "2TB NVMe SSD", icon: HardDrive, description: "Lightning-fast NVMe storage with hardware encryption" },
    { name: "Display", value: '16" 4K OLED (3840 x 2400)', icon: Monitor, description: "Professional-grade OLED with 100% DCI-P3" },
    { name: "Battery", value: "8000 mAh", icon: Battery, description: "All-day battery life with fast charging support" },
    { name: "Weight", value: "1.8 kg", icon: Scale, description: "Premium lightweight aluminum chassis" },
    { name: "OS", value: "Windows 11 Pro", icon: LayoutGrid, description: "Optimized for AI workloads" },
    { name: "GPU", value: "NVIDIA RTX 4080", icon: Gpu, description: "Advanced ray-tracing and AI acceleration" },
  ],
  reviews: [
    {
      id: 1,
      user: "Alex M.",
      rating: 5,
      date: "2024-02-15",
      title: "Exceptional AI Performance",
      content: "This laptop handles complex AI tasks with ease. The battery life is impressive, lasting over 8 hours under heavy load.",
      helpful: 45,
      verified: true,
    },
    {
      id: 2,
      user: "Sarah K.",
      rating: 4,
      date: "2024-02-10",
      title: "Great but Pricey",
      content: "Amazing performance and build quality. The only downside is the premium price tag, but you get what you pay for.",
      helpful: 32,
      verified: true,
    },
  ],
  ratingBreakdown: {
    5: 180,
    4: 50,
    3: 15,
    2: 8,
    1: 3
  }
};

const MotionCard = motion(Card);

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(productData.images[0]);
  const [isCompareAdded, setIsCompareAdded] = useState(false);

  const handleCompareClick = () => {
    setIsCompareAdded(!isCompareAdded);
  };

  const calculateRatingPercentage = (count: number) => {
    return (count / productData.reviewCount) * 100;
  };

  return (
    <div className="min-h-screen bg-charcoal-deep text-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 mb-8 text-sm">
          <Link to="/" className="text-gray-400 hover:text-gray-300">Home</Link>
          <ChevronRight className="h-4 w-4 text-gray-600" />
          <Link to="/products" className="text-gray-400 hover:text-gray-300">Products</Link>
          <ChevronRight className="h-4 w-4 text-gray-600" />
          <span className="text-gray-300">{productData.name}</span>
        </nav>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Image Gallery */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="aspect-square overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 relative group"
            >
              <img
                src={selectedImage}
                alt={productData.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <Badge 
                className="absolute top-4 right-4 bg-green-400/90 text-gray-900 font-medium"
              >
                {productData.aiTag}
              </Badge>
            </motion.div>
            <div className="grid grid-cols-4 gap-4">
              {productData.images.map((image, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(image)}
                  className={`aspect-square rounded-lg border overflow-hidden
                    ${image === selectedImage
                      ? 'border-green-400/50 ring-2 ring-green-400/50'
                      : 'border-gray-800 hover:border-gray-700'
                    }`}
                >
                  <img
                    src={image}
                    alt={`Product view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-50 mb-4">{productData.name}</h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= Math.floor(productData.rating)
                          ? "fill-green-400 text-green-400"
                          : "fill-gray-700 text-gray-700"
                      }`}
                    />
                  ))}
                  <span className="font-semibold text-green-400 ml-2">{productData.rating}</span>
                </div>
                <span className="text-gray-400">({productData.reviewCount} reviews)</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">{productData.summary}</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-baseline gap-4">
                <p className="text-4xl font-bold text-gray-50">{productData.price}</p>
                <Badge variant="outline" className="text-green-400 border-green-400/30">
                  Free Shipping
                </Badge>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 text-lg rounded-lg flex items-center gap-2 transition-colors duration-200"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Buy Now
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleCompareClick}
                    className={`w-full border-gray-700 hover:bg-gray-800 text-gray-300 font-semibold px-8 py-6 text-lg rounded-lg flex items-center gap-2 transition-all duration-200 ${
                      isCompareAdded ? "bg-gray-800 border-green-400/30 text-green-400" : ""
                    }`}
                  >
                    <Plus className={`h-5 w-5 ${isCompareAdded ? "text-green-400" : ""}`} />
                    {isCompareAdded ? "Added to Compare" : "Add to Compare"}
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="specifications" className="mb-12">
          <TabsList className="bg-gray-800/30 border-b border-gray-700">
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="specifications">
            <MotionCard 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-800/50 border-gray-700/50"
            >
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {productData.specifications.map((spec, index) => (
                    <HoverCard key={index}>
                      <HoverCardTrigger asChild>
                        <div className="flex items-center justify-between py-3 px-4 rounded-lg bg-gray-800/30 cursor-help">
                          <div className="flex items-center gap-3">
                            <spec.icon className="h-5 w-5 text-gray-400" />
                            <span className="text-gray-400">{spec.name}</span>
                          </div>
                          <span className="font-medium text-gray-200">{spec.value}</span>
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80 bg-gray-800 border-gray-700">
                        <div className="flex justify-between space-x-4">
                          <div className="space-y-1">
                            <h4 className="text-sm font-semibold text-gray-200">{spec.name}</h4>
                            <p className="text-sm text-gray-400">{spec.description}</p>
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
              </CardContent>
            </MotionCard>
          </TabsContent>

          <TabsContent value="reviews">
            <MotionCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-800/50 border-gray-700/50"
            >
              <CardContent className="p-6">
                {/* Rating Summary */}
                <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-200">Rating Breakdown</h3>
                    <div className="space-y-3">
                      {Object.entries(productData.ratingBreakdown)
                        .reverse()
                        .map(([rating, count]) => (
                          <div key={rating} className="flex items-center gap-4">
                            <div className="w-12 text-sm text-gray-400">{rating} stars</div>
                            <div className="flex-1">
                              <Progress value={calculateRatingPercentage(count)} className="h-2" />
                            </div>
                            <div className="w-12 text-sm text-right text-gray-400">{count}</div>
                          </div>
                        ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="text-5xl font-bold text-gray-200">{productData.rating}</div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-6 w-6 ${
                            star <= Math.floor(productData.rating)
                              ? "fill-green-400 text-green-400"
                              : "fill-gray-700 text-gray-700"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-400">Based on {productData.reviewCount} reviews</p>
                  </div>
                </div>

                {/* Reviews List */}
                <div className="space-y-6">
                  {productData.reviews.map((review) => (
                    <MotionCard
                      key={review.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="bg-gray-800/30 border-gray-700/50"
                    >
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold text-gray-100 mb-1">{review.title}</h3>
                              <div className="flex items-center gap-2 text-sm text-gray-400">
                                <span>{review.user}</span>
                                {review.verified && (
                                  <Badge variant="outline" className="text-green-400 border-green-400/30">
                                    Verified Purchase
                                  </Badge>
                                )}
                                <span>•</span>
                                <span>{new Date(review.date).toLocaleDateString()}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`h-4 w-4 ${
                                    star <= review.rating
                                      ? "fill-green-400 text-green-400"
                                      : "fill-gray-700 text-gray-700"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-300">{review.content}</p>
                          <div className="flex items-center gap-2 text-sm">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-gray-400 hover:text-gray-300 hover:bg-gray-800/50"
                            >
                              <ThumbsUp className="h-4 w-4 mr-1" />
                              Helpful ({review.helpful})
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </MotionCard>
                  ))}
                </div>
              </CardContent>
            </MotionCard>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 