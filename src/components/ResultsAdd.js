import React from 'react';
import results from "../apis/instance";
import './ResultsAdd.css';
import ResultFetch from './ResultFetch';

class ResultsAdd extends React.Component {

    state = {
        name: "",
        age: "",
        profession: ""
    }

    postDataHandler = (event) => {
        event.preventDefault();
        const Data = {
            name: this.state.name,
            age: this.state.age,
            profession: this.state.profession
        }
        results.post('/results.json', Data).then(response => {
            console.log(response)
        })
        
    } 



    render() {
        return ( 
            
            <div className="ui placeholder segment" id="uiPlaceholder">
                <h1>Skriv in namn och personlig data</h1>
                <div className="ui one column very relaxed stackable grid">
                   
                    <form className="ui form" onSubmit={this.postDataHandler}>
                        <div className="field">
                            <label>Namn: </label>
                            <input type="text" placeholder="Namn"
                            value={this.state.name}
                            onChange={(event) => this.setState({name: event.target.value})} />
                        </div>
                        <div className="field">
                            <label>Ålder: </label>
                            <input type="text" placeholder="Ålder" 
                            value={this.state.age}
                            onChange={(event) => this.setState({age: event.target.value})}
                            />
                        </div>
                        <div className="field">
                            <label>Yrke: </label>
                            <input type="text" placeholder="Yrke" 
                            value={this.state.grade}
                            onChange={(event) => this.setState({profession: event.target.value})} 
                            />
                        </div>
                        <button className="ui blue submit button">Submit</button>
                      
                    </form>
                </div>
            </div>
        )
    }
}

export default ResultsAdd;