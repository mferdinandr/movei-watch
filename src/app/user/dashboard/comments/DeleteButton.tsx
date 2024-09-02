'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React from 'react';

const DeleteButton = ({ movie_id }) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: () =>
      fetch(`/api/v1/comments?id=${movie_id}`, {
        method: 'DELETE',
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
      router.refresh();
    },
  });

  const handleDelete = () => {
    mutate();
  };

  return (
    <div>
      <button
        className="text-color-eror font-extrabold rounded-full my-auto text-center absolute end-4 top-1"
        onClick={handleDelete}
      >
        X
      </button>
    </div>
  );
};

export default DeleteButton;
