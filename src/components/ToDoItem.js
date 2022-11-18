import { Fragment } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faTrash, faCircleNotch } from '@fortawesome/free-solid-svg-icons'

export const ToDoItem = ({ todo, markDone, deleteTask }) => {
    return (
        <>
            {todo
                .map(task => {
                    return (
                        < Fragment key={task.id}>
                            <div id="todos-list" >
                                <div className={task.status ? 'done todo' : 'todo'} >
                                    <div onClick={(e) => markDone(task.id)}>
                                        {task.status
                                            ? <FontAwesomeIcon icon={faCircleCheck} />
                                            : <FontAwesomeIcon icon={faCircleNotch} />
                                        }
                                    </div>
                                    <p>{task.title}</p>
                                    <span title="Delete"
                                        onClick={() => deleteTask(task.id)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </span>

                                </div>
                            </div>
                        </Fragment>
                    )
                })
            }
        </>

    )

}
