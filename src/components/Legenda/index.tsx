import styles from './Legenda.module.css';
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
import requiredLockerroom from '../../assets/required-lockerroom.png';
import forbiddenLockerroom from '../../assets/forbidden-lockerroom.png';

const Legenda = () => {
    return (
        <section className={ styles.container }>
            {/* Máscara */}
            <div className={ styles.containers }>
                <h1>Máscara</h1>
                <div className={ styles.containerImg }>
                    <div className={ styles.containerRecommendedRequired }>
                        <img src={ requiredMask } alt="Obrigatorio" />
                        <h2>Parcial</h2>
                    </div>
                    <div className={ styles.containerRecommendedRequired }>
                        <img src={ recommendedMask } alt="Recomendamos" />
                        <h2>Recomendado</h2>
                    </div>
                </div>
            </div>

            {/* Toalha */}
            <div className={ styles.containers }>
                <h1>Toalha</h1>
                <div className={ styles.containerImg }>
                    <div className={ styles.containerRecommendedRequired }>
                        <img src={ requiredTowel } alt="Obrigatorio" />
                        <h2>Obrigatório</h2>
                    </div>
                    <div className={ styles.containerRecommendedRequired }>
                        <img src={ recommendedTowel } alt="Recomendamos" />
                        <h2>Recomendado</h2>
                    </div>
                </div>
            </div>

            {/* Bebedouro */}
            <div className={ styles.containers }>
                <h1>Bebedouro</h1>
                <div className={ styles.containerImg }>
                    <div className={ styles.containerRecommendedRequired }>
                        <img src={ partialFountain } alt="Parcial" />
                        <h2>Parcial</h2>
                    </div>
                    <div className={ styles.containerRecommendedRequired }>
                        <img src={ forbiddenFountain } alt="Proibido" />
                        <h2>Proibido</h2>
                    </div>
                </div>
            </div>

            {/* Vestiário */}
            <div className={ styles.containers }>
                <h1>Vestiário</h1>
                <div className={ styles.containerImg }>
                    <div className={ styles.containerRecommendedRequired }>
                        <img src={ requiredLockerroom } alt="Parcial" />
                        <h2>Liberado</h2>
                    </div>
                    <div className={ styles.containerRecommendedRequired }>
                        <img src={ partialLockerroom } alt="Parcial" />
                        <h2>Parcial</h2>
                    </div>
                    <div className={ styles.containerRecommendedRequired }>
                        <img src={ forbiddenLockerroom } alt="Proibido" />
                        <h2>Fechado</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Legenda