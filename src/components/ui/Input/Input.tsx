import React from 'react';

// O tipo das props continua o mesmo
type InputProps = React.ComponentProps<'input'>;

// O objeto de estilo agora segue o padrão do React
const inputStyle: React.CSSProperties = {
  boxSizing: 'border-box',
  width: '100%',
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '5px'
};

export function Input(props: InputProps) {
  // Passamos o objeto de estilo diretamente
  return <input style={inputStyle} {...props} />;
}