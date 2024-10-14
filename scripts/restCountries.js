const restCountries = (()=>{

    let restCountriesApi = {
        allCountries: "https://restcountries.com/v3.1/all",
        byName: "https://restcountries.com/v3.1/name/",
        byRegion: "https://restcountries.com/v3.1/region/"

    };

    let countries = [];

    const getAllCountries = async () => {
        
            const results = await axios.get(restCountriesApi.allCountries);
            
         return results.data;
    }

    const getCountriesByName = async (name) => {
        const results = await axios.get(`${restCountriesApi.byName}${name}`);
        return results.data;
    }

    const getCountriesByRegion = async (region) => {
        const results = await axios.get(`${restCountriesApi.byRegion}${region}`);
        return results.data;
    }

    return {
        getAllCountries,
        getCountriesByName,
        getCountriesByRegion
    }

})();

export default restCountries;

