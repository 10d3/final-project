import { useReducer, useState } from "react";
export default function BookingForm(){
    const timeReducer = (state, action) => {
        switch (action.type) {
          case 'SET_TIME':
            return action.payload;
          default:
            return state;
        }
      };
        // Initialize state and dispatch function for time
        const [time, dispatchTime] = useReducer(timeReducer, '17:00');
        const [date, setDate] = useState('');
        const [guest, setGuest] = useState('');
        const [occasion, setOccasion] = useState('');


        const handleSubmit = (e) => {
          e.preventDefault();
          alert('Your reservation has been succeeded');
          resetForm();
        };
        const resetForm = () => {
          setDate('');
          setGuest('');
          setOccasion('');
          dispatchTime({ type: 'SET_TIME', payload: '17:00' });
        };
      
        return (
          <div>
            <h1>BookingPage</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="res-date">Choose date</label>
              <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} />
              <label htmlFor="res-time">Choose time</label>
              <select
                id="res-time"
                value={time}
                onChange={(e) => dispatchTime({ type: 'SET_TIME', payload: e.target.value })}
              >
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
              </select>
              <label htmlFor="guests">Number of guests</label>
              <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={guest}
                onChange={(e) => setGuest(e.target.value)}
              />
              <label htmlFor="occasion">Occasion</label>
              <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
              <button type="submit">Book Now</button>
            </form>
            <h1>Number of guest: {guest}</h1>
          </div>
        );
      };