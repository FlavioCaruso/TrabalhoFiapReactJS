import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const integrants = [
  {
    id: 1,
    name: "Flavio Caruso",
    image: "../img/integrants/flavio.jpeg",
    rm: "346055",
    summary:
      "Flávio Caruso é formado em Jogos Digitais e está cursando Mobile Development na FIAP. É desenvolvedor Front-end no Instituto Butantan desde 2016 onde começou sua carreira em desenvolvimento.",
    linkedin: "https://www.linkedin.com/in/fbcaruso/",
    github: "https://github.com/FlavioCaruso",
  },
  {
    id: 2,
    name: "Marcelo Mussi",
    image: "../img/integrants/Marcelo.jpeg",
    rm: "346153",
    summary:
      "Desenvolvedor a 15 anos, atua com projetos web e mobile usando tecnologias ReactJs, Php e Flutter",
    linkedin: "https://www.linkedin.com/in/marcelo-mussi/",
    github: "https://github.com/prodevcom",
  },
  {
    id: 2,
    name: "Marinaldo Silva",
    image: "../img/integrants/marinaldo.jpeg",
    rm: "345397",
    summary:
      "Marinaldo Ferreira, 27 anos. Atualmente trabalha como Analista de Suporte, tem formação em Ciência da Computação pela Universidade UNIP e cursa MBA em Mobile Development na FIAP.",
    linkedin: "https://www.linkedin.com/in/marinaldof/",
    github: "https://github.com/MarinaldoF",
  },
  {
    id: 2,
    name: "Tiago Vaz",
    image: "../img/integrants/tiago.jpeg",
    rm: "345263",
    summary:
      "Especialista em Qualidade de Software a 18 anos, atuando em diversas frentes de projetos e tecnologias",
    linkedin: "https://www.linkedin.com/in/tiagovaz/",
    github: "https://github.com/tiago-vaz",
  },
];

export function Cards() {
  const cards = integrants.map((integrant) => (
    <div className="col-lg-3 mt-3">
      <Card className="card">
        <img src={integrant.image} class="card-img-top" width="100%" />
        <div
          class="card-body px-2"
          style={{
            minHeight: "260px",
          }}
        >
          <div>
            <h5 class="card-title">{integrant.name}</h5>
            <h6 class="card-title">RM: {integrant.rm}</h6>
          </div>
          <p class="card-text">{integrant.summary}</p>
        </div>
        <div
          class="card-footer px-2"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            fontSize: "26px",
          }}
        >
          <a href={integrant.linkedin} target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href={integrant.github} target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </Card>
    </div>
  ));

  return cards;
}
