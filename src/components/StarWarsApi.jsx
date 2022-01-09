import React, {useState, useEffect} from 'react'
import Planets from './Planets'

function StarWarsApi() {

    const [planets, setPlanets] = useState([]);

    useEffect(()=> {

        const FetchPlanets = async ()=> {
            let res = await fetch('https://swapi.dev/api/planets/')
            let data = await res.json()
            setPlanets(data.results)
        }
        FetchPlanets()
    }, [])
console.log(planets)

    return (
        <div>
            <ul>
            {planets.map((planets, i) => {
                return(
                    <Planets key={i} datos={planets}/>    
                )
            })}
            </ul>
        </div>
    )
}

export default StarWarsApi
