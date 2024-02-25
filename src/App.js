import "react-bootstrap"
import "./Styles/components/App.css"
import Container from 'react-bootstrap/Container';

import Clientes from './Components/Clientes';
import HeadApp from './Components/HeadApp';

// import FooterApp from './Components/FooterApp';

import SocialMediaContact from './Components/SocialMediaContact';

function App() {
  return (
    <Container  className=" App clientes m-0 p-0" 
    fluid={true}>
      <HeadApp />
      <Clientes />
      <SocialMediaContact />
    </Container >
  );
}

export default App;
