// Define an interface for your API response if possible
interface ApiResponse {
  message: string;
}

export const healthCheck = async (
  setData: (data: string) => void,
  setError: (error: string) => void,
  setIsLoading: (isLoading: boolean) => void,
) => {
  setIsLoading(true);
  setData('');
  setError('');

  try {
    const response = await fetch('/api/db-check');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: ApiResponse = (await response.json()) as ApiResponse;
    setData(JSON.stringify(data));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'An unknown error occurred';
    setError(message);
  } finally {
    setIsLoading(false);
  }
};
