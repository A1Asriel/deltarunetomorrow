const endpoint = "https://api.country.is/";

const geoip = async function () {
    if (!document.cookie.includes("country")) {
        try {
            const response = await fetch(endpoint);
            const data = await response.json();
            document.cookie = `country=${data.country.toLowerCase()}; path=/;`;
        } catch (error) {
            console.error(error);
        }
    }
}

const promise = geoip();
window.addEventListener('DOMContentLoaded', async function () {
    await promise;
    if (document.cookie.includes("country=ru")) {
        const geolimited = document.getElementsByClassName("geolimited");
        while (geolimited.length > 0) {
            geolimited[0].remove();
        };
    };
});

