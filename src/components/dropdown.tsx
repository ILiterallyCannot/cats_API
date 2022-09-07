import React, { useEffect, useState } from "react";

type DropDownProps = {
  breeds: string[];
  showDropDown: boolean;
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
  const onClickHandler = (breeds: string): void => {
    breedSelection(breeds);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

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
