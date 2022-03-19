import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID F5r4yz1snnvwLo8OJP_DGe6Q3yH-rkDUSd9ygi15fL8",
  },
});
