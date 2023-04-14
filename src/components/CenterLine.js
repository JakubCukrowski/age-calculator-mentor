import arrowIcon from "../assets/images/icon-arrow.svg"
import { StyledImg } from "../styles/ArrowIcon.style"
import { StyledDiv } from "../styles/StyledDiv.style"
import { Button } from "../styles/Button.style"

export const CenterLine = ({
    currentDate,
    birthYear, 
    birthMonth,
    birthDay,
    lastMonthDay, 
    inputFields, 
    setResults, 
    isClicked, 
    setIsClicked, 
    setErrors}) => {
    const handleClick = () => {
        if (inputFields.year.length === 0 || inputFields.month === 0 || inputFields.day === 0) {
            setErrors({
                dayError: true,
                monthError: true,
                yearError: true
            })

        } else if (inputFields.day > lastMonthDay.getDate()){    
            setErrors({
                dayError: true,
                monthError: true,
                yearError: true
            })

        } else {

        let monthsCount
        let daysCount

        if (currentDate.getMonth() + 1 === birthMonth && currentDate.getDate() === birthDay) {
            monthsCount = currentDate.getMonth() + 1 - birthMonth
            daysCount = 0
        } 

        if ((currentDate.getMonth() + 1 > birthMonth && currentDate.getDate() === birthDay)
            || (currentDate.getMonth() + 1 === birthMonth && currentDate.getDate() > birthDay)
            || (currentDate.getMonth() + 1 > birthMonth && currentDate.getDate() > birthDay)) {
            monthsCount = currentDate.getMonth() + 1 - birthMonth
            daysCount = currentDate.getDate() - birthDay
        }

        if (currentDate.getMonth() + 1 < birthMonth && currentDate.getDate() === birthDay) {
            monthsCount = 12 + ((currentDate.getMonth() + 1) - birthMonth)
            daysCount = currentDate.getDate() - birthDay
        }

        if ((currentDate.getMonth() + 1 === birthMonth && currentDate.getDate() < birthDay)
            || (currentDate.getMonth() + 1 < birthMonth && currentDate.getDate() < birthDay)) {
            monthsCount = 12 + currentDate.getMonth() - birthMonth
            daysCount = lastMonthDay.getDate() + currentDate.getDate() - birthDay + 1
        }

        if (currentDate.getMonth() + 1 > birthMonth && currentDate.getDate() < birthDay) {
            monthsCount = currentDate.getMonth() - birthMonth
            daysCount = lastMonthDay.getDate() + currentDate.getDate() - birthDay + 1
        }

        if (currentDate.getMonth() + 1 < birthMonth && currentDate.getDate() > birthDay) {
            monthsCount = 12 + currentDate.getMonth() + 1 - birthMonth
            daysCount = currentDate.getDate() - birthDay
        }
    
        setResults({
            years: currentDate.getMonth() + 1 > birthMonth
                || (currentDate.getMonth() + 1 === birthMonth && currentDate.getDate() >= birthDay)
                ? currentDate.getFullYear() - birthYear
                : currentDate.getFullYear() - birthYear - 1,
            months: monthsCount,
            days: daysCount
        })

        setIsClicked(true)
        setErrors({
            dayError: false,
            monthError: false,
            yearError: false,
        })
        }
        
    }

    return (
        <StyledDiv>
            <hr></hr>
            <Button onClick={handleClick}>
                <StyledImg className={isClicked ? "clicked" : ''} src={arrowIcon}/>
            </Button>
        </StyledDiv>
    )
}