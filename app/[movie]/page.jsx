import Link from "next/link";

export async function generateStaticParam() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.THE_MOVIE_DB_API}`
  );
  const res = await data.json();
  return res.result.map((movie) => ({
    movie: toString(movie.id),
  }))
}

export default async function movieDetail({ params }) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.THE_MOVIE_DB_API}`,
    { next: { revalidate: 60 } }
  );

  const res = await data.json();
  return (
    <div className="items-center justify-center">
      <nav className="bg-blue-400 text-center py-2 px-4 my-8 rounded-md inline-block">
        <Link href="/">
          <h2>Go back to home</h2>
        </Link>
      </nav>
      <div>
        <h2 className="text-xl">{res.title}</h2>
        <h2 className="text-xl">{res.release_date}</h2>
        <h2 className="text-xl">Runtime: {res.runtime} minutes</h2>
        <h2 className="bg-green-600 inline-block rounded-md text-sm cursor-pointer my-2 py-2 px-4">
          {res.status}
        </h2>
        <img
          className="my-12 w-full rounded-md shadow-md shadow-white"
          src={imagePath + res.backdrop_path}
          alt={res.title}
        />
        <p className="text-white md:text-xl ">{res.overview}</p>
      </div>
    </div>
  );
}
