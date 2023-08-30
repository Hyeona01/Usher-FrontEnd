import { styled } from "styled-components";

export const NavContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const SearchSection = styled.div`
  position: relative;
  input {
    width: 249px;
    height: 33px;
    border-radius: 20px;
    border: 2px solid #90a4c1;
    background: #fafcff;
    padding: 10px;
    ::placeholder {
      color: #90a4c1;
    }
  }
  img {
    position: absolute;
    right: 13px;
    top: 6px;
  }
`;