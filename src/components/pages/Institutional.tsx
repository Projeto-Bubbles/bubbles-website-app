import Container from '../common/Container';
import Footer from '../common/Footer';
import Hero from '../common/Hero';
import Navbar from '../common/Navbar';
import Team from '../common/Team';

function Institutional() {
  return (
    <>
      <Navbar />
      <Hero />
      <Container
        title="Fora da bolha, dentro do mundo."
        description="Na Bubbles, não se trata apenas de seguir a corrente. Desafiamos o convencional, conectamos interesses e exploramos o novo. Junte-se a nós e expanda sua visão!"
      />
      <Team />
      <Footer />
    </>
  );
}

export default Institutional;
