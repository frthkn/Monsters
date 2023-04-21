import { Component } from "react";
import styles from'./card.module.css'

class Card extends Component {
    render(){
        const {name, email, id} = this.props.monster;
        return (
       
                <div className={styles.cardContainer} key={id}>
                    <img alt={`monster ${name}`} 
                    
                    src={`https://robohash.org/${id}?set=set2&size=180x180`}
                    />
                    <h2>{name}</h2>
                    <p>{email}</p>

                </div>
               )
            } };

export default Card;