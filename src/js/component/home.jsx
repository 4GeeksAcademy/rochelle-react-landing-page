import React from "react";
import Navbar from './Navbar/Navbar';
import Jumbotron from './Jumbotron/Jumbotron';
import Card from './Card/Card';
import Footer from './Footer/Footer';

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="cards-container">
				<Card title="Card Title 1" text="Some quick example text to build on the card title." imageUrl="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960"/>
        		<Card title="Card Title 2" text="Some more example text to build on the card title." imageUrl="https://cdn.jdpower.com/Average%20Weight%20Of%20A%20Car.jpg"/>
        		<Card title="Card Title 3" text="Further example text to build on the card title." imageUrl="https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg"/>
				<Card title="Card Title 4" text="Further example text to build on the card title." imageUrl="https://www.usnews.com/object/image/00000187-05a8-d67e-a38f-2ff810a00000/2023-chevrolet-corvette-z06-1.jpg?update-time=1679427112145&size=responsive640"/>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;