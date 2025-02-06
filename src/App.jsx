import { useState, useRef } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef();

  const addTask = () => {
    const newTask = inputRef.current.value.trim();
    if (newTask === "") {
      alert("Bosh joy aniqlandi!");
      return;
    }
    if (tasks.some((task) => task.text === newTask)) {
      alert("Allaqachon bor!");
      return;
    }
    setTasks([...tasks, { text: newTask, completed: false }]);
    inputRef.current.value = "";
  };

  const toggleTaskCompletion = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const activeTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="flex items-center justify-center h-screen bg-[#0d0714] text-[#9e78cf]">
      <div className="bg-[#1d1825] py-[52.5px] px-[75.5px] rounded-2xl w-[583px] h-[700px]">
        <div className="flex justify-between mb-[59px]">
          <input
            ref={inputRef}
            type="text"
            placeholder="Add a new task"
            className="bg-transparent border border-[#9e78cf] rounded-[10px] px-4 py-2 w-full focus:outline-none hover:border-[#78CFB0] cursor-pointer"
            onKeyPress={(e) => e.key === "Enter" && addTask()}
          />
          <button
            onClick={addTask}
            className="bg-[#9e78cf] rounded-[10px] p-2 hover:bg-[#78CFB0] ml-[10px] cursor-pointer"
          >
            +
          </button>
        </div>
        <h3 className="text-white mb-4">Tasks to do - {activeTasks.length}</h3>
        <div className="space-y-4">
          {activeTasks.map((task, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-2 rounded-[10px] bg-[#15101C] hover:bg-[#2c2432]"
            >
              <span className="px-4 py-2 text-lg text-white">{task.text}</span>
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
              className="flex justify-between items-center p-2 rounded-[10px] bg-[#15101C] hover:bg-[#2c2432]"
            >
              <span className="px-4 py-2 text-lg text-[#78CFB0] line-through">
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
