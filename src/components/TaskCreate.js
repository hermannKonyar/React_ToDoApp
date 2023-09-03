import { useState } from "react";
function TaskCreate({onCreate,task,taskFormUpdate,onUpdate}) {


const [title, setTitle] = useState(task ? task.title : '');
const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '');
const handleChange = (event)=>{
    setTitle(event.target.value);
};
const handleTaskChange = (event)=>{
    setTaskDesc(event.target.value);
};
const handleSubmit = (event)=>{
    event.preventDefault();
    if(taskFormUpdate){
        onUpdate(task.id,title,taskDesc)
    }else{
        onCreate(title,taskDesc);
    }
    
    setTitle('')
    setTaskDesc('')
};

    return ( 
    
        <div>
            {
                taskFormUpdate ? 
                <div className="task-edit">

                <h3>Lütfen görevi düzenleyiniz...</h3>
                <form className="task-form">
                    <label className="task-label">Başlık</label>
                    <input value={title} onChange={handleChange} className="task-input"/>
                    <label className="task-label">Görev
                    </label >
                    <textarea value={taskDesc} onChange={handleTaskChange} className="task-input" rows={5}></textarea>
                    <button className="task-buton buton-update" onClick={handleSubmit}>Düzenle</button>
                </form>
            </div>
            :
            <div className="task-create">

                <h3>Lütfen görev ekleyiniz...</h3>
                <form className="task-form">
                    <label className="task-label">Başlık</label>
                    <input value={title} onChange={handleChange} className="task-input"/>
                    <label className="task-label">Görev
                    </label >
                    <textarea value={taskDesc} onChange={handleTaskChange} className="task-input" rows={5}></textarea>
                    <button className="task-buton" onClick={handleSubmit}>Oluştur</button>
                </form>
            </div>

        }
        </div>
    
     );
}

export default TaskCreate;