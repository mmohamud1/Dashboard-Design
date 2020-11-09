import React from 'react'
import styled from 'styled-components';

const Switch = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: ${({ theme }) => theme.switchWidth};
  height: ${({ theme }) => theme.switchHeight};
  border-radius: 50em;
  padding: ${({ theme }) => theme.switchPadding} 0;

  .switch__input, .switch__label {
      position: absolute;
      left: 0;
      top: 0;
  }

  .switch__input {
      margin: 0;
      padding: 0;
      opacity: 0;
      height: 0;
      width: 0;
      pointer-events: none;

      &:checked + .switch__label {
          
      }
  }
`;

const ToggleSwitch = () => {
    return (
        <Switch>
            <input className="switch__input" type="checkbox" id="switchCheckbox1" onClick={toggleTheme} />
            <label aria-hidden="true" className="switch__label" htmlFor="switchCheckboc1">On</label>
            <div aria-hidden="true" className="switch__marker"></div>
        </Switch>
    )
}

export default ToggleSwitch
