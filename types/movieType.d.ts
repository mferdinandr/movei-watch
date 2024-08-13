type Movie = {
  id: number;
  original_title: string;
  poster_path: string;
};

type MovieApiResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results?: number;
};
