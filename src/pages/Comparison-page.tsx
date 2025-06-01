import { Button } from "@/components/ui/button";
import { ComparisonTable, type ProductData } from "@/components/ui/compare/Comparison-table"; // We'll create this next
import { Link } from "react-router-dom"; // Corrected named import
import productImage1 from "@/assets/88888.20.webp";
import productImage2 from "@/assets/main-pic_ca840ba1-8fef-4e19-abd3-d30a59df4497.webp";
import productImage3 from "@/assets/Samsung-Mobile-Galaxy-Tab-S10-Series-Samsungs-First-Galaxy-AI-Tablet_main1_F.jpg";
// Sample data - in a real app, this would come from props, state, or a data fetching hook
const sampleProducts: ProductData[] = [
  {
    id: "prod1",
    imageUrl: productImage1,
    name: "AI Powerhouse Pro X",
    price: "$1299",
    aiBestForTag: "Top for AI Devs",
    storeUrl: "#",
    aiSummary: {
      pros: ["Blazing fast AI processor", "Stunning 4K display", "Long battery life"],
      cons: ["Very expensive", "Slightly bulky design"],
    },
    features: [
      { name: "Processor", value: "AI Core X1000", isBest: false },
      { name: "RAM (GB)", value: 32, isBest: true, higherIsBetter: true },
      { name: "Storage (TB)", value: 2, isBest: true, higherIsBetter: true },
      { name: "Battery (mAh)", value: 8000, isBest: true, higherIsBetter: true },
      { name: "Screen Size (in)", value: 16, isBest: true, higherIsBetter: true },
    ],
  },
  {
    id: "prod2",
    imageUrl: productImage2,
    name: "Innovate AI Tablet",
    price: "$799",
    aiBestForTag: "Best for Creatives",
    storeUrl: "#",
    aiSummary: {
      pros: ["Ultra-portable design", "Vibrant OLED screen", "Excellent stylus support"],
      cons: ["Average battery life", "Less powerful for heavy tasks"],
    },
    features: [
      { name: "Processor", value: "AI Spark 800", isBest: false },
      { name: "RAM (GB)", value: 16, isBest: false, higherIsBetter: true },
      { name: "Storage (TB)", value: 1, isBest: false, higherIsBetter: true },
      { name: "Battery (mAh)", value: 6000, isBest: false, higherIsBetter: true },
      { name: "Screen Size (in)", value: 13, isBest: false, higherIsBetter: true },
    ],
  },
  {
    id: "prod3",
    imageUrl:  productImage3,
    name: "EcoAI SmartBook",
    price: "$999",
    aiBestForTag: "Sustainable Choice",
    storeUrl: "#",
    aiSummary: {
      pros: ["Made with recycled materials", "Energy efficient", "Solid all-round performance"],
      cons: ["Screen could be brighter", "Base storage is low"],
    },
    features: [
      { name: "Processor", value: "AI EcoChip Z", isBest: true }, // Assume textual best
      { name: "RAM (GB)", value: 16, isBest: false, higherIsBetter: true },
      { name: "Storage (TB)", value: 0.5, isBest: false, higherIsBetter: true },
      { name: "Battery (mAh)", value: 7500, isBest: false, higherIsBetter: true },
      { name: "Screen Size (in)", value: 14, isBest: false, higherIsBetter: true },
    ],
  },
];


// This function would live in a utility file or within the component logic
// to determine which features are "winning" across the products.
// For simplicity, I've pre-marked `isBest` in the sample data.
// In a real app, you'd compare products[0].features[i].value, products[1]... etc.
// and set `isBest` dynamically.

export default function ProductComparisonPage() {
  // In a real app, 'comparedProducts' would come from props or state management
  const comparedProducts = sampleProducts; // Using the sample data for now

  // Determine the list of unique feature names for the table rows
  // Assuming all products have a similar set of core features to compare
  const featureKeys = comparedProducts.length > 0
    ? comparedProducts[0].features.map((f: { name: string }) => f.name)
    : [];

  return (
    <div className="bg-charcoal-deep min-h-screen text-gray-200 p-6 md:py-12 md:px-8 lg:px-16">
      <header className="mb-10 md:mb-12 flex flex-col sm:flex-row justify-between items-center gap-y-4 gap-x-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-50 tracking-tight text-center sm:text-left">
          Comparison Results
        </h1>
        <Link to="/products" className="flex-shrink-0">
          <Button variant="outline" className="text-gray-300 border-gray-600/80 hover:bg-gray-700/80 hover:border-gray-500 hover:text-white px-6 py-2.5 text-base rounded-lg transition-colors duration-150">
            &larr; Back to Products
          </Button>
        </Link>
      </header>

      {comparedProducts.length > 0 ? (
        <ComparisonTable products={comparedProducts} featureKeys={featureKeys} />
      ) : (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center p-4">
          <p className="text-center text-2xl md:text-3xl text-gray-400/80 mb-6">
            No products selected for comparison.
          </p>
          <p className="text-lg text-gray-500/90 mb-8 max-w-md">
            Please go back to the products page and choose a few items you'd like to see side-by-side.
          </p>
          <Link to="/products">
            <Button className="bg-blue-primary hover:bg-blue-primary/80 text-white font-semibold px-10 py-3 text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              Select Products to Compare
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}