import React from 'react';

const Select = ({ selected, setSelected ,opt, userResponse, handleSetUserResponse, nextQ }) => {
  return (
    <div className='flex gap-2 w-full'>
      <input
        type='radio'
        id={opt}
        name={nextQ}
        value={opt}
        onChange={(e) => {
          if (userResponse.length > nextQ) userResponse[nextQ] = e.target.value;
          else handleSetUserResponse([...userResponse, e.target.value]);
          setSelected(opt);
        }}
        checked={opt === selected}
        className='peer'
        hidden
      />
      <label className='peer-checked:bg-green-500 transition-all duration-300 peer-checked:text-blue-900 cursor-pointer border-2 py-2 px-4 rounded-lg border-white w-1/3' htmlFor={opt}>
        {opt}
      </label>
    </div>
  );
};

export default Select;