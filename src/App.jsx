import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';

import { Toaster } from 'react-hot-toast';
import Home from './pages/home/Home.jsx';

const App = () => {
  return (
    <div className='relative flex min-h-screen w-screen flex-col items-center justify-between'>
      <div className='flex h-auto w-full max-w-2xl flex-col items-center gap-y-10 '>
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
