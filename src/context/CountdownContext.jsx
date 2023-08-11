import { useContext } from 'react';
import { createContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import Toast from '../components/Toast.jsx';

const CountdownContext = createContext(null);

export const CountdownProvider = ({ children }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const [countdownSeconds, setCountdownSeconds] = useState(seconds);
  const [countdownMinutes, setCountdownMinutes] = useState(minutes);
  const [countdownHours, setCountdownHours] = useState(hours);

  const [isConfigured, setIsConfigured] = useState(false);

  const updateValues = (hours, minutes, seconds) => {
    setSeconds(seconds);
    setMinutes(minutes);
    setHours(hours);
    setCountdownSeconds(seconds);
    setCountdownMinutes(minutes);
    setCountdownHours(hours);
    setIsConfigured(true);
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
      toast.custom(<Toast text='Alimentando a tu mascota' />);
    }
  };

  useEffect(() => {
    if (isConfigured) {
      const countdownInterval = setInterval(updateCountdown, 1000);

      return () => {
        clearInterval(countdownInterval);
      };
    }
  }, [countdownHours, countdownMinutes, countdownSeconds, isConfigured]);

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
