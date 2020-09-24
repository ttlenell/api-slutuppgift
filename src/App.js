import React from 'react';
import ResultsAdd from './components/ResultsAdd';
import ResultFetch from './components/ResultFetch';
import instance from './apis/instance';

class App extends React.Component {

    state = {
        results: []
    };

    componentDidMount() {
        instance.get('/results.json')
        .then(response => {
            console.log(response.data)
    
            const fetchedResults = [];
    
            for(let key in response.data) {
                fetchedResults.unshift(
                    {
                        ...response.data[key],
                        id:key
                })
            }
            this.setState({results:fetchedResults})
        }) 
    
    }

    addResultToState = (result) => {
        const currentResults = this.state.results
        this.setState({results: [result, ...currentResults]}) 
    }

    render() {
        console.log(this.state.results)
    return (
        <div>
            <ResultsAdd  addResultToState={this.addResultToState}/>
            <ResultFetch results={this.state.results} />
        </div>
    );
    }
}


export default App;