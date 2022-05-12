select
       "genres"."name" as "Genre Type",
       count(*) as "Number of Films"
  from "actors"
  join "castMembers" using ("actorId")
  join "filmGenre" using ("filmId")
  join "genres" using ("genreId")
  where "firstName" = 'Lisa' and "lastName" = 'Monroe'
  group by "Genre Type"
  order by "Number of Films" desc;
