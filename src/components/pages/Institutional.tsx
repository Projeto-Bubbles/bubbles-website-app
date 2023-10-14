import Footer from '../common/Footer';
import Hero from '../common/Hero';
import Navbar from '../common/Navbar';
import Team from '../common/Team';
import MoreBubbles from '../common/MoreBubbles';
import OutBubbles from '../common/OutBubbles';
import Blur from './../common/Blur';
import Benefits from '../common/Benefits';

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
