import React,{Component} from 'react';

class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state={term: ''};
    }

    render(){
        return (
            
            <div>

                <input onChange={(event)=> 
                    this.setState({term: event.target.value})}/>

                <label> value of state {this.state.term}</label>
            </div>
        
        );
    }    
    
    onInputChange(event){
        console.log(event.target.value);
    }
}

export default SearchBar;