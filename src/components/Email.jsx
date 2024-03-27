import {  useDispatch, useSelector } from "react-redux";
import { changeEmail } from "../redux/userSlice";

export function Email(){
    const email = useSelector((state) => state.user.email);
    const dispatch = useDispatch;

    function handleOnChange(e){
        dispatch(changeEmail(e.target.value)); // cambiamos el email llamando al reducer que hemos implementado en userSlice
    }

    return(
        <input type="email" value={email} onChange={handleOnChange} /> 
    )
}