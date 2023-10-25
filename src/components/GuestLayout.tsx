import { Outlet } from 'react-router-dom'

/**
 * Component for the guest layout.
 */
function GuestLayout() {
  return (
    <div className='my-10'>
      {/* Container */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        {/* Logo */}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
        </div>
        {/* Router outlet */}
        <Outlet />
      </div>
    </div>
  )
}

export default GuestLayout