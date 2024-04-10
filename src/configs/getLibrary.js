import {ethers}  from "ethers";

const POLLING_INTERVAL = 12000;

const getLibrary = (provider) => {
    // ethers.BrowserProvider
    const library = new ethers.providers.Web3Provider(provider);
    library.pollingInterval = POLLING_INTERVAL;
    return library;
}

export default getLibrary;