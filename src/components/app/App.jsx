import { FormPhB } from "components/form/FormPhB";
import { Title } from "components/title/Title";
import { Container } from "./App.styled";
import { GlobalStyle } from "./Global.styled";

export const App = () => {
  return (
    <Container
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <GlobalStyle />
      <Title title="Phonebook" />
      <FormPhB />
      React homework template
    </Container>
  );
};
