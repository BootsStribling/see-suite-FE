import { useState } from "react";
import FilterItems from "./FilterItems";

function Filter(props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div>
      <div onClick={handleClick}>
        {props.title}
        {isOpen ? "-" : "+"}
      </div>
      {isOpen&&<FilterItems items={props.items} handleFilter={props.handleFilter} />}
    </div>
  );
}

export default Filter;
