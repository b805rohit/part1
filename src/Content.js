import Part from "./Part";

const Content=({course:{parts}})=>(
    <div>
        {
            parts.map(d=>(<Part key={d.name} part={d.name} exercise={d.exercises} />))
        }
    </div>
)

export default Content;