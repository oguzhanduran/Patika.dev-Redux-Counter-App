import { useState } from "react";
import { useSelector } from "react-redux"; // useSelector ile redux'da tanımladığımız değişkene ulaşıyoruz.
import { useDispatch } from "react-redux"; //useDispatch ile state'i güncelleyecek tanımlamalara ulaşıyoruz.
import {
  increment,
  decrement,
  incrementByAmount,
} from "../redux/counter/counterSlice";

function Counter() {
  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <h1>{countValue}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br />
      <br />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(amount))}>
        Increment By Amount
      </button>
    </div>
  );
}

export default Counter;
