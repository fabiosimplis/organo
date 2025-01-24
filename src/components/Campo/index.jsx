/* eslint-disable react/prop-types */
import "./style.css";

const Campo = (props) => {
  const placeholderModificada = `${props.placeholder}...`;

  const aoDigitar = (evento) => {
    props.aoAlterar(evento.target.value);
  };
  const type = props.type || "text";
  return (
    <div className={`campo campo-${type}`}>
      <label>{props.label}</label>
      <input
        value={props.valor}
        type={type}
        onChange={aoDigitar}
        placeholder={props.placeholder}
        required={props.obrigatorio}
      />
    </div>
  );
};

export default Campo;
