const Header = () => {
  return (
    <div className='relative mb-10 flex h-40 w-full items-start justify-center rounded-b-3xl bg-base-300 shadow-md'>
      <div className='pt-5 text-2xl font-bold'>Dispensador de comida</div>
      <img
        className='absolute  -bottom-10 h-32  w-32 rounded-full border-4 border-base-100 border-opacity-60 shadow-md'
        src='./img/profile.jpg'
        alt='profile'></img>
    </div>
  );
};
export default Header;
