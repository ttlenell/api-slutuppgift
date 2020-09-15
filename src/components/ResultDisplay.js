import React from 'react';

const ResultDisplay = (props) => (
    <div>
        Namn:{props.name}<br/>
        Klass:{props.unit}<br/>
        Betyg:{props.grade}<br/><hr/>
    </div>
)

export default ResultDisplay;