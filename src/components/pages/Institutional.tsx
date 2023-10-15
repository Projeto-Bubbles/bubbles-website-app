import Footer from '../Footer';
import Hero from '../Hero';
import Navbar from '../common/Navbar';
import Team from '../Team';
import MoreBubbles from '../MoreBubbles';
import OutBubbles from '../OutBubbles';
import Blur from './../common/Blur';
import Benefits from '../Benefits';

function Institutional() {
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
