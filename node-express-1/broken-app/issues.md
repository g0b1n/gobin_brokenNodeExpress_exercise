# Broken App Issues

1. async handling. the original code didnt handle the async nature of 'axios.get' the code correctly.
   calls it within map function.
   this was fixed using 'await Promise.all()

2. lack of json body parsing. server didnt user middleware to parse json bodies from requests.
   thiw was resolved by adding 'app.use(express.json())'

3. error handling. improved error handling in routes to catch and handle errors properly

4. added input validation to ensure request body contains a valid array of usernames

5. changed the way responses are sent to ensure proper json formating as status codes.
