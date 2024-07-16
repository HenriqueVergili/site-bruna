// components/Header.tsx
import React from 'react';
import WaveSVG from './onda';

const Header: React.FC = () => {
  return (
    <>
    <header className="sticky top-0 bg-white text-terra flex justify-between items-center p-2 z-40">
      <div className='flex'>
        <a href="/"className="text-5xl p-10 font-pandora ml-[40px]">Bruna Vergili</a>
        </div>
      <nav>
        <ul className="text-2xl mr-24 flex space-x-4">
        <li><a href='/equipe' className="hover:text-terra text-black hover:underline ">Equipe</a></li>
        <li><a href="/projetos" className="hover:text-terra text-black hover:underline active:text-terra focus:text-terra focus:underline">Projetos</a></li>
        <li><a href="/processo" className="hover:text-terra text-black hover:underline active:text-terra focus:text-terra focus:underline">Processo</a></li>
        <li><a href="/contato" className="hover:text-terra text-black hover:underline active:text-terra focus:text-terra focus:underline">Contato</a></li>
        </ul>
      </nav>
    </header>
    <div className="relative z-0">
        <WaveSVG className="mt-[-10px] absolute left-0 right-0" />
    </div>
    </>
  );
};

export default Header;