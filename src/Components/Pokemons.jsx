import React, { Fragment, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, nextPokemon, lastPokemon } from '../redux/pokeDuck';

import { Link } from 'react-router-dom';

const Pokemons = () => {

    const dispatch = useDispatch();
    const pokemons = useSelector(store => store.pokemons.array);

    useEffect(() => {
        dispatch(getPokemons())
    }, [dispatch]);

   

    return (
        <div className="container mt-5">

            <h1>POKEMONES</h1>

            <div className="btn-group">
                {/* <button className="btn btn-info mb-3" onClick={() => dispatch(getPokemons())}>GETPOKEMONS</button> */}
                <button className="btn btn-info mb-3" onClick={() => dispatch(nextPokemon(3))}>NEXT</button>
                <button className="btn btn-info mb-3" onClick={() => dispatch(lastPokemon(3))}>BACK</button>
            </div>


            <div className="row">

                {
                
                    pokemons.map(item => {

                        return <Fragment key={item.name}>

                            <div className="card col-md-4 p-3">

                                <Link to={`/details/${item.url}`}>
                                    <div className="d-flex justify-content-center">
                                        <img className="card-img-top img" src={`/img/${item.name}.png`} alt="cap" />
                                    </div>

                                        

                                    <div className="card-body">
                                        <h2 className="card-title text-center">{item.name.toUpperCase()}</h2>
                                    </div>
                                </Link>
                            </div>
                        </Fragment>

                    })
                }
            </div>
        </div>
    );
}

export default Pokemons;