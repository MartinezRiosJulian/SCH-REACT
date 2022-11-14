import "./card.css"

const Card = ({obj}) => {
    return (
        <div className="tarjeta">
            <div className="titulo"> {obj} </div>
            <div className="cuerpo">
                <img src="" alt=""/>
            </div>
            <div className="pie">
                <a href="#"> {obj} </a>
            </div>
        </div>

    )
}

export default Card