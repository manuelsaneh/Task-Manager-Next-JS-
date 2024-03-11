import TaskList from "@/components/taskList/TaskList";
import { RootState } from "@/utils/store";
import { Task, deleteTask, setTasks, toggleTask } from "@/utils/tasksSlice";
import Link from "next/link";
import React, { useEffect } from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";

const TaskListPage: React.FC<Task> = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state: RootState) => state.tasks);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      dispatch(setTasks(JSON.parse(storedTasks)));
    }
  }, [dispatch]);

  const handleToggleTask = (taskId: number) => {
    dispatch(toggleTask(taskId));
  };

  const handleDeleteTask = (taskId: number) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div className="w-full h-full">
      <div className="bg-secondary p-4 shadow-md">
        <div className="flex justify-start items-center ml-4 gap-6">
          <Link href="/">
            <MdKeyboardBackspace size={30} />
          </Link>
          <p className="text-[24px]">Tasks List</p>
        </div>
      </div>
      <div className="m-10">
        <div>
          <TaskList
            onDelete={handleDeleteTask}
            onToggle={handleToggleTask}
            tasks={tasks.tasks}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(TaskListPage);
