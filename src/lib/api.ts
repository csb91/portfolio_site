import { formData, FetcherProps } from "@/lib/interfaces";

export const fetcher = async ({ url, method, body, json = true }: FetcherProps) => {
  const res = await fetch(url, {
    method,
    ...(body && {body: JSON.stringify(body)}),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });

  if (!res.ok) {
    throw new Error('API Error');
  }

  if (json) {
    const data = await res.json();
    return data.data;
  }
}

export const contact = (formInfo: formData) => {
  return fetcher({
    url: '/api/contact',
    method: 'POST',
    body: formInfo
  })
}