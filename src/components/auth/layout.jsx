import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full bg-muted">
      {/* Left Section */}
      <div className="hidden lg:flex items-center justify-center bg-primary text-primary-foreground w-1/2 px-12">
        <div className="max-w-md space-y-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight">
            Discover SwiftCart
          </h1>
          <p className="text-lg">
            The ultimate shopping experience at your fingertips. Shop smarter,
            live better.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-1 items-center justify-center bg-accent text-accent-foreground px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 bg-card text-card-foreground p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center">
            Welcome Back
          </h2>
          <p className="text-center text-muted-foreground">
            Please log in to continue shopping.
          </p>
          {/* Render the child route component */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
