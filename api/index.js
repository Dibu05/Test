import axios from "axios";

const apiKey = "a2f508640cb62f314e0e0763594d40aab1c858a7ef796184067c537a88b276aa";

export const getImages = async () => 
await axios.get(`https://api.unsplash.com/photos?client_id=${apiKey}&count=20`)

