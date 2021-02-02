# 1. How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn&#39;t spend much time on the coding test then use this as an opportunity to explain what you would add.

I spent around 4 hours. If I had more time, I would add more unit test cases for sagas, reducers and actions etc.

# 2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you&#39;ve used it.

I liked the native support of dynamic imports in ES11. Feels pretty good that you no longer have to do a lot of manipulations in webpack to achieve that. Snipped would be something like this:

// someComponent.js
export default {
  run() {
      
  };
};

// other component
import('../components/someComponent.js')
  .then(someComponent => {
      someComponent.run();
  });

# 3. How would you track down a performance issue in production? Have you ever had to do this?

There are a lot of tools to do that, I can highlight Performance tab in DevTools, Lighthouse Audit, code optimisation, analysis of the size of images/videos, possibility of minifying the files, libraries/frameworks replacement etc

# 4. How would you improve the API that you just used?

I would create a single API endpoint to return an array with restaurants by sending the city as a query. Right now you need to receive the city ID from Zomato and make another API calls to retrieve the locations within this ID.

# 5. Please describe yourself using JSON.

{
  "name": {
    "First Name": "Ilia",
    "Last Name": "Yasau"
  },
  "age": "33",
  "occupation": "Front End Developer",
  "location": "Toronto, ON, Canada",
  "skills": [
    "Front End": [
      "HTML": "13+ years",
      "CSS": "13+ years",
      "Javascript": "9 years",
      "React": "6 years",
      "Angular": "7 years",
      "Vue": "4 years",
      "jQuery": "9 years",
      "Redux + Saga": "4 years",
    ],
    "Back End": [
      "Node.js": "3 years",
      "PHP5": "2 years",
      "MySQL": "4 years",
      "MongoDB": "3 years"
    ],
  ],
  "hobbies": [
    "coding": "9 years",
    "video games": "20+ years",
    "movies": "10+ years",
    "travelling": "10+ years"
  ]
}