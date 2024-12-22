import { cn } from "@/lib/utils";

interface PriceViewProps {
  price: number | undefined;
  discount: number | undefined;
  className?: string;
}

const PriceView = ({ price, discount, className }: PriceViewProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <div className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        ${price}
      </div>
      {discount !== undefined && discount > 0 && (
        <div className="text-sm text-gray-500 dark:text-gray-400 line-through ml-2">
          ${price !== undefined ? price + (discount ?? 0) : 0}
        </div>
      )}
    </div>
  );
};

export default PriceView;
