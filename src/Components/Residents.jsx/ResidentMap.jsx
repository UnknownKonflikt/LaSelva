import Flex from './Flex';
import NuclearAssult from './NuclearAssult';
import KrucialD from './KrucialD';
import NapsterGabe from './NapsterGabe';
import InnaK from './InnaK';
import UnknownKonflikt from './UK';


function ResidentMap() {

    return (
      <>
      <section id="residents" 
      className="container"
      style={{
        backgroundImage: 'url(src/assets/LaSelva/camo.jpg)',
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
  