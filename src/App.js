import './App.css';
import HomePage from './HomePage';
import BookingPage from './Booking/BookingPage';
import ConfirmedBooking from './Booking/ConfirmedBooking';
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* App component serves as the main entry point for the application,
setting up routing and rendering the appropriate components based on the URL path. */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/booking" element={<BookingPage />}/>
          <Route path="/booking-confirmation" element={<ConfirmedBooking />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
