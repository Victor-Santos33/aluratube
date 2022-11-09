import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSreset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
  const estiloDaHomePage = {
    // backgroundColor: "red"
  };
  const [valorDoFiltro, setValorDoFiltro] = React.useState("");

  return (
    <>
      <CSSReset />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          // backgroundColor: "red",
        }}
      >
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
        <Header />
        <Timeline searchValue={valorDoFiltro} playlists={config.playlists} />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;

// function Menu(){
//   return(
//       <div>
//           Menu
//       </div>
//   )
// }

const StyledHeader = styled.div`
  .user-info-img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
  .user-banner-img{
    margin-top: 50px;
    width: 30%;
    height: 320px;
    border-radius: none;
  }
  .user-banner-img-card{
    margin-top: 50px;
    width: 40%;
    height: 320px;
    border-radius: none;
  }
`;

const StyledFooter = styled.div`

.user-info-img {
width: 80px;
height: 80px;
border-radius: 50%;
}
.user-info, h2 {
display: block;
align-items: center;
padding: 16px 32px;
gap: 16px;
}
.favorite{
  display: flex;
  flex-direction: row;
}
p{
  text-align: center;
}
`;  

function Header() {
  return (
    <StyledHeader>
      <section className="user-banner">
        <img className="user-banner-img" src={`https://visandesigner.com/images/${config.site}.jpg`}/>
        <img className="user-banner-img-card" src={`https://visandesigner.com/images/${config.cartao}.png`}/>
        <img className="user-banner-img" src={`https://visandesigner.com/images/${config.logo}.jpg`}/>
      </section>

      <section className="user-info">
        <img className="user-info-img" src={`https://github.com/${config.github}.png`} />
        <h2>{config.name}</h2>
        <p>{config.job}</p>
      </section>
    </StyledHeader>
  );
}

  function Timeline({ searchValue, ...props}) {
  const playlistNames = Object.keys(props.playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistNames) => {
        const videos = props.playlists[playlistNames];
        return (
          <section key={playlistNames}>
            <h2>{playlistNames}</h2>
            <div>
              {videos.filter((video) => {
                  const titleNormalized = video.tittle.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized)
              }).map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.tittle}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
    }

  function Footer() {
    return (
      <StyledFooter>
        <h2>AluraTubes Favoritos</h2>
        <section className="favorite">
          <section className="user-info">
            <img className="user-info-img" src={`https://github.com/${config.github2}.png`} />
            <p>{config.user2}</p>
          </section>
          <section className="user-info">
            <img className="user-info-img" src={`https://github.com/${config.github3}.png`} />
            <p>{config.user1}</p>
          </section>
        </section>
      </StyledFooter>
    );
}
