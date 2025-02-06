import { useState, useRef } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef();

  const addTask = () => {
    const newTask = inputRef.current.value.trim();
    if (newTask === "") {
      alert("Bo'sh bo'laolmaydi!");
      return;
    }
    if (tasks.some((task) => task.text === newTask)) {
      alert("Bu allaqachon mavjud!");
      return;
    }
    setTasks([...tasks, { text: newTask, completed: false }]);
    inputRef.current.value = "";
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const activeTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0d0714] text-[#9e78cf]">
      <div className="py-14 px-20 bg-[#1d1825] rounded-2xl">
        <div className="flex justify-between mb-6">
          <input
            ref={inputRef}
            type="text"
            placeholder="Add a new task"
            className="flex-grow bg-transparent border border-[#9e78cf] rounded-lg px-4 py-2 focus:outline-none focus:border-[#78CFB0] hover:border-[#78CFB0]"
            onKeyPress={(e) => e.key === "Enter" && addTask()}
          />
          <button
            onClick={addTask}
            className="ml-4 bg-[#9e78cf] p-2 rounded-lg hover:bg-[#78CFB0]"
          >
            +
          </button>
        </div>
        <h3 className="text-white mb-4">Tasks to do - {activeTasks.length}</h3>
        <div className="space-y-4">
          {activeTasks.map((task, index) => (
            <div
              key={index}
              className={`flex justify-between items-center p-2 rounded-lg ${
                task.completed ? "bg-[#2c2432]" : "bg-[#15101C]"
              } hover:bg-[#2c2432]`}
            >
              <span
                className={`px-4 py-2 text-lg ${
                  task.completed ? "line-through text-[#78CFB0]" : "text-white"
                }`}
              >
                {task.text}
              </span>
              <div className="flex space-x-2">
                <button
                  onClick={() => toggleTaskCompletion(tasks.indexOf(task))}
                  className="text-green-400 hover:text-green-500"
                >
                  ✓
                </button>
                <button
                  onClick={() => deleteTask(tasks.indexOf(task))}
                  className="text-red-400 hover:text-red-500"
                >
                  ✗
                </button>
              </div>
            </div>
          ))}
        </div>
        <h3 className="text-white mt-6">Done - {completedTasks.length}</h3>
        <div className="space-y-4">
          {completedTasks.map((task, index) => (
            <div
              key={index}
              className={`flex justify-between items-center p-2 rounded-lg bg-[#15101C] hover:bg-[#2c2432]`}
            >
              <span className={`px-4 py-2 text-lg text-[#78CFB0] line-through`}>
                {task.text}
              </span>
              <div className="flex space-x-2">
                <button
                  onClick={() => toggleTaskCompletion(tasks.indexOf(task))}
                  className="text-green-400 hover:text-green-500"
                >
                  ✓
                </button>
                <button
                  onClick={() => deleteTask(tasks.indexOf(task))}
                  className="text-red-400 hover:text-red-500"
                >
                  ✗
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
