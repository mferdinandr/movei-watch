'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React from 'react';

const DeleteButton = ({ id }) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: () =>
      fetch(`/api/v1/collections?id=${id}`, {
        method: 'DELETE',
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['collections'] });
      router.refresh();
    },
  });

  const handleDelete = () => {
    mutate();
  };

  return (
    <div>
      <button
        onClick={handleDelete}
        className=" w-full text-color-accent bg-color-eror rounded-b-md"
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteButton;
