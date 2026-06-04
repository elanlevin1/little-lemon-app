import { useLocation, useNavigate } from 'react-router-dom';
import Nav from '../Nav/Nav';

/* ConfirmedBooking component displays a confirmation message after a successful reservation,
showing the reservation details, if available, and providing a button to return to the home page. */
const ConfirmedBooking = () => {
    const location = useLocation();
    const formData = location.state || {};
    const navigate = useNavigate();

    return (
        <>
            <section className='flex-grid'>
                <Nav />
            </section>
            {/* CSS styling found in Main.css */}
            <main className='main' style={{minHeight: '100vh'}}>
                <section className="hero-section" style={{flexGrow: 1}}>
                    <div>
                        <h1 style={{marginBottom: '0.1rem'}}>Booking Confirmed!</h1>
                        <h3 style={{marginBottom: '1rem'}}>
                            {formData.date ? (
                                <>Thank you for your reservation on {formData.date} at {formData.time} for {formData.guests} guests. We look forward to serving you at Little Lemon!</>
                            ) : (
                                <>Thank you for your reservation. We look forward to serving you at Little Lemon!</>
                            )}
                        </h3>
                        <button className="button-green-background" onClick={() => navigate('/')}>Return Home</button>
                    </div>
                    <div className="welcome-food">
                        <img className="image" src="./assets/restaurant-food.jpg" alt="Restaurant hors d'oeuvre"/>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ConfirmedBooking;