import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { clearAllUsers } from '../stores/slice/UserSlice';


function DeleteAllUser() {

  const dispatch = useDispatch();

  const deleteUser = () =>{
    dispatch(clearAllUsers())

  }


  return <Wrapper>
    <button className='clear-btn' onClick={deleteUser}>Clear User</button>
  </Wrapper>
}
const Wrapper = styled.section`
.clear-btn{
  text-transform:capitalize;
  background-color:#db338a;
  margin-top:2rem;

}`
export default DeleteAllUser