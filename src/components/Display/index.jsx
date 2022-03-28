import { useCardsProvider } from "../../Providers/DisplayCards/index"
import { Container } from "./styles";
import userAlternative from "../../assets/images/user.png"

export const Display = () => {

  const { handleSearchRepos, handleSearchStarred, firstRepo,
    error, secondRepo, thirdRepo, display, loading } = useCardsProvider();
  return (
    <Container>
      {display &&
        <>
          <div className="content">
            <img src={firstRepo.avatar_url || userAlternative} alt="avatar-img" />
            <h4>{firstRepo.login}</h4>
            <h4>Repositórios Publicos: <span>{firstRepo.public_repos}</span></h4>
          </div>
          <div className="btn-repo-starred">
            {firstRepo.public_repos > 0 ?
              <button onClick={handleSearchRepos}>Repos</button>
              :
              <button disabled={true} title="Este usuário não possui repositórios públicos" onClick={handleSearchRepos}>Repos</button>
            }
            {" "}
            <button onClick={handleSearchStarred}>Starred</button>
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

      {secondRepo.map(res => (
        <div key={res.name} className="repos">
          <h4>{res.name}</h4>
          <a href={res.html_url} target="_blank">{res.html_url}</a>
        </div>
      ))}

      {thirdRepo.map(res => (
        <div key={res.name} className="starred">
          <h4>{res.name}</h4>
          <a href={res.html_url} target="_blank">{res.html_url}</a>
        </div>
      ))}
    </Container>
  )
}
