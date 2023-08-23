import { useState } from "react";

// Define a custom type FetchingHookResult as a tuple.
// It consists of three elements: a function that returns a Promise, a boolean, and a string.
type FetchingHookResult = [() => Promise<void>, boolean, string];

// Create a custom hook useFetching that takes a callback returning a Promise.
const useFetching = (callback: () => Promise<void>): FetchingHookResult => {
  // Define state for isLoading with a type annotation of boolean and initialize it to false.
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Define state for error with a type annotation of string and initialize it as an empty string.
  const [error, setError] = useState<string>("");

  const fetching = async () => {
    try {
      setIsLoading(true);

      await callback();
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Return a tuple containing the fetching function, isLoading state, and error state.
  return [fetching, isLoading, error];
};

export default useFetching;
