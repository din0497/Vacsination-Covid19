import { Container, Text, Number } from "../../styles";

const Cases = (props) => {
  return (
    <Container>
      <Text>
        {props.text}
      </Text>
      <Number>{props.number}</Number>
    </Container>
  );
};

export default Cases;
