'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import React, { useRef, useState } from 'react';

type CommentInputProps = {
  movie_id: Number;
  user_email: String;
  username: String;
  movie_title: String;
};

const CommentInput = ({
  movie_id,
  user_email,
  username,
  movie_title,
}: CommentInputProps) => {
  const [comment, setComment] = useState('');
  const [created, setIsCreated] = useState(false);
  const [error, setError] = useState(false);

  const queryClient = useQueryClient();
  const searchRef = useRef(null);

  const handleChange = (event: any) => {
    setComment(event.target.value);
  };

  const { mutate } = useMutation({
    mutationFn: (payload: CommentInputProps & { comment: string }) =>
      fetch(`/api/v1/comments`, {
        method: 'POST',
        body: JSON.stringify(payload),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
      setIsCreated(true);
      setComment('');
      setTimeout(() => {
        setIsCreated(false);
      }, 4000);
    },
  });

  const handlePostComment = (e: any) => {
    const keyword = searchRef.current?.value as string;
    if (e.key === 'Enter' || e.type === 'click') {
      if (keyword.length >= 4 && keyword.trim() !== '') {
        e.preventDefault();
        mutate({ movie_id, user_email, username, movie_title, comment });
        setError(false);
      } else {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 4000);
      }
    }
  };

  return (
    <div className="flex flex-col">
      <textarea
        onChange={handleChange}
        value={comment}
        className="mb-2 rounded-md text-color-dark p-2 h-28 bg-color-accent"
        ref={searchRef}
        onKeyDown={handlePostComment}
      />
      <div className="flex md:flex-row flex-col justify-end items-center gap-4">
        {created && <p>Sucessfully to Post Comment</p>}
        {error && <p className="text-color-eror">Must more than 3</p>}
        <button
          className="bg-color-primary px-3 py-2 rounded-md md:w-1/4 w-full"
          onClick={handlePostComment}
        >
          Send Comment
        </button>
      </div>
    </div>
  );
};

export default CommentInput;
