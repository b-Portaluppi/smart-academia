import { useState } from 'react';
import iconHora from '../../assets/icon-hour.png';
import styles from './Fomulario.module.css';
import Locais from '../Locais';
import Legenda from '../Legenda';
import data from '../../locais.json';

const Formulario = () => {
    const [ horario, setHorario ] = useState('');
    const [locaisEncontrados, setLocaisEncontrados] = useState<any[] | undefined>([]);
    const [ mostraComponente, setMostraComponente ] = useState(false)
    
    const apiConsumida =(horario: string) => {
        let horarioFiltrados;

        if(horario === 'manha') {
            horarioFiltrados = data.locations.filter( (locais: any) => {
                return (
                    locais.schedules && locais.schedules.some( (schedule: any) => schedule.hour >= '06:00' && schedule.hour <= '12:00' )
                )
            } )
        } else if (horario === 'tarde') {
            horarioFiltrados = data.locations.filter( (locais: any) => {
                return (
                    locais.schedules && locais.schedules.some( (schedule: any) => schedule.hour >= '12:01' && schedule.hour <= '18:00' )
                )
            } )
        }else if (horario === 'noite') {
            horarioFiltrados = data.locations.filter( (locais: any) => {
                return (
                    locais.schedules && locais.schedules.some( (schedule: any) => schedule.hour >= '18:01' && schedule.hour <= '22:00' )
                )
            } )
        }

        setLocaisEncontrados(horarioFiltrados)
    }

    function clicado(id: string) {
        const inputSelecionado = id
        setHorario(inputSelecionado)
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        apiConsumida(horario)
        setMostraComponente(true)
    }

    return (
        <>
            <form className={ styles.containerForm } onSubmit={ handleSubmit } >
                <div className={ styles.img }>
                    <img src={ iconHora } alt="Icone da Hora" />
                    Horário
                </div>
                <h1>Qual período quer treinar?</h1>
                <div className={ styles.inputs }>
                    <div>
                    <input type="radio" className={ styles.input } name="manha" id="manha" onClick={ () => clicado('manha') } />
                        <label htmlFor="manha">Manhã</label>
                    </div>
                    <span>06:00 ás 12:00</span>
                </div>
                <div className={ styles.inputs }>
                    <div>
                        <input type="radio" className={ styles.input } name="tarde" id="tarde" onClick={ () =>  clicado('tarde') } />
                        <label htmlFor="tarde">tarde</label>
                    </div>
                    <span>12:01 ás 18:00</span>
                </div>
                <div className={ styles.inputs }>
                    <div>
                        <input type="radio" className={ styles.input } name="noite" id="noite" onClick={ () =>  clicado('noite') } />
                        <label htmlFor="noite">Noite</label>
                    </div>
                    <span>18:01 ás 23:00</span>
                </div>
                <div className={ styles.containerResults}>
                    <div className={ styles.inputcheck }>
                        <input type="checkbox" name="unidades" id="unidades" />
                        <label htmlFor="unidades">Exibir unidades fechadas</label>
                    </div>
                    <span className={ styles.results }>Resultados encontrados: 0</span> 
                </div>
                <div className={ styles.buttom }>
                    <button type='submit' className={ styles.btn_submit }>Encontrar Unidade</button>
                    <input type="reset" value="Limpar" className={ styles.btn_reset } />
                </div>
            </form>

            { <Legenda /> }

            { mostraComponente && <Locais locaisEncontrados={ locaisEncontrados } /> }
        </>
    )
}

export default Formulario