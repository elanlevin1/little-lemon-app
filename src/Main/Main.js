import './Main.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

/* Main component serves as the main content area of the home page, displaying the hero section,
weekly specials, customer testimonials, and an about section with information about the restaurant. */
const Main = () =>  {
    const navigate = useNavigate();

    return  (
        <main className="main">
            <section className="hero-section">
                <div className="text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <h3>We are a family owned Mediterranean restaurant,
                        focused on traditional recipes served with a modern twist.
                    </h3>
                    <button className="button-green-background" onClick={() => navigate('/booking')}>Reserve a table</button>
                </div>
                <div className="welcome-food">
                    <img className="image" src="./assets/restaurant-food.jpg" alt="Restaurant hors d'oeuvre"/>
                </div>
            </section>

            <section className="highlights">
                    <h1>This week's specials!</h1>
                    <button className="button-white-background">Online Menu</button>
                    {food.map(item => (
                        <Specials
                            key={item.id}
                            {...item}
                        />
                    ))}
            </section>

            <section className="testimonials">
                <h1>Testimonials</h1>
                {reviews.map(item => (
                        <CustomersSay
                            key={item.id}
                            {...item}
                        />
                    ))}
            </section>

            <section className="about" id="about">
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <h3>Little Lemon is a warm, modern Mediterranean restaurant in Chicago where family recipes meet fresh local ingredients.
                        We serve bright, flavorful dishes inspired by traditional recipes, crafted with care by owners Mario and Adrian.
                        Every meal is designed to feel welcoming, vibrant, and unforgettable.</h3>
                </div>
                <div className="about-images">
                    <img className="about-image-1" src="./assets/Mario-and-Adrian-B.jpg" alt="Restaurant owners Mario and Adrian"/>
                    <img className="about-image-2" src="./assets/Mario-and-Adrian-A.jpg" alt="Restaurant owners Mario and Adrian"/>
                </div>
            </section>
        </main>
    )
}

/* Specials component renders a card for each weekly special,
displaying the food image, name, price, description, and order delivery option. */
const Specials = ({imgSrc, food, price, description}) => {
    return (
        <div className='menu-card'>
            <img className="image" src={imgSrc} alt={food}/>
            <div className='menu-card-text'>
                <h4>{food}</h4>
                <h4>{price}</h4>
                <h5>{description}</h5>
                <div className='delivery'>
                    <h5>Order a delivery</h5>
                    <img className='delivery-image' src="./assets/delivery.png" alt="Delivery icon"/>
                </div>
            </div>
        </div>
    )
}

/* The food array contains objects representing the weekly specials,
each with an id, image source, food name, price, and description. */
const food = [
    {id: 1, imgSrc: "./assets/greek-salad.jpg", food: "Greek salad", price: "$12.99",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."},
    {id: 2, imgSrc: "./assets/bruschetta.jpg", food: "Bruschetta", price: "$12.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."},
    {id: 3, imgSrc: "./assets/lemon-dessert.jpg", food: "Lemon dessert", price: "$12.99",
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."}
]

/* CustomersSay component renders a testimonial card for each customer review,
displaying the customer's name, review text, and a 5-star rating. */
const CustomersSay = ({imgSrc, name, reviewText}) => {
    return (
        <div className='testimonial'>
            <div className='rating'>
                <h4>Rating</h4>
                {/* Adds stars to the testimonial card, styled in Main.css */}
                {Array(5).fill().map((_, i) => (
                    <div className='star' key={i}></div>
                ))}
            </div>
            <div className='person'>
                <img className="image" src={imgSrc} alt={`Review by ${name}`}/>
                <h4>{name}</h4>
            </div>
            <h5>{reviewText}</h5>
        </div>
    )
}

/* The reviews array contains objects representing customer testimonials,
each with an id, image source, customer name, and review text. */
const reviews = [
    {id: 1, imgSrc: './assets/testimonial-img.png', name: 'Phineas', reviewText: 'Delicious food, a calm atmosphere, and genuinely friendly staff served up one of the best meals I’ve had in a while.'},
    {id: 2, imgSrc: './assets/testimonial-img.png', name: 'Stacy', reviewText: 'This place knows how to serve authentic flavor. Every bite had depth, and the spices were just right, nothing too heavy, just enough to make it memorable.'},
    {id: 3, imgSrc: './assets/testimonial-img.png', name: 'Candace', reviewText: 'The menu offers comfort food with a modern twist. Each dish was balanced and felt good.'},
    {id: 4, imgSrc: './assets/testimonial-img.png', name: 'Jeremy', reviewText: 'The food and service are consistently excellent. It’s a dependable establishment with delectable flavors that I always enjoy.'}
]

export default Main;