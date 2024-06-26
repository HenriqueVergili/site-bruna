// pages/index.tsx
import React from 'react';
import Footer from '../components/footer';


const Projetos: React.FC = () => {
  return (
    <div>
    <header className="sticky top-0 bg-white text-terra flex justify-between items-center p-2 z-40">
      <div className='flex'>
        <a href="/"className="text-5xl p-10 font-pandora ml-[40px]">Bruna Vergili</a>
        </div>
      <nav>
        <ul className="text-2xl mr-24 flex space-x-4">
        <li><a href='/sobre' className="hover:text-terra text-black hover:underline ">Sobre</a></li>
        <li><a href="/projetos" className="hover:text-terra text-black hover:underline active:text-terra focus:text-terra focus:underline">Projetos</a></li>
        <li><a href="/equipe" className="hover:text-terra text-black hover:underline active:text-terra focus:text-terra focus:underline">Equipe</a></li>
        <li><a href="/contato" className="hover:text-terra text-black hover:underline active:text-terra focus:text-terra focus:underline">Contato</a></li>
        </ul>
      </nav>
    </header>
        
        <div className='flex justify-between'>
        <div>
            <p className='text-[300px] text-cinza'>Projetos</p>
        </div>
        <div className=' flex w-[900px] p-40 justify-between place-items-center'>
            <a href='#' className='text-[24px] hover:text-terra text-black hover:underline active:text-terra focus:text-terra focus:underline'>Todos</a>
            <a href='#' className='text-[24px] hover:text-terra text-black hover:underline active:text-terra focus:text-terra focus:underline'>Casas</a>
            <a href='#' className='text-[24px] hover:text-terra text-black hover:underline active:text-terra focus:text-terra focus:underline'>Apartamentos</a>
            <a href='#' className='text-[24px] hover:text-terra text-black hover:underline active:text-terra focus:text-terra focus:underline'>Interiores</a>
            <a href='#' className='text-[24px] hover:text-terra text-black hover:underline active:text-terra focus:text-terra focus:underline'>Jardins</a>
        </div>
      </div>
        <div className='flex items'>
          <img src="/projeto2.png" alt='mini1' className='size-1/4'></img>
          <img src="/projeto3.png" alt='mini2' className='size-1/4'></img>
          <img src="/projeto1.png" alt='destaque' className='w-full h-fill'></img>
        </div>
        <div className=' w-[700px] mt-[-250px] ml-40 object-scale-down mb-64'>
            <h1 className="text-lg font-bold mb-2 text-terra" >Último projeto</h1> {/* mb-2 para espaço abaixo do título */}
            <p className="text-6xl font-bold text-cinza mb-2">Apartamento </p>
            <p><a href="#projetos" className="hover:text-cinza hover:underline text-black-300 focus:underline">Ver todos os projetos</a></p>
        </div>
        <div className="flex place-content-evenly "> {/* Flex container para alinhar imagem e texto */}
          <img src="/casa1.jpg" alt="casa1" className="size-[464px]" />
          <div className='w-[464px]'>
            <h1 className="text-6xl font-medium text-terra mb-40 p-14" >Casa de campo</h1>
            <p><a href="#projetos" className="hover:underline font-medium text-4xl text-cinza focus:underline ml-[10rem]">Saiba mais</a></p>
          </div>
          <img src="/casa2.jpg" alt="casa2" className="size-[464px] " />
          <div className=' w-[464px]'>
            <h1 className="text-6xl font-medium mb-40 p-14 text-terra object-scale-down" >Casa Japonesa</h1>
            <p><a href="#projetos" className="hover:underline font-medium text-4xl text-cinza ml-[10rem] focus:underline">Saiba mais</a></p>
          </div>
        </div>
        <div className='flex place-content-evenly'>
          <div className=' w-[464px]'>
            <h1 className="text-6xl font-medium mb-40 p-14 text-terra object-scale-down" >Casa Moderna</h1>
            <p><a href="#projetos" className="hover:underline font-medium text-4xl text-cinza ml-[10rem] focus:underline">Saiba mais</a></p>
          </div>
          <img src="/casa3.jpg" alt="casa3" className="size-[464px]" />
          <div className=' w-[464px]'>
            <h1 className="text-6xl font-medium mb-40 p-14 text-terra object-scale-down" >Jardim</h1>
            <p><a href="#projetos" className="hover:underline font-medium text-4xl text-cinza ml-[10rem] focus:underline">Saiba mais</a></p>
          </div>
          <img src="/casa1.jpg" alt="casa1" className="size-[464px]" />
        </div>
        <div className="flex place-content-evenly "> {/* Flex container para alinhar imagem e texto */}
          <img src="/casa1.jpg" alt="casa1" className="size-[464px]" />
          <div className='w-[464px]'>
            <h1 className="text-6xl font-medium text-terra p-14 mb-40" >Casa de campo</h1>
            <p><a href="#projetos" className="hover:underline font-medium text-4xl text-cinza ml-[10rem] focus:underline">Saiba mais</a></p>
          </div>
          <img src="/casa2.jpg" alt="casa2" className="size-[464px] " />
          <div className=' w-[464px]'>
            <h1 className="text-6xl font-medium mb-40 p-14 text-terra object-scale-down">Interior mobiliado</h1>
            <p><a href="#projetos" className="hover:underline font-medium text-4xl text-cinza ml-[10rem] focus:underline">Saiba mais</a></p>
          </div>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
  );
};

export default Projetos;
