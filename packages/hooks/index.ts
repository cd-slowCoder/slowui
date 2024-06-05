import { useState } from "react"


export const useCounter =(initVal = 0) => {
  const [value, setValue] = useState(initVal);

  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);

  return { value, increment, decrement};

}