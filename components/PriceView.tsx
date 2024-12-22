import { cn } from "@/lib/utils";

interface PriceViewProps {
  price: number;
  discount: number;
  className?: string;
}

const PriceView = ({ price, discount, className }: PriceViewProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <div className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        ${price}
      </div>
      {discount > 0 && (
        <div className="text-sm text-gray-500 dark:text-gray-400 line-through ml-2">
          ${price + discount}
        </div>
      )}
    </div>
  );
};

export default PriceView;
