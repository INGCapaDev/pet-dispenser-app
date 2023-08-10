import { Toaster } from 'react-hot-toast';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import CountdownProvider from './context/CountdownContext.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/home/Home.jsx';
import Config from './pages/config/Config.jsx';

const App = () => {
  return (
    <div className='relative flex min-h-screen w-screen flex-col items-center justify-between'>
      <div className='flex h-auto w-full max-w-2xl flex-col items-center gap-y-10 '>
        <CountdownProvider>
          <BrowserRouter>
            <Toaster
              position='bottom-center'
              containerStyle={{
                bottom: '5rem',
              }}
            />
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/config' element={<Config />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CountdownProvider>
      </div>
    </div>
  );
};
export default App;
