import React from 'react'
import Header from '../../../shared/components/header/header'
import recipePic  from '../../../../assets/images/Group 48102127.png'

export default function usersList() {
  return (
    <>
    <Header title={"Users List"} description={"You can now add your items that any user can order it from the Application and you can edit"} imgPath={recipePic}/>
    </>
  )
}
