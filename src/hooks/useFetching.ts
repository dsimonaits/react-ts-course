import { useState } from "react";

type FetchingHookResult = [() => Promise<void>, boolean, string];

const useFetching = (callback: () => Promise<void>): FetchingHookResult => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  return [fetching, isLoading, error];
};

export default useFetching;
