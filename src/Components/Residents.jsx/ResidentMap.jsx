import Flex from './Flex';
import NuclearAssult from './NuclearAssult';
import KrucialD from './KrucialD';
import NapsterGabe from './NapsterGabe';
import InnaK from './InnaK';
import UnknownKonflikt from './UK';
import camo from '../../assets/LaSelva/camo.jpg';

function ResidentMap() {

    return (
      <>
      <section id="residents" 
      className="container"
      style={{
        backgroundImage: `url(${camo})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'repeat',
        padding: '40px',
        color: 'white',
      }}>
        <Flex />
        <NuclearAssult />
        <KrucialD />
        <NapsterGabe />
        <InnaK />
        <UnknownKonflikt />
       
  
      </section>
      </>
    )
  }
  
  export default ResidentMap;
  