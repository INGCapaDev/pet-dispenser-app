import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';

import { Toaster } from 'react-hot-toast';
import Home from './pages/home/Home.jsx';

const App = () => {
  return (
    <div className='w-screen min-h-screen flex flex-col justify-between items-center relative'>
      <div className='h-auto w-full flex flex-col items-center max-w-2xl gap-y-10 '>
        <Toaster
          position='bottom-center'
          containerStyle={{
            bottom: '5rem',
          }}
        />
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
};
export default App;
