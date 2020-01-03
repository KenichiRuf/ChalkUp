import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import styled from "styled-components";
import theme from "../theme";

const Navigation = () => {
  const Bar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.unit(2)};
    background: ${theme.colors.main};
    color: ${theme.colors.black};
  `;
  const Logo = styled.h1`
    /* font-size: ${theme.unit(1)}; */
    color: ${theme.colors.black};
    padding: 0px;
    margin: 0px;
  `;

  const Options = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `;

  return (
    <Bar className="Navigation">
      <Link to="/dashboard">
        <Logo className="logo">ChalkUp</Logo>
      </Link>
      <Options>
        <Link to="/add-route" style={{ margin: `0 ${theme.unit(1)} 0 ${theme.unit(1)}` }}>
          <Button>+ Add Route</Button>
        </Link>
        <a className="logout" style={{ display: 'block', margin: `0 ${theme.unit(1)} 0 ${theme.unit(1)}` }}>
          Logout
        </a>
      </Options>
    </Bar>
  );
};

export default Navigation;
