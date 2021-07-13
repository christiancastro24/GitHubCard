import './App.css';
import { useState } from 'react'
import { ShowCards } from './components/ShowCards';
import { Input } from './components/Input';


const App = () => {

    const [firstRepo, setFirstRepo] = useState([])
    const [secondRepo, setSecondRepo] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [error, setError] = useState("")

  const handleSearchingRepo = () => {
      fetch(`https://api.github.com/repos/${inputValue}`)
      .then(res => res.json())
      .then(res => {setSecondRepo(res);  setError(''); setFirstRepo(res.owner.avatar_url)})
      .catch(err => setError(err))
  }

  return (
    <div className="App">
      <h1>Github Card</h1>

        <Input 
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSearchingRepo={handleSearchingRepo}
        />

        {!error ?
        <ShowCards 
        firstRepo={firstRepo} 
        secondRepo={secondRepo} 
          /> :
          <h5 className="sub-dontExist">Não existe este repositório...</h5> 
        }

    </div>
  );
}

export default App;
