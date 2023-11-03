import React from "react";
import Navbar from './Navbar/Navbar';
import Jumbotron from './Jumbotron/Jumbotron';
import Card from './Card/Card';

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="cards-container">
				<Card title="Card Title 1" text="Some quick example text to build on the card title." />
        		<Card title="Card Title 2" text="Some more example text to build on the card title." />
        		<Card title="Card Title 3" text="Further example text to build on the card title." />
				<Card title="Card Title 4" text="Further example text to build on the card title." />
			</div>
		</div>
	);
};

export default Home;