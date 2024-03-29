import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import Slideshow from "../Slideshow";
import { BrowserRouter } from "react-router-dom";

const images = [
  { url: "src/assets/181994333_1883185495167039_3378746544883127820_n.jpg" },
  { url: "src/assets/123434076_1727404487411808_6692900620356230503_n.jpg" },
  { url: "src/assets/188771268_1898763246942597_110904102917328419_n.jpg" },
  { url: "src/assets/122959147_1727404594078464_1013389762917053382_n.jpg" },
  { url: "src/assets/123225339_1727404550745135_6616891483531086405_n.jpg" },
];

vi.useFakeTimers();

describe("Slideshow Component", () => {
  it("renders without errors", () => {
    render(
      <BrowserRouter>
        <Slideshow />
      </BrowserRouter>,
    );
  });

  it("renders all images in array", async () => {
    render(
      <BrowserRouter>
        <Slideshow />
      </BrowserRouter>,
    );

    images.forEach((image, index) => {
      const imageElement = screen.getByAltText(`Slideshow Image ${index + 1}`);
      expect(imageElement).toBeInTheDocument();

      act(() => {
        vi.advanceTimersByTime(4000); // Allow time for rendering of next image
      });
    });
  });

  it("has correct src for each image", async () => {
    render(
      <BrowserRouter>
        <Slideshow />
      </BrowserRouter>,
    );

    images.forEach((image, index) => {
      const imageElement = screen.getByAltText(`Slideshow Image ${index + 1}`);
      expect(imageElement).toHaveAttribute("src", image.url);

      act(() => {
        vi.advanceTimersByTime(4000); // Allow time for rendering of next image
      });
    });
  });

  it("renders five nav buttons", () => {
    render(
      <BrowserRouter>
        <Slideshow />
      </BrowserRouter>,
    );

    const navButtons = screen.getAllByTestId(/nav-button/i);
    expect(navButtons).toHaveLength(5);
  });

  it("nav buttons renders correct image", () => {
    render(
      <BrowserRouter>
        <Slideshow />
      </BrowserRouter>,
    );
    const user = userEvent.setup();

    images.forEach(async (image, index) => {
      const navButton = screen.getByTestId(`nav-button-${index + 1}`);

      await user.click(navButton);

      const expectedImage = screen.getByAltText(`Slideshow Image ${index + 1}`);
      expect(expectedImage).toBeInTheDocument();
    });
  });
});
