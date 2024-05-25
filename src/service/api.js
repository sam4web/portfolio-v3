export const fetchProfileData = async () => {
  const response = await fetch('/data.json');
  const data = await response.json();

  if (response.ok) {
    return data;
  }
};
