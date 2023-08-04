const Header = () => {
  return (
    <div className='w-full bg-base-300 shadow-md h-40 rounded-b-3xl flex justify-center items-start relative mb-10'>
      <div className='text-2xl font-bold pt-5'>Dispensador de comida</div>
      <img
        className='rounded-full  shadow-md border-opacity-60 border-base-100 border-4 h-32 w-32 absolute -bottom-10'
        src='./img/profile.jpg'
        alt='profile'></img>
    </div>
  );
};
export default Header;
