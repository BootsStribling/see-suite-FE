import "./Filters.css";
import Filter from "./Filter";
import { useState } from "react";

const data = [
  {
    title: "Group",
    items: [
      {
        parent: "Global",
        label: "Haiti",
        items: ["Artbonite", "Centre", "Grand'Anse", "Nippes"],
      },
    ],
  },
  {
    title: "Time Frame",
    items: [
      {
        label: "2022",
        items: ["Q1", "Q2", "Q3", "Q4"],
      },
    ],
  },
];

function Filters() {
  const [activeFilters, setActiveFilters] = useState([]);
  const handleFilter = (filter) => {
    const isActiveFilter = activeFilters.includes(filter);
    if (isActiveFilter) {
      setActiveFilters((prevFilters) =>
        prevFilters.filter((f) => {
          return f !== filter;
        })
      );
    } else {
      setActiveFilters((prevFilters) => [...prevFilters, filter]);
    }
  };
  console.log(activeFilters);
  return (
    <>
      {data.map((d) => {
        return (
          <Filter
            key={d.title}
            title={d.title}
            items={d.items}
            handleFilter={handleFilter}
          />
        );
      })}
    </>
  );
}

export default Filters;
