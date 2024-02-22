
import LinkButton from "../components/LinkButton"
import "./Formulario.css"

function Formulario(){

    

    return(
        <div className="formulario">
            <form>
                <label htmlFor="title">Título: </label>
                <input type="text" htmlFor="title" placeholder="Digite o título da contagem regressiva" />
                <LinkButton to="/counter" text="Enviar" />
            </form>
        </div>
    )
}

export default Formulario