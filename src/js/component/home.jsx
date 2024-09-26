import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
	const [count, setCount] = useState(0)
	
	useEffect(() => {
		
		let intervalid = setInterval(() => {
			setCount(count + 1)
		}, 1000)
		return () => {
			clearInterval(intervalid)
		}
	}, [count])

console.log({count})

	return (
		<div>
			<div className="Counter">
				<div className="reloj"><i class="fa-regular fa-clock"></i></div>
				<div className="d6">0</div>
				<div className="d5">0</div>
				<div className="d4">0</div>
				<div className="d3">0</div>
				<div className="d2">0</div>
				<div className="d1">{count}</div>
			</div>
		</div>
	);
};

export default Home;



