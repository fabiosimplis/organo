/* eslint-disable react/prop-types */
import "./style.css";

const CampoTexto = (props) => {
  const placeholderModificada = `${props.placeholder}...`;

  const aoDigitar = (evento) => {
    props.aoAlterar(evento.target.value)
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
      value={props.valor}
        type="text"
        onChange={aoDigitar}
        placeholder={props.placeholder}
        required={props.obrigatorio}
      />
    </div>
  );
};

export default CampoTexto;
