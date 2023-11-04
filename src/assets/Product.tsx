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
  const status = useSelector((state: { products: { status: string } }) => state.products.status);
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

    if (status === 'loading') {
      return(
        <div className="text-center mt-52">
       <button disabled type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
    <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
    </svg>
    Loading...
</button>
        </div>
      
      );
    }
    if (status === 'failed') {
      return <div>Error loading products</div>;
    }
    

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
