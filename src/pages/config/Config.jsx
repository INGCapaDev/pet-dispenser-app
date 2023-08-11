import { useState } from 'react';
import { useCountdownContext } from '../../context/CountdownContext.jsx';
import { TimePicker } from 'react-ios-time-picker';

const Config = () => {
  const { updateValues } = useCountdownContext();
  const [time, setTime] = useState('10:00');

  const onChange = (timeValue) => {
    setTime(timeValue);
  };

  return (
    <>
      <TimePicker
        onChange={onChange}
        value={time}
        cellHeight={40}
        cancelButtonText='Cancelar'
        saveButtonText='Guardar'
      />
    </>
  );
};
export default Config;
