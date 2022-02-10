import './style.css';

export default function PontoTuristico(props) {

  const invert = `
  pontoturistico ${props.invert}`

  return (
    <div>
      <h1 className='pontoturistico_title'>{props.title}</h1>
      <div className={invert} >

        <div className="pontoturistico_content_img">
          <img src={props.image} alt="PontoTuristico_IMG" className='pontoturistico_img' />
        </div>

        <div className="pontoturistico_content">
          {props.desc}
        </div>

      </div>
    </div>

  )
}