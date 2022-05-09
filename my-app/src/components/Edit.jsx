import styles from "./Create.module.css"
import { useDispatch } from "react-redux";
import {edit} from "../features/issueSlice"
import {useState} from "react";

const Edit =({close, issue})=>{
    const dispatch = useDispatch()
    const [newIssue, setNewIsssue] = useState({id:issue.id, title: issue.title, state: issue.state, url: issue.url, createdAt: issue.createdAt, updatedAt: issue.updatedAt})
    console.log(newIssue)
    const save=()=>{
        dispatch(edit(newIssue))
        close()
    }

    console.log(issue)
    
    return(
        <>
        <form className={styles.form}> 
            <input value={newIssue.id} type="text" placeholder="Id" onChange={(e)=>setNewIsssue({...newIssue,id:e.target.value})}/>
            <input value={newIssue.title} type="text" placeholder="Title" onChange={(e)=>setNewIsssue({...newIssue,title:e.target.value})}/>
            <input value={newIssue.state} type="text" placeholder="State" onChange={(e)=>setNewIsssue({...newIssue,state:e.target.value})}/>
            <input value={newIssue.url} type="text" placeholder="Url" onChange={(e)=>setNewIsssue({...newIssue,url:e.target.value})}/>
            <input value={newIssue.createdAt} type="text" placeholder="Created at" onChange={(e)=>setNewIsssue({...newIssue,createdAt:e.target.value})}/>
            <input value={newIssue.updatedAt} type="text" placeholder="Updated at" onChange={(e)=>setNewIsssue({...newIssue,updatedAt:e.target.value})}/>
        </form>
        <button onClick={save}>Save</button>
        <button onClick={close}>Cancel</button>
        </>
    )
}

export default Edit;