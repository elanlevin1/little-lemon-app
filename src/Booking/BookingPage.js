import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from './api';
import Nav from '../Nav/Nav';

/* updateTimes function serves as a reducer to manage the state of available booking times based on the selected date. */
export const updateTimes = (state, action) => {
    switch (action.type) {
        case "update":
            return fetchAPI(action.date);
        default:
            return state;
    }
}

/* initializeTimes function initializes the state of available booking times when the BookingPage component is first rendered. */
export const initializeTimes = (date) => {
    return fetchAPI(date);
}

/* BookingPage component manages the state of available booking times and handles form submission for reservations. */
const BookingPage = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, new Date(), initializeTimes);

    const navigate = useNavigate();

    /* submitForm function handles the submission of the booking form,
    sending the form data to the API and navigating to the confirmation page upon successful submission. */
    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            navigate('/booking-confirmation', { state: formData });
        }
    }

    /* The component renders a navigation bar and the booking form,
    passing down the necessary props for managing available times and form submission. */
    return (
        <div className='booking-page' style={{backgroundColor: '#495E57'}}>
            <section className='flex-grid' style={{backgroundColor: 'white'}}>
                <Nav />
            </section>
            <section className='booking-form' style={{marginTop: '90px', padding: '2rem 10rem'}}>
                <h1 style={{color: '#F4CE14'}}>Reserve a Table</h1>
                <BookingForm
                    availableTimes={availableTimes}
                    dispatch={dispatch}
                    submitForm={submitForm}
                />
            </section>
        </div>
    )
}

export default BookingPage;