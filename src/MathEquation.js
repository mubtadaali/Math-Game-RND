import React from 'react';


const MathEquation = props => (
  <div>
    <h2>Mental Math</h2>
    <div className="equation">
  		<p className="text">{`${props.value1} + ${props.value2} + ${props.value3} = ${props.proposedAnswer}`}</p>
	</div>
	<button onClick={() => props.handleAnswer("true")}>True</button>
	<button onClick={() => props.handleAnswer("false")}>False</button>
  </div>
  );

export default MathEquation;