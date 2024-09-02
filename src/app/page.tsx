import MovieList from '@/components/MovieList';
import Header from '@/components/MovieList/Header';
import MovieScrollX from '@/components/MovieList/MovieScrollX';
import { fetchApi } from '@/lib/api-libs';
import { getCollection } from '@/lib/auth-libs';
import prisma from '@/lib/prisma';

const Page = async () => {
  const mostPopuler = await fetchApi('popular');
  const topRated = await fetchApi('top_rated');
  const upcoming = await fetchApi('upcoming');

  const user = await getCollection();
  const collections = await prisma.collection.findMany({
    where: { user_email: String(user) },
  });

  return (
    <div className="mb-2 flex flex-col space-y-5">
      {user && collections.length > 0 && (
        <section>
          <MovieScrollX api={collections} />
        </section>
      )}
      <section>
        <Header
          title={'Most Populer'}
          type={'main'}
          linkTitle="Show More"
          linkHref="/populer"
        />
        <MovieList api={mostPopuler.results.slice(0, 10)} />
      </section>
      <section>
        <Header
          title={'Top Rated'}
          type={'main'}
          linkTitle="Show More"
          linkHref="/top-rated"
        />
        <MovieList api={topRated.results.slice(0, 10)} />
      </section>
      <section>
        <Header
          title={'Upcoming'}
          type={'main'}
          linkTitle="Show More"
          linkHref="/upcoming"
        />
        <MovieList api={upcoming.results.slice(0, 10)} />
      </section>
    </div>
  );
};

export default Page;
