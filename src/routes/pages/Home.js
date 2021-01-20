import React from "react";
import DocumentTitle from "react-document-title";

/** NineWorphi */
import logo_NineWorphi from "../../images/nineworphi.svg";

const Home = () => (
  <>
    <DocumentTitle title="NineWorphi - Software Intelligence" />
    <div className="text-center">
      <img
        src={logo_NineWorphi}
        alt="Logo NineWorphi"
        title="NineWorphi software intelligence"
        className="logo"
      />
      <h1>
        NineWorphi{" "}
        <a
          href="https://translate.google.com/#view=home&op=translate&sl=en&tl=pt&text=nine%20worthy"
          alt="Link para a pronúncia"
          title="Link para a pronúncia"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gradient"
        >
          <small style={{whiteSpace: "nowrap"}}>(/nʌɪn/ - /ˈwəːði/)</small>
        </a>
      </h1>
    </div>
    <div className="home-grid">
      <div>
        <h4>
          <i className="fas fa-globe fa-fw" /> Missão
        </h4>
        <p>
          Desenvolver soluções tecnológicas de qualidade, elevando a
          competitividade, aumento de lucros e satisfação de nossos clientes,
          parceiros e colaboradores, simplificando seu dia-a-dia
        </p>
      </div>
      <div>
        <h4>
          <i className="fas fa-glasses fa-fw" /> Visão
        </h4>
        <p>
          Ser referência no mercado como uma empresa de tecnologia, pela
          qualidade e inovação na prestação de seus serviços. Ser um lugar onde
          as pessoas tenham orgulho de trabalhar
        </p>
      </div>
      <div>
        <h4>
          <i className="fas fa-trophy fa-fw" /> Valores
        </h4>
        <ul>
          <li>Busca contínua pela qualidade</li>
          <li>Comprometimento</li>
          <li>Desenvolvimento Humano e profissional</li>
          <li>Agilidade</li>
          <li>Inovação</li>
        </ul>
      </div>
    </div>
  </>
);

export default Home;
