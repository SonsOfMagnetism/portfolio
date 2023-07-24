import about from "../json/about.json"
import { BioContainer, BioImage } from "../styledcomponents/Bio"

export default function Bio(props){
    return (
        <BioContainer>
            <h1 style={{padding:"25px"}}>Atlanta, GA</h1>
            <BioImage src={about.image}/>
            <h1 style={{paddingTop:"25px"}}>{about.email}</h1>
            <br/>
            <p style={{paddingBottom:"25px"}}>{about.bio}</p>
            <img class="technologiescube" src={about.techstack} />
        </BioContainer>
    )
}