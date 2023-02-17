import { useLocation } from 'react-router-dom';

function Card(){
    const locate = useLocation()
    return(
        <>
        <div>{locate.state.title}</div>
        <div>{locate.state.id}</div>
        <div>{locate.state.description}</div>
        </>
    )
} 
export default Card;