select "countries"."name" as "Country",
  count(*) as "Number of Cities"
  from "countries"
  join "cities" using ("countryId")
  group by "Country"
  order by "Number of Cities" desc;
