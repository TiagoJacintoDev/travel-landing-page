import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Cover from '../components/Cover';
import CoverImg from '../images/indonesia-high-res.jpg';

const Section = styled.section`
  color: white;
  height: 100vh;
  background-image: url(${CoverImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;

export default function TopSection() {
  return (
    <Section>
      <NavBar />
      <Cover />
    </Section>
  );
}
