import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ROZQiyspTafzIZGXwnVY7YPSwc3wl2uwog7JKaSsMfU",
  },
});
