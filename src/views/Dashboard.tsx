import Product from "../assets/Product"


function Dashboard() {
  return (
    <div>
      <header className="bg-yellow-200 shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Products</h1>
          </div>
        </header>
        <main>
          <div className="">
            <Product />
            </div>
        </main>
    </div>
  )
}

export default Dashboard