import Header from "../components/header";
import Footer from "../components/footer";
import React from "react";

const Sobre: React.FC = () => {
    return (
        <div>
                <Header/>
                <div>
                <div>
                <img src='desenho2.png'  alt='fundo'className='mb-24 mt-8 w-full h-full'></img>
                </div>
                <div className="">
                <h1 className="absolute w-full py-2.5 bottom-64 text-white text-[150px] text-left ">Como</h1>
                <h1 className="absolute w-full py-2.5 bottom-24 text-terra text-[180px] text-left ">Trabalhamos</h1>
                </div>
            </div>
            <div className="flex items-center mb-16 "> 
                <div className=' w-[700px] mr-44 ml-[100px] flex justify-object'>
                    <p className="text-lg"><a className='text-terra font-bold'>Lorem Ipsum </a>dolor sit amet, consectetur adipiscing elit. Mauris quis turpis sapien. Nullam augue mi, 
                    elementum eget arcu ac, pulvinar pretium libero. Praesent ac suscipit enim. Aliquam nec malesuada neque. Nullam mattis quam 
                    sit amet mauris porta hendrerit. Vestibulum consectetur aliquet tellus. Aliquam ac urna est. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Praesent at nunc vel ex euismod porttitor eu vel ante. Sed sit amet risus vitae est vehicula bibendum sed nec quam..</p>
                </div>
                <img src="/cliente.jpg" alt="Cliente1" className="  size-2/5 " /> 

            </div>
            <div>
                <div className="z-10 absolute left-5 mt-[-220px] text-[300px] font-bold mb-[-230px] ">
                    <p className="text-white">0<a className='text-terra font-bold'>1</a></p>
                </div>
                <div className='z-0 flex items '>
                    <img src="/projeto1.png" alt='destaque' className='w-full h-fill'></img>
                    <img src="/planta.png" alt='mini1' className='w-[464px] h-[464px]'></img>
                    <img src="/projeto3.png" alt='mini2' className='size-1/4'></img>
                </div>
                <div className=' w-[700px] mt-[-340px] absolute right-20 object-scale-down mb-64'>
                    <h1 className="text-9xl font-bold text-terra mb-2">Descobrir</h1>
                    <p className="text-lg"><a className='text-terra font-bold'>Lorem Ipsum </a>dolor sit amet, consectetur adipiscing elit. Mauris quis turpis sapien. Nullam augue mi, 
                        elementum eget arcu ac, pulvinar pretium libero. Praesent ac suscipit enim. Aliquam nec malesuada neque. Nullam mattis quam 
                        sit amet mauris porta hendrerit. Vestibulum consectetur aliquet tellus. Aliquam ac urna est. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Praesent at nunc vel ex euismod porttitor eu vel ante. Sed sit amet risus vitae est vehicula bibendum sed nec quam..</p>
                </div>
            </div>
            <div className="mt-44">
                <div className="z-10 absolute right-44 mt-[-220px] text-[300px] font-bold mb-[-230px] ">
                    <p className="text-white">0<a className='text-terra font-bold'>2</a></p>
                </div>
                <div className='z-0 flex'>
                    <img src="/projeto3.png" alt='mini1' className='size-1/4'></img>
                    <img src="/projeto3.png" alt='mini2' className='size-1/4'></img>
                    <img src="/projeto1.png" alt='destaque' className='w-full h-fill'></img>
                </div>
                <div className=' w-[700px] mt-[-340px] absolute left-20 object-scale-down mb-64'>
                    <h1 className="text-9xl font-bold text-terra mb-2">Imaginar</h1>
                    <p className="text-lg"><a className='text-terra font-bold'>Lorem Ipsum </a>dolor sit amet, consectetur adipiscing elit. Mauris quis turpis sapien. Nullam augue mi, 
                        elementum eget arcu ac, pulvinar pretium libero. Praesent ac suscipit enim. Aliquam nec malesuada neque. Nullam mattis quam 
                        sit amet mauris porta hendrerit. Vestibulum consectetur aliquet tellus. Aliquam ac urna est. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Praesent at nunc vel ex euismod porttitor eu vel ante. Sed sit amet risus vitae est vehicula bibendum sed nec quam..</p>
                </div>
            </div>
            <div className="mt-56 mb-10">
                <div className="z-10 absolute left-5 mt-[-220px] text-[300px] font-bold mb-[-230px] ">
                    <p className="text-white">0<a className='text-terra font-bold'>3</a></p>
                </div>
                <div className='z-0 flex items '>
                    <img src="/projeto1.png" alt='destaque' className='w-full h-fill'></img>
                    <img src="/planta.png" alt='mini1' className='w-[464px] h-[464px]'></img>
                    <img src="/projeto3.png" alt='mini2' className='size-1/4'></img>
                </div>
                <div className=' w-[700px] mt-[-340px] absolute right-20 object-scale-down mb-64'>
                    <h1 className="text-9xl font-bold text-terra mb-2">Desenvolver</h1>
                    <p className="text-lg"><a className='text-terra font-bold'>Lorem Ipsum </a>dolor sit amet, consectetur adipiscing elit. Mauris quis turpis sapien. Nullam augue mi, 
                        elementum eget arcu ac, pulvinar pretium libero. Praesent ac suscipit enim. Aliquam nec malesuada neque. Nullam mattis quam 
                        sit amet mauris porta hendrerit. Vestibulum consectetur aliquet tellus. Aliquam ac urna est. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Praesent at nunc vel ex euismod porttitor eu vel ante. Sed sit amet risus vitae est vehicula bibendum sed nec quam..</p>
                </div>
            </div>
            
            <div>
            <Footer/>
            </div>
        </div>
    );
};
export default Sobre;

