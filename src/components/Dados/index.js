import './style.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function Dados() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <h1 className='dados_title'>Dados da Cidade São Paulo</h1>
      <div className='dados'>
        <div data-aos="fade-down" className="dados_card">
          <h1 className='dados_card_title'>População Estimada</h1>
          <p className='dados_card_desc'>12.396.372 pessoas</p>
        </div>

        <div data-aos="fade-up" className="dados_card">
          <h1 className='dados_card_title'>Densidade demográfica</h1>
          <p className='dados_card_desc'>7.398,26 hab/km²</p>
        </div>

        <div data-aos="fade-down" className="dados_card">
          <h1 className='dados_card_title'>Área da Cidade</h1>
          <p className='dados_card_desc'>1.521,110 km²</p>
        </div>
      </div>
    </div>

  )
}