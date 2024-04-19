import LoremIpsum from "react-lorem-ipsum";
import TodoData from "./component/TodoData";
import TodoForm from "./component/TodoForm";
import { useDispatch, useSelector } from "react-redux";
import { recentDel } from "./redux/todoslice/RecentDel";
import Spinner from "./component/Spinner";


function App() {
  const deleted=useSelector(state=>state.recdel.del)
  console.log(deleted)
  const dispatch=useDispatch()
  const deleterec=(data)=>{
    dispatch(recentDel(data))

  }
  return (
    <>
    <h3>Redux Todo List</h3>
    <h4>Add Todo</h4>
    <aside>
      <h6 style={{textAlign:'center'}}><i>Recently Delete</i></h6>
      {
       deleted.length===0 ? (<Spinner/>) : deleted.map((val,i)=>(
          <p key={i} style={{backgroundColor:'rgb(250, 249, 246)',padding:'5px',color:'black', boxShadow: '3px 5px 9px rgba(0, 0, 0, 0.5)',borderRadius:'3px'}}>{val.todoinp}</p>
        ))
      }
    </aside>
    
    <TodoForm/>
    <TodoData deleterec={deleterec}/>

   
    
    </>
  );
}

export default App;
