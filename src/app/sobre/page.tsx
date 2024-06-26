import Header from "../components/header";
import Footer from "../components/footer";
import React from "react";

const Sobre: React.FC = () => {
    return (
        <div>
                <Header/>
            <div>
                <img src='grupo.jpg'  alt='grupo'className='mb-16 w-full h-full'></img>
                <h1 className="absolute w-full py-2.5 bottom-64 text-white text-[150px] text-left ml-40">Nossa</h1>
                <h1 className="absolute w-full py-2.5 bottom-24 text-terra text-[180px] text-left ml-40">Equipe</h1>
            </div>
            <div className="flex items-center mb-16 "> {/* Flex container para alinhar imagem e texto */}
                <img src="/Bruna.png" alt="Bruna" className=" mr-44 ml-[70px] size-2/5 " /> {/* mr-4 para espaço à direita da imagem */}
                <div className=' w-[700px] flex justify-object'>
                    <p className="text-lg"><a className='text-terra font-bold'>Lorem Ipsum </a>dolor sit amet, consectetur adipiscing elit. Mauris quis turpis sapien. Nullam augue mi, 
                    elementum eget arcu ac, pulvinar pretium libero. Praesent ac suscipit enim. Aliquam nec malesuada neque. Nullam mattis quam 
                    sit amet mauris porta hendrerit. Vestibulum consectetur aliquet tellus. Aliquam ac urna est. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Praesent at nunc vel ex euismod porttitor eu vel ante. Sed sit amet risus vitae est vehicula bibendum sed nec quam..</p>
                </div>
            </div>
            <div className="flex items-center mb-16 "> {/* Flex container para alinhar imagem e texto */}
            <div className=' mr-44 ml-[70px] w-[700px]'>
                <h1 className="text-5xl font-bold mb-2 text-terra object-scale-down" >Nergal</h1> {/* mb-2 para espaço abaixo do título */}
                <p className="text-lg">Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis turpis sapien. Nullam augue mi, 
                elementum eget arcu ac, pulvinar pretium libero. Praesent ac suscipit enim. Aliquam nec malesuada neque. Nullam mattis quam 
                sit amet mauris porta hendrerit. Vestibulum consectetur aliquet tellus. Aliquam ac urna est. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Praesent at nunc vel ex euismod porttitor eu vel ante. Sed sit amet risus vitae est vehicula bibendum sed nec quam..</p>
            </div>
                <img src="nergal.jpg" alt="negal" className="  size-2/3 " /> {/* mr-4 para espaço à direita da imagem */}
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};
export default Sobre;

