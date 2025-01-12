export const apiRequest = async <T = unknown>(query: string) => {
  let statusCode = 500;
  let data: T = {} as T;

  try {
    const request = await fetch(process.env.API_URL!, {
      headers: { "Content-Type": "application/json" },
      method: 'POST',
      body: JSON.stringify({ query }),
    });

    statusCode = request.status;

    const response: { data: T } = await request.json();

    data = response.data;
  } catch (error) {
    console.error('apiRequest error:', error)
  } finally {
    return {
      statusCode,
      data
    }
  }
}
