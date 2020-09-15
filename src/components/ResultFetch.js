import React from 'react';
import instance from '../apis/instance';
import ResultDisplay from './ResultDisplay';

class ResultFetch extends React.Component {

state = {
    results: []
}

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

    render() {
        return (
            <div>
                {this.state.results.map(result => (
                    <ResultDisplay
                     key={result.id}
                     name={result.name}
                     unit={result.grade}
                     grade={result.grade}
                     
                     />
                ))}
            </div>
        )
    }
}

export default ResultFetch;