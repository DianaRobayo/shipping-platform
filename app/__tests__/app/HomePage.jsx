import { fireEvent, render, screen } from '@testing-library/react'
import Navigation from '@/components/Navigation';

describe("<Navigation />", () => {
  it("renders the Navigation component", () => {
    render(<Navigation />)
    const textElement = screen.getByText(/Tracking/i);
    const selectElement = screen.getByText(/Terminal/i);
    expect(textElement).toBeInTheDocument();
    expect(selectElement).toBeInTheDocument();
  });

  test("show terminals when the button is clicked", () => {
    render(<Navigation />)
    const buttonElement = screen.getByText(/Terminal/i);
    fireEvent.click(buttonElement);

    const textElement = screen.getByText(/BOG/i);
    expect(textElement).toBeInTheDocument();
  });
});