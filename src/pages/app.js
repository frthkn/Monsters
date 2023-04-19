import { Component } from "react";



class App extends Component {
    constructor() {
        super();
        this.state = {
            name: {firstName:'Hakan', lastName: 'Firat'}
        }

    }
    render() {
        return(
            <div>
                <p>
                    Hi {this.state.name.firstName} {this.state.name.lastName}
                </p>
                <button onClick={()=> {
                    this.setState(()=> {
                        return {
                            
                                name:{firstName:'Hatice', lastName:'Firat2'}
                            
                        }
                    }, ()=>{console.log(this.state)});
                    
                }}>
                    
                    
                    Change Name</button>
            </div>
        )
    }
}

export default App;