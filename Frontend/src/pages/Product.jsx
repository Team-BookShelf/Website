import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";

import Footer from "../components/Footer";

import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;



const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-author: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-author: #f8f4f4;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity})
    );
  };
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src="data:image/jpeg;base64,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" />
        </ImgContainer>
        <InfoContainer>
          <Title>Looking For Alaska</Title>
          <Desc>Looking for Alaska is a book by John Grren which tells the story about finding a girl named Alaska.</Desc>
          <Price>Rs. {product.price}</Price>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
