import { Component } from "react";
import styles from './search-box.module.css';

class SearchBox extends Component {
    render(){
        return(
            <input 
            className={`${styles.searchBox}` }
            type='search' 
            placeholder={this.props.placeholder} 
            onChange={this.props.onChangeHandler}/>
        )
    }
}

export default SearchBox;