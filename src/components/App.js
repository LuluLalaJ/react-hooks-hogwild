import React from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from './HogContainer'

function App() {
	return (
		<div className="App">
			<Nav />
			<HogContainer hogsData={hogs}/>
		</div>
	);
}

export default App;
