import { useState } from "react";

export const useArrayState = (initialState) => {
  const [array, setArray] = useState(initialState);

  return [
    array,
    {
      push: (newElement) => {
        setArray((oldArray) => [...oldArray, newElement]);
      },
    },
  ];
};
