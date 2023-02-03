// useState, useeffect, onClick will not work in server component file in next 13
import Movie from "./Movie";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.THE_MOVIE_DB_API}`
  );
  const res = await data.json();

  console.log(res);

  return (
    <main>
      {/* <h1 className="text-4xl py-2 m-4">Hello Next 13 🔥</h1> */}
      <div className="grid gap-12 grid-cols-fluid">
        {res.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  );
}
