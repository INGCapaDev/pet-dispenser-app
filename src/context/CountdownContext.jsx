import { useContext } from 'react';
import { createContext, useState, useEffect } from 'react';

const CountdownContext = createContext(null);

export const CountdownProvider = ({ children }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const [countdownSeconds, setCountdownSeconds] = useState(seconds);
  const [countdownMinutes, setCountdownMinutes] = useState(minutes);
  const [countdownHours, setCountdownHours] = useState(hours);

  const updateValues = (hours, minutes, seconds) => {
    setSeconds(seconds);
    setMinutes(minutes);
    setHours(hours);
    setCountdownSeconds(seconds);
    setCountdownMinutes(minutes);
    setCountdownHours(hours);
  };

  const updateCountdown = () => {
    if (countdownSeconds > 0) {
      setCountdownSeconds(countdownSeconds - 1);
      return;
    }

    if (countdownMinutes > 0) {
      setCountdownMinutes(countdownMinutes - 1);
      setCountdownSeconds(59);
      return;
    }

    if (countdownHours > 0) {
      setCountdownHours(countdownHours - 1);
      setCountdownMinutes(59);
      setCountdownSeconds(59);
      return;
    }

    if (
      countdownHours === 0 &&
      countdownMinutes === 0 &&
      countdownSeconds === 0
    ) {
      setCountdownSeconds(seconds);
      setCountdownMinutes(minutes);
      setCountdownHours(hours);
    }
  };

  useEffect(() => {
    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [countdownHours, countdownMinutes, countdownSeconds]);

  const contextValue = {
    seconds: countdownSeconds,
    minutes: countdownMinutes,
    hours: countdownHours,
    updateValues,
  };

  return (
    <CountdownContext.Provider value={contextValue}>
      {children}
    </CountdownContext.Provider>
  );
};
export default CountdownProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useCountdownContext = () => {
  const context = useContext(CountdownContext);
  if (!context) {
    throw new Error(
      'useCountdownContext must be used within a CountdownProvider',
    );
  }
  return context;
};
