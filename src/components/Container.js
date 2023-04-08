import { MainContainer } from "../styles/Container.style"
import { Form } from "./Form"
import { Result } from "./Result"
import { CenterLine } from "./CenterLine"

export const Container = () => {
    return (
        <MainContainer>
            <Form/>
            <CenterLine/>
            <Result/>
        </MainContainer>
    )
}