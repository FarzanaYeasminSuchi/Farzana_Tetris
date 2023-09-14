import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';

const StartButton = ({callback})=>(
    <StyledStartButton onclick={callback}>Go Back</StyledStartButton>
)
export default StartButton;
