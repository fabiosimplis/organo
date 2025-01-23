import Colaborador from '../Colaborador';
import './style.css'

const Time = (props) => {
  const css = { backgroundColor: props.corSecundaria  }
  
  return (
    // Podemos usar ternario também.
    (props.colaboradores.length > 0) && <section className='time' style={css}>
      <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
      <div className='colaboradores'>
        {props.colaboradores.map( colaborador => {
          return <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corDeFundo={props.corPrimaria} aoDeletar={props.aoDeletar} />})}
        </div>
    </section>
  )
}

export default Time;