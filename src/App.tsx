import { useState } from 'react';
import { useAppSelector, useAppDispatch } from './hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd
} from './store/counterStore';

export default function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [num, setNum] = useState(2);

  return (
    <div>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <div>
        <input
          value={num}
          onChange={(e) => setNum(+e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(num))}>直接加</button>
        <button onClick={() => dispatch(incrementAsync(num))}>异步加</button>
        <button onClick={() => dispatch(incrementIfOdd(num))}>奇数加</button>
      </div>
    </div>
  );
}
