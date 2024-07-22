// import React from 'react';
// import { DragDropContext, Droppable, Draggable } from '@atlaskit/drag-and-drop';
// import Column from './Column';

// const TaskBoard = ({ tasks, onCreateTask, onUpdateTask, onDeleteTask }) => {
//     const columns = ['To Do', 'In Progress', 'Done'];

//     const onDragEnd = (result) => {
//         const { source, destination } = result;

//         if (!destination) {
//             return;
//         }

//         if (source.droppableId !== destination.droppableId) {
//             const task = tasks.find((task) => task._id === result.draggableId);
//             task.column = destination.droppableId;
//             onUpdateTask(task._id, task);
//         }
//     };

//     return (
//         <DragDropContext onDragEnd={onDragEnd}>
//             <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//                 {columns.map((column) => (
//                     <Droppable key={column} droppableId={column}>
//                         {(provided) => (
//                             <div
//                                 ref={provided.innerRef}
//                                 {...provided.droppableProps}
//                                 style={{ margin: '0 10px', width: '30%' }}
//                             >
//                                 <h3>{column}</h3>
//                                 {tasks
//                                     .filter((task) => task.column === column)
//                                     .map((task, index) => (
//                                         <Draggable
//                                             key={task._id}
//                                             draggableId={task._id}
//                                             index={index}
//                                         >
//                                             {(provided) => (
//                                                 <div
//                                                     ref={provided.innerRef}
//                                                     {...provided.draggableProps}
//                                                     {...provided.dragHandleProps}
//                                                     style={{
//                                                         ...provided.draggableProps.style,
//                                                         marginBottom: '10px'
//                                                     }}
//                                                 >
//                                                     <Column
//                                                         task={task}
//                                                         onUpdateTask={onUpdateTask}
//                                                         onDeleteTask={onDeleteTask}
//                                                     />
//                                                 </div>
//                                             )}
//                                         </Draggable>
//                                     ))}
//                                 {provided.placeholder}
//                             </div>
//                         )}
//                     </Droppable>
//                 ))}
//             </div>
//         </DragDropContext>
//     );
// };

// export default TaskBoard;

import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Column from './Column';

const TaskBoard = ({ tasks, onCreateTask, onUpdateTask, onDeleteTask }) => {
    const columns = ['To Do', 'In Progress', 'Done'];

    const onDragEnd = (result) => {
        const { source, destination } = result;

        if (!destination) {
            return;
        }

        if (source.droppableId !== destination.droppableId) {
            const task = tasks.find((task) => task._id === result.draggableId);
            task.column = destination.droppableId;
            onUpdateTask(task._id, task);
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {columns.map((column) => (
                    <Droppable key={column} droppableId={column}>
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                style={{ margin: '0 10px', width: '30%' }}
                            >
                                <h3>{column}</h3>
                                {tasks
                                    .filter((task) => task.column === column)
                                    .map((task, index) => (
                                        <Draggable
                                            key={task._id}
                                            draggableId={task._id}
                                            index={index}
                                        >
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={{
                                                        ...provided.draggableProps.style,
                                                        marginBottom: '10px'
                                                    }}
                                                >
                                                    <Column
                                                        task={task}
                                                        onUpdateTask={onUpdateTask}
                                                        onDeleteTask={onDeleteTask}
                                                    />
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                ))}
            </div>
        </DragDropContext>
    );
};

export default TaskBoard;

