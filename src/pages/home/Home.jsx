import { toast } from 'react-hot-toast';
import { sendWebSocketMessage } from '../../utils/webSocketConnection';
import { CountdownContext } from '../../context/CountdownContext.jsx';
import { useContext } from 'react';

const foodAlert = () => {
  toast.custom(
    <div className='alert alert-success w-[80%] max-w-xs'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 shrink-0 stroke-current'
        fill='none'
        viewBox='0 0 24 24'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
      <span>Sirviendo comida</span>
    </div>,
  );
  sendWebSocketMessage('dispensar');
};

const Home = () => {
  const { hours, minutes, seconds } = useContext(CountdownContext);
  return (
    <>
      <button className='btn btn-circle h-40 w-40' onClick={foodAlert}>
        <img src='./img/pet-bowl.png' alt='' className='h-2/4' />
      </button>
      <div className='grid auto-cols-max grid-flow-col gap-5 text-center'>
        <div className='rounded-box flex flex-col bg-neutral p-2 text-neutral-content'>
          <span className='countdown font-mono text-5xl'>
            <span style={{ '--value': hours }}></span>
          </span>
          horas
        </div>
        <div className='rounded-box flex flex-col bg-neutral p-2 text-neutral-content'>
          <span className='countdown font-mono text-5xl'>
            <span style={{ '--value': minutes }}></span>
          </span>
          min
        </div>
        <div className='rounded-box flex flex-col bg-neutral p-2 text-neutral-content'>
          <span className='countdown font-mono text-5xl'>
            <span style={{ '--value': seconds }}></span>
          </span>
          sec
        </div>
      </div>
    </>
  );
};
export default Home;
