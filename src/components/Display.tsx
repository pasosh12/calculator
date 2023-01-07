import React, {FunctionComponent} from 'react';
import styled from "styled-components";

const StyledExpression = styled.span`
  margin-left: auto;
`
interface DisplayProps {
    expression: string,
    value: string
}
const StyledDisplay = styled.div`
  background-color: #393939;
  color: #fff;
  padding: 1.5em 1em;
`
const StyleScreen = styled.div`
  font-size: 2.5em;
  min-height: 1.4em;
  display: flex;
  align-items: center;
  justify-content: flex-end;  
  overflow: hidden;
`
export const Display : FunctionComponent<DisplayProps> = ({expression, value}) => {
    return (
        <StyledDisplay>

        <StyledExpression>
            {expression}
        </StyledExpression>
        <StyleScreen>
            {value}
        </StyleScreen>
        </StyledDisplay>
    )
}