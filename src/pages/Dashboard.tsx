import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Pencil, ExternalLink, Clock, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const MotionCard = motion(Card);

// Sample data - In a real app, this would come from an API or props
const userData = {
  fullName: "Alex Johnson",
  email: "alex.johnson@example.com",
  savedComparisons: [
    {
      id: "comp1",
      title: "Gaming Laptops Under $2000",
      products: ["ROG Zephyrus G14", "Razer Blade 15", "MSI GS66"],
      date: "2024-02-20",
    },
    {
      id: "comp2",
      title: "AI Development Workstations",
      products: ["Dell XPS 17", "MacBook Pro 16", "Lenovo ThinkPad P1"],
      date: "2024-02-18",
    },
    {
      id: "comp3",
      title: "4K Monitors for Design",
      products: ["LG UltraFine", "Dell UltraSharp", "ASUS ProArt"],
      date: "2024-02-15",
    },
  ],
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-charcoal-deep py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Page Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50">
            My Dashboard
          </h1>
          <p className="text-gray-400">
            Manage your profile and view saved comparisons
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <MotionCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gray-800/50 border-gray-700/50 lg:col-span-1"
          >
            <CardHeader>
              <CardTitle className="text-xl text-gray-50">Profile Information</CardTitle>
              <CardDescription className="text-gray-400">
                Your personal details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm text-gray-400">Full Name</label>
                <p className="text-lg text-gray-200">{userData.fullName}</p>
              </div>
              <div>
                <label className="text-sm text-gray-400">Email</label>
                <p className="text-lg text-gray-200">{userData.email}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full border-gray-700 hover:bg-gray-800 text-gray-300
                  hover:text-gray-50 transition-colors"
              >
                <Pencil className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </CardFooter>
          </MotionCard>

          {/* Saved Comparisons Card */}
          <MotionCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-gray-800/50 border-gray-700/50 lg:col-span-2"
          >
            <CardHeader>
              <CardTitle className="text-xl text-gray-50">My Saved Comparisons</CardTitle>
              <CardDescription className="text-gray-400">
                Access your previous product comparisons
              </CardDescription>
            </CardHeader>
            <CardContent>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="space-y-4"
              >
                {userData.savedComparisons.map((comparison) => (
                  <motion.div
                    key={comparison.id}
                    variants={item}
                    className="group"
                  >
                    <Link
                      to={`/comparison/${comparison.id}`}
                      className="block p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50
                        border border-gray-700/50 hover:border-gray-600/50
                        transition-all duration-200"
                    >
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium text-gray-200 group-hover:text-gray-50">
                              {comparison.title}
                            </h3>
                            <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-gray-400" />
                          </div>
                          <p className="text-sm text-gray-400">
                            {comparison.products.join(" vs ")}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Clock className="h-4 w-4" />
                            <span>{new Date(comparison.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-600 group-hover:text-gray-400
                          transform group-hover:translate-x-1 transition-all" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full border-gray-700 hover:bg-gray-800 text-gray-300
                  hover:text-gray-50 transition-colors"
                onClick={() => window.location.href = '/'}
              >
                Start New Comparison
              </Button>
            </CardFooter>
          </MotionCard>
        </div>
      </div>
    </div>
  );
} 