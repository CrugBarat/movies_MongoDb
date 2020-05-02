use movies_list;
db.dropDatabase();

db.movies.insertMany([
  {
    title: "Pulp Fiction",
    genre: "Crime",
    rating: 18,
    releaseDate: "21/10/1994",
    runtime: 178,
    crew: {
      director: "Quentin Tarantino",
      producer: "Lawrence Bender"
    }
  },
  {
    title: "Reservoir Dogs",
    genre: "Crime",
    rating: 18,
    releaseDate: "15/01/1993",
    runtime: 100,
    crew: {
      director: "Quentin Tarantino",
      producer: "Lawrence Bender"
    }
  },
  {
    title: "Kill Bill: Volume 1",
    genre: "Action",
    rating: 18,
    releaseDate: "17/10/2003",
    runtime: 112,
    crew: {
      director: "Quentin Tarantino",
      producer: "Lawrence Bender"
    }
  },
  {
    title: "Jackie Brown",
    genre: "Crime/Drama",
    rating: 15,
    releaseDate: "20/03/1998",
    runtime: 160,
    crew: {
      director: "Quentin Tarantino",
      producer: "Lawrence Bender",
    }
  }
]);
