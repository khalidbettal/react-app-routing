import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { removeFromCart , incQuantity, decQuantity} from '../store/cartSlice';





interface CartItem {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    quantityItems: number;
    quantityPrice: number;
  }
function Cart() {
    const cartProducts = useSelector((state: { cart: { items: CartItem[] } }) => state.cart.items);
    
    
    const dispatch = useDispatch();

    const removeCart = (id: number) => {
        dispatch(removeFromCart(id));
      };
  return (
    <div>
        <div className="h-screen bg-gray-100 pt-20">
    
    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div className="rounded-lg md:w-2/3">

      
  {cartProducts.map((item) => (
    <>
       <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          <img src={item.image} alt="product-image" className="w-40 h-32 rounded-lg sm:w-40" />
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div className="mt-5 sm:mt-0">
              <h2 className="text-lg font-bold text-gray-900">{item.title}</h2>
              <p className="mt-1 text-xs text-gray-700">{item.price}</p>
              
            </div>
            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div className="flex items-center border-gray-100">
                <button onClick={() => dispatch(decQuantity(item.id))} disabled={item.quantityItems === 0}>
                <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50 text-red-500"> - </span>
                </button>
               <div className="w-14 text-center font-semibold border border-gray-200 py-0.5 hidden sm:block" >{item.quantityItems}</div>
               <button onClick={() => dispatch(incQuantity(item.id))} >
               <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50 text-green-500"> + </span>
               </button>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-sm font-semibold text-light-green-600 sm:py-4">${item.quantityPrice}</p>
                <button onClick={() => removeCart(item.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 text-red-500 hover:text-brown-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                
                </button>
              
              </div>
            </div>
          </div>
        </div>
    </>
  ))}
       


        


      </div>
      
      <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">$129.99</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Shipping</p>
          <p className="text-gray-700">$4.99</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">$134.98 USD</p>
            <p className="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
      </div>
    </div>
  </div>
     
    </div>
  )
}

export default Cart

