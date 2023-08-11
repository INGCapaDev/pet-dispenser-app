import { toast } from 'react-hot-toast';
import { sendWebSocketMessage } from '../../utils/webSocketConnection';
import { useCountdownContext } from '../../context/CountdownContext.jsx';
import Countdown from './components/Countdown.jsx';
import Toast from '../../components/Toast.jsx';

const foodAlert = () => {
  toast.custom(<Toast text='Alimentando a tu mascota' />);
  sendWebSocketMessage('dispensar');
};

const Home = () => {
  const { hours, minutes, seconds } = useCountdownContext();
  return (
    <>
      <button className='btn btn-circle h-40 w-40' onClick={foodAlert}>
        <img src='./img/pet-bowl.png' alt='' className='h-2/4' />
      </button>
      <div className='grid auto-cols-max grid-flow-col gap-5 text-center'>
        <Countdown value={hours} text='hrs' />
        <Countdown value={minutes} text='min' />
        <Countdown value={seconds} text='sec' />
      </div>
    </>
  );
};
export default Home;
