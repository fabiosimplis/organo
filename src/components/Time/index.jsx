import Colaborador from '../Colaborador';
import './style.css'

const Time = ({time, colaboradores, aoDeletar}) => {
  const css = { backgroundColor: time.corPrimaria }
  
  return (
    // Podemos usar ternario também.
    (colaboradores.length > 0) && <section className='time' style={css}>
      <input value={ time.corSecundaria }type='color' className='input-cor' />
      <h3 style={{borderColor: time.corSecundaria}}>{time.nome}</h3>
      <div className='colaboradores'>
        {colaboradores.map( (colaborador, indice) => {
          return <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.corSecundaria} aoDeletar={aoDeletar} />})}
        </div>
    </section>
  )
}

export default Time;