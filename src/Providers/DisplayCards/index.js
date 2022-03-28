import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";

const DisplayCardsContext = createContext();

export const DisplayProvider = ({ children }) => {
  const [firstRepo, setFirstRepo] = useState([])
  const [secondRepo, setSecondRepo] = useState([])
  const [thirdRepo, setThirdRepo] = useState([])
  const [allData, setAllData] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [name, setName] = useState("")
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [display, setDisplay] = useState(false)

  const handleSearchingRepo = () => {
    setLoading(true)
    api.get(`/${inputValue}`)
      .then(res => {
        setFirstRepo(res.data);
        setAllData(res.data)
        setName(res.data.login);
        handleClearDisplay();
        setError(false)
        setDisplay(true)
        setLoading(false)
        console.log(res.data)
      })
      .catch(_ => {
        setError(true);
        handleClearDisplay();
        setFirstRepo([]);
        setDisplay(false)
        setLoading(false)
      })
  }

  const handleSearchRepos = () => {
    api.get(`/${name}/repos`)
      .then(res => { setSecondRepo(res.data); setThirdRepo([]); })
      .catch(_ => { setError(true); })
  }

  const handleSearchStarred = () => {
    api.get(`/${name}/starred`)
      .then(res => { setThirdRepo(res.data); setSecondRepo([]); })
      .catch(_ => { setError(true); })
  }

  const handleClearDisplay = () => {
    setThirdRepo([]);
    setSecondRepo([]);
    setInputValue("");
  }

  return (
    <DisplayCardsContext.Provider value={{
      handleSearchRepos, handleSearchStarred,
      handleSearchingRepo, setInputValue, loading,
      firstRepo, error, secondRepo, allData,
      thirdRepo, inputValue, display, name,
    }}>
      {children}
    </DisplayCardsContext.Provider>
  )
}

export const useCardsProvider = () => useContext(DisplayCardsContext)





