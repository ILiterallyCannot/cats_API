import React, { ReactElement } from "react";
import { Route } from "react-router-dom";
import Input from "./input";

const defaultContainerProps = {
  heading: <strong>Cat Browser</strong>,
};
type ContainerProps = typeof defaultContainerProps;
function Container({ heading }: ContainerProps): ReactElement {
  return (
    <div>
      <h1>{heading}</h1>
    </div>
  );
}

Container.defaultProps = defaultContainerProps;

function Main() {
  return (
    <div>
      <Container />
      <Input />
    </div>
  );
}

export default Main;
