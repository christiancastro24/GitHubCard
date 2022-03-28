import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";

const DisplayCardsContext = createContext();

export const DisplayProvider = ({ children }) => {
  const [userData, setUserData] = useState([])
  const [repoData, setRepoData] = useState([])
  const [repoStarred, setRepoStarred] = useState([])
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
        setUserData(res.data);
        setAllData(res.data)
        setName(res.data.login);
        handleClearDisplay();
        setError(false)
        setDisplay(true)
        setLoading(false)
      })
      .catch(_ => {
        setError(true);
        handleClearDisplay();
        setUserData([]);
        setDisplay(false)
        setLoading(false)
      })
  }

  const handleSearchRepos = () => {
    api.get(`/${name}/repos`)
      .then(res => { setRepoData(res.data); setRepoStarred([]); })
      .catch(_ => { setError(true); })
  }

  const handleSearchStarred = () => {
    api.get(`/${name}/starred`)
      .then(res => { setRepoStarred(res.data); setRepoData([]); })
      .catch(_ => { setError(true); })
  }

  const handleClearDisplay = () => {
    setRepoStarred([]);
    setRepoData([]);
    setInputValue("");
  }

  return (
    <DisplayCardsContext.Provider value={{
      handleSearchRepos, handleSearchStarred,
      handleSearchingRepo, setInputValue, loading,
      userData, error, repoData, allData,
      repoStarred, inputValue, display, name,
    }}>
      {children}
    </DisplayCardsContext.Provider>
  )
}

export const useCardsProvider = () => useContext(DisplayCardsContext)





