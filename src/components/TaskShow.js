import { useState } from "react";
import TaskCreate from "./TaskCreate";
function TaskShow({task,onDelete,onUpdate}) {

    const [showUpdate, setShowUpdate] = useState(false);
    
    const handleDeleteClick = ()=>{
        onDelete(task.id);
    }
    const handleUpdateClick = ()=>{
        setShowUpdate(!showUpdate);
    }

    const handleSubmit = (id,title,updatedTitle,updatedTaskDesc)=>{
        setShowUpdate(false);
        onUpdate(id,title,updatedTitle,updatedTaskDesc);
    }
    return ( <div className="task-show">

        {
            showUpdate ? (
                <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit}/>
            ): <div>
                    <h3 className="task-title">Göreviniz</h3>
                    <p>{task.title}</p>
                    <h3 className="task-title">Yapılacaklar</h3>
                    <p>{task.taskDesc}</p>
                    <div>
                        <button className="task-delete" onClick={handleDeleteClick}>Sil</button>
                        <button className="task-update" onClick={handleUpdateClick}>Güncelle</button>
                    </div>
            </div>
        }
        

    </div> );
}

export default TaskShow;