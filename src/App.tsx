import { PricingCard } from "./Task_1/PricingCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-white text-center mb-16">Pricing</h1>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 max-w-4xl mx-auto">
          <PricingCard plan="Standard" price="$100" features={["50,000 Requests", "4 contributors", "Up to 3 GB storage space"]} />
          <PricingCard
            plan="Pro"
            price="$200"
            features={["100,000 Requests", "7 contributors", "Up to 6 GB storage space"]}
            isFeatured={true}
          />
          <PricingCard plan="Expert" price="$500" features={["200,000 Requests", "11 contributors", "Up to 10 GB storage space"]} />
        </div>
      </div>
    </div>
  );
}

export default App;
