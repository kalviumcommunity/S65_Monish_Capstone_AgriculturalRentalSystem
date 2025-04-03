import axios from 'axios'
import { useState } from 'react'



const Signup=()=>{

    const[name,setname]=useState('')
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')


    const handlesumbit=async(e)=>{

        e.preventDefault();

        try{
            const response=await axios.post('http://localhost:5000/api/register',{name,email,password})

            console.log(response.data)
            alert('signup succesfully')


            
        } catch(error){
            console.log(error);
            
        }
    }


    return(

        <div>
            <form onSubmit={handlesumbit}>
                <input type="text" value={name} onChange={(e)=>setname(e.target.value)} required />
                <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} required />
                <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} required />


                <button type='submit'>Signup</button>
            </form>
        </div>
    )


}



export default Signup;