
import styles from './search-box.module.css';

const SearchBox = ({className, placeholder, onChangeHandler})=> (
    <input 
    className={`${styles.searchBox}` }
    type='search' 
    placeholder={placeholder} 
    onChange={onChangeHandler}/>
)

  

export default SearchBox;