import styled from 'styled-components';

export const Container = styled.nav`
  background: linear-gradient(150deg, #53f 55%, #05D5ff);

  > ul {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 0 21px;
  }
`;


export const DropdownStyles = styled.div`
    .dropdown-option {
        padding: 20px 25px;
        outline: 0;
        color: #fff;
        font-size: 18px;

        transition: opacity 0.2s;

        &:hover, &:focus {
            opacity: .55;
        }
    };

    .dropdown-root {
        z-index: 10;
        position: absolute;
    }

    .dropdown-arrow {

    }

    .dropdown-container {
    position: absolute;
    overflow: hidden;
    box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25),
      0 30px 60px -30px rgba(0, 0, 0, 0.3),
      0 -18px 60px -10px rgba(0, 0, 0, 0.025);
    background: #fff;
    border-radius: 4px;
  }

    .dropdown-section {
        position: absolute;
    }


`;

