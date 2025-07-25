
import React from 'react';

const commentsData = [
  {
    name: "User1",
    text: "This is a comment",
    replies: [
      {
        name: "User2",
        text: "This is a reply to User1's comment"
      }
    ]
  },
  {
    name: "User3",
    text: "This is another comment",
    replies: []
  }
];

const Comment = ({ data }) => {
  const { name, text, replies  } = data;
  return (
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
      <img className='w-12 h-12 rounded-full' src={"https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"} alt="user" />
      <div>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className='pl-5 border border-l-black ml-5'> 
        {/* <CommentsList comments={comment.replies} /> */}
      </div>
    </div>
  ));
};



const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments: </h1>
    <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;

