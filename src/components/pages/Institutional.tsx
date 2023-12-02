import Benefits from '../Benefits';
import Footer from '../Footer';
import Hero from '../Hero';
import MoreBubbles from '../MoreBubbles';
import OutBubbles from '../OutBubbles';
import Team from '../Team';
import Navbar from '../common/Navbar';
import Blur from './../common/Blur';

function Institutional() {
  localStorage.setItem('previousPage', '/');

  return (
    <>
      <Navbar withMenu />
      <Blur />
      <Hero />
      <OutBubbles />
      <Blur />
      <MoreBubbles />
      <Benefits />
      <Team />
      <Footer />
    </>
  );
}

export default Institutional;
