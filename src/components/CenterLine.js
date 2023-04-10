import arrowIcon from "../assets/images/icon-arrow.svg"
import { StyledImg } from "../styles/ArrowIcon.style"
import { StyledDiv } from "../styles/StyledDiv.style"
import { Button } from "../styles/Button.style"

export const CenterLine = ({inputFields, setResults}) => {
    const handleClick = () => {
        const currentDate = new Date()
        const providedDate = new Date(inputFields.year, inputFields.month - 1, inputFields.day)
        const providedYear = providedDate.getFullYear()
        const providedMonth = providedDate.getMonth() + 1
        const providedDay = providedDate.getDate()

        let month = 0

        if (currentDate.getMonth() + 1 > providedMonth && providedDay < currentDate.getDate()) {
            month = (currentDate.getMonth() + 1) - providedMonth
        } else if (currentDate.getMonth() + 1 > providedMonth && providedDay > currentDate.getDate()) {
            month = (currentDate.getMonth()) - providedMonth
        } else if (currentDate.getMonth() + 1 < providedMonth && providedDay > currentDate.getDate()) {
            month = providedMonth - (currentDate.getMonth() + 1)
        } else if (currentDate.getMonth() + 1 < providedMonth && providedDay < currentDate.getDate()) {
            month = (providedMonth - 1) - (currentDate.getMonth() + 1)
        } else if (providedDay === currentDate.getDate() && currentDate.getMonth() + 1 < providedMonth) {
            month = providedMonth - (currentDate.getMonth() + 1)
        } else if (providedDay === currentDate.getDate() && currentDate.getMonth() + 1 > providedMonth) {
            month = (currentDate.getMonth() + 1) - providedMonth
        }
        
        setResults({
            years: currentDate.getFullYear() - providedYear,
            months: month,


        })
        
    }

    return (
        <StyledDiv>
            <hr></hr>
            <Button onClick={handleClick}>
                <StyledImg src={arrowIcon}/>
            </Button>
        </StyledDiv>
    )
}