import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '../../components/ui/Button/Button';
import { Input } from '../../components/ui/Input/Input';
import './styles.css';

export function LoginPage() {
  const navigate = useNavigate();

  // Hooks de estado para o formulário
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    console.log('Enviando dados:', { username, password });

    // Simulação de chamada de API
    setTimeout(() => {
      if (username === 'admin' && password === '1234') {
        alert('Login bem-sucedido!');
        // Futuramente, aqui você salvaria o token e navegaria para o dashboard
        navigate('/dashboard')
      } else {
        alert('Usuário ou senha inválidos.');
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ display: 'contents' }}>
        <div className="input-group">
          <label htmlFor="username">Usuário</label>
          <Input
            id="username"
            type="text"
            placeholder="Digite seu usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Senha</label>
          <Input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <div className="links">
          <a href="#">Esqueceu a senha?</a>
        </div>
        <Button type="submit" isLoading={isLoading}>
          Entrar
        </Button>
      </form>
    </div>
  );
}