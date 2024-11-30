import React from 'react';
import { Button } from '@nextui-org/react';

const LandingPage = () => {
  const shopping = () => {}
  const signin = () => {}

  return(
    <div className="grid grid-cols-12 gap-1">
      <span className="col-span-12 text-center">E-commerce App</span>
      <div className="col-span-12 text-center">
        <Button
          color='primary'
          size='sm'
          radius='none' 
          onClick={shopping}>
            Comprar agora
        </Button>
      </div>
      <div className="col-span-12 text-center">
        <Button
          size='sm'
          radius='none'
          onClick={signin}>
            Entrar
        </Button>
      </div>
    </div>
  );
}

export default LandingPage;