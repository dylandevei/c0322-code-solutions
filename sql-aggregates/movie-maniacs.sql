select
  "customers"."firstName" as "First Name",
  "customers"."lastName" as "Last Name",
  sum("payments"."amount") as "Total Paid"
  from "customers"
  join "payments" using ("customerId")
  group by "customerId"
  order by "Total Paid" desc;
