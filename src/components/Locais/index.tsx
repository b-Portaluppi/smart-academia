import styles from './Locais.module.css';
// máscara
import requiredMask from '../../assets/required-mask.png';
import recommendedMask from '../../assets/recommended-mask.png';
// Toalha
import requiredTowel from '../../assets/required-towel.png';
import recommendedTowel from '../../assets/recommended-towel.png';

// Bebedouro
import partialFountain from '../../assets/partial-fountain.png';
import forbiddenFountain from '../../assets/forbidden-fountain.png';

// Vestiario
import partialLockerroom from '../../assets/partial-lockerroom.png';
import forbiddenLockerroom from '../../assets/forbidden-lockerroom.png';

const Locais = ({ locaisEncontrados }: any) => {
    return (
        <section className={ styles.secao }>
            { locaisEncontrados.map((permissoes: any) => (
                <div key={ permissoes.id } className={ styles.container }>
                    {  permissoes.opened ? <h2 className={ `${styles.opened} ${styles.aberto}` }>Aberto</h2> : <h2 className={ `${styles.opened} ${styles.fechado}` }>Fechado</h2> }
                    <h1 className={ styles.title }>{ permissoes.title }</h1>
                    <p>{ permissoes.content }</p>
                   { permissoes.opened ? <div className={ styles.containerPermissoes }>
                        { permissoes.mask === 'required' ? <img src={ requiredMask } /> : <img src={ recommendedMask } /> }
                        { permissoes.towel === 'required' ? <img src={ requiredTowel } /> : <img src={ recommendedTowel } /> }
                        { permissoes.fountain === 'partial' ? <img src={ partialFountain } /> : <img src={ forbiddenFountain } /> }
                        { permissoes.locker_room === 'partial' ? <img src={ partialLockerroom } /> : <img src={ forbiddenLockerroom } /> }
                    </div>: ''}
                    { permissoes.opened ? <div className={ styles.schedules }>
                      { permissoes.schedules.map((schedule: any) => (
                       <div key={ permissoes.id } className={ styles.schedules__container }>
                            <h1 className={ styles.weekdays }>{ schedule.weekdays }</h1>
                            <h2 className={ styles.hour }>{ schedule.hour }</h2>
                       </div>
                      )) }
                    </div> : '' }
                </div>
            )) }
        </section>
    )
}

export default Locais