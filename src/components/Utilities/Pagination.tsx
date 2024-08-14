import React from 'react';

type PaginationProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  lastPage?: number;
};

const Pagination = ({ page, setPage, lastPage }: PaginationProps) => {
  const scrollOnTop = () => {
    scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  const handleNextPage = () => {
    if (page === lastPage) {
      return;
    } else {
      setPage((prevState) => prevState + 1);
      scrollOnTop();
    }
  };

  const handlePrevPage = () => {
    if (page === 1) {
      return;
    } else {
      setPage((prevState) => prevState - 1);
      scrollOnTop();
    }
  };

  return (
    <div className="flex justify-center items-center text-color-accent space-x-4 mt-7 mb-10">
      <button
        onClick={handlePrevPage}
        className="bg-color-primary px-3 py-1 rounded-full hover:text-color-secondary"
      >
        Prev
      </button>
      <h3 className="flex items-center gap-[0.35rem]">
        <span className="font-bold text-lg">{page} </span>
        of {lastPage}
      </h3>
      <button
        onClick={handleNextPage}
        className="bg-color-primary px-3 py-1 rounded-full hover:text-color-secondary"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
