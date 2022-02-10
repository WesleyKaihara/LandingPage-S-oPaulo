import './style.css';

export default function Dados() {
  return (
    <div>
      <h1 className='dados_title'>Dados da Cidade São Paulo</h1>
      <div className='dados'>
        <div className="dados_card">
          <h1 className='dados_card_title'>População Estimada</h1>
          <p className='dados_card_desc'>12.396.372 pessoas</p>
        </div>

        <div className="dados_card">
          <h1 className='dados_card_title'>Densidade demográfica</h1>
          <p className='dados_card_desc'>7.398,26 hab/km²</p>
        </div>

        <div className="dados_card">
          <h1 className='dados_card_title'>Área da Cidade</h1>
          <p className='dados_card_desc'>1.521,110 km²</p>
        </div>
      </div>
    </div>

  )
}