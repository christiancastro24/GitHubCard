import { useCardsProvider } from "../../Providers/DisplayCards";
import { Container } from "./styles";

export const Input = () => {
  const { handleSearchingRepo, inputValue, setInputValue } = useCardsProvider();
  return (
    <Container>
      <h1>Compasso Hub</h1>
      <input type="text" value={inputValue} onChange={evt => setInputValue(evt.target.value)} />
      <button disabled={!inputValue} onClick={() => handleSearchingRepo(inputValue)}>Pesquisar</button>
    </Container>
  )
}