import React from 'react';
import './Button.css'; // Importa o arquivo de estilos que acabamos de criar

// O tipo das props continua o mesmo
type ButtonProps = React.ComponentProps<'button'> & {
  isLoading?: boolean;
};

export function Button({ children, isLoading, ...props }: ButtonProps) {
  return (
    <button
      // Aplicamos a classe CSS
      className="custom-button"
      // A prop 'disabled' é herdada de React.ComponentProps<'button'>
      // e o CSS cuidará do estilo
      disabled={isLoading}
      {...props}
    >
      {isLoading ? 'Carregando...' : children}
    </button>
  );
}