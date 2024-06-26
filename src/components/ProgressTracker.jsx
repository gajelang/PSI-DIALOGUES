// src/components/ProgressTracker.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProgressTracker = () => {
  const [wordsLearned, setWordsLearned] = useState({ current: 0, total: 100 });
  const [grammarScore, setGrammarScore] = useState(0);
  const [listeningScore, setListeningScore] = useState(0);
  const [pronunciationScore, setPronunciationScore] = useState(0);

  useEffect(() => {
    // Fetch data for Words Learned
    axios.get('http://localhost:5000/api/words')
      .then(response => {
        setWordsLearned({
          current: response.data.current,
          total: response.data.total
        });
      })
      .catch(error => {
        console.error('Error fetching words learned:', error);
      });

    // Fetch data for Grammar Score
    axios.get('http://localhost:5000/api/grammar')
      .then(response => {
        setGrammarScore(response.data.score);
      })
      .catch(error => {
        console.error('Error fetching grammar score:', error);
      });

    // Fetch data for Listening Score
    axios.get('http://localhost:5000/api/listening')
      .then(response => {
        setListeningScore(response.data.score);
      })
      .catch(error => {
        console.error('Error fetching listening score:', error);
      });

    // Fetch data for Pronunciation Score
    axios.get('http://localhost:5000/api/pronunciation')
      .then(response => {
        setPronunciationScore(response.data.score);
      })
      .catch(error => {
        console.error('Error fetching pronunciation score:', error);
      });
  }, []);

  return (
    <div className="rounded-xl text-white mt-10 w-3/5 p-4 bg-white shadow-md">
      {/* Header */}
      <div className="flex justify-between flex-row items-center bg-[#FF0753] p-5 rounded-xl">
        <h1 className="text-3xl font-bold ml-5">Progress Tracker</h1>
        {/* MoreLink untuk menuju halaman lain */}
        <a href="/tracker.html" className="flex text-white items-center gap-3">
          More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="white"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </a>
      </div>

      {/* Main Content */}
      <div className="flex flex-row">
        {/* My Rank */}
        <div className="bg-[#FF0753] px-16 py-10 rounded-xl mt-5">
          <h1>My Rank :</h1>
          <h1 className="text-9xl"><strong>A</strong></h1>
        </div>

        {/* Progress */}
        <div className="flex flex-col w-full justify-between">
          {/* Words Learned */}
          <div className="m-5">
            <div className="flex justify-between mb-3 text-black">
              <h1>Words Learned</h1>
              <h1><strong>{wordsLearned.current}</strong> / {wordsLearned.total}</h1>
            </div>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="bg-[#FF0753] text-xs font-medium text-blue-100 text-center p-3 leading-none rounded-full" style={{ width: `${(wordsLearned.current / wordsLearned.total) * 100}%` }}>
                {(wordsLearned.current / wordsLearned.total) * 100}%
              </div>
            </div>
          </div>

          {/* Performance Summary */}
          <div className="m-5">
            <h1 className="text-black text-xl font-bold">Performance Summary</h1>
            <div className="flex flex-row text-black justify-between">
              {/* Words */}
              <div>
                <h1>Words:</h1>
                <h1 className="text-6xl font-bold">{grammarScore}</h1>
              </div>
              {/* Grammar */}
              <div>
                <h1>Grammar :</h1>
                <h1 className="text-6xl font-bold">{listeningScore}</h1>
              </div>
              {/* Listening */}
              <div>
                <h1>Listening :</h1>
                <h1 className="text-6xl font-bold">{pronunciationScore}</h1>
              </div>
              {/* Pronunciation */}
              <div>
                <h1>Pronunciation :</h1>
                <h1 className="text-6xl font-bold">{pronunciationScore}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
