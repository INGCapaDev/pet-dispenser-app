// eslint-disable-next-line react/prop-types
const Countdown = ({ value, text }) => {
  return (
    <div className='rounded-box flex flex-col bg-neutral p-2 text-neutral-content'>
      <span className='countdown font-mono text-5xl'>
        <span style={{ '--value': value }}></span>
      </span>
      {text}
    </div>
  );
};
export default Countdown;
