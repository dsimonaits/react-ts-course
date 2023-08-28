import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import cl from "./Container.module.css";

import Container from "./Container";

describe("Container", () => {
  it("renders children", () => {
    const customStyles = "custom-styles";
    const { getByText, container } = render(
      <Container styles={customStyles}>
        <div>Child content</div>
      </Container>
    );

    expect(getByText("Child content")).toBeInTheDocument();

    const defaultClassName = container.querySelector(`.${cl.container}`);
    const customStylesClass = container.querySelector(`.${cl[customStyles]}`);

    expect(defaultClassName).toBeInTheDocument();
    expect(customStylesClass).toBeInTheDocument();
  });
});
