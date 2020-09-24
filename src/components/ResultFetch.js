import React from 'react';

import ResultDisplay from './ResultDisplay';

class ResultFetch extends React.Component {

    render() {
        console.log(this.props.results)
        return (
            
            <div>
                {this.props.results.map(result => (
                    <ResultDisplay
                     key={result.id}
                     name={result.name}
                     age={result.age}
                     profession={result.profession}
                     
                     />
                ))}
            </div>
        )
    }
}

export default ResultFetch;