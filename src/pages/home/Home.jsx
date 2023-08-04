import { toast } from 'react-hot-toast';

const foodAlert = () => {
  toast.custom(
    <div className='alert alert-success max-w-xs w-[80%]'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='stroke-current shrink-0 h-6 w-6'
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
    </div>
  );
};

const Home = () => {
  return (
    <>
      <button className='btn btn-circle h-40 w-40' onClick={foodAlert}>
        <img src='./img/pet-bowl.png' alt='' className='h-2/4' />
      </button>
      <div className='alert max-w-[80%]'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          className='stroke-info shrink-0 w-6 h-6'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'></path>
        </svg>
        <span>Hora de comer: </span>
        <span>10:00am</span>
      </div>
    </>
  );
};
export default Home;
