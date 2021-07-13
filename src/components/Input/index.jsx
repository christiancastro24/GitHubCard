import { ButtonBlue, ButtonRed, ChangeInput } from "./styles"

export const Input = ({ inputValue, setInputValue, handleSearchingRepo }) => {
    return (
        <div>
            <ChangeInput 
                type="text"
                value={inputValue}
                onChange={evt => setInputValue(evt.target.value)} placeholder="Procure seu repositório..." />
                <div>
                 <ButtonBlue onClick={handleSearchingRepo}>Pesquisar</ButtonBlue>
                 <ButtonRed onClick={() => setInputValue('')}>Limpar campo</ButtonRed>     
                </div>
        </div>
    )
}