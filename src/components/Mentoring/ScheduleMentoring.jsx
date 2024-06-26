import React, { useEffect, useState } from 'react';
import axios from 'axios';
import upcomingMentorings from '../../data/upcomingMentoring';

const ScheduleMentoring = () => {
  const [schedule, setSchedule] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // This part fetches real data from an API, replace with your actual API endpoint
    const fetchSchedule = async () => {
      try {
        const response = await axios.get('https://api.example.com/schedule');
        setSchedule(response.data);
      } catch (error) {
        console.error('Error fetching schedule:', error);
      }
    };

    // For demo purposes, using mock data instead of fetching from API
    setSchedule(upcomingMentorings);
  }, []);

  // Function to get number of days in a given month and year
  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Function to render calendar dates based on currentMonth and currentYear
  const renderCalendarDates = () => {
    const daysCount = daysInMonth(currentMonth, currentYear);
    const calendarDates = [];

    for (let i = 1; i <= daysCount; i++) {
      const date = new Date(currentYear, currentMonth, i);
      const formattedDate = date.toISOString().slice(0, 10);

      let hasMentoring = false;
      if (schedule) {
        hasMentoring = schedule.some(item => item.date === formattedDate);
      }

      calendarDates.push(
        <div
          key={i}
          className={`text-center font-medium ${hasMentoring ? 'bg-gray-300 rounded-full' : 'text-gray-600'}`}
        >
          {i}
        </div>
      );
    }

    return calendarDates;
  };

  // Function to handle navigation to previous month
  const handlePrevMonth = () => {
    setCurrentMonth(prevMonth => {
      if (prevMonth === 0) {
        setCurrentYear(year => year - 1);
        return 11;
      } else {
        return prevMonth - 1;
      }
    });
  };

  // Function to handle navigation to next month
  const handleNextMonth = () => {
    setCurrentMonth(prevMonth => {
      if (prevMonth === 11) {
        setCurrentYear(year => year + 1);
        return 0;
      } else {
        return prevMonth + 1;
      }
    });
  };

  return (
    <div className="mt-8">
      <div className="bg-[#4B3DE3] rounded-[10px] p-[15px]">
        <div className="flex justify-between">
          <div className="flex gap-4 items-center ml-3 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>
            <p className="text-[25px] text-white font-bold">Mentoring Schedule</p>
          </div>
          <div className="flex items-center text-white">
            <button className="cursor-pointer" onClick={handlePrevMonth}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
            <div id="currentMonthYear" className="text-lg font-bold mx-4">
              {`${getMonthName(currentMonth)} ${currentYear}`}
            </div>
            <button className="cursor-pointer" onClick={handleNextMonth}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <section className="mt-6 grid grid-cols-2 gap-6">
        <div className="bg-white shadow-sm rounded-lg p-4">
          <div className="py-7 px-5 grid grid-cols-7 gap-8" id="calendarDates">
            <div className="text-center font-medium text-gray-600">MON</div>
            <div className="text-center font-medium text-gray-600">TUE</div>
            <div className="text-center font-medium text-gray-600">WED</div>
            <div className="text-center font-medium text-gray-600">THU</div>
            <div className="text-center font-medium text-gray-600">FRI</div>
            <div className="text-center font-medium text-gray-600">SAT</div>
            <div className="text-center font-medium text-gray-600">SUN</div>
            {renderCalendarDates()}
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-4">
          {schedule ? (
            schedule.map((item, index) => (
              <div key={index} className="my-2 bg-gray-50 p-4 rounded-xl">
                <div className="flex items-center gap-4 mb-2">
                  <p className="text-sm text-gray-700">Mentor: <span className="font-semibold">{item.mentor}</span></p>
                  <p className="text-sm text-gray-700">Date: <span className="font-semibold">{item.date}</span></p>
                </div>
                <div className="mb-2">
                  <p className="text-sm text-gray-700">Theme:</p>
                  <h2 className="text-lg font-semibold">{item.theme}</h2>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-sm text-gray-700">Via: <span className="font-semibold">{item.via}</span></p>
                  <p className="text-sm text-gray-700">Meeting Link: <span className="font-semibold">{item.meetingLink}</span></p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-700">No schedule available</p>
          )}
        </div>
      </section>
    </div>
  );
};

const getMonthName = (monthIndex) => {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return months[monthIndex];
};

export default ScheduleMentoring;
