// import React, { Component } from 'react'
// import { Dropdown, Menu } from 'semantic-ui-react'

// export default class MenuExampleVerticalDropdown extends Component {
//   state = { activeItem: 'account' }

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

//   render() {
//     const { activeItem } = this.state

//     return (
//       <Menu secondary vertical>
//         <Menu.Item
//           name='account'
//           active={activeItem === 'account'}
//           onClick={this.handleItemClick}
//         />
//         <Menu.Item
//           name='settings'
//           active={activeItem === 'settings'}
//           onClick={this.handleItemClick}
//         />
//         <Dropdown item text='Display Options'>
//           <Dropdown.Menu>
//             <Dropdown.Header>Text Size</Dropdown.Header>
//             <Dropdown.Item>Small</Dropdown.Item>
//             <Dropdown.Item>Medium</Dropdown.Item>
//             <Dropdown.Item>Large</Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>
//       </Menu>
//     )
//   }
// }
import { useState } from "react";
import { Dropdown, Menu } from "semantic-ui-react";

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
