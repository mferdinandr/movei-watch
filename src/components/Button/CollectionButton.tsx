'use client';
import React, { useState, useEffect } from 'react';

const CollectionButton = ({ movie_id, user_email }) => {
  const [isCreated, setIsCreated] = useState<Boolean>(false);
  const [isInCollection, setIsInCollection] = useState(false);

  useEffect(() => {
    const checkCollection = async () => {
      const data = { movie_id, user_email };

      const response = await fetch(`/api/v1/collections/check`, {
        method: 'POST',
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.isInCollection) {
        setIsInCollection(true);
      }
    };

    checkCollection();
  }, [movie_id, user_email]);

  const handleAddCollection = async (event: any) => {
    event.preventDefault();

    const data = { movie_id, user_email };

    const response = await fetch('/api/v1/collections', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    const collection = await response.json();
    if (collection.status == 200) {
      setIsCreated(true);
      setIsInCollection(true);
    }
  };

  return (
    <div className="pt-4">
      {isCreated ? (
        <p>Successfully added</p>
      ) : (
        <button
          className="cursor-pointer bg-color-primary hover:bg-color-secondary border border-color-primary hover:border-color-accent py-1 px-2 rounded-md text-xs"
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
