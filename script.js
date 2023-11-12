const API_KEY = "31e9f9747c5e408289a7ea690056de1d";

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

// Function to remove HTML tags from string

function stripHtmlTags(input) {
  const doc = new DOMParser().parseFromString(input, "text/html");
  return doc.body.textContent || " ";
}
