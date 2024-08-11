import Image from 'next/image';
import Link from 'next/link';

type MovieListProps = {
  imageURL: string;
  title: string;
  id: number;
};

const MovieList = ({ imageURL, title, id }: MovieListProps) => {
  return (
    <Link
      href={`/${id}`}
      className="shadow-xl rounded-lg cursor-pointer border border-black flex flex-col"
    >
      <Image
        src={imageURL}
        alt={`${title} Image`}
        width={350}
        height={350}
        className="p-1 rounded-xl min-h-[309.66px] object-cover"
      />
      <h3 className="font-bold text-sm md:text-md lg:text-lg xl:text-xl text-center p-2 my-auto">
        {title}
      </h3>
    </Link>
  );
};

export default MovieList;
