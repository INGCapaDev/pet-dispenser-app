import { useState } from 'react';
import { useCountdownContext } from '../../context/CountdownContext.jsx';
import { sendWebSocketMessage } from '../../utils/webSocketConnection.js';
import { toast } from 'react-hot-toast';

import Toast from '../../components/Toast.jsx';
import TimePicker from './components/TimePicker.jsx';

const ONE_HOUR_IN_SECONDS = 3600;
const ONE_MINUTE_IN_SECONDS = 60;

const convertToSeconds = (hours, minutes) => {
  return hours * ONE_HOUR_IN_SECONDS + minutes * ONE_MINUTE_IN_SECONDS;
};

const Config = () => {
  const { updateValues } = useCountdownContext();
  const [minutes, setMinutes] = useState(1);
  const [hours, setHours] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const onChangeMinutes = (minutesValue) => {
    setMinutes(parseInt(minutesValue));
    setIsDisabled(false);
  };

  const onChangeHours = (hoursValue) => {
    setHours(parseInt(hoursValue));
    setIsDisabled(false);
  };

  const onUpdateTime = () => {
    updateValues(hours, minutes, 0);
    sendWebSocketMessage(convertToSeconds(hours, minutes));
    toast.custom(<Toast text='Actualizado exitosamente' />);
    setIsDisabled(true);
  };

  return (
    <>
      <h2 className='text-center text-2xl font-bold'>Configuración</h2>
      <p className='text-center text-lg'>
        ¿Con qué frecuencia <br className='sm:hidden' /> come tu mascota?
      </p>

      <TimePicker
        onChangeHours={onChangeHours}
        onChangeMinutes={onChangeMinutes}
      />

      <button
        className='btn btn-primary'
        disabled={isDisabled}
        onClick={onUpdateTime}>
        Actualizar
      </button>
    </>
  );
};
export default Config;
