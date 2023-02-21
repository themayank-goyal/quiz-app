import React, { useState } from 'react';
import QNA from './QNA';
import { data } from '../data';
import Results from './Results';
const Quiz = () => {
  const [nextQ, setNextQ] = useState(0);
  const [userResponse, setUserResponse] = useState([]);
  return (
    <div className='bg-blue-400 h-screen'>
      <h1 className='text-2xl text-center text-white font-bold mb-4 p-2'>
        QUIZ
      </h1>
      <div className='flex items-center justify-center'>
        {nextQ === data.length ? (
          <Results userResponse={userResponse} data={data} />
        ) : (
          <QNA
            userResponse={userResponse}
            handleSetUserResponse={setUserResponse}
            data={data[nextQ]}
            nextQ={nextQ}
            handleSetNextQ={setNextQ}
          />
        )}
      </div>
    </div>
  );
};

export default Quiz;
