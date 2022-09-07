import React, { ReactComponentElement, ReactElement, ReactNode } from "react";
import { Route } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { JsxElement } from "typescript";

function Heading({ title }: { title: string }) {
  return <h2>{title}</h2>;
}

function SelectBreed() {
  const [value, setValue] = React.useState<String>("Select Breed");
  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("Hello");
    const value = e.target.value;
    console.log(value);
    setValue(value);
  };

  const handleSelect = () => {};

  return (
    <Dropdown>
      <DropdownButton
        variant="success"
        id="dropdown-basic"
        title={value}
        onSelect={selectChange(value)}
      >
        <Dropdown.Item valgiotue="action-1">Action</Dropdown.Item>
        <Dropdown.Item value="action-2">Another action</Dropdown.Item>
        <Dropdown.Item value="action-3">Something else</Dropdown.Item>
      </DropdownButton>
    </Dropdown>
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
