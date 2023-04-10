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
        days: "",
        months: "",
        years: ""
    })

    const [errors, setErrors] = useState({
        dayError: false,
        monthError: false,
        yearError: false
    })

    const handleInputs = (e) => {
        const { name, value } = e.target

        setInputFields(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return (
        <MainContainer>
            <Form handleInputs={handleInputs} errors={errors}/>
            <CenterLine inputFields={inputFields} setResults={setResults}/>
            <Result results={results}/>
        </MainContainer>
    )
}