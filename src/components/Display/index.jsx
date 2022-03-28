import { useCardsProvider } from "../../Providers/DisplayCards/index"
import { Container } from "./styles";
import userAlternative from "../../assets/images/user.png"

export const Display = () => {

  const { handleSearchRepos, handleSearchStarred, userData,
    error, repoData, repoStarred, display, loading } = useCardsProvider();
  return (
    <Container>
      {display &&
        <>
          <div className="content">
            <img src={userData.avatar_url || userAlternative} alt="avatar-img" />
            <h4>{userData.login}</h4>
            <h4>Repositórios Publicos: <span>{userData.public_repos}</span></h4>
          </div>
          <div className="btn-repo-starred">
            {userData.public_repos > 0 ?
              <button onClick={handleSearchRepos}>Repositórios</button>
              :
              <button disabled={true} title="Este usuário não possui repositórios públicos" onClick={handleSearchRepos}>Repositórios</button>
            }
            {" "}
            <button onClick={handleSearchStarred}>Estelados</button>
          </div>
        </>
      }

      <div>
        {error && <h3>Usuário não encontrado :( </h3>}
      </div>

      <div>
        {loading && <h4>Carregando...</h4>}
      </div>

      {display &&
        <div className="divider"></div>
      }

      {repoData.map(res => (
        <div key={res.name} className="repos">
          <h4>{res.name}</h4>
          <a href={res.html_url} target="_blank" rel="noreferrer">{res.html_url}</a>
        </div>
      ))}

      {repoStarred.map(res => (
        <div key={res.name} className="starred">
          <h4>{res.name}</h4>
          <a href={res.html_url} target="_blank" rel="noreferrer">{res.html_url}</a>
        </div>
      ))}
    </Container>
  )
}
