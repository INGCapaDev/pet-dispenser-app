import TimeField from './TimeField.jsx';

// eslint-disable-next-line react/prop-types
const TimePicker = ({ onChangeMinutes, onChangeHours }) => {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 59 }, (_, i) => i + 1);
  return (
    <div className='flex justify-center'>
      <div className='mt-2 w-full rounded-lg bg-base-300 p-5 shadow-xl'>
        <div className='flex bg-base-300'>
          <div className='flex flex-col items-center'>
            <select
              name='hours'
              className='mx-3 appearance-none bg-base-300 bg-transparent text-xl outline-none'
              onChange={(e) => onChangeHours(e.currentTarget.value)}>
              {hours.map((hour) => (
                <TimeField
                  key={hour}
                  value={hour < 10 ? hour.toString().padStart(2, '0') : hour}
                />
              ))}
            </select>
            <span className='mx-3 text-xs'>hrs</span>
          </div>
          <span className='mx-3 text-xl'>:</span>
          <div className='flex flex-col items-center'>
            <select
              name='minutes'
              className=' mx-3 appearance-none bg-base-300 text-xl outline-none'
              onChange={(e) => onChangeMinutes(e.currentTarget.value)}>
              {minutes.map((minute) => (
                <TimeField
                  key={minute}
                  value={
                    minute < 10 ? minute.toString().padStart(2, '0') : minute
                  }
                />
              ))}
            </select>
            <span className='mx-3 text-xs'>min</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TimePicker;
