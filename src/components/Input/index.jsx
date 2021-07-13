export const Input = ({ inputValue, setInputValue, handleSearchingRepo }) => {
    return (
        <div>
            <input 
                type="text"
                value={inputValue}
                onChange={evt => setInputValue(evt.target.value)} placeholder="Procure seu repositório..."/>
                 <button onClick={handleSearchingRepo}>Pesquisar</button>
                 <button onClick={() => setInputValue('')}>Limpar campo</button>     
        </div>
    )
}