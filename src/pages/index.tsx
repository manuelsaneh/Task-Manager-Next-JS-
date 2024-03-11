import CreateTask from "@/components/createTask/CreateTask";
import Navbar from "../components/navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex justify-center mt-10">
        <CreateTask />
      </div>
    </main>
  );
}
