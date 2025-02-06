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
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="10" fill="#9E78CF" />
              <rect
                width="22"
                height="22"
                transform="translate(9 9)"
                fill="#9E78CF"
              />
              <path
                d="M28.25 20C28.25 20.1823 28.1776 20.3572 28.0486 20.4861C27.9197 20.6151 27.7448 20.6875 27.5625 20.6875H20.6875V27.5625C20.6875 27.7448 20.6151 27.9197 20.4861 28.0486C20.3572 28.1776 20.1823 28.25 20 28.25C19.8177 28.25 19.6428 28.1776 19.5139 28.0486C19.3849 27.9197 19.3125 27.7448 19.3125 27.5625V20.6875H12.4375C12.2552 20.6875 12.0803 20.6151 11.9514 20.4861C11.8224 20.3572 11.75 20.1823 11.75 20C11.75 19.8177 11.8224 19.6428 11.9514 19.5139C12.0803 19.3849 12.2552 19.3125 12.4375 19.3125H19.3125V12.4375C19.3125 12.2552 19.3849 12.0803 19.5139 11.9514C19.6428 11.8224 19.8177 11.75 20 11.75C20.1823 11.75 20.3572 11.8224 20.4861 11.9514C20.6151 12.0803 20.6875 12.2552 20.6875 12.4375V19.3125H27.5625C27.7448 19.3125 27.9197 19.3849 28.0486 19.5139C28.1776 19.6428 28.25 19.8177 28.25 20Z"
                fill="white"
              />
            </svg>
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
                  <svg
                    width="31"
                    height="30"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.0487061"
                      width="30"
                      height="30"
                      rx="5"
                      fill="#15101C"
                    />
                    <path
                      d="M23.7851 10.6739L12.7851 21.6739C12.7213 21.7378 12.6455 21.7885 12.562 21.8231C12.4785 21.8577 12.3891 21.8755 12.2987 21.8755C12.2084 21.8755 12.1189 21.8577 12.0355 21.8231C11.952 21.7885 11.8762 21.7378 11.8123 21.6739L6.99982 16.8614C6.87081 16.7324 6.79834 16.5574 6.79834 16.375C6.79834 16.1926 6.87081 16.0176 6.99982 15.8886C7.12882 15.7596 7.30378 15.6871 7.48622 15.6871C7.66866 15.6871 7.84363 15.7596 7.97263 15.8886L12.2987 20.2155L22.8123 9.70109C22.9413 9.57209 23.1163 9.49962 23.2987 9.49962C23.4812 9.49962 23.6561 9.57209 23.7851 9.70109C23.9141 9.8301 23.9866 10.0051 23.9866 10.1875C23.9866 10.3699 23.9141 10.5449 23.7851 10.6739Z"
                      fill="#9E78CF"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => deleteTask(tasks.indexOf(task))}
                  className="text-red-400 hover:text-red-500"
                >
                  <svg
                    width="31"
                    height="30"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.0487061"
                      width="30"
                      height="30"
                      rx="5"
                      fill="#15101C"
                    />
                    <path
                      d="M22.6112 8.125H7.48621C7.30387 8.125 7.129 8.19743 7.00007 8.32636C6.87114 8.4553 6.79871 8.63016 6.79871 8.8125C6.79871 8.99484 6.87114 9.1697 7.00007 9.29864C7.129 9.42757 7.30387 9.5 7.48621 9.5H8.17371V21.875C8.17371 22.2397 8.31857 22.5894 8.57643 22.8473C8.8343 23.1051 9.18403 23.25 9.54871 23.25H20.5487C20.9134 23.25 21.2631 23.1051 21.521 22.8473C21.7788 22.5894 21.9237 22.2397 21.9237 21.875V9.5H22.6112C22.7935 9.5 22.9684 9.42757 23.0973 9.29864C23.2263 9.1697 23.2987 8.99484 23.2987 8.8125C23.2987 8.63016 23.2263 8.4553 23.0973 8.32636C22.9684 8.19743 22.7935 8.125 22.6112 8.125ZM20.5487 21.875H9.54871V9.5H20.5487V21.875ZM10.9237 6.0625C10.9237 5.88016 10.9961 5.7053 11.1251 5.57636C11.254 5.44743 11.4289 5.375 11.6112 5.375H18.4862C18.6685 5.375 18.8434 5.44743 18.9723 5.57636C19.1013 5.7053 19.1737 5.88016 19.1737 6.0625C19.1737 6.24484 19.1013 6.4197 18.9723 6.54864C18.8434 6.67757 18.6685 6.75 18.4862 6.75H11.6112C11.4289 6.75 11.254 6.67757 11.1251 6.54864C10.9961 6.4197 10.9237 6.24484 10.9237 6.0625Z"
                      fill="#9E78CF"
                    />
                  </svg>
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
                  <svg
                    width="31"
                    height="30"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.0487061"
                      width="30"
                      height="30"
                      rx="5"
                      fill="#15101C"
                    />
                    <path
                      d="M23.7851 10.6739L12.7851 21.6739C12.7213 21.7378 12.6455 21.7885 12.562 21.8231C12.4785 21.8577 12.3891 21.8755 12.2987 21.8755C12.2084 21.8755 12.1189 21.8577 12.0355 21.8231C11.952 21.7885 11.8762 21.7378 11.8123 21.6739L6.99982 16.8614C6.87081 16.7324 6.79834 16.5574 6.79834 16.375C6.79834 16.1926 6.87081 16.0176 6.99982 15.8886C7.12882 15.7596 7.30378 15.6871 7.48622 15.6871C7.66866 15.6871 7.84363 15.7596 7.97263 15.8886L12.2987 20.2155L22.8123 9.70109C22.9413 9.57209 23.1163 9.49962 23.2987 9.49962C23.4812 9.49962 23.6561 9.57209 23.7851 9.70109C23.9141 9.8301 23.9866 10.0051 23.9866 10.1875C23.9866 10.3699 23.9141 10.5449 23.7851 10.6739Z"
                      fill="#9E78CF"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => deleteTask(tasks.indexOf(task))}
                  className="text-red-400 hover:text-red-500"
                >
                  <svg
                    width="31"
                    height="30"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.0487061"
                      width="30"
                      height="30"
                      rx="5"
                      fill="#15101C"
                    />
                    <path
                      d="M22.6112 8.125H7.48621C7.30387 8.125 7.129 8.19743 7.00007 8.32636C6.87114 8.4553 6.79871 8.63016 6.79871 8.8125C6.79871 8.99484 6.87114 9.1697 7.00007 9.29864C7.129 9.42757 7.30387 9.5 7.48621 9.5H8.17371V21.875C8.17371 22.2397 8.31857 22.5894 8.57643 22.8473C8.8343 23.1051 9.18403 23.25 9.54871 23.25H20.5487C20.9134 23.25 21.2631 23.1051 21.521 22.8473C21.7788 22.5894 21.9237 22.2397 21.9237 21.875V9.5H22.6112C22.7935 9.5 22.9684 9.42757 23.0973 9.29864C23.2263 9.1697 23.2987 8.99484 23.2987 8.8125C23.2987 8.63016 23.2263 8.4553 23.0973 8.32636C22.9684 8.19743 22.7935 8.125 22.6112 8.125ZM20.5487 21.875H9.54871V9.5H20.5487V21.875ZM10.9237 6.0625C10.9237 5.88016 10.9961 5.7053 11.1251 5.57636C11.254 5.44743 11.4289 5.375 11.6112 5.375H18.4862C18.6685 5.375 18.8434 5.44743 18.9723 5.57636C19.1013 5.7053 19.1737 5.88016 19.1737 6.0625C19.1737 6.24484 19.1013 6.4197 18.9723 6.54864C18.8434 6.67757 18.6685 6.75 18.4862 6.75H11.6112C11.4289 6.75 11.254 6.67757 11.1251 6.54864C10.9961 6.4197 10.9237 6.24484 10.9237 6.0625Z"
                      fill="#9E78CF"
                    />
                  </svg>
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
