type PricingCardProps = {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
};

export const PricingCard = ({ plan, price, features, isFeatured = false }: PricingCardProps) => {
  return (
    <div
      className={`
      relative rounded-lg p-8 text-center transition-all duration-300 
      hover:shadow-xl hover:-translate-y-2 focus-within:ring-4 focus-within:ring-blue-500 focus-within:ring-opacity-50
      ${isFeatured ? "bg-slate-700 text-white scale-105 border-2 border-blue-500" : "bg-white text-gray-900 border border-gray-200"}
    `}
    >
      {/* Plan Name */}
      <h3
        className={`
        text-lg font-semibold mb-4
        ${isFeatured ? "text-white" : "text-gray-700"}
      `}
      >
        {plan}
      </h3>

      {/* Price */}
      <div className="mb-8">
        <span
          className={`
          text-5xl font-bold
          ${isFeatured ? "text-white" : "text-gray-900"}
        `}
        >
          {price}
        </span>
      </div>

      {/* Features */}
      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`
              text-sm font-medium py-2
              ${isFeatured ? "text-gray-200 border-b border-gray-600" : "text-gray-600 border-b border-gray-200"}
            `}
          >
            {feature}
          </div>
        ))}
      </div>

      {/* Subscribe Button */}
      <button
        className={`
        w-full py-3 px-6 rounded-md font-semibold text-sm uppercase tracking-wide
        transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-opacity-50
        ${
          isFeatured
            ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500"
        }
      `}
      >
        Subscribe
      </button>
    </div>
  );
};
