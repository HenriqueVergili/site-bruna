// components/Header.tsx
import React from 'react';
import WaveSVG from './onda';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <>
    <header className="sticky top- bg-white text-terra flex justify-between items-center p-10 z-40">
      <div><a href="#inicio"className="text-4xl p-10 font-pandora">Bruna Vergili</a></div>
      <nav>
        <ul className="text-1xl mr-24 flex space-x-4">
        <li><Link href='/sobre'> <a className="hover:text-terra text-black hover:underline focus:text-terra focus:underline">Sobre</a></Link></li>
        <li><a href="#projetos" className="hover:text-terra text-black hover:underline focus:text-terra focus:underline">Projetos</a></li>
        <li><a href="#equipe" className="hover:text-terra text-black hover:underline focus:text-terra focus:underline">Equipe</a></li>
        <li><a href="#contato" className="hover:text-terra text-black hover:underline focus:text-terra focus:underline">Contato</a></li>
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