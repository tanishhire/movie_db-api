import Link from "next/link";
// import Image from "next/image";



export default function Movie({key, id, title, poster_path, release_date}) {
    const imagePath = "https://image.tmdb.org/t/p/original"
    // console.log(poster_path)
    return (
    <div className="">
      <h1>{title}</h1>
      <h1>{release_date}</h1>
      <Link href={`/${id}`}>
        <img className="" src={imagePath + poster_path} alt={title} />
        {/* <Image src={imagePath + poster_path}  width={500} height={500} alt={title} /> */}
      </Link>
    </div>
  );
}
