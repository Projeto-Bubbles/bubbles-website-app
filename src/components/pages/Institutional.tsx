import Container from '../Container';
import Footer from '../Footer';
import Hero from '../Hero';
import Navbar from '../Navbar';
import Team from '../Team';

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
