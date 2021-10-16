
import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

   useEffect(() => {

        getGifs( category )
        .then( imgs => {
        
            console.log(imgs);
            setState({
                data: imgs,
                loading: false
            });        

        })

//       //.then( imgs => setImages( imgs )); igual al de abajo
//       .then(setImages);
   }, [ category ]);

    return state;

}
