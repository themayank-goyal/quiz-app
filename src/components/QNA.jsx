import React, { useState } from 'react';
import Select from './Select';
import Next from './Next';

const QNA = ({ data, nextQ, handleSetNextQ, userResponse, handleSetUserResponse }) => {
  const [selected, setSelected] = useState('');
  return (
    <div className='w-1/2 bg-blue-900 rounded-lg p-4 relative text-white'>
      <p className='font-bold mb-4'>{data.ques}?</p>
      <div className='flex flex-col gap-2'>
        {data.options.map((opt, i) => (
          <Select setSelected={setSelected} selected={selected} opt={opt} key={i} userResponse={userResponse} handleSetUserResponse={handleSetUserResponse} nextQ={nextQ}/>
        ))}
      </div>
      <Next setSelected={setSelected} handleSetUserResponse={handleSetUserResponse} userResponse={userResponse} nextQ={nextQ} handleSetNextQ={handleSetNextQ}/>
    </div>
  );
};

export default QNA;
