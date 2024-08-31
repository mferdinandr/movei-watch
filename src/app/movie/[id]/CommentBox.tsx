'use client';

import Text from '@/components/Text';
import React, { useEffect, useState } from 'react';

type CommentBoxProps = {
  movie_id: Number;
  user_email: String;
  username: String;
  movie_title: String;
};

const CommentBox = ({
  movie_id,
  user_email,
  username,
  movie_title,
}: CommentBoxProps) => {
  const [comment, setComment] = useState('');
  const [created, setIsCreated] = useState(false);

  const handleChange = (event: any) => {
    setComment(event.target.value);
  };

  const handlePostComment = async (event: any) => {
    event.preventDefault();

    const data = {
      movie_id,
      user_email,
      username,
      movie_title,
      comment,
    };

    const response = await fetch(`/api/v1/comments`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    const postComment = await response.json();
    if (postComment.isCreated) {
      setIsCreated(true);
      setComment('');
    }
  };

  useEffect(() => {
    if (created) {
      setTimeout(() => {
        setIsCreated(false);
      }, 4000);
    }
  }, [created]);

  return (
    <div className="flex flex-col mt-5">
      <Text title="Comment" type="main" />
      <textarea
        onChange={handleChange}
        value={comment}
        className="mb-2 rounded-md text-color-dark p-2 h-28"
      />
      <div className="flex justify-end items-center gap-4">
        {created && <p>Sucessfully to Post Comment</p>}
        <button
          className="bg-color-primary px-3 py-2 rounded-md w-1/4"
          onClick={handlePostComment}
        >
          Send Comment
        </button>
      </div>
    </div>
  );
};

export default CommentBox;
