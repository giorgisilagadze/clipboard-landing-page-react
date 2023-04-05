import { LitTitle, Quote } from "./styled/txt.styled"


export default function Content(props) {
    return (
        <div>
            <LitTitle mTop = "52px">{props.title}</LitTitle>
            <Quote  mTop = "10px">{props.text}</Quote>
        </div>
    )
}