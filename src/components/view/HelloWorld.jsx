import React from 'react';
import CounterWidget from '../ui/CounterWidget';

const HelloWorld = () => {
  return(
    <>
      <h1 className='text-4xl font-bold underline text-blue-500'>Hello World</h1>
      <CounterWidget />
    </>
  );
}

export default HelloWorld;