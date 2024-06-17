
import "~/components/routes/team/test.css"


import { createAsync, cache } from "@solidjs/router";
import {TeamMember, TeamMemberProps} from "~/components/routes/team/TeamMember.tsx";
import {For} from "solid-js";
import {TeamGrid} from "~/components/routes/team/TeamGrid.tsx";
import {heading} from "~/components/routes/index/components/news_banner/styles.css.ts";
import {text} from "~/components/routes/index/components/product_features/styles.css.ts";

type Team = Omit<TeamMemberProps,"index">[]

const team:Team =[
    {
        title:"Dr.",
        name:"Andreas Nicolai",
        expertise:"PROJECT LEADER, CORE SOFTWARE DEVELOPER, SOLVER EXPERT & QUALITY ASSURANCE",
        description:"Core solver and user interface developer, 3D engine and user interface design/implementation",
        image:"https://www.sim-vicus.de/wp-content/uploads/2021/08/TUD_IBK_AndreasNicolai-500x500.jpg"
    },

    {
        title:"Dr.",
        name:"Anne Paepcke",
        expertise:"DEVELOPER - SOLVER EXPERT",
        description:"NANDRAD solver development, numerical algorithms, model implementations",
        image:"https://www.sim-vicus.de/wp-content/uploads/2021/08/TUD_IBK_AnnePaepcke-500x500.jpg"
    },
    {
        title:"Dipl.-Ing.",
        name:"Dirk Weiß",
        expertise:"USER INTERFACE DESIGNER & DEVELOPER",
        description:"User interface, dialogs, data transformation algorithms, 3D calculations",
        image:"https://www.sim-vicus.de/wp-content/uploads/2021/08/TUD_IBK_DirkWeiss-500x500.jpg"
    },
    {
        title:"M. Sc.",
        name:"Hauke Hirsch",
        expertise:"DEVELOPER - HYDRAULIC NETWORKS EXPERT",
        description:"Thermo-hydraulic network modeling, data structures, user interface.",
        image:"https://www.sim-vicus.de/wp-content/uploads/2021/08/T85_5623_hi_res_2500px_1-500x500.jpg"
    },
    {
        title:"Dipl.-Ing.",
        name:"Stephan Hirth",
        expertise:"DEVELOPER - USER INTERFACE / SUPPORT LIBRARIES",
        description:"Modelling, Data Structures, User Interface (3D Interaction), Shading/View Factor Calculations",
        image:"https://www.sim-vicus.de/wp-content/uploads/2021/08/T85_5639_hi_res_2500px-500x500.jpg",
        github:"https://github.com/hirseboy",
        linkedIn:"https://www.linkedin.com/in/stephan-hirth-8762a8151"
    },
    {
        title:"Dipl.-Ing.",
        name:"Heiko Fechner",
        expertise:"IFC-EXPERT AND KNOWS EVERYTHING ABOUT CODING",
        description:"IFC-Expert and knows everything about coding",
        image:"https://sim-vicus.com/wp-content/uploads/2023/04/Heiko_Fechner-1121x1536-1-e1682348632419-500x500.jpeg"
    },

]

const studentTeam:Team =[{
    title:"",
    name:"Anton Brock",
    expertise:"DEVELOPER - C++ / QT IMPLEMENTATION",
    description:"Student support developer - C++ / Qt IMplementation",
    image:"https://sim-vicus.com/wp-content/uploads/2023/02/T85_1098-500x500.jpg"
},
    {
        title:"",
        name:"Moritz Tschöpe",
        expertise:"DEVELOPER - C++ / QT IMPLEMENTATION",
        description:"Student support developer - C++ / Qt IMplementation",
        image:"https://sim-vicus.com/wp-content/uploads/2023/02/MoritzBild-removebg-preview.png"
    },
    {
        title:"",
        name:"Maik Göken",
        expertise:"DEVELOPER - C++ / QT IMPLEMENTATION",
        description:"Student support developer - C++ / Qt IMplementation",
        image:""
    },

]

const loadTeam = async ()=> {
    return {"team":team,"students":studentTeam}
}


export const route = {
    load: () => loadTeam()
};





export default function Index(){
    const users = createAsync(() => loadTeam());
    return (
        <>
            <h1 class={heading}> Team</h1>
            <p style={{
                color:"white",
            }}>
                Wir sind ein Team von engagierten Softwareentwicklern mit
                wissenschaftlichem und ingenieurtechnischem Hintergrund. Als Teil
                unserer wissenschaftlichen Arbeit entwickeln wir effiziente und
                schnelle Gebäudesimulationsmodelle mit hohem Detaillierungsgrad und
                genauer physikalischer Abbildung. Dabei achten wir auf detaillierte
                Modell- und Solvervalidierung. Außerdem bemühen wir uns um eine
                benutzerfreundliche Programmoberfläche mit innovativer visueller
                Darstellung und Dateneingabekontrolle.
            </p>
            <p style={{
                color:"white"
            }}>
                Das Entwicklungsteam ist beschäftigt am Institut für Bauklimatik, Fakultät Architektur, TU Dresden,
                Deutschland. Die meisten von uns sind Bauingenieure oder Maschinenbauingenieure mit einer Leidenschaft
                für die Erstellung benutzerfreundlicher Simulationsmodelle, wie THERAKLES, DELPHIN, MASTERSIM. Außerdem
                haben wir ein gemeinsames Post-Processing-Tool POSTPROC 2 entwickelt, das für alle unsere
                Simulationsmodelle verwendet werden kann. SIM-VICUS basiert auf 25 Jahren Erfahrung in der Entwicklung
                von Simulationsmodellen und Benutzeroberflächen am IBK@TU Dresden.
            </p>
            <TeamGrid>
                <For each={users()?.team}>
                    {(member, index) =>
                        <TeamMember index={index()} title={member.title} name={member.name} expertise={member.expertise}
                                    description={member.description} github={member.github
                        } image={member.image} linkedIn={member.linkedIn}/>
                    }
                </For>

            </TeamGrid>
            <h1>
                Students
            </h1>
         <TeamGrid>
                <For each={users()?.students}>
                    {(member, index) =>
                        <TeamMember index={index()} title={member.title} name={member.name} expertise={member.expertise}
                                    description={member.description} github={member.github
                        } image={member.image} linkedIn={member.linkedIn}/>
                    }
                </For>

         </TeamGrid>

        </>
    );
}