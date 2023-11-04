import Cart from "../assets/Cart"


function Survey() {
  return (
    <div>
      <header className=" shadow bg-green-200">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Cart</h1>
          </div>
        </header>
        
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">

      <Cart />
</div>
        
    </div>
  )
}

export default Survey