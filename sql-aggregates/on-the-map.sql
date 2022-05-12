select "country"."name" as "Country",
    count("city".*) as "totalCities"
    from "countries" as "country"
    join "cities" as "city" using ("countryId")
    group by "country"."countryId";
