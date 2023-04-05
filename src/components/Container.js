import { StyledContainer, Comp, Tablet } from "./styled/Container.styled"
import { Tittle, Quote, LitTitle } from "./styled/txt.styled"
import { compImg, tabletImg, paper, ai, view} from "../images"
import Content from "./Content"

export default function Container() {
    const content = [
        {
            title: "Quick Search",
            text: "Easily search your snippets by content, category, web address, application, and more."
        },
        {
            title: "iCloud Sync",
            text: "Instantly saves and syncs snippets across all your devices."
        },
        {
            title: "Complete History",
            text: "Retrieve any snippets from the first moment you started using the app."
        }
    ]

    const contentWithImage = [
        {
            image: {paper},
            title: "Create blacklists",
            text: "Ensure sensitive information never makes its way to your clipboard by excluding certain sources."
        },
        {
            image: {ai},
            title: "Create blacklists",
            text: "Ensure sensitive information never makes its way to your clipboard by excluding certain sources."
        },
        {
            image: {view},
            title: "Create blacklists",
            text: "Ensure sensitive information never makes its way to your clipboard by excluding certain sources."
        }
    ]
    return (
        <StyledContainer>
            <Tittle>Keep track of your snippets</Tittle>
            <Quote mTop = "16px">Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.</Quote>
            <Comp src={compImg}/>
            {content.map((item) => 
                 <Content title = {item.title} text = {item.text} />
            )}
            <Tittle mTop = "186px">Access Clipboard Anywheres</Tittle>
            <Quote mTop = "16px">Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.</Quote>
            <Tablet src={tabletImg}/>
            <Tittle mTop = "130px">Supercharge your workflow</Tittle>
            <Quote mTop = "11px">We’ve got the tools to boost your productivity.</Quote>
            {contentWithImage.map(item => 
                <div>
                    <img url={item.image} />
                    <LitTitle>{item.title}</LitTitle>
                    <Quote>{item.text}</Quote>
                </div>
                )}

        </StyledContainer>
    )
}