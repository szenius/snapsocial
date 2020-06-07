import React, {
  createContext,
  ReactChild,
  useState,
  FunctionComponent,
} from "react";

export interface IHuman {
  embedding: number[];
  name: string;
  url: string;
}

interface IPopulationContext {
  humans: IHuman[];
  addHuman: (human: IHuman) => void;
}

const initialContext: IPopulationContext = { humans: [], addHuman: () => {} };
export const PopulationContext = createContext(initialContext);

export const PopulationContextProvider: FunctionComponent<{
  children: ReactChild;
}> = ({ children }) => {
  const [humans, setHumans] = useState<IHuman[]>([]);

  const addHuman = (human: IHuman) =>
    setHumans(humans.splice(humans.length - 1, 0, human));

  return (
    <PopulationContext.Provider value={{ humans, addHuman }}>
      {children}
    </PopulationContext.Provider>
  );
};
