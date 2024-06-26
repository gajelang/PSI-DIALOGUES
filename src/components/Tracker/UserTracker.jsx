import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { dummyMentoringHistory, calculateAverageScores } from '../../data/dummyMentoringHistory';

const UserTracker = () => {
  const [userData, setUserData] = useState(null);
  const [averageScores, setAverageScores] = useState(null);
  const [level, setLevel] = useState(null);
  const [levelInfo, setLevelInfo] = useState(null);

  useEffect(() => {
    // Fetch real user data from API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/userdata');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    // Calculate average scores from dummy data
    const averages = calculateAverageScores();
    setAverageScores(averages);

    // Determine level based on average scores
    if (averages) {
      const averageScore = (averages.pronunciationScore + averages.listeningScore + averages.grammarScore) / 3;
      let currentLevel = '';
      if (averageScore >= 9) {
        currentLevel = 'S';
      } else if (averageScore >= 7.5) {
        currentLevel = 'A';
      } else if (averageScore >= 5) {
        currentLevel = 'B';
      } else {
        currentLevel = 'C';
      }
      setLevel(currentLevel);

      // Set level information based on currentLevel
      switch (currentLevel) {
        case 'S':
          setLevelInfo({
            wordsRequired: 1000,
            mentoringRequired: 10,
          });
          break;
        case 'A':
          setLevelInfo({
            wordsRequired: 800,
            mentoringRequired: 8,
          });
          break;
        case 'B':
          setLevelInfo({
            wordsRequired: 600,
            mentoringRequired: 6,
          });
          break;
        case 'C':
          setLevelInfo({
            wordsRequired: 400,
            mentoringRequired: 4,
          });
          break;
        default:
          setLevelInfo(null);
          break;
      }
    }

    fetchData();
  }, []);

  return (
    <section className="flex mt-10 items-center justify-between outline-gray-300 outline rounded-lg bg-white">
      {/* My Rank */}
      <div className="bg-[#FB0953] w-[240px] flex flex-col items-center text-white rounded-[10px] py-[25px] px-[20px]">
        <p className="text-[22px]">My Rank :</p>
        <h2 className="text-[143px] font-bold tracking-[-4.29px] leading-[100%]">
          {userData && userData.rank}
        </h2>
        {level && <p className="text-[100px] font-bold">{`${level}`}</p>}
      </div>

      {/* Detail Performance */}
      <div>
        <h2 className="text-[30px] font-bold">Detail Performance</h2>
        <div className="flex gap-[75px] mt-5">
          {/* Pronunciation */}
          <div className="flex flex-col">
            <p className="text-[20px] leading-[100%]">Pronounciation</p>
            <p className="text-[90px] leading-[100%] font-bold">
              {averageScores && averageScores.pronunciationScore.toFixed(1)}
            </p>
          </div>
          {/* Listening */}
          <div className="flex flex-col">
            <p className="text-[20px] leading-[100%]">Listening</p>
            <p className="text-[90px] leading-[100%] font-bold">
              {averageScores && averageScores.listeningScore.toFixed(1)}
            </p>
          </div>
          {/* Grammar */}
          <div className="flex flex-col">
            <p className="text-[20px] leading-[100%]">Grammar</p>
            <p className="text-[90px] leading-[100%] font-bold">
              {averageScores && averageScores.grammarScore.toFixed(1)}
            </p>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="flex flex-col gap-3 mr-5 justify-around">
        {/* Words Learned */}
        <div className=''>
          <div className="flex justify-between">
            <p className="text-[17px]">
              <span className="font-bold">Words</span> Learned
            </p>
            <p>
              <span id="wordsLearned" className="font-bold">
                {userData && `${userData.wordsLearned} / ${userData.wordsTarget}`}
              </span>
            </p>
          </div>
          {/* Bar Progress - Words Learned */}
          <div className="relative bg-[#FB0953] mt-[16px] w-[356px] rounded-[50px] h-[25px]">
            <div
              id="wordsProgressBarBackground"
              className="absolute inset-0 rounded-[50px] bg-[#eaeaea]"
            ></div>
            <div
              id="wordsProgressBarFill"
              className="absolute top-0 left-0 rounded-[50px] bg-[#FB0953] h-full"
              style={{
                width: `${(userData && (userData.wordsLearned / userData.wordsTarget) * 100)}%`,
              }}
            ></div>
          </div>
          {/* Words Required for Next Level */}
          {levelInfo && (
            <p className="mt-2 text-sm">
              Next Level: {level === 'S' ? 'None' : `${levelInfo.wordsRequired} Words Needed`}
            </p>
          )}
        </div>
        {/* Mentoring Done */}
        <div className=''>
          <div className="flex justify-between">
            <p className="text-[17px]">
              <span className="font-bold">Mentoring</span> Done
            </p>
            <p>
              <span id="mentoringLearned" className="font-bold">
                {userData && `${userData.mentoringDone} / ${userData.mentoringTarget}`}
              </span>
            </p>
          </div>
          {/* Bar Progress - Mentoring Done */}
          <div className="relative bg-[#FB0953] mt-[16px] w-[356px] rounded-[50px] h-[25px]">
            <div
              id="mentoringProgressBarBackground"
              className="absolute inset-0 rounded-[50px] bg-[#eaeaea]"
            ></div>
            <div
              id="mentoringProgressBarFill"
              className="absolute top-0 left-0 rounded-[50px] bg-[#FB0953] h-full"
              style={{
                width: `${(userData && (userData.mentoringDone / userData.mentoringTarget) * 100)}%`,
              }}
            ></div>
          </div>
          {/* Mentoring Required for Next Level */}
          {levelInfo && (
            <p className="mt-2 text-sm">
              Next Level: {level === 'S' ? 'None' : `${levelInfo.mentoringRequired} Mentoring Sessions Needed`}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default UserTracker;
