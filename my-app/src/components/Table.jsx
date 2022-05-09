// import styles from "./Table.module.css";
import { useSelector } from "react-redux";
import Modal from "./Modal";
import {useState} from "react";
import Create from "./Create";
import Edit from "./Edit";
import styles from "./Table.module.css";

const Table = () =>{

const [createModal, setCreateModal] = useState(false)
const [editModal, setEditModal] = useState(false)
console.log(editModal)

const issue = useSelector((state)=>state.issue)

    return(
        <>
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>State</th>
                    <th>Url</th>
                    <th>Created at</th>
                    <th>Updated at</th>
                    <th><button onClick={()=>setCreateModal(true)}>+</button></th>
                </tr>
            </thead>
            <tbody>
                {issue.map((item)=>(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.state}</td>
                    <td>{item.url}</td>
                    <td>{item.createdAt}</td>
                    <td>{item.updatedAt}</td>
                    <td><button onClick={()=>{setEditModal(item.id)}}>/</button> <button>×</button></td>
                </tr>
                ))}
                </tbody>
        </table>
        {createModal && <Modal title={"Add new Issue"} close={()=>setCreateModal(false)} form={<Create close={()=>setCreateModal(false)}/>}/>}
        {editModal && <Modal title={`Issue id: ${editModal}`} close={()=>setEditModal(false)} form={<Edit close={()=>setEditModal(false)} issue={issue.find((item)=>item.id == editModal)}/>}/>}
        </>
    )
}

export default Table;