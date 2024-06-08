export async function fetchServerList() {
  const response = await fetch('https://api.alt-mp.com/servers');
  return response.json();
}
