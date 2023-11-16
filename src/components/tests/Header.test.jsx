import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Header from "../Header";

describe("Header component", () => {
  it("renders without errors", () => {
    render(<Header />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders logo", () => {
    render(<Header />);
    expect(screen.getByAltText(/Page Header Logo/i)).toBeInTheDocument();
  });
});
