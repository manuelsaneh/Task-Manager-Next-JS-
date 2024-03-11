import Link from "next/link";
import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import TaskDetails from "@/components/taskDetails/TaskDetails";
import { Props } from "@/interface/interface";

const TaskDetailsPage = ({
  tasks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="w-full h-full">
      <div className="bg-secondary p-4 shadow-md">
        <div className="flex justify-start items-center ml-4 gap-6">
          <Link href="/">
            <MdKeyboardBackspace size={30} />
          </Link>
          <p className="text-[24px]">Tasks Details</p>
        </div>
      </div>
      <div className="md:w-[500px] w-[350px] p-4 m-auto">
        <TaskDetails tasks={tasks} />
      </div>
    </div>
  );
};

export default TaskDetailsPage;

export const getServerSideProps = (async () => {
  const res = await fetch(
    "https://dev-api.almashhad.tv/api/videos/detailsElastic/182622880654874"
  );
  const data = await res.json();

  return {
    props: {
      tasks: data.data.result.related,
    },
  };
}) satisfies GetServerSideProps<{ tasks: Props }>;
