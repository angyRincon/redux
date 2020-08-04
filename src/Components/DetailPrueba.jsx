import React, { Fragment } from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {getDetail} from '../redux/detailDuck';

const DetailPrueba = () => {

    const dispatch = useDispatch();
    const details = useSelector(store => store.details.array);
   
    console.log(details.ability.name)

    return (
        <Fragment>
            <h1>DETALLES PRUEBA</h1>

            <div >
                <button className="btn btn-info" onClick={()=> dispatch(getDetail(5))}>GET DETAILS</button>
            </div>

            {
                details.map (item => (

                    <div key={item.ability.url}>
                        <li>{item.ability.name}</li>
                    </div>
                ))                
            }
        

        </Fragment>
    );
}

export default DetailPrueba;