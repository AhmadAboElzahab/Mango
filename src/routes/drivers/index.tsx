// drivers/index.tsx
import { createRoute, Outlet } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';
import { Route as rootRoute } from '../__root';

// Drivers layout with navbar
export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/drivers',
  component: () => (
    <div className='min-h-screen bg-gray-50'>
      <nav className='bg-green-500 text-white p-4'>
        <div className='flex justify-between items-center'>
          <h1 className='text-xl font-bold'>Drivers Dashboard</h1>
          <div className='space-x-4'>
            <Link to='/drivers' className='hover:underline'>
              Available
            </Link>

            <Link to='/' className='bg-white text-green-500 px-3 py-1 rounded'>
              Home
            </Link>
          </div>
        </div>
      </nav>
      <div className='p-6'>
        <Outlet /> {/* Child routes render here */}
      </div>
    </div>
  ),
});
