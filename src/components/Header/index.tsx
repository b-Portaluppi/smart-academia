import logo from '../../assets/logo.svg';
import styles from './Header.module.css'

const Header = () => {
    return (
        <>
            <header className={styles.cabecalho}>
                <img src={logo} alt="Logo smartFit" />
            </header>

            <section className={ styles.secao__texto }>
                <h1>REABERTURA <br /> SMART FIT</h1>
                <div className={ styles.secao__texto__linha }></div>
                <p>O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.</p>
            </section>
        </>
    )
}

export default Header