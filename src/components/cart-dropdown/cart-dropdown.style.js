import styled from "styled-components";
import CustomButton from "../button/custom-button.component";

export const CardDropdownComponent = styled.div`
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
`

export const CardItemsComponent = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`
export const EmptyStyle = styled.span`
    font-size: 18px;
    margin: 50px auto;
`
export const CustomCartDropdownBtn = styled(CustomButton)`
    margin-top: auto;
`