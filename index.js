import express from "express";

const app = express();

app.use(express.json());

const people = [];

app.get("/", (request, response) => {
    return response.json({
        ok: true,
        data: people,
    });
});

app.post("/create", function(req, res) {
    people.push(req.body);

    return res.status(201).json({
        ok: true,
        data: "Persona creada",
    });
})

app.listen(6004, () =>
    console.log(`El servidor inicio en http://localhost:6004`)
);
