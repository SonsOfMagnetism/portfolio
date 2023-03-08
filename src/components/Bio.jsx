import about from "../json/about.json"

export default function Bio(props){
    return (
        <div>
            <h1>{about.name}</h1>
        </div>
    )
}