
import './style.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../videos/saopaulo.mp4'
import PontoTuristico from '../../components/PontoTuristico';
import Museu from '../../images/museuArte.jpg';
import Parque from '../../images/ParqueIbirapuera.jpg';
import BairroLiberdade from '../../images/BairroLiberdade.jpeg';
import Dados from '../../components/Dados';
import InicioCidade from '../../images/AveninaPaulista.jpg';
import Arrow from '../../images/arrow.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

function App() {

  const museu = <div>
    O <b>Museu de Arte de São Paulo Assis Chateaubriand</b> ou popularmente conhecido como <b>MASP</b> é uma das instituições culturais mais importantes do Brasil.
    <br />
    Localizado no coração de <b>São Paulo</b>, é símbolo da capital paulista e referência arquitetônica.
    <br />
    Fundado em <b>1947</b>, o museu possui um acervo de <b>10 mil obras</b>, porém nem todas já foram expostas no MASP, como uma armadura de cobre e aço de 1480.
  </div >

  const parque = <div>
    O <b>Parque Ibirapuera</b> é um dos mais famosos da capital paulista. Considerado o quintal dos paulistanos, encanta pela natureza e pela variedade de atrações gratuitas.
    <br />
    O local é perfeito para <b>andar de bicicleta, skate, correr ou fazer um piquenique</b>. O visitante ainda têm opções de passeios, como o <b>Museu de Arte Moderna, Museu Afro Brasil e a Fundação Bienal</b>.
  </div>

  const bairroliberdade = <div>
    O bairro mais japonês da cidade de São Paulo, enlouquece os turistas com o tanto de lojinhas que abriga.

    Lá você encontra o <b>Museu Histórico da Imigração Japonesa no Brasil</b>, o Bunkyo. Além disso, o bairro tem decoração temática com luminárias japonesas por todo lado.
  </div>

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Header />
      <div className='home_banner'>
        <div className='banner' id='top'>

          <video className='banner_video' autoPlay loop muted>
            <source src={Banner} type='video/mp4' />
          </video>
        </div>
        <div className='home_arrow_position'>
          <img src={Arrow} alt="Seta" className='home_arrow' />
        </div>
      </div>

      <div id='pontosturisticos'>
        <h1 className='home_title' >Pontos Turisticos</h1>
        <PontoTuristico
          title="Museu de Arte"
          image={Museu}
          desc={museu}
          aosIMG="fade-right"
          aosDESC="fade" />

        <PontoTuristico
          title="Parque Ibirapuera"
          image={Parque}
          desc={parque}
          invert="invert"
          aosIMG="fade-left"
          aosDESC="fade" />

        <PontoTuristico
          title="Bairro Liberdade"
          image={BairroLiberdade}
          desc={bairroliberdade}
          aosIMG="fade-right"
          aosDESC="fade" />
      </div>


      <Dados id="dados" />

      <div id="historia" className='InicioCidade'>
        <div className='home_inicioCidade'>
          <h1 className="InicioCidade_title">Inicio da Cidade</h1>
          <img data-aos="fade" src={InicioCidade} alt="AvenidaPaulista" className='IncioCidade_img' />
          <p className='home_desc'>No dia <b>22 de janeiro do ano de 1532</b>, teve início a colonização oficial (por Martim Afonso de Souza) da localidade que, hoje, conhecemos como <b>São Paulo</b>, com a fundação da mais antiga vila do Brasil: Vila de São Vicente. Em 1554, os jesuítas depois de subir a serra, decidem construir um colégio onde, além de alfabetizar, também catequizariam índios, no alto de uma colina na região de Piratininga. A cidade de São Paulo cresceu ao redor do colégio.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
