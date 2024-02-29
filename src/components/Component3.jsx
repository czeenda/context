import {useContext} from 'react';
import {MyContext} from './../MyContext'

const Component3 = () => {

	const {count, setCount} = useContext(MyContext)

	return (
		<div style={{border: '5px solid orange', margin: '1em', padding: '1em'}}>
			<p>Component 3</p>
			<h2>{count}</h2>
			<button onClick={() => { setCount(prev => prev * 2) }}>Button</button>
		</div>
	);
}

export default Component3;