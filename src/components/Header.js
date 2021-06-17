import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

const Header = ({ menu, setMenu }) => {
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a href="#">
        <Logo src="/images/logo.svg" alt="" menu={menu}></Logo>
      </a>
      <Menu menu={menu}>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              {car}
            </a>
          ))}

        <a href="#">Solar Roofs</a>
        <a href="#">Solar Panels</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomMenu onClick={() => setMenu(!menu)}></CustomMenu>
      </RightMenu>

      <BurgerNav menu={menu}>
        <CustomClose onClick={() => setMenu(!menu)}></CustomClose>
        <ul>
          {cars &&
            cars.map((car, index) => (
              <li key={index}>
                <a href="#">{car}</a>
              </li>
            ))}
          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Used Inventory</a>
          </li>
          <li>
            <a href="#">Trade-in</a>
          </li>
          <li>
            <a href="#">Cybertruck</a>
          </li>
          <li>
            <a href="#">Roadster</a>
          </li>
          <li>
            <a href="#">Semi</a>
          </li>
          <li>
            <a href="#">Charging</a>
          </li>
          <li>
            <a href="#">Powerwall</a>
          </li>
        </ul>
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Logo = styled.img`
  opacity: 0.7;
  opacity: ${({ menu }) => (menu ? 0.5 : 1)};
  filter: ${({ menu }) => (menu ? 'blur(3px)' : 'blur(0)')};
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  opacity: ${({ menu }) => (menu ? 0.5 : 1)};
  filter: ${({ menu }) => (menu ? 'blur(3px)' : 'blur(0)')};

  a {
    font-weight: 500;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 940px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 500;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${({ menu }) => (menu ? 'translateX(0)' : 'translateX(100%)')};
  transition: 0.5s ease-out;

  ul {
    list-style-type: none;
  }
  li {
    text-decoration: none;
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 500;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  margin-left: auto;
  cursor: pointer;
`;
