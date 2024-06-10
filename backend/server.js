const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const connectDB = require("./config/db");
const routes = require("./routes/api/survey");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const { typeDefs, resolvers } = require("./mongo/schemas");

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: {
        settings: {
            "editor.theme": "light"
        }
    }
});

async function middleWare() {
    await server.start();
    server.applyMiddleware({ app });
}

middleWare();

app.use(cors({origin:true, credentials:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/api/survey", routes);

connectDB();

app.use(express.static(path.join(__dirname, '../frontend/dist')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
})

const port = process.env.PORT || 4001;

app.listen(port, () => console.log(`Server running on port ${port}`));