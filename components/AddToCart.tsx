import { Product } from "@/sanity.types";
import CartIcon from "./CartIcon";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface AddToCartProps {
  product: Product;
  className?: string;
}
const AddToCart = ({ product, className }: AddToCartProps) => {
  const isOutOfStock = product?.stock === 0;

  return (
    <div>
      <Button
        variant="outline"
        className={cn("mt-2 w-full", className)}
        disabled={isOutOfStock}
      >
        {isOutOfStock ? (
          <span className="text-red-500">Out of Stock</span>
        ) : (
          <>
            <CartIcon />
            <span>Add to Cart</span>
          </>
        )}
      </Button>
    </div>
  );
};

export default AddToCart;
