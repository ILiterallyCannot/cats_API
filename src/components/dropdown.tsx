import React, { useEffect, useState } from "react";

type DropDownProps = {
  breeds: string[];
  showDropDown: boolean;
  // toggelDropDown is not being used in the DropDown component. It is declared here as a prop,
  // but it's not passed into the actual component or used in the component so it is not combined with any click event => it
  // is not doing anything.
  // also this is not the correct way to declare a function type. Use () => void or () => string etc.
  toggleDropDown: Function;
  breedSelection: Function;
};

const DropDown: React.FC<DropDownProps> = ({
  breeds,
  breedSelection,
}: DropDownProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  /**
   * Handle passing the breed name
   * back to the parent component
   *
   * @param breed  The selected breed
   */

  // Are you sure about this breeds param? Should it be breed maybe? I mean I don't know, but be consistent with naming: breeds
  // is not a string, breeds is an arrays of strings and you probably don't want to set the breed to all breeds.
  const onClickHandler = (breeds: string): void => {
    breedSelection(breeds);
  };
  // What was the idea here? This is listening to the showDropDown boolean and always setting it to true. Also again, you are
  // setting the showDropDown in too many places
  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  // If you want to use the bootstrap dropdown, you can use it here in the return, remeber to import it in this file.
  // For example
  /* return (
    <>
      <Dropdown (the bootstrap one)>
        <{breeds.map} .............
      </Dropdown>
    </>
  )*/
  // And then your this file and its component could be called CoreysDropdown or something like that

  return (
    <>
      <div className={showDropDown ? "dropdown" : "dropdown active"}>
        {breeds.map((breed: string, index: number): JSX.Element => {
          return (
            <p
              key={index}
              onClick={(): void => {
                onClickHandler(breed);
              }}
            >
              {breed}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default DropDown;
