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
    },
    synopsis: "In the realm of underworld, a series of incidents intertwines the lives of two Los Angeles mobsters, a gangster's wife, a boxer and two small-time criminals."
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
    },
    synopsis: "Six criminals, hired to steal diamonds, do not know each other's true identity. While attempting the heist, the police ambushes them, leading them to believe that one of them is an undercover officer."
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
    },
    synopsis: "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her."
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
    },
    synopsis: "A flight attendant caught smuggling gun money has to choose between teaming up with the cops to bust her arms dealer boss or keeping her mouth shut and going to jail."
  }
]);
