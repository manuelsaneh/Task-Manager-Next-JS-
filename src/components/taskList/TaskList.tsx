import { Task } from "@/utils/tasksSlice";
import React from "react";

interface TaskListProps {
  tasks: Task[];
  onToggle: (taskId: number) => void;
  onDelete: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete }) => {
  return (
    <div className="flex md:flex-wrap md:flex-row flex-col items-center pb-4 gap-2">
      {tasks.map((task) => (
        <React.Fragment key={task.id}>
          <div className="w-[290px] h-[220px] bg-secondary border-2 shadow-md rounded-md">
            <div className="flex flex-col justify-center p-4">
              <h1 className="text-[22px]">{task.task}</h1>
              <p className="text-gray-500 mt-3">{task.description}</p>
              <p className="text-gray-500 mt-2">{task.date}</p>
            </div>
            <div className="flex justify-center gap-2 p-4">
              <button
                className="border rounded-md text-sm bg-primary text-secondary p-2 w-24"
                onClick={() => onToggle(task.id)}
              >
                {task.completed ? "Complete" : "Incomplete"}
              </button>
              <button
                className="border rounded-md text-sm bg-red-500 text-secondary p-2 w-24"
                onClick={() => onDelete(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TaskList;
