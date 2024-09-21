const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/movieDB")
  .then(() => console.log("DB connected!"))
  .catch((err) => console.log(err));

const movieSchema = mongoose.Schema({
  // title: String,
  title: {
    type: String,
    required: true,
  },
  genre: [
    {
      type: String,
    },
  ],
  releaseYear: Number,
  rating: Number,
});

const Movie = mongoose.model("Movie", movieSchema);

async function main() {
  // create
  // const movie = new Movie({
  //     title: "Avenger",
  //     genre: ["Action", "Si-Fi", "Adventure"],
  //     releaseYear: 2020,
  //     rating: 8
  // })

  // await movie.save();

  //   const movies = await Movie.create([
  //     {
  //       title: "The Amazing Spiderman",
  //       genre: ["Action", "Adventure"],
  //       releaseYear: 2012,
  //       rating: 7,
  //     },
  //     {
  //       title: "Spider-Man: Homecoming",
  //       genre: ["Action", "Adventure"],
  //       releaseYear: 2017,
  //       rating: 8,
  //     },
  //     {
  //       title: "Spider-Man: Into the Spider-Verse",
  //       genre: ["Animation", "Action"],
  //       releaseYear: 2018,
  //       rating: 9,
  //     },
  //     {
  //       title: "Spider-Man: No Way Home",
  //       genre: ["Action", "Adventure"],
  //       releaseYear: 2021,
  //       rating: 9,
  //     },
  //   ]);

  // const movie = await Movie.find({_id: "66ee58e827b1f2ed3163438b"});
  // const movie = await Movie.findById("66ee58e827b1f2ed3163438b");

//   const movie = await Movie.updateOne(
//     { _id: "66ee58e827b1f2ed3163438b" },
//     { title: "Spider-Man: HomeComing"}
//     );

//   const movie = await Movie.findByIdAndUpdate("66ee58e827b1f2ed3163438b", {
//     title: "Spider-Man: Homecoming",
//     rating: 10
//   }, {
//     new: true
//   });


  console.log(movie);

  //   console.log("Movie Created!", movies);
}

// main();
