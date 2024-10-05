// Importando React
const { useState } = React;

// Componente ListaDeTarefas
function ListaDeTarefas({ tarefas, concluirTarefa, removerTarefa }) {
  return (
    <div>
      {tarefas.map((tarefa, index) => (
        <div className="tarefa" key={index}>
          <span className={tarefa.status === 'concluída' ? 'concluida' : 'pendente'}>
            {tarefa.nome}
          </span>
          <button onClick={() => alert(`Nome: ${tarefa.nome}\nDescrição: ${tarefa.descricao}\nStatus: ${tarefa.status}`)}>
            Detalhes
          </button>
          <button onClick={() => concluirTarefa(index)}>Concluir</button>
          <button onClick={() => removerTarefa(index)}>Remover</button>
        </div>
      ))}
    </div>
  );
}

// Componente principal App
function App() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (e) => {
    e.preventDefault();
    const novaTarefa = { nome, descricao, status: 'pendente' };
    setTarefas([...tarefas, novaTarefa]);
    setNome('');
    setDescricao('');
  };

  const concluirTarefa = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas[index].status = 'concluída';
    setTarefas(novasTarefas);
  };

  const removerTarefa = (index) => {
    setTarefas(tarefas.filter((_, i) => i !== index));
  };

  return (
    <div>
      <form onSubmit={adicionarTarefa}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Nome da Tarefa"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <textarea
          className="form-control mb-2"
          placeholder="Descrição da Tarefa"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        ></textarea>
        <button type="submit" className="btn btn-success w-100">Adicionar Tarefa</button>
      </form>
      <ListaDeTarefas tarefas={tarefas} concluirTarefa={concluirTarefa} removerTarefa={removerTarefa} />
    </div>
  );
}

// Renderizando o componente App dentro da div root
ReactDOM.render(<App />, document.getElementById('root'));
