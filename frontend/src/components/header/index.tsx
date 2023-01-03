// Styled-Components
import { Container, Content } from './styles';

// Images
import Logo from '../../assets/images/logo.svg';

export function Header() {
  return (
    <Container>
      <Content>
        <div className="page-details">
          <h1>Chef House</h1>
          <h2>Acompanhe os chefs solicitados! 👨‍🍳</h2>
        </div>

        <img src={Logo} alt="Logo" />
      </Content>
    </Container>
  );
}
