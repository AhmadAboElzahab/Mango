import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='grid grid-cols-3 gap-8'>
        <Link to='/maids' className='flex flex-col items-center'>
          <div className='w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center'>
            <span className='text-3xl text-white'>👩</span>
          </div>
          <span className='mt-2 text-lg font-medium'>Maids</span>
        </Link>
      </div>
    </div>
  );
}
