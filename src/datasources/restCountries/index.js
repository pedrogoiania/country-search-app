const fetchData = async ({ path }) => {
  const baseUrl = `https://restcountries.com/v3.1/${path}`;

  let result = null;
  try {
    result = await fetch(baseUrl);
  } catch (err) {
    throw new Error(`Error when try to fetch ${baseUrl}`);
  }

  if (result) {
    if (result.status >= 500) {
      throw new Error('Server Unavailable');
    }

    if (result.status >= 400) {
      const json = await result.json();

      const error = json.message;

      throw new Error(error);
    }

    if (result.status >= 300) {
      const json = await result.json();
      throw new Error(JSON.stringify(json));
    }

    try {
      result = await result.json();

      return result;
    } catch (err) {
      throw new Error(`Error when try to fetch ${baseUrl}. Error when try to parse response`);
    }
  }
};

const getCountryByPartialName = (partialName) => {
  const path = `name/${partialName}`;
  return fetchData({ path: path });
};

const restCountries = {
  getCountryByPartialName,
};

export default restCountries;
