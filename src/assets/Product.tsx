import { useState, useEffect } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { addToCart } from "../store/cartSlice";
import { useDispatch , useSelector } from "react-redux";
import { getProduct } from "../store/productSlice";

interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const Product: React.FC = () => {
  const dispatch = useDispatch();
  const products: ProductType[] = useSelector((state: { products: { data: ProductType[] } }) => state.products.data);
  const [showDescription, setShowDescription] = useState<{ [key: number]: boolean }>({});
  const [isHovered, setIsHovered] = useState<number | null>(null);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const toggleDescription = (productId: number): void => {
    setShowDescription((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const truncateTitle = (title: string, maxLength: number): string => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + '...';
    }
    return title;
  };

  const handleMouseOver = (productId: number) => {
    setIsHovered(productId);
  };

  const handleMouseOut = () => {
    setIsHovered(null);
  };

  const Add = (product: ProductType) => {
    dispatch(addToCart(product));
  };

    // Map the products to Card components
    const Cards = products.map((product: ProductType) => (
        <div key={product.id}>
            <Card className="sm:w-72">
            <CardHeader
          shadow={false}
          floated={false}
          className="h-48"
          onMouseOver={() => handleMouseOver(product.id)}
          onMouseOut={handleMouseOut}
        >
          <img
            src={product.image}
            alt="card-image"
            className="object-cover h-48 w-96"
          />
          {isHovered === product.id && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <img src={product.image} alt="full-card-image" className="object-contain max-w-full max-h-full" />
            </div>
          )}
        </CardHeader>
                <CardBody>
                    <div className="mb-2 flex items-center justify-between">
                    <Typography color="blue-gray" className="font-medium">
                           {truncateTitle(product.title, 15)}
                    </Typography>
                        <Typography color="blue-gray" className="font-medium">
                            ${product.price}
                        </Typography>
                    </div>
                    <Typography variant="small" color="gray" className="text-sm opacity-75">
                        {showDescription[product.id]
                            ? product.description
                            : 'description ...'}
                        <span
                            className="text-blue-500 cursor-pointer"
                            onClick={() => toggleDescription(product.id)}
                        >
                            {showDescription[product.id] ? 'Read Less' : 'Read More'}
                        </span>
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button
                        onClick={() => Add(product)}
                        ripple={false}
                        fullWidth={true}
                        className="bg-teal-400 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    >
                        Add to Cart
                    </Button>
                </CardFooter>
            </Card>
        </div>
    ));

    return (
        <div className="bg-yellow-300">
            <div className="flex flex-wrap justify-center gap-8 bg-deep-purple-200 px-2 py-10">
                {Cards}
            </div>
        </div>
    );
}

export default Product;
