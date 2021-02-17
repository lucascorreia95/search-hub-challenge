import { Container, Link, Text } from './Footer.styles';

export const Footer = () => (
  <Container>
    <Text data-testid="footer-text-content">
      Desenvolvido por
      <Link
        href="https://github.com/lucascorreia95"
        target="_blank"
        rel="noreferrer"
        data-testid="footer-link-github"
      >
        Lucas Correia
      </Link>
      - FEV./2021 -
      <Link
        href="https://github.com/lucascorreia95/search-hub-callenge"
        target="_blank"
        rel="noreferrer"
        data-testid="footer-link-repository"
      >
        Link do repositório
      </Link>
    </Text>
  </Container>
);

export default Footer;
