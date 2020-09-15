import React from 'react';
import results from "../apis/instance";

class ResultsAdd extends React.Component {

    state = {
        name: "",
        unit: "",
        grade: ""
    }

    postDataHandler = (event) => {
        event.preventDefault();
        const Data = {
            name: this.state.name,
            unit: this.state.unit,
            grade: this.state.grade
        }
        results.post('/results.json', Data).then(response => {
            console.log(response)
        })
    } 



    render() {
        return ( 
            <div className="ui placeholder segment">
                <div className="ui one column very relaxed stackable grid">
                    <h3>Blablabla</h3>
                    <form className="ui form" onSubmit={this.postDataHandler}>
                        <div className="field">
                            <label>Namn:</label>
                            <input type="text" placeholder="Name"
                            value={this.state.name}
                            onChange={(event) => this.setState({name: event.target.value})} />
                        </div>
                        <div className="field">
                            <label>Klass:</label>
                            <input type="text" placeholder="Unit" 
                            value={this.state.unit}
                            onChange={(event) => this.setState({unit: event.target.value})}
                            />
                        </div>
                        <div className="field">
                            <label>Betyg:</label>
                            <input type="text" placeholder="Grade" 
                            value={this.state.grade}
                            onChange={(event) => this.setState({grade: event.target.value})} 
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