import { useState } from "react";

const TodoForm = () => {
    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    const handleSumit = (e) => {
        e.preventDefault()
        if(!value || !category) return
        setValue("")
        setCategory("")
    }

    return (
    <div className="todo-form">
        <h2>Criar Tarefa:</h2>
        <form onSubmit={handleSumit}>
            <input 
            type="text" 
            placeholder="Digite o titulo" 
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estutos">Estutos</option>
            </select>
            <button type="submit">Criar tarefa</button>
        </form>
    </div>
    )
}

export default TodoForm