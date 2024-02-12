import logo from '../../assets/logo.svg';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={ styles.container }>
            <img src={ logo } alt="Logo smartFit" />
            <p>Todos os direitos reservados - <br /> 2020</p>
        </footer>
    )
}

export default Footer