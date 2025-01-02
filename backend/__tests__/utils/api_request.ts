export const apiRequest = async <T = unknown>(query: string) => {
  let statusCode = 500;
  let data: T = {} as T;

  try {
    const request = await fetch('http://localhost:4000', {
      headers: {
        "Content-Type": "application/json"
      },
      method: 'POST',
      body: JSON.stringify({ query }),
    });

    statusCode = request.status;

    const response: T = await request.json();

    data = response;
  } catch (error) {
    console.error(error)
  } finally {
    return {
      statusCode,
      data
    }
  }
}