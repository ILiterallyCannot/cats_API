import React, { useState } from "react";
import { Route } from "react-router-dom";
// You are not using this Dropdown anywhere. And if you're gonna have your own component for the Dropdown,
// consider giving it its own name instead of the only difference being the camel casing in your own component.
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
//Component diles should begin with a capital letter and be named in the same way as the actual component.
//So in this case the file name would be DropDown (note the camel case)
import DropDown from "./dropdown";
import { JsxElement } from "typescript";
import { AnyARecord } from "dns";

//All components should be in their own files and exported from there and imported in the file that is using them.
// So this input.tsx file should only contain the following:
/* function Input() {
  return (
    <div>
      <Heading title="Breed"></Heading>
      <SelectBreed />
    </div>
  );
}

export default Input; */

//Move this into its own Heading.tsx file
function Heading({ title }: { title: string }) {
  return <h2>{title}</h2>;
}
// Why use the old function declarement? Prefer the arrow function as you have done in dropdown.tsx
//Move this component into its own SelectBreed.tsx file
function SelectBreed() {
  // you have this state with the same name in two files. It's confusing for a human to understand what you wanted and will most
  // definitely lead to computer having problems too. No one can never know which one you meant in which use case
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectBreed, setSelectBreed] = useState<string>("");
  // breeds is an array, not a function that returns an array. So const breeds = ['breed1', 'breed2']
  const breeds = () => {
    return ["breed_1", "breed_2"];
  };

  // This toggleDropDown and dismissHandler together is confusing. You are doing almost the same thing in two functions.
  // Think what you want to achieve. If you just want to toggle the state, the toggleDropdown should be enough
  // When you look into this and maybe redo the whole dropdown system, really try to think what each click event should do
  // And try not to call and set the same state in many places. It's hard to read and understand and in a working project
  // would lead to difficulties in maintaining the project. Prefer using one function over and over that sets the state

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  /**
   * Hide the drop down menu if click occurs
   * outside of the drop-down element.
   *
   * @param event  The mouse event
   */
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  /**
   * Callback function to consume the
   * breed name from the child component
   *
   * @param breed  The selected breed
   */
  const breedSelection = (breed: string): void => {
    setSelectBreed(breed);
  };

  return (
    <>
      <div className="announcement">
        <div>
          {selectBreed
            ? `You selected ${selectBreed} for your travel destination`
            : "Select your travel destination"}
        </div>
      </div>
      <DropdownButton
        title={selectBreed ? "Select: " + selectBreed : "Select ..."}
        variant="success"
        className={showDropDown ? "active" : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        {showDropDown && (
          <DropDown
            // Because breeds needs to be an array, this will not be a call
            breeds={breeds()}
            // Why is this false instead of showDropDown boolean? If it is set to false, the showDropDown boolean you have passed
            //from dropdown.tsx will always be false. Do you want it to be always false? In that case, there would be no need to pass it on
            // You could just use it in the component file
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            breedSelection={breedSelection}
          />
        )}
      </DropdownButton>
    </>
  );
}

function Input() {
  return (
    <div>
      <Heading title="Breed"></Heading>
      <SelectBreed />
    </div>
  );
}

export default Input;
