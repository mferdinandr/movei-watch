import { fetchApi } from '@/lib/api-libs';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const CommentsBox = ({ movie_id }: { movie_id: String }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['comments'],
    queryFn: async () => {
      const response = await fetch(`/api/v1/comments?movie_id=${movie_id}`);

      return response.json();
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading comments</div>;

  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-2 md:mb-10 mb-5">
      {data && data.length > 0 ? (
        data.map((comment: any) => (
          <div
            key={comment.id}
            className="bg-color-accent text-color-secondary p-2 rounded-md flex justify-between flex-col"
          >
            <h1 className="font-semibold">{comment.comment}</h1>
            <h1 className="text-xs pt-2 text-end">{comment.username}</h1>
          </div>
        ))
      ) : (
        <p>No comments available</p>
      )}
    </div>
  );
};

export default CommentsBox;
