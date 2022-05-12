select "actors"."firstName" as "First Name",
       "actors"."actorId" as "actor Id",
       "genres"."genreId" as "genreId",
       "genres"."name" as "genre name"
  from "actors"
  join "castMembers" using ("actorId")
  join "filmGenre" using ("filmId")
  join "genres" using ("genreId")
  where "firstName" = 'Lisa';
