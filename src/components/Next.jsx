import React from 'react';

const Next = ({
  setSelected,
  userResponse,
  handleSetUserResponse,
  nextQ,
  handleSetNextQ,
}) => {
  return (
    <button
      className='absolute bottom-0 right-0 m-2 p-2 rounded-lg bg-green-600 hover:bg-green-700'
      onClick={() => {
        handleSetNextQ(nextQ + 1);
        if (nextQ !== userResponse.length) {
          handleSetUserResponse([...userResponse, null]);
        }
        setSelected('');
      }}
    >
      Next
    </button>
  );
};

export default Next;
