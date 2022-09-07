import React, { useState } from "react";
import { Route } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropDown from "./dropdown";
import { JsxElement } from "typescript";
import { AnyARecord } from "dns";

function Heading({ title }: { title: string }) {
  return <h2>{title}</h2>;
}

function SelectBreed() {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectBreed, setSelectBreed] = useState<string>("");
  const breeds = () => {
    return ["breed_1", "breed_2"];
  };

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
            breeds={breeds()}
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
