// import "./Filters.css";
// import Filter from "./Filter";
// import { useState } from "react";

// const data = 
//   {
//     parent: "Global",
//     country: "Haiti",
//     departments: {
//       Artbonite: [], 
//       ArtboniteId: 1,
//       Centre: [],
//       CentreId: 2,
//       GrandAnse: [],
//       GrandAnseId: 3,
//       Nippes: [],
//       NippseId: 4
//     }
//   }

// const map =() => {
//   for (const obj in data) {
//     return (
//       <Filter filterChange={props.filterChange}
//       key={index}
//       departments={departments}
//       // communities={}
//       handleFilter={handleFilter}
//     />
//     )
    
//   }
// }

// function Filters() {
//   const [activeFilters, setActiveFilters] = useState([]);
//   const handleFilter = (filter) => {
//     const isActiveFilter = activeFilters.includes(filter);
//     if (isActiveFilter) {
//       setActiveFilters((prevFilters) =>
//         prevFilters.filter((f) => {
//           return f !== filter;
//         })
//       );
//     } else {
//       setActiveFilters((prevFilters) => [...prevFilters, filter]);
//     }
//   };
//   console.log(activeFilters);
//   // return (
//   //   {map()}
//   // );
// }

// export default Filters;
