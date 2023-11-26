import Select from 'react-select'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Form, Col, Row } from 'react-bootstrap'

export const PButton = styled.button `
    border-radius: 10px;
    background: #E40613;
    box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.2);
    height: auto;
    padding: 0.5rem 0.25rem;
    justify-content: center;
    align-items: center;
    color: #FFF;
    border: 0px;
    margin-top: 0px;
    margin-bottom: 15px;
    width: 100%;
    font-weight: 600;
    
    &:hover {
        background: #E58D8D;
    }

    &:active {
        background: #A31F00;
    }
`

export const SButton = styled.button `
    border-radius: 10px;
    background: #FFE1E1;
    box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.2);
    height: auto;
    padding: 0.5rem 0.25rem;
    justify-content: center;
    align-items: center;
    color: #E40613;
    border: 0px;
    margin-top: 0px;
    margin-bottom: 15px;
    width: 100%;
    font-weight: 600;
    
    &:hover {
        background: #E58D8D;
    }

    &:active {
        background: #A31F00;
    }
`

export const FooterApp = styled.footer `

    background-color: #333;
    color: #A1A5B7 !important; 
    font-weight: 500 !important;
    font-size: 0.8rem;
    padding: 5px; 
    text-align: center; 
    z-index: 10;
`

export const InputForm  = styled.input `
    margin-top: 10px;
    border-radius: 5px;
    width: 100%;
    border: 0px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    height: 30px;
    padding-left: 0.75rem;
`

export const StyledLink = styled(NavLink)`
    color: #99ABB4;
    text-decoration: none;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 100%;
    height: 35px;
    max-width: 85%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 6px;

    svg {
        margin-right: 20px;
    }

    &:hover {
        background-color: #E40613 !important;
        border-radius: 10px !important;
        color: #FFF !important;

        svg path{
            fill: #FFF;
        }
    }

    &.active:not(.neverActive) {
        background-color: #E40613 !important;
        border-radius: 10px !important;
        color: #FFF !important;

        svg path{
            fill: #FFF;
        }
    }
`

export const StyledLi = styled.li `
    display:flex;
    justify-content: center
`

export const DivForm = styled.div `
    display: flex;
    justify-content: center;
    .formBackground {
        background-Color: #FFF;
        border-radius: 20px;
        z-index: 3;
    }
`

export const LabelForm = styled.label `
    color: #99ABB4;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 100%;
    display: flex;
    justify-content: start
    height: 20px;
`

export const StyledForm = styled(Form) `
    padding: 2.5rem 2.5rem 0rem;
    border-radius: 10px;

    .row {
        padding-bottom: 36px;
    }
`

export const StyledFormSelect = styled(Form.Select) `
    margin-top: 10px;
    border-radius: 5px;
    width: 100%;
    border: 0px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    height: 30px !important;
    padding-bottom: 0px !important;
    padding-top: 0px !important;
`

export const StyledTH = styled.th `
    background: #FFE1E1 !important;
    color: #E40613 !important;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const StyledTD = styled.td `
    color: #99ABB4 !important;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const ColLabel = styled(Col) `
    display: flex;
    justify-content: center;
    align-items:center;
`

export const RowReport = styled(Row) `
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    margin-top: 23px;
    padding: 20px 0px;
    position: relative;
    z-index: 5;
`

export const TitleReport = styled.p `
    color: #E40613;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const SubTitleReport = styled.p `
    color: #930000;
    text-align: center;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; 
    margin-botton: 32px;
`

export const LeftReport = styled(Col) `
    color: #E40613;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    display: flex;
    justify-content: start;
    height: 100%;
    align-items: center;
    margin: 10px 0;
`

export const RightReport = styled(Col) `
    color: #717171;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    display: flex;
    justify-content: end;
    height: 100%;
    align-items: center;
    margin: 10px 0;
`

export const SelectReport = styled(Select) `
    margin-top: 30px;
    border-radius: 5px;
    width: 100%;
    border: 0px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    height: 30px !important;
    padding-bottom: 0px !important;
    padding-top: 0px !important;
`