import { Footer } from "../../component/Footer";
import { Header } from "../../component/Header";
import { Task } from "../../component/Task";
import { TaskInput } from "../../component/TaskInput";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput />
        {/* task */}
        <Task title="Read a book" />
        {/* task */}
        <Task title="Take a shower" />
        {/* task */}
        <Task title="Sleep" />
      </div>

      {/* //footer section */}
      <Footer
        year="2023"
        fullName="Tikomporn Luxsanaprokin"
        studentId="650612085"
      />
    </div>
  );
}
