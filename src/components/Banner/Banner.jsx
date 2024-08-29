// IMPORTS
import './Slogan.css';

// COMPONENTE
const Banner = ({ slogan }) => {
    return (
        <div>
        <h1 className="prop-slogan">{ slogan }</h1>
        </div>
    )
}

// EXPORTS
export default Banner