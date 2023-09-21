import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import {AiFillDelete} from "react-icons/ai"
import { removerUser } from '../stores/slice/UserSlice';

function DisplayUser() {
    console.log(useDispatch());
    const dispatch = useDispatch();

    const deleteUser = (id) =>{
        dispatch(removerUser(id))
    }


    const data = useSelector((state)=>{
        return state.users
    });
    console.log(data);


  return <Wraper>
    {data.map((ele,id)=>{
        return(
            <li key={id}>
                {ele}
            <button className=' btn-delte' onClick={()=> deleteUser(id)}>
                <AiFillDelete className='delete-icon'  />
            </button>
            </li>
        )
    })}
  </Wraper>
}

const Wraper = styled.section``;

export default DisplayUser