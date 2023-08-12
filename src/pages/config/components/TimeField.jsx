// eslint-disable-next-line react/prop-types
const TimeField = ({ value }) => {
  return (
    <option className='bg-base-300' value={value}>
      {value}
    </option>
  );
};
export default TimeField;
