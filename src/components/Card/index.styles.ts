import styled from "styled-components"
import { Link } from "react-router-dom"

export const CardLink = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  transition: all;

  &:hover {
    transform: scale(1.05);
  }

  &.rock {
    background-color: rgb(148, 81, 81);
  }

  &.ghost {
    background-color: #4338ca;
  }

  &.electric {
    background-color: #facc15;
  }

  &.bug {
    background-color: #4ade80;
  }

  &.poison {
    background-color: #9333ea;
  }

  &.normal {
    background-color: #6b7280;
  }

  &.fairy {
    background-color: #f472b6;
  }

  &.fire {
    background-color: #f87171;
  }

  &.grass {
    background-color: #16a34a;
  }

  &.water {
    background-color: #3b82f6;
  }

  &.dark {
    background-color: #1f2937;
  }

  &.fighting {
    background-color: #7f1d1d;
  }

  &.psychic {
    background-color: #be185d;
  }

  &.ground {
    background-color: #a16207;
  }

  &.ice {
    background-color: #60a5fa;
  }

  &.dragon {
    background-color: #6b21a8;
  }

  &.steel {
    background-color: #9ca3af;
  }

  p {
    color: #fff;
    text-transform: capitalize;
  }
`
