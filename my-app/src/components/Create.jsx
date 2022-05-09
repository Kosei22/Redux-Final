import styles from "./Create.module.css"
import { useDispatch } from "react-redux";
import {create} from "../features/issueSlice"
import {useState} from "react";

const Create =({close})=>{
    const dispatch = useDispatch()
    const [newIssue, setNewIsssue] = useState({id:"", title: "", state: "", url: "", createdAt: "", updatedAt: ""})
    console.log(newIssue)
    const save=()=>{
        dispatch(create(newIssue))
        close()
    }
    
    return(
        <>
        <form className={styles.form}> 
            <input type="text" placeholder="Id" onChange={(e)=>setNewIsssue({...newIssue,id:e.target.value})}/>
            <input type="text" placeholder="Title" onChange={(e)=>setNewIsssue({...newIssue,title:e.target.value})}/>
            <input type="text" placeholder="State" onChange={(e)=>setNewIsssue({...newIssue,state:e.target.value})}/>
            <input type="text" placeholder="Url" onChange={(e)=>setNewIsssue({...newIssue,url:e.target.value})}/>
            <input type="text" placeholder="Created at" onChange={(e)=>setNewIsssue({...newIssue,createdAt:e.target.value})}/>
            <input type="text" placeholder="Updated at" onChange={(e)=>setNewIsssue({...newIssue,updatedAt:e.target.value})}/>
        </form>
        <button onClick={save}>Save</button>
        <button onClick={close}>Cancel</button>
        </>
    )
}

export default Create;