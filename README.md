# friendfinder

Take the survey to find your new best friend!

https://boiling-mesa-70889.herokuapp.com/home
<img src="css/screenrecord.gif">

<h2>Requirements</h2>
<ul>
<li>Modularity in the form of separate files for server logic, storing of friends, views, and routing</li>
<li>10-question survey to assess uniqueness of users</li>
<li>Use express and path npm packages in the server.js file</li>
<li>Separate JavaScript files for routing</li>
<li>Separate file for storing friends (friends.js)</li>
<li>Calculate best match for user once survey is completed and return that match to the user</li>
</ul>
<h2>Technologies Used</h2>
<ul>
<li>JavaScript</li>
<li>jQuery</li>
<li>node.js</li>
<li>Express.js</li>
<li>HTML</li>
<li>Bulma<li>
</ul>

<h2>Code Explanation</h2>
<ul>
<li>The server.js file sets up the Express server, specifying port number, the npm packages that need to be loaded, and also the routes, which  have been externalized </li>
<li>There are 2 separate HTML files that serve as the front-end portion- they determine what the user sees</li>
<li>2 routing files determine the back-end logic. the HTML routes display the survey and the homepage based on the URL that is accessed, and the API routes send back existing content in the server-side data or add new friends</li>

<li>Best match is calculated by finding the friend with the minimal difference in scores and then sending that friend to the browser as a JSON object</li>
<li>A modal is then toggled, displaying the the best match to the person who just took the survey</li>
