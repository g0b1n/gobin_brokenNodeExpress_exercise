const express = require("express");
// let axios = require("axios");
// var app = express();
const axios = require("axios"); //my code
const app = express(); //my code

//my code
app.use(express.json()); //to parse JSON body

app.post("/", async function (req, res, next) {
    try {
        //my code
        let developers = req.body.developers;
        if (!developers || !Array.isArray(developers)) {
            return res.status(400).send("Invalid request body");
        }

        let results = await Promise.all(
            developers.map((d) =>
                axios.get(`https://api.github.com/users/${d}`)
            )
        );

        //     let results = req.body.developers.map(async (d) => {
        //         return await axios.get(`https://api.github.com/users/${d}`);
        //     });
        //     let out = results.map((r) => ({ name: r.data.name, bio: r.data.bio }));

        // changed this line
        // processes the results
        let out = results.map((r) => ({ name: r.data.name, bio: r.data.bio }));
        //my code
        // sends json response
        return res.json(out);

        //     return res.send(JSON.stringify(out));
        // } catch {
        //     next(err);
        // }
    } catch (err) {
        next(err);
    }
});

app.listen(3000, () => {
    console.log("Server running on port: 3000");
});
