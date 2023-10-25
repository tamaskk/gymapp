import { jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useState, useEffect, } from "react";
// Create the AppContext to be used by components
const AppContext = createContext(undefined);
// Custom hook to access the AppContext
const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};
export default useAppContext;
export function AppProvider({ children }) {
    const [overlay, setOverlay] = useState(false);
    const [data, setData] = useState();
    const [makeRequest, setMakeRequest] = useState(true);
    const [randomNumbers, setRandomNumbers] = useState([]);
    const [exercises, setExercises] = useState([]);
    const [exerciseType, setExerciseType] = useState("");
    // API-related variables
    const apiKey = "u00dAfMrgCsaPQ66D1yvOg==vRynVHjLDjBHFKep";
    const apiUrl = `https://api.api-ninjas.com/v1/exercises?type=${exerciseType}`;
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
    const overlayHandler = () => {
        setOverlay((prev) => !prev);
    };
    // Set the exercise type
    const exerciseTypeHandler = (newType) => {
        setExerciseType(newType);
    };
    // Set the list of exercises
    const setExercisesHandler = (newType) => {
        setExercises(newType);
    };
    // Generate random exercises
    const random = () => {
        const newRandomNumbers = [];
        const newExercises = [];
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
    const contextValue = {
        overlayHandler,
        overlay,
        random,
        exerciseTypeHandler,
        exercises,
        setExercisesHandler
    };
    return (_jsxs(AppContext.Provider, { value: contextValue, children: [" ", children, " "] }));
}
export { AppContext };
