import React from "react";
import useAppContext from "../utils/Maincontext";

const Overlay: React.FC = () => {
  // Access state and functions from the context
  const { overlayHandler, random, exercises, setExercisesHandler } = useAppContext();

  return (
    <div className="fixed top-4 left-4 right-4 bottom-4 w-[calc(100vw - 16*2px)] h-[calc(100vh - 16*2px)] p-4 bg-black text-white z-[999999999] rounded-lg overflow-y-auto flex flex-col items-center">
      {/* Close button */}
      <button
        className="absolute top-5 right-5 py-2 px-4 bg-red-400 hover-bg-red-700 transition-all duration-300 text-white rounded-full"
        onClick={() => {
          overlayHandler();
          setExercisesHandler([]); // Clear exercise suggestions
        }}
      >
        {" "}
        X{" "}
      </button>
      {exercises.length > 0 ? (
        <>
          <h1 className="text-3xl border-b-4 border-yellow-400 pb-2 mt-16 lg:mt-0 text-center">Our coach suggestions for your session</h1>
          {exercises.map((exercise, index) => (
            <div className="text-white w-full text-center mb-24 flex flex-col items-center" key={index}>
              <h1 className="mb-2 text-xl">Name of the exercise: <span className="font-semibold text-yellow-500 uppercase">{exercise.name}</span></h1>
              <h1 className="mb-2 text-xl">This muscle will be used: <span className="text-red-400 uppercase font-semibold">{exercise.muscle}</span></h1>
              <h1 className="mb-2 text-xl">These equipment you need: <span className="text-yellow-500 font-semibold uppercase">{exercise.equipment}</span></h1>
              <h1 className="mb-2 text-xl">How hard is the exercise: <span className="text-red-400 font-semibold uppercase">{exercise.difficulty}</span></h1>
              <h1 className="mb-2 text-xl pb-2">Small instructions from the exercise</h1>
              <p className="px-6 lg:px-20 mb-4">{exercise.instructions}</p>
              <a href={`https://www.youtube.com/results?search_query=${exercise.name.replace(/\s/g, '+')}`} className="text-red-400 py-4 px-3 rounded-lg border-red-400 border hover-bg-red-400 hover-text-black transition-all duration-300">Look for some video of this exercise</a>
            </div>
          ))}
        </>
      ) : 
      <div className="text-white">
        Hello
      </div>
      }
    </div>
  );
};

export default Overlay;
