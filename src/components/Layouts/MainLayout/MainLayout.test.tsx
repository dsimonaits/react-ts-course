import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import pretty from "pretty"; // Import the 'pretty' library

describe("MainLayout", () => {
  it("renders MainLayout component", () => {
    const { container } = render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>
    );

    expect(container).toBeInTheDocument();

    console.log(pretty(container.innerHTML, { ocd: true }));
  });
});
