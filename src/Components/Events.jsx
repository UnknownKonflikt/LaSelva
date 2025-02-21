import { useState } from "react";
import Calendar from "react-calendar";
//import "react-calendar/dist/Calendar.css"; // for the default styles
//import './assets/CalenderPage.css'; // Custom styles (optional)

const CalendarPage = () => {
  // State to handle the date selected on the calendar
  const [date, setDate] = useState(new Date());

  // Example of future events (You can replace this with real event data)
  const futureEvents = [
    new Date(2025, 1, 20), // February 20th, 2025
    new Date(2025, 2, 5),  // March 5th, 2025
    new Date(2025, 2, 25), // March 25th, 2025
    new Date(2025, 3, 15), // April 15th, 2025
  ];

  // Function to check if a given day has an event
  const tileClassName = ({ date, view }) => {
    // If the view is the 'month' view, check if this day is a future event
    if (view === "month") {
      if (futureEvents.some(event => event.getDate() === date.getDate() && 
          event.getMonth() === date.getMonth() && 
          event.getFullYear() === date.getFullYear())) {
        return 'event-day'; // Add the class 'event-day' for event days
      }
    }
  };

  return (
    <section id="events" className="container">
    <div className="calendar-page">
      <h1 className="text-center">Upcoming Events</h1>

      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={tileClassName} // Add this to highlight event days
      />

      {/* Display the selected date */}
      <div className="selected-date">
        <h2>Selected Date: {date.toDateString()}</h2>
        <p>Here you can show event details for the selected date.</p>
      </div>
    </div>
    </section>
  );
};

export default CalendarPage;
