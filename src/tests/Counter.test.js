// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
// import the Counter component here
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument("Counter");
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const countVar = screen.getByTestId('count');
  expect(Number(countVar.textContent)).toEqual(0);
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const countVar2 = screen.getByTestId('count');
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  expect(Number(countVar2.textContent)).toEqual(1);
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const countVar3 = screen.getByTestId('count');
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  expect(Number(countVar3.textContent)).toEqual(-1);
});