import './estilo.css'
import logo from '../../imagens/logo.svg'

function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt='logo'></img>
            <p><strong>Arthur Books</strong></p>
        </div>
    )
}

export default Logo