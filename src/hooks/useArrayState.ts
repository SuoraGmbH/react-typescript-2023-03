import { useState } from "react";

export const useArrayState = <Type>(
  initialState: Type[]
): [Type[], { push: (newElement: Type) => void }] => {
  const [array, setArray] = useState(initialState);

  return [
    array,
    {
      push: (newElement: Type) => {
        setArray((oldArray: Type[]) => [...oldArray, newElement]);
      },
    },
  ];
};
