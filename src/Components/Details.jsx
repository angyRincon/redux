import React, { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {

    
    const [team, setTeam] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {

      
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${1}/`);
    
            /* console.log(data) */
            const user = await data.json();
            setTeam(user.abilities);          
    }

    
    return (
        <Fragment>
            {

                team.map(item => {
                    return <div key={item.ability.url}>
                    
                        <h2>ABILITIES</h2>

                        <ul>
                            <li>{item.ability.name}</li>
                            <li>{item.ability.url}</li>
                        </ul>


                    </div>
                })

            }

        </Fragment>


    );
}

export default Details;