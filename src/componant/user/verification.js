import { useState } from "react";

export default function validtion (obj){
    const error={
    nameerror:'',
    passworderror:'',
    emailerror:''
    }
  if(obj.name.length <=3){
    error.nameerror='the length is short must be > 3'
  }
  return error
}