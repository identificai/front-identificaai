import React from 'react';
import homeLogo from '../../assets/home.png';
import './Home.css';

function Home() {
  return (
    <>
    <div className='back-home'>
      <div className='container grid grid-cols-2 text-white'>
        <div className="flex flex-col gap-4 items-center justify-center py-4">
          <h2 className='text-5xl font-bold dark-text'>Identifica Aí</h2>
          <p className='text-xl'></p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img src={homeLogo} alt="" className='w-2/3' />
        </div>
      </div>
      </div>
    </>
  );
}

export default Home;