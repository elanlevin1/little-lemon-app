import React, { useState } from 'react';
import './BookingForm.css'

/* BookingForm component renders a form for users to make a reservation,
handling input changes, form validation, and submission. It receives props for available times, a
dispatch function for updating times, and a submitForm function for handling form submission. */
const BookingForm = ({availableTimes, dispatch, submitForm}) => {
    const [data, setData] = useState({date: '', time: '', guests: '', occasion: 'none'});
    const [touched, setTouched] = useState({date: false, time: false, guests: false});

    const today = new Date().toISOString().split('T')[0];
    const maxDate = new Date(today);
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    const maxDateStr = maxDate.toISOString().split('T')[0];

    /* dateChange function handles changes to the date input field,
    updating the form data state and dispatching an action to update available times based on the selected date. */
    const dateChange = e => {
        const selectedDateString = e.target.value;
        const selectedDate = new Date(selectedDateString);
        setData(prev => ({...prev, date: selectedDateString}));
        dispatch({ type: 'update', date: selectedDate });
    };

    /* handleErrors function generates error messages for form validation based on the type of input field. */
    const handleErrors = (inputFieldType) => {
        return (
            <p className="error">Please select a {inputFieldType}</p>
        )
    };

    /* getDateErrorMessage, getTimeErrorMessage, and getGuestsErrorMessage functions return appropriate error messages
    for each form field based on the current state of the form data and whether the field has been touched. */
    const getDateErrorMessage = () => {
        if (data.date && (data.date < today || data.date > maxDateStr)) {
            return handleErrors("valid date");
        }
        if (touched.date && !data.date) {
            return handleErrors("date");
        }
        return null;
    };

    const getTimeErrorMessage = () => {
        if (touched.time && !data.time) {
            return handleErrors("time");
        }
        return null;
    };

    const getGuestsErrorMessage = () => {
        if (touched.guests && !data.guests) {
            return handleErrors("number of guests");
        }
        return null;
    };

    const getFormIsValid = () => {
        return !!(
            data.date &&
            data.time &&
            data.guests &&
            data.occasion
        )
    };

    const clearForm = () => {
        setData({date: '', time: '', guests: '', occasion: 'none'});
        setTouched({date: false, time: false, guests: false});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!getFormIsValid()) {
            setTouched(prev => ({
                ...prev,
                date: true,
                time: true,
                guests: true,
                occasion: true
            }));
            return;
        }

        submitForm(data);
        clearForm();
    };

    /* The component renders a form with input fields for date, time, number of guests, and occasion,
    along with validation error messages and a submit button that is disabled until the form is valid. */
    return (
        <main className='form-container'>
            <form onSubmit={handleSubmit} noValidate>
                <section className='input-field'>
                    <label htmlFor="res-date">Choose Date</label>
                    <input
                        type="date"
                        id="res-date"
                        min={today}
                        max={maxDateStr}
                        value={data.date}
                        onChange={dateChange}
                        onBlur={() => setTouched(prev => ({...prev, date: true}))}
                        required
                        style={touched.date && !data.date ? {borderColor: '#D32F2F'} : {}}
                        aria-invalid={touched.date && !data.date ? "true" : "false"}
                        aria-describedby={touched.date && !data.date ? "date-error" : undefined}
                    />
                    <div
                        id="date-error"
                        role="alert"
                        aria-live="polite"
                        aria-atomic="true"
                    >
                        {getDateErrorMessage()}
                    </div>
                </section>

                <section className='input-field'>
                    <label htmlFor="res-time">Choose Time</label>
                    <select
                        id="res-time"
                        value={data.time}
                        onChange={(e) => setData(prev => ({...prev, time: e.target.value}))}
                        onBlur={() => setTouched(prev => ({...prev, time: true}))}
                        required
                        style={touched.time && !data.time ? {borderColor: '#D32F2F'} : {}}
                        aria-invalid={touched.time && !data.time ? "true" : "false"}
                        aria-describedby={touched.time && !data.time ? "time-error" : undefined}
                    >
                        <option value="" hidden disabled>Select time</option>
                        {availableTimes.map((time) => (
                            <option key={time} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                    <div
                        id="time-error"
                        role="alert"
                        aria-live="polite"
                        aria-atomic="true"
                    >
                        {getTimeErrorMessage()}
                    </div>
                </section>

                <section className='input-field'>
                    <label htmlFor="guests">Number of Guests</label>
                    <select
                        id="guests"
                        value={data.guests}
                        onChange={(e) => setData(prev => ({...prev, guests: e.target.value}))}
                        onBlur={() => setTouched(prev => ({...prev, guests: true}))}
                        required
                        style={touched.guests && !data.guests ? {borderColor: '#D32F2F'} : {}}
                        aria-invalid={touched.guests && !data.guests ? "true" : "false"}
                        aria-describedby={touched.guests && !data.guests ? "guests-error" : undefined}
                    >
                        <option value="" hidden disabled>Select number of guests</option>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                            <option key={num} value={num}>
                                {num} {num === 1 ? 'Guest' : 'Guests'}
                            </option>
                        ))}
                    </select>
                    <div
                        id="guests-error"
                        role="alert"
                        aria-live="polite"
                        aria-atomic="true"
                    >
                        {getGuestsErrorMessage()}
                    </div>
                </section>

                <section className='input-field'>
                    <fieldset>
                        <legend>
                            Choose Occasion (optional)
                        </legend>
                        <label>
                            <input
                                type="radio"
                                name="occasion"
                                value="none"
                                checked={data.occasion === "none"}
                                onChange={(e) => setData(prev => ({...prev, occasion: e.target.value}))}
                            /> None
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="occasion"
                                value="birthday"
                                checked={data.occasion === "birthday"}
                                onChange={(e) => setData(prev => ({...prev, occasion: e.target.value}))}
                            /> Birthday
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="occasion"
                                value="anniversary"
                                checked={data.occasion === "anniversary"}
                                onChange={(e) => setData(prev => ({...prev, occasion: e.target.value}))}
                            /> Anniversary
                        </label>
                    </fieldset>
                </section>

                <button
                    type="submit"
                    className={!getFormIsValid() ? "button-disabled" : "button-active"}
                    aria-disabled={!getFormIsValid()}
                >
                    Make Your Reservation
                </button>
            </form>
        </main>
    )
}

export default BookingForm;