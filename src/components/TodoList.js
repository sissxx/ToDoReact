
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export const ToDoList = ({ newTask, setNewTask, addTask }) => {

    return (
        <>
            <div className="new-todo">
                <div id='todoform'>
                    <input id="todoform"
                        placeholder='Add new task'
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                    <button
                        onClick={addTask}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </div>
        </>

    )

}
