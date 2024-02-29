import {useContext} from 'react';
import {MyContext} from './../MyContext'


const Component1 = () => {

	const {count, setCount} = useContext(MyContext)

	return (
		<div style={{border: '5px solid blue', margin: '1em', padding: '1em'}}>
			<p>Component 1</p>
			<h2>{count}</h2>
			<button onClick={() => { setCount(prev => prev + 1) }}>Button</button>
		</div>
	);
}

export default Component1;