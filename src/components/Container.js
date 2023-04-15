import React, { useState } from "react"
import { MainContainer } from "../styles/Container.style"
import { Form } from "./Form"
import { Result } from "./Result"
import { CenterLine } from "./CenterLine"

export const Container = () => {
    const [inputFields, setInputFields] = useState({
        day: "",
        month: "",
        year: ""
    })

    const [results, setResults] = useState({
        days: "--",
        months: "--",
        years: "--"
    })

    const [errors, setErrors] = useState({
        dayError: false,
        monthError: false,
        yearError: false
    })

    const [isClicked, setIsClicked] = useState(false)
    const currentDate = new Date()
    const birthDate = new Date(inputFields.year, inputFields.month - 1, inputFields.day)
    const birthYear = birthDate.getFullYear()
    const birthMonth = birthDate.getMonth() + 1
    const birthDay = birthDate.getDate()
    const oneDay = 1000 * 60 * 60 * 24
    const nextMonth = new Date(inputFields.year, inputFields.month , 1)
    const lastMonthDay = new Date(nextMonth.getTime() - oneDay)

    const handleInputs = (e) => {
        const { name, value } = e.target

        setInputFields(prev => {
            return {
                ...prev,
                [name]: value
            }
        })

        setErrors({
            dayError: false,
            monthError: false,
            yearError: false
        })

        setIsClicked(false)

        setResults({
            days: "--",
            months: "--",
            years: "--"
        })
    }

    return (
        <MainContainer>
            <Form 
            handleInputs={handleInputs} 
            errors={errors}
            currentDate={currentDate}
            lastMonthDay={lastMonthDay} 
            inputFields={inputFields}/>
            <CenterLine
            currentDate={currentDate}
            birthMonth={birthMonth}
            birthDate={birthDate}
            birthDay={birthDay}
            birthYear={birthYear}
            lastMonthDay={lastMonthDay}
            inputFields={inputFields} 
            setResults={setResults} 
            isClicked={isClicked} 
            setIsClicked={setIsClicked}
            errors={errors}
            setErrors={setErrors}/>
            <Result results={results}/>
        </MainContainer>
    )
}
