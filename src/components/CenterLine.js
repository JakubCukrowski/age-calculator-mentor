import arrowIcon from "../assets/images/icon-arrow.svg"
import { StyledImg } from "../styles/ArrowIcon.style"
import { StyledDiv } from "../styles/StyledDiv.style"

export const CenterLine = () => {
    return (
        <StyledDiv>
            <hr></hr>
            <StyledImg src={arrowIcon}/>
        </StyledDiv>
    )
}