import { useState } from 'react';
import Calendar from 'react-calendar'; // Importing React Calendar
import 'react-calendar/dist/Calendar.css'; // Import calendar styles

// Function to format the date into a string for easy access
const formatDate = (date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState({}); // Store events as an object with date as key

  // Add event to a selected date
  const handleAddEvent = (eventDate) => {
    const eventText = prompt('Enter event description:');
    if (eventText) {
      const formattedDate = formatDate(eventDate);
      setEvents((prevEvents) => {
        const newEvents = { ...prevEvents };
        if (!newEvents[formattedDate]) {
          newEvents[formattedDate] = [];
        }
        newEvents[formattedDate].push(eventText);
        return newEvents;
      });
    }
  };

  // Delete event from a selected date
  const handleDeleteEvent = (eventDate, eventIndex) => {
    const formattedDate = formatDate(eventDate);
    setEvents((prevEvents) => {
      const newEvents = { ...prevEvents };
      newEvents[formattedDate].splice(eventIndex, 1); // Remove the event at the specified index
      if (newEvents[formattedDate].length === 0) {
        delete newEvents[formattedDate]; // Remove the date entry if no events remain
      }
      return newEvents;
    });
  };

  // Handle date selection from calendar
  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="container">
        <h2 className="text-center">LA SELVA events and more...</h2>
        <div className="row">
          <div className="col-12">
            <Calendar onChange={handleDateChange} value={date} />
          </div>
          <div className="col-12 mt-3">
            <h3>Events for {formatDate(date)}</h3>
            <ul className="list-group">
              {events[formatDate(date)] ? (
                events[formatDate(date)].map((event, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    {event}
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDeleteEvent(date, index)}
                    >
                      Delete
                    </button>
                  </li>
                ))
              ) : (
                <li className="list-group-item">No events</li>
              )}
            </ul>
            <button
              className="btn btn-primary mt-3"
              onClick={() => handleAddEvent(date)}
            >
              Add Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
