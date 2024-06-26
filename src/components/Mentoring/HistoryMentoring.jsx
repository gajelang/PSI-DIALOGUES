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
    }
];


const HistoryMentoring = ({ mentoring }) => {
    return (
        <div className="bg-gray-100 rounded-lg p-8">
            <div className="flex flex-row gap-6 justify-between">
                <div className='flex flex-col justify-between'>
                    <div>
                        <p className="font-semibold">Theme</p>
                        <p className="mt-1 text-3xl font-bold">{mentoring.theme}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Mentor</p>
                        <p className="mt-1 font-bold text-xl">{mentoring.mentor}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-7'>
                    <div className="text-sm flex justify-between">
                        <div>
                            <p className="font-semibold">Date</p>
                            <p className="mt-1">{mentoring.date}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Mentoring Time</p>
                            <p className="mt-1">{mentoring.mentoringTime}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Words Learned</p>
                            <p className="mt-1 font-bold">{mentoring.wordsLearned}</p>
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <div className="flex flex-col mr-8">
                            <p className="font-semibold">Listening</p>
                            <p className="mt-1 text-4xl font-bold">{mentoring.listeningScore}</p>
                        </div>
                        <div className="flex flex-col mr-8">
                            <p className="font-semibold">Grammar</p>
                            <p className="mt-1 text-4xl font-bold">{mentoring.grammarScore}</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-semibold">Pronunciation</p>
                            <p className="mt-1 text-4xl font-bold">{mentoring.pronunciationScore}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HistoryMentoring;
