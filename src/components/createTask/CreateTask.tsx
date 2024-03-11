import React, { useState } from "react";
import { Task, addTask } from "../../utils/tasksSlice";
import { useAppDispatch } from "@/utils/hooks";

const CreateTask: React.FC = () => {
  const dispatch = useAppDispatch();
  const [newTask, setNewTask] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const newTaskData: Task = {
        id: Date.now(),
        task: newTask,
        description,
        date,
        completed: false,
      };

      dispatch(addTask(newTaskData));

      setNewTask("");
      setDescription("");
      setDate("");
    }
  };

  return (
    <div className="flex flex-col">
      <div className="bg-secondary p-4 shadow-md rounded-md w-[360px] h-[340px] ">
        <div className="mb-4">
          <label className="block text-sm font-semibold text-primary">
            Task Name:
          </label>
          <input
            type="text"
            value={newTask}
            className="w-full border-2 rounded-md px-3 py-2 mt-1 focus:border-primary focus:outline-none"
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-primary">
            Description:
          </label>
          <textarea
            value={description}
            rows={3}
            className="w-full border-2 rounded-md px-3 py-2 mt-1 resize-none focus:border-primary focus:outline-none"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-primary">
            Due Date:
          </label>
          <input
            type="date"
            value={date}
            className="w-full border-2 rounded-md px-3 py-2 mt-1 focus:border-primary focus:outline-none"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <button
        className="bg-primary text-secondary shadow-md px-4 py-2 mt-4 rounded-md hover:bg-secondary hover:text-primary"
        onClick={handleAddTask}
        disabled={!newTask}
      >
        Create
      </button>
    </div>
  );
};

export default React.memo(CreateTask);
