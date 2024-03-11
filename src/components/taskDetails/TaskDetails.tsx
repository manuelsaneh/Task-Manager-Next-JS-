import { Details } from "@/interface/interface";
import { getServerSideProps } from "@/pages/task-details";
import { InferGetServerSidePropsType } from "next";
import Image from "next/image";
import React from "react";

const TaskDetails = ({
  tasks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className=" flex flex-col justify-center">
      {tasks.map((task: Details) => (
        <div
          key={task.id}
          className="flex justify-center items-center flex-col m-5 border  bg-secondary shadow-md rounded-md"
        >
          <h1 className="md:text-[22px] text-[18px] font-semibold p-2 m-1">
            {task.title}
          </h1>
          {task.image === "" ? (
            <p>No Image</p>
          ) : (
            <Image
              src={task.image}
              width={300}
              height={200}
              alt="image"
              className="md:m-2 rounded-md w-auto h-auto object-contain overflow-hidden"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskDetails;
