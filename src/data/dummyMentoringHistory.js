// src/data/dummyMentoringHistory.js
export const dummyMentoringHistory = [
    {
        id: 1,
        theme: 'Learning Grammar Part 1',
        date: '2024-06-21',
        mentoringTime: '1 hour',
        mentor: 'Jane Doe',
        wordsLearned: 30,
        listeningScore: 8.0,
        grammarScore: 7.5,
        pronunciationScore: 8.5
    },
    {
        id: 2,
        theme: 'Learning Grammar Part 2',
        date: '2024-06-22',
        mentoringTime: '45 minutes',
        mentor: 'John Smith',
        wordsLearned: 25,
        listeningScore: 7.0,
        grammarScore: 8.0,
        pronunciationScore: 7.0
    },
    {
        id: 3,
        theme: 'Learning Vocabulary',
        date: '2024-06-23',
        mentoringTime: '30 minutes',
        mentor: 'Alice Johnson',
        wordsLearned: 20,
        listeningScore: 7.5,
        grammarScore: 7.8,
        pronunciationScore: 8.0
    },
    {
        id: 4,
        theme: 'Speaking Practice',
        date: '2024-06-24',
        mentoringTime: '1 hour',
        mentor: 'Jane Doe',
        wordsLearned: 35,
        listeningScore: 8.2,
        grammarScore: 8.1,
        pronunciationScore: 8.7
    },
    {
        id: 5,
        theme: 'Listening Practice',
        date: '2024-06-25',
        mentoringTime: '45 minutes',
        mentor: 'John Smith',
        wordsLearned: 28,
        listeningScore: 7.8,
        grammarScore: 7.6,
        pronunciationScore: 8.1
    },
    {
        id: 6,
        theme: 'Reading Comprehension',
        date: '2024-06-26',
        mentoringTime: '30 minutes',
        mentor: 'Alice Johnson',
        wordsLearned: 22,
        listeningScore: 7.9,
        grammarScore: 8.3,
        pronunciationScore: 7.9
    },
    {
        id: 7,
        theme: 'Writing Skills',
        date: '2024-06-27',
        mentoringTime: '1 hour',
        mentor: 'Jane Doe',
        wordsLearned: 40,
        listeningScore: 8.3,
        grammarScore: 8.5,
        pronunciationScore: 8.4
    },
    {
        id: 8,
        theme: 'Grammar Review',
        date: '2024-06-28',
        mentoringTime: '45 minutes',
        mentor: 'John Smith',
        wordsLearned: 26,
        listeningScore: 7.4,
        grammarScore: 7.9,
        pronunciationScore: 7.5
    },
    {
        id: 9,
        theme: 'Pronunciation Practice',
        date: '2024-06-29',
        mentoringTime: '30 minutes',
        mentor: 'Alice Johnson',
        wordsLearned: 24,
        listeningScore: 7.7,
        grammarScore: 7.8,
        pronunciationScore: 8.2
    },
    {
        id: 10,
        theme: 'Final Review',
        date: '2024-06-30',
        mentoringTime: '1 hour',
        mentor: 'Jane Doe',
        wordsLearned: 33,
        listeningScore: 8.1,
        grammarScore: 8.4,
        pronunciationScore: 8.6
    }
];

export const calculateAverageScores = () => {
    const totalItems = dummyMentoringHistory.length;
    const initialData = {
        pronunciationScore: 0,
        listeningScore: 0,
        grammarScore: 0
    };

    // Calculate sums
    const sumData = dummyMentoringHistory.reduce((accumulator, currentValue) => {
        return {
            pronunciationScore: accumulator.pronunciationScore + currentValue.pronunciationScore,
            listeningScore: accumulator.listeningScore + currentValue.listeningScore,
            grammarScore: accumulator.grammarScore + currentValue.grammarScore
        };
    }, initialData);

    // Calculate averages
    const averageData = {
        pronunciationScore: sumData.pronunciationScore / totalItems,
        listeningScore: sumData.listeningScore / totalItems,
        grammarScore: sumData.grammarScore / totalItems
    };

    return averageData;
};

export const calculateWordsLearned = () => {
    const totalWordsLearned = dummyMentoringHistory.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.wordsLearned;
    }, 0);

    return totalWordsLearned;
};

export const calculateMentoringDone = () => {
    const totalMentoringSessions = dummyMentoringHistory.length;

    return totalMentoringSessions;
};
