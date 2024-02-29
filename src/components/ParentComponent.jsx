const ParentComponent = ({children}) => {
	return (
		<div style={{border: '5px solid green', margin: '1em', padding: '1em'}}>
			{children}
		</div>
	);
}

export default ParentComponent;