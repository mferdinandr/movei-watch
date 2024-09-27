'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';

type InputProps = {
  movie_id: Number;
  user_email: String;
  poster_path: String;
  movie_title: String;
};

const CollectionButton = ({
  movie_id,
  user_email,
  poster_path,
  movie_title,
}: InputProps) => {
  const [isCreated, setIsCreated] = useState<Boolean>(false);
  const [isInCollection, setIsInCollection] = useState(false);

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (payload: InputProps) => {
      await fetch('/api/v1/collections', {
        method: 'POST',
        body: JSON.stringify(payload),
      });

      await fetch(`/api/v1/collections/check`, {
        method: 'POST',
        body: JSON.stringify(payload),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['collectionMovie'] });
      setIsCreated(true);
      setIsInCollection(true);
    },
  });

  const handleAddCollection = async (event: any) => {
    event.preventDefault();

    mutate({ movie_id, user_email, poster_path, movie_title });
  };

  return (
    <div className="sm:pt-4 pt-1 pb-2">
      {isCreated ? (
        <p>Successfully added</p>
      ) : (
        <button
          className={`cursor-pointer ${
            isInCollection &&
            'bg-color-secondary border-color-secondary cursor-default'
          } bg-color-primary ${
            !isInCollection &&
            'hover:bg-color-secondary border border-color-primary hover:border-color-accent'
          }  py-1 px-2 rounded-md text-xs`}
          onClick={handleAddCollection}
          disabled={isInCollection}
        >
          {isInCollection ? 'Already in collection' : 'Add to collection'}
        </button>
      )}
    </div>
  );
};

export default CollectionButton;
