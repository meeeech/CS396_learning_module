import { createContext, useState } from 'react';

const AppState = createContext(null);
const { Provider } = AppState;

const StateProvider = ({ children }) => {
  const [step, setStep] = useState(1);

  const data = { step, setStep };
  return <Provider value={data}>{children}</Provider>;
};

export { AppState, StateProvider };