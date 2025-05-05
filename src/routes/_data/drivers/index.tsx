import { createFileRoute } from '@tanstack/react-router';
import { useReducer } from 'react';

export const Route = createFileRoute('/_data/drivers/')({
  component: RouteComponent,
  loader: () => {
    console.log('Loading driver data');
  },
});
const reducer = (state: { count: number }, action: { type: 'increment' | 'decrement' }) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};
function RouteComponent() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      {/* toolbar */}
      <div className='toolbar'>
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      </div>
    </div>
  );
}
