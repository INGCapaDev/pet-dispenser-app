import { useState } from 'react';
import { useCountdownContext } from '../../context/CountdownContext.jsx';
import { TimePicker } from 'react-ios-time-picker';
import { sendWebSocketMessage } from '../../utils/webSocketConnection.js';
import { toast } from 'react-hot-toast';
import Toast from '../../components/Toast.jsx';

const ONE_HOUR_IN_SECONDS = 3600;
const ONE_MINUTE_IN_SECONDS = 60;

const convertToSeconds = (hours, minutes) => {
  return hours * ONE_HOUR_IN_SECONDS + minutes * ONE_MINUTE_IN_SECONDS;
};

const Config = () => {
  const { updateValues } = useCountdownContext();
  const [time, setTime] = useState();
  const [minutes, setMinutes] = useState();
  const [hours, setHours] = useState();
  const [isDisabled, setIsDisabled] = useState(true);

  const onChange = (timeValue) => {
    setTime(timeValue);
    setIsDisabled(false);
    const [hoursValue, minutesValue] = timeValue.split(':');
    setMinutes(parseInt(minutesValue));
    setHours(parseInt(hoursValue));
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
        ¿Con qué frecuencia come tu mascota?
      </p>

      <TimePicker
        onChange={onChange}
        value={time}
        cellHeight={40}
        cancelButtonText='Cancelar'
        saveButtonText='Guardar'
        placeHolder='Tiempo'
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
