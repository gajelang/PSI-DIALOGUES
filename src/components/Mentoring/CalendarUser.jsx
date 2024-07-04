import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/id';
import 'moment-timezone';

const localizer = momentLocalizer(moment);

const CalendarUser = () => {
  const [events, setEvents] = useState([]);
  const idLearner = 1; // Ganti dengan ID Learner yang sesuai

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await fetch(`https://dialogue-api.vercel.app/api/sesi/futureusersesi?IdLearner=${idLearner}`);
        const data = await response.json();
        const formattedEvents = data.map(event => ({
          title: event.theme,
          start: new Date(event.datetime),
          end: new Date(event.datetime), // Event ends at the same time it starts
          description: `Mentor: ${event.namementor}`,
          location: 'Online', // Assuming all events are online
        }));
        setEvents(formattedEvents);
        console.log('Fetched Schedule:', formattedEvents);
      } catch (error) {
        console.error('Error fetching schedule:', error);
      }
    };

    fetchSchedule();
  }, [idLearner]);

  return (
    <div className="mt-8">
      <div className="bg-[#6c5ffb] rounded-[10px] p-[15px]">
        <div className="flex justify-between">
          <div className="flex gap-4 items-center ml-3 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>
            <p className="text-[25px] text-white font-bold">Mentoring Calendar</p>
          </div>
        </div>
      </div>
      <section className="mt-6">
        <div style={{ height: 600 }}>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ minWidth: 600 }}
            views={['month', 'week', 'day']}
          />
        </div>
      </section>
    </div>
  );
};

export default CalendarUser;
