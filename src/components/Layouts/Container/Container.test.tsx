import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import pretty from "pretty";
import Container from "./Container";

describe("Container", () => {
  it("renders children", () => {
    const customStyles = "custom-styles";
    const { getByText } = render(
      <Container styles={customStyles}>
        <div>Child content</div>
      </Container>
    );

    expect(getByText("Child content")).toBeInTheDocument();
  });

  it("applies custom styles", () => {
    const customStyles = "custom-styles";

    const { container } = render(
      <Container styles={customStyles}>
        <div>Child content</div>
      </Container>
    );

    expect(container.firstChild).toHaveClass("custom-styles");

    console.log(pretty(container.innerHTML, { ocd: true }));
  });
});
