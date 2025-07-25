import React from 'react'

const ChatMessage = ({ name, message }) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
        <img
        className='h-8'
        alt='user'
        src='https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png'
        />
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
