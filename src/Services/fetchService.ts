import { BASE_URL } from "../Constants/apiEndpoints";

export  async function Get<T>(url: string): Promise<T> {
  let apiUrl = BASE_URL+url;
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await (response.json() as Promise<T>);
}

export  async function Post<T, T1>(url: string,body: T1): Promise<T> {
  let apiUrl = BASE_URL+url;
  const response = await fetch(apiUrl,
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await (response.json() as Promise<T>);
}
