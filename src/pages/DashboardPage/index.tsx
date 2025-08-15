import './styles.css';

export function DashboardPage() {
    return (
        <div className="dashboard-container">
            <h1>Bem-vindo ao Portal Mazure!</h1>
            <p>Aplicações disponíveis:</p>
            <div className="apps-grid">
                <div className="app-card">Monitoramento de Estações</div>
                <div className="app-card">Painel Técnico</div>
                <div className="app-card">Gestão de Atividades</div>
            </div>
        </div>
    );
}