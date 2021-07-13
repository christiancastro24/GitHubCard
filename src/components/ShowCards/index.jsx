import "../../App.css"

export const ShowCards = ({ firstRepo, secondRepo }) => {
    return (
        <div>

      <div className="container-items">

        <img src={firstRepo} alt={firstRepo} /> 
          <div className="items">
              <h4>{secondRepo.full_name}</h4>
              <h5>{secondRepo.description}</h5>
              <a href={secondRepo.svn_url}>Link para o repositório</a>
          </div>
      </div>
        </div>
    )
}