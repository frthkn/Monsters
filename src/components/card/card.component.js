
import styles from './card.module.css'

const Card = ({ monster :{name, email, id }}) => {

    return (

        <div className={styles.cardContainer} key={id}>
            <img alt={`monster ${name}`}

                src={`https://robohash.org/${id}?set=set2&size=180x180`}
            />
            <h2>{name}</h2>
            <p>{email}</p>

        </div>
    )
};

export default Card;
