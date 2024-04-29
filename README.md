Name: Pagadala Sairam<br>
ID :COD6766<br>
Domain: Web development<br>
Duration: 1 month<br>
mentor : Sravani gouni<br>
description<br>
The Weather Application project is an innovative endeavour that leverages the core web technologies—HTML, CSS, and JavaScript—to deliver real-time weather updates directly to users. This application interfaces with a robust weather API to fetch and display current weather conditions, forecasts, humidity levels, wind speeds, and more based on the user's queried location. It's designed to be simple, intuitive, and responsive, ensuring a seamless experience across various devices and screen sizes. Through this project, we demonstrate the practical use of asynchronous JavaScript for data retrieval, the dynamic updating of web content, and the implementation of responsive web design principles to accommodate a broad user base.<br>
<br>
 HTML Structure:<br>
- The HTML includes elements for the app's title, input field for entering the city name, search button, error message display, and weather information display.
<br>
CSS Styling:<br>
- CSS styles the layout, colors, and fonts of the elements to create an appealing user interface.
- It includes styles for the heading, search input field, search button, weather information display, and error message display.
<br>
JavaScript Functionality:<br>
API Integration:<br>
   - The application fetches weather data from the OpenWeatherMap API using a unique API key.<br>
   - The `apiKey` and `apiUrl` variables store the API key and base URL for making API requests.<br>
Search Functionality:<br>
   - The `checkweather()` function is an asynchronous function that fetches weather data for the specified city.<br>
   - It constructs the API URL with the city name and API key, makes a GET request to the API, and awaits the response.<br>
   - If the city is not found (404 error), it displays an error message. Otherwise, it displays the weather details.<br>

 Event Listeners:<br
   - An event listener is attached to the search button (`button`). When clicked, it triggers the `checkweather()` function with the city name entered by the user.<br>

 Date Formatting:<br>
   - The `dateBuilder()` function formats the current date obtained from the `Date` object into a readable format (e.g., "Monday 29 April 2024").<br>

Display Handling:<br>
- Initially, the weather information display (`weather`) is set to `display: none` in CSS to hide it until weather data is fetched successfully.<br>
- If an error occurs (e.g., city not found), the error message display is shown (`error`), and the weather display is hidden.<br>
- When weather data is successfully fetched, the weather display is shown, and the error message display is hidden.<br>



