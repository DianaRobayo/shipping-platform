import { render, screen, fireEvent } from '@testing-library/react';
import SearchGuide from '@/components/SearchGuide';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('<SearchGuide />', () => {
  it('search number guide', () => {
    const mockPush = jest.fn();
    useRouter.mockImplementation(() => ({
      push: mockPush,
    }));

    render(<SearchGuide />);

    // Simular ingreso en el campo de búsqueda
    const input = screen.getByPlaceholderText(/Buscar n/i);
    fireEvent.change(input, { target: { value: '36390004411' } });
    expect(input).toBeInTheDocument();
  });

  // it('should render and navigate correctly', () => {
  //   const mockPush = jest.fn();
  //   useRouter.mockImplementation(() => ({
  //     push: mockPush,
  //   }));

  //   render(<SearchGuide />);

  //   const input = screen.getByPlaceholderText(/Buscar n/i);
  //   fireEvent.change(input, { target: { value: '36390004411' } });

  //   // Simular el envío del formulario
  //   const button = screen.getByRole('button', { name: /Gu/i });
  //   fireEvent.click(button);

  //   // Asegúrate de que mockPush fue llamado con la ruta esperada
  //   expect(mockPush).toHaveBeenCalledWith('./detail/36390004411');
  // });
});
