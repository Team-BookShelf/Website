import styled from "styled-components";

const Container = styled.div`
  height: 2px;
  background-color: white;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over 399/-</Container>;
};

export default Announcement;
