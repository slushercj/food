import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer OLvePWa5I790kaAedJ0aw0To6zQ_p4hpEDbVbgMKk8vuI2LVXiMLoOVZ1boccTUZo-fxQAHcfsVrhtn5ZU2otOw1Xq5uyy59Jcnt4qfZmJz-cyFuMVpUXhy-yBavYHYx",
  },
});
