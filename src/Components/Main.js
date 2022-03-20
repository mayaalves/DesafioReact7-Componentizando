import React, { Component } from "react";
import styled from "styled-components";

const Boxgeral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Tittle = styled.h1`
font-size: 6vh;
color: #ffffff;
padding: 3vh;
`

const BoxDialogo = styled.div`
  width: 170vh;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Pic = styled.img`
  width: 40vh;
  height: 40vh;
  border-radius: 200px;
  padding: 5vh;
  &:hover {
    transform: scale(1.2);
  }
`;
const NomeBanda = styled.h3`
  color: #fff;
  padding: 3vh;
  &:hover {
    color: #000;
    border-radius: 50px;
    box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.07),
      6.7px 6.7px 5.3px rgba(0, 0, 0, 0.05),
      12.5px 12.5px 10px rgba(0, 0, 0, 0.042),
      22.3px 22.3px 17.9px rgba(0, 0, 0, 0.035),
      41.8px 41.8px 33.4px rgba(0, 0, 0, 0.028),
      100px 100px 80px rgba(0, 0, 0, 0.02);
  }
`;
const Paragrafo = styled.p`
  color: #fff;
  padding: 4vh;
  text-align: justify;
`;
const Music = styled.iframe`
width: 40vh;
height: 12vh;
border: none;
box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.07),
      6.7px 6.7px 5.3px rgba(0, 0, 0, 0.05),
      12.5px 12.5px 10px rgba(0, 0, 0, 0.042),
      22.3px 22.3px 17.9px rgba(0, 0, 0, 0.035),
      41.8px 41.8px 33.4px rgba(0, 0, 0, 0.028),
      100px 100px 80px rgba(0, 0, 0, 0.02);
`

class Main extends Component {
  state = {
    Bandas: [
      {
        promoBanda:
          "https://i.pinimg.com/originals/03/cd/0f/03cd0fdb8412fba8ffeb7c60932440c6.jpg",
        nomeBanda: "No Doubt",
        sobreBanda:
          "No Doubt é uma banda estadunidense de rock, que iniciou seu trabalho como cover da banda inglesa Madness, em 1986. Seus integrantes são Gwen Stefani (vocais), Tom Dumont (guitarras), Tony Kanal (baixo elétrico), e Adrian Young (baterias).",
          musica:"https://open.spotify.com/embed/track/5lWRaa0fBxDE5yU91npPq7?utm_source=generator&theme=0"
      },
      {
        promoBanda: "https://whiplash.net/imagens_promo/jinjer_promo.jpg",
        nomeBanda: "Jinjer",
        sobreBanda:
          "Jinjer é uma banda ucraniana de metal progressivo formada em 2009. O seu estilo músical incorpora elementos do death metal, metalcore e nu-metal. Ao explicar suas influências, a banda tem relacionado seu som ao de outras bandas de metal como Opeth, Karnivool e Textures, além de grupos de outros gêneros como R&B, soul e hip-hop. Um exemplo citado pela banda é o Cypress Hill.",
          musica: "https://open.spotify.com/embed/track/5t8NXa2fugcTPsTfhVILmS?utm_source=generator&theme=0"
      },
      {
        promoBanda:
          "https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/1/1/e/3/11e3ec9d874d4892e40b6d826ed52689.jpg",
        nomeBanda: "4 Non Blondes",
        sobreBanda:
          "4 Non Blondes foi uma banda de rock alternativo norte-americana formada em 1989 em São Francisco, com Linda Perry (vocal), Roger Rocha (guitarra), Christa Hillhouse (baixo), Dawn Richardson (bateria).",
          musica:"https://open.spotify.com/embed/track/0jWgAnTrNZmOGmqgvHhZEm?utm_source=generator&theme=0"
      },
      {
        promoBanda:
          "https://i.scdn.co/image/a82245ec62ee9606ab456d787f1f7fcd788e6a10",
        nomeBanda: "The Cranberries",
        sobreBanda:
          "The Cranberries foi uma banda de rock formada em Limerick, Irlanda, em 1989. A formação original do grupo consistia na vocalista Dolores O'Riordan, o guitarrista Noel Hogan, o baixista Mike Hogan e o baterista Fergal Lawler. Embora amplamente associado com o rock alternativo, o som da banda também incorpora indie pop, post-punk, folk e elementos de dream pop.",
          musica:"https://open.spotify.com/embed/track/0gEyKnHvgkrkBM6fbeHdwK?utm_source=generator&theme=0"
      },
      {
        promoBanda:
          "https://rollingstone.uol.com.br/media/_versions/legacy/2008/img_3968_a-the-runaways-foi-a-primeira-banda-formada-so-por-mulheres_widelg.jpg",
        nomeBanda: "The Runaways",
        sobreBanda:
          "The Runaways foi uma banda de rock dos Estados Unidos. A banda tornou-se famosa por ser uma banda composta somente por mulheres que tocavam rock and roll. Entre suas canções mais conhecidas estão Cherry Bomb, Queens of Noise e Born to be Bad. Em sua curta jornada, o grupo fez carreira nos Estados Unidos, Europa e Japão.",
          musica:"https://open.spotify.com/embed/track/7cdnq45E9aP2XDStHg5vd7?utm_source=generator&theme=0"
      }
    ]
  }

  render() {
    return (
      <Boxgeral>
        <Tittle>Conheça algumas bandas com mulheres</Tittle>
        {this.state.Bandas.map((item) => (
          <BoxDialogo>
            <Pic src={item.promoBanda} alt={item.nomeBanda} />
            <NomeBanda>{item.nomeBanda}</NomeBanda>
            <Paragrafo>{item.sobreBanda}</Paragrafo>
            <Music src={item.musica} alt={item.nomeBanda}></Music>
          </BoxDialogo>
        ))}
      </Boxgeral>
    );
  }
}

export default Main;
