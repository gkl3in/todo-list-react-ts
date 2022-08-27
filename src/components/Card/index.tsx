import './styles.css';

type CardProps = {
  title: string;
}

export default function Card({ title }: CardProps) {
  return (
    <div className="card">
      <h2>Fazer caféé</h2>

      <div className="card-buttons">
        <button>Completar</button>
        <button>Deletar</button>
      </div>
    </div>
  );
}