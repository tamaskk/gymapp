import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

// Define the type of the context to be used by consumers
interface AppContextType {
  overlay: boolean; // A boolean value to manage the overlay state
  overlayHandler: () => void; // A function to toggle the overlay
  random: () => void; // A function to generate random exercises
  exerciseTypeHandler: (newType: string) => void; // A function to set the exercise type
  setExercisesHandler: (
    newType: {
      name: string;
      type: string;
      muscle: string;
      equipment: string;
      difficulty: string;
      instructions: string;
    }[]
  ) => void; // A function to set the list of exercises
  exercises: {
    name: string;
    type: string;
    muscle: string;
    equipment: string;
    difficulty: string;
    instructions: string;
  }[]; // An array to store exercises
}

// Create the AppContext to be used by components
const AppContext = createContext<AppContextType | undefined>(undefined);

// Custom hook to access the AppContext
 const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}

export default useAppContext

export function AppProvider({ children }: { children: ReactNode }) {
  const [overlay, setOverlay] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const [makeRequest, setMakeRequest] = useState<boolean>(true);
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
  const [exercises, setExercises] = useState<{ name: string, type: string, muscle: string, equipment: string, difficulty: string, instructions: string }[]>([]);
  const [exerciseType, setExerciseType] = useState<string>("");

  // API-related variables
  const apiKey: string = "u00dAfMrgCsaPQ66D1yvOg==vRynVHjLDjBHFKep";
  const apiUrl: string = `https://api.api-ninjas.com/v1/exercises?type=${exerciseType}`;

    // Fetch exercise data from an API
  useEffect(() => {
    if (makeRequest) {
      fetch(apiUrl, {
        headers: {
          "X-Api-Key": apiKey,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          console.log(data);
          setMakeRequest(false); // Stop further requests
        })
        .catch((error) => {
          console.log(error);
          setMakeRequest(false); // Stop further requests on error
        });
    }
  }, [makeRequest, apiKey]);

    // Toggle the overlay
  const overlayHandler: () => void = () => {
    setOverlay((prev) => !prev);
  };

 // Set the exercise type
  const exerciseTypeHandler = (newType: string) => {
    setExerciseType(newType);
  };

   // Set the list of exercises
  const setExercisesHandler = (newType: { name: string; type: string; muscle: string; equipment: string; difficulty: string; instructions: string }[]) => {
    setExercises(newType);
  };
  
  // Generate random exercises
  const random = () => {
    const newRandomNumbers: number[] = [];
    const newExercises: { name: string; type: string; muscle: string; equipment: string; difficulty: string; instructions: string; }[] = [];
  
    while (newRandomNumbers.length < 5) {
      const randomNumberGenerator = parseFloat((Math.random() * data.length).toFixed(0));
      if (!newRandomNumbers.includes(randomNumberGenerator)) {
        newRandomNumbers.push(randomNumberGenerator);
      }
    }
  
    for (let i = 0; i < 5; i++) {
      const index = newRandomNumbers[i];
      if (data && data[index]) {
        newExercises.push(data[index]);
      }
    }
    
  
    setExercises(newExercises);
  };
  
  

  useEffect(() => {
    // This effect runs after the state has been updated
    console.log(randomNumbers);
  }, [randomNumbers]);

  useEffect(() => {
    // This effect runs after the state has been updated
    console.log(exercises);
    if (exercises && exercises.length > 0) {
      console.log(exercises[0].difficulty);
    }
  }, [exercises]);

  const contextValue: AppContextType = {
    overlayHandler,
    overlay,
    random,
    exerciseTypeHandler,
    exercises,
    setExercisesHandler 
  };

  return (
    <AppContext.Provider value={contextValue}> {children} </AppContext.Provider>
  );
}

export {AppContext};
