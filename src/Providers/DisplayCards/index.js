import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";

const DisplayCardsContext = createContext();

export const DisplayProvider = ({ children }) => {
  const [userData, setUserData] = useState([])
  const [repoData, setRepoData] = useState([])
  const [repoStarred, setRepoStarred] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [name, setName] = useState("")
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [display, setDisplay] = useState(false)

  const handleSearchingRepo = async () => {
    setLoading(true)
    try {
      const data = await api.get(`/${inputValue}`)
      setUserData(data.data);
      setName(data.data.login);
      handleClearDisplay();
      setError(false)
      setDisplay(true)
      setLoading(false)
    }
    catch {
      setError(true);
      handleClearDisplay();
      setUserData([]);
      setDisplay(false)
      setLoading(false)
    }
  }

  const handleSearchRepos = async () => {
    setLoading(true)
    try {
      const data = await api.get(`/${name}/repos`)
      setRepoData(data.data);
      setError(false)
      setRepoStarred([]);
      setLoading(false)
    } catch {
      setError(true)
      setLoading(false)
    }
  }

  const handleSearchStarred = async () => {
    setLoading(true)
    try {
      const data = await api.get(`/${name}/starred`)
      setRepoStarred(data.data);
      setRepoData([]);
      setLoading(false)
      setError(false)

    } catch {
      setError(true)
      setLoading(false)
    }
  }

  const handleClearDisplay = () => {
    setRepoStarred([]);
    setRepoData([]);
    setInputValue("");
  }

  return (
    <DisplayCardsContext.Provider value={{
      handleSearchRepos, handleSearchStarred,
      handleSearchingRepo, setInputValue,
      loading, userData, error, repoData,
      repoStarred, inputValue, display, name,
    }}>
      {children}
    </DisplayCardsContext.Provider>
  )
}

export const useCardsProvider = () => useContext(DisplayCardsContext)





