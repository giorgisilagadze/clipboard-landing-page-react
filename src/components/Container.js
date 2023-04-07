import { StyledContainer, Comp, Tablet, Images, CompDiv, Icons, QuickDiv, QuickDivChild, SuperDiv} from "./styled/Container.styled"
import { Tittle, Quote, LitTitle } from "./styled/txt.styled"
import { compImg, tabletImg, paper, ai, view, google, ibm, mc, hp, vector} from "../images"
import Content from "./Content"
import { Button, ButtonsDivBlock, ButtonsDivFlex} from "./styled/Buttons.styled"

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
            image: ai,
            title: "Create blacklists",
            text: "Ensure sensitive information never makes its way to your clipboard by excluding certain sources."
        },
        {
            image: paper,
            title: "Plain text snippets",
            text: "Remove unwanted formatting from copied text for a consistent look."
        },
        {
            image: view,
            title: "Sneak preview",
            text: "Quick preview of all snippets on your Clipboard for easy access."
        }
    ]

    const companies = [google, ibm, mc, hp, vector]
    return (
        <StyledContainer>
            <Tittle mTop = "0px">Keep track of your snippets</Tittle>
            <Quote mTop = "16px">Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.</Quote>
            <QuickDiv>
            <Comp src={compImg}/>
            <QuickDivChild>
                {content.map((item) => 
                    <Content title = {item.title} text = {item.text} />
                )}
            </QuickDivChild>
            </QuickDiv>
            <Tittle mTop = "186px">Access Clipboard Anywheres</Tittle>
            <Quote mTop = "16px">Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.</Quote>
            <Tablet src={tabletImg}/>
            <Tittle mTop = "130px">Supercharge your workflow</Tittle>
            <Quote mTop = "11px">We’ve got the tools to boost your productivity.</Quote>
            <SuperDiv>
                {contentWithImage.map(item => 
                    <div>
                        <Images src={item.image} />
                        <LitTitle mTop = "40px">{item.title}</LitTitle>
                        <Quote mTop = "18px">{item.text}</Quote>
                    </div>
                    )}
            </SuperDiv>
            <ButtonsDivBlock width = "1100px">
                <CompDiv>
                {companies.map(item => 
                    <Icons src = {item}/>
                    )}
                </CompDiv>
            </ButtonsDivBlock>
            <Tittle mTop = "170px">Clipboard for iOS and Mac OS</Tittle>
            <Quote mTop = "16px">Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.</Quote>
            <ButtonsDivBlock width = "500px">
                <ButtonsDivFlex>
                    <Button bg = "#26BBA4" mTop = "46px">Download for iOS</Button>
                    <Button bg = "#6174FF" mTop = "24px">Download for Mac</Button>
                </ButtonsDivFlex>
            </ButtonsDivBlock>
            

        </StyledContainer>
    )
}