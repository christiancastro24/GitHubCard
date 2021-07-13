import "../../App.css"
import { Container, Image, FullName, Description } from "./styles"

export const ShowCards = ({ firstRepo, secondRepo }) => {
    return (
        <div>

      <Container>
        <Image src={firstRepo} alt={firstRepo}></Image>
          <div>
              <FullName>{secondRepo.full_name}</FullName>
              <Description>{secondRepo.description}</Description>
              <a href={secondRepo.svn_url}>Link para o repositório</a>
          </div>
        </Container>
        </div>
    )
}