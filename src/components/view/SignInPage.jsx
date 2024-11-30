import React from 'react';
import { useState } from 'react';
import { MailIcon } from '../ui/MailIcon';
import { LockerIcon } from '../ui/LockerIcon';
import { EyeFilledIcon } from '../ui/EyeFilledIcon';
import { EyeSlashFilledIcon } from '../ui/EyeSlashFilledIcon';
import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/react';

const SignInPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const landingPage = () => {}
  const signin = () => {}

  return(
    <div className='flex items-center justify-center min-h-[80vh]'>
      <div className='grid grid-cols-12 gap-1 transform scale-110'>
        <div className='col-span-12 text-center'>
          <h1 className='text-2xl'>Entrar</h1>
        </div>
        <div className='col-span-12 text-center'>
          <Input
            type="email"
            label="E-mail"
            size='sm'
            radius='none'
            placeholder="voce@exemplo.com"
            startContent={
              <MailIcon className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
            }
            className="max-w-xs mx-auto p-1"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='col-span-12 text-center'>
          <Input
            type={isVisible ? "text" : "password"}
            label="Senha"
            size='sm'
            radius='none'
            placeholder="Sua senha"
            startContent={
              <LockerIcon className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
            }
            endContent={
              <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-md text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-md text-default-400 pointer-events-none" />
                )}
              </button>
            }
            className="max-w-xs mx-auto p-1"
            onChange={(e) => setSenha(e.target.value)}
          />      
        </div>
        <div className='col-span-12 text-center'>
          <Button
            disabled={!email || !senha}
            color={email && senha ? 'primary' : 'default'}
            size='sm'
            radius='none'
            className='p-4 shadow-sm'
            onClick={signin}>
              Entrar
          </Button>
          <Button
            size='sm'
            radius='none'        
            className='p-4 ml-1 shadow-sm'
            onClick={landingPage}>
              Voltar
          </Button>
        </div>
        <div className='col-span-12 text-center'>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;