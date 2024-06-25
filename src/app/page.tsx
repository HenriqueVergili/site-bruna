// pages/index.tsx
import React from 'react';
import Header from '../app/components/header';
import Footer from './components/footer';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <div>
        <img src='peakpx.jpg'  alt='Imagem 1'className='mb-16 w-full h-full'></img>
      </div>
      <div className="flex items-center mb-16 "> {/* Flex container para alinhar imagem e texto */}
          <img src="/Bruna.png" alt="bruna" className=" mr-44 ml-[70px] size-2/5 " /> {/* mr-4 para espaço à direita da imagem */}
          <div className=' w-[700px]'>
            <h1 className="text-5xl font-bold mb-2 text-terra object-scale-down" >Seja bem-vindo!</h1> {/* mb-2 para espaço abaixo do título */}
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis turpis sapien. Nullam augue mi, 
              elementum eget arcu ac, pulvinar pretium libero. Praesent ac suscipit enim. Aliquam nec malesuada neque. Nullam mattis quam 
              sit amet mauris porta hendrerit. Vestibulum consectetur aliquet tellus. Aliquam ac urna est. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Praesent at nunc vel ex euismod porttitor eu vel ante. Sed sit amet risus vitae est vehicula bibendum sed nec quam..</p>
          </div>
        </div>
        <div className='flex items'>
          <img src="/projeto2.png" alt='mini1' className='size-1/4'></img>
          <img src="/projeto3.png" alt='mini2' className='size-1/4'></img>
          <img src="/projeto1.png" alt='destaque' className='w-full h-fill'></img>
        </div>
        <div className=' w-[700px] mt-[-250px] ml-40 object-scale-down mb-64'>
            <h1 className="text-lg font-bold mb-2 text-terra" >Projeto em destaque</h1> {/* mb-2 para espaço abaixo do título */}
            <p className="text-6xl font-bold text-cinza mb-2">Apartamento </p>
            <p><a href="#projetos" className="hover:text-cinza hover:underline text-black-300 focus:underline">Ver todos os projetos</a></p>
        </div>
        <div className="flex items-center mb-16 "> {/* Flex container para alinhar imagem e texto */}
          <img src="/processo.jpg" alt="Imagem 2" className="size-1/2 mr-44 " /> {/* mr-4 para espaço à direita da imagem */}
          <div className=' w-[700px]'>
            <h1 className="text-5xl font-bold mb-2 text-terra object-scale-down" >Como trabalhamos</h1> {/* mb-2 para espaço abaixo do título */}
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis turpis sapien. Nullam augue mi, 
              elementum eget arcu ac, pulvinar pretium libero. Praesent ac suscipit enim. Aliquam nec malesuada neque. Nullam mattis quam 
              sit amet mauris porta hendrerit. Vestibulum consectetur aliquet tellus. Aliquam ac urna est. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Praesent at nunc vel ex euismod porttitor eu vel ante. Sed sit amet risus vitae est vehicula bibendum sed nec quam..</p>
              <p><a href="#projetos" className="hover:underline font-bold text-1xl text-terra focus:underline">Saiba mais</a></p>
          </div>
        </div>
        <div className='bg-terra flex  justify-between items-center p-40'>
          <div>
            <p className='text-black text-2xl font-medium'>não fique de fora</p>
            <p className='text-white text-6xl font-bold'>Envie uma mensagem</p>
          </div>
          <div className='w-[400px]'>
              <label className='block text-sm font-medium leading-6 text-white'>Seu Nome</label>
              <input type="text"
                     className="bg-transparent border-b-2 border-white text-white w-full focus:outline-none"></input>
              <label className='block text-sm font-medium leading-6 text-white mt-16'>Seu email</label>
              <input type="text"
                     className="bg-transparent border-b-2 border-white w-full text-white focus:outline-none"></input>
          </div>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
  );
};

export default HomePage;
