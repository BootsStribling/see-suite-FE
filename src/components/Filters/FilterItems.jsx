import { useState } from "react";

function FilterItems(props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const renderItem = (item) => {
    return <li key={item} onClick={() => props.handleFilter(item)}>{item}</li>;
  };

  return (
    <div>
      {props.items.map((item) => {
        const isParent = !!item.parent;
        if (isParent) {
          return (
            <div key={item.label}>
              {item.parent}
              <div onClick={handleClick}>
                {item.label}
                {isOpen && <ul>{item.items.map(renderItem)}</ul>}
              </div>
            </div>
          );
        }

        return (
          <div onClick={handleClick} key={item.label}>
            {item.label}
            {isOpen && <ul>{item.items.map(renderItem)}</ul>}
          </div>
        );
      })}
    </div>
  );
}

export default FilterItems;
