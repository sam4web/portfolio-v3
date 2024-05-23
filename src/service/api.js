export const fetchProfileData = async () => {
  const response = await fetch('http://localhost:5000/data.json');
  const json = await response.json();

  if (response.ok) {
    return json;
  }

  return null;
};
