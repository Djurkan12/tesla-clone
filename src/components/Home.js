import React from 'react';
import styled from 'styled-components';
import Section from './Section';

const Home = ({ menu, setMenu }) => {
  return (
    <Container menu={menu} onClick={() => setMenu(false)}>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroungImg="model-s.jpg"
        leftBtnText="Custom order"
        RightBtnText="Existing inventory"
        downArrow="true"
      ></Section>
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroungImg="model-y.jpg"
        leftBtnText="Custom order"
        RightBtnText="Existing inventory"
      ></Section>
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroungImg="model-3.jpg"
        leftBtnText="Custom order"
        RightBtnText="Existing inventory"
      ></Section>
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroungImg="model-x.jpg"
        leftBtnText="Custom order"
        RightBtnText="Existing inventory"
      ></Section>
      <Section
        title="Lower Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroungImg="solar-panel.jpg"
        leftBtnText="Order now"
        RightBtnText="Learn more"
      ></Section>
      <Section
        title="Solar for New Foofs"
        description="Solar Roof Costs Less Than New Rof"
        backgroungImg="solar-roof.jpg"
        leftBtnText="Order now"
        RightBtnText="Learn more"
      ></Section>
      <Section
        title="Accessories"
        description=""
        backgroungImg="accessories.jpg"
        leftBtnText="Shop now"
      ></Section>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
  opacity: ${({ menu }) => (menu ? 0.5 : 1)};
  filter: ${({ menu }) => (menu ? 'blur(3px)' : 'blur(0)')};
  transition: 0.5s ease-out;
  transition: 0.5s ease-out;
`;
