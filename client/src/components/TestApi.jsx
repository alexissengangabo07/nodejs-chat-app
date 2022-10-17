
import React, {useEffect} from 'react';
import axios from 'axios'


const TestApi = () => {
    useEffect(()=>{
        axios.get('http://localhost:5000/message')
        .then(({data}) => console.log(data))
        .catch(err => console.log(err))

    }, [])
    return (
        <div>
            
        </div>
    );
}

export default TestApi;
