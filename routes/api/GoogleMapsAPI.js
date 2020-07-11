import axios from "axios";

// Export an object containing methods we'll use for accessing the GitHub Jobs API

export default {
  searchTerms: function(query) {
    return axios.get(
      "https://maps.googleapis.com/maps/api/place/findplacefromtext/output?key=AIzaSyDRTQ_xpQl97CMweBEaTnxhkkZoWU30_QY&" +
        "input=" + query +
        "&inputtype=textquery"
    );
  }
};
