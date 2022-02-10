import './style.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function PontoTuristico(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const invert = `
  pontoturistico ${props.invert}`

  return (
    <div>
      <h1 className='pontoturistico_title'>{props.title}</h1>
      <div className={invert} >

        <div className="pontoturistico_content_img">
          <img data-aos={props.aosIMG} src={props.image} alt="PontoTuristico_IMG" className='pontoturistico_img' />
        </div>

        <div data-aos={props.aosDESC} className="pontoturistico_content">
          {props.desc}
        </div>

      </div>
    </div>

  )
}