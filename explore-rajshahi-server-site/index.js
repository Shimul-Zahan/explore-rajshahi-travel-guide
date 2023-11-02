const express = require('express');
const app = express();
const cors = require('cors')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 5000;
require('dotenv').config();

// exploreRajshahi
// 782dTnZWUx09x1ai
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true, //for not same site 
}))
app.use(cookieParser())


const verify = async (req, res, next) => {
    const token = req.cookies?.token;
    console.log(token);
    // console.log(token);
    if (!token) {
        return res.status(401).send({ status: 'Unauthorized Access', code: 401 })
    }
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, decode) => {
        if (err) {
            console.log(err)
            return res.status(401).send({ message: 'Unauthorize Access' })
        }
        console.log(decode);
        req.decode = decode
        next();
    })
}

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@shimulclaster1.85diumq.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();

        const allDistrict = client.db("ExploreRajshahi").collection("allDistrict");
        const allThana = client.db("ExploreRajshahi").collection("allThana");
        const allPlaces = client.db("ExploreRajshahi").collection("allPlaces");
        // const haiku = database.collection("haiku");

        app.get('/districts', verify, async (req, res) => {
            const result = await allDistrict.find().toArray();
            res.send(result)
        })
        app.get('/thanas', async (req, res) => {
            const page = parseInt(req.query.page);
            const size = parseInt(req.query.size);
            const result = await allThana.find().skip(page * size).limit(size).toArray();
            res.send(result)
        })

        app.get('/thanaCount', async (req, res) => {
            const result = await allThana.estimatedDocumentCount();
            res.send({ count: result });
        })

        app.get('/thanas/:name', async (req, res) => {
            const name = req.params.name;
            console.log(name)
            const query = { distarict: name };
            const result = await allThana.find(query).toArray();
            res.send(result)
        })
        app.get('/places', async (req, res) => {
            const result = await allPlaces.find().toArray();
            res.send(result)
        })

        app.post('/add-district', verify, async (req, res) => {
            try {
                const body = req.body
                const result = await allDistrict.insertOne(body);
                // console.log(result)
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })

        app.post('/add-thana', async (req, res) => {
            try {
                const body = req.body
                const result = await allThana.insertOne(body);
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })

        app.post('/add-place', async (req, res) => {
            try {
                const body = req.body
                const result = await allPlaces.insertOne(body);
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })

        // jwt
        app.post('/jwt', (req, res) => {
            const body = req.body;
            console.log(body)
            const token = jwt.sign(body, process.env.ACCESS_TOKEN, { expiresIn: '1h' })
            res.cookie('token', token, {
                httpOnly: true,
                // sameSite: 'none',
                secure: false,
            })
            res.send({ success: true, token });
        })

        app.post('/logout', async (req, res) => {
            const body = req.body;
            res.clearCookie('token', { maxAge: 0 }).send({ Message: 'Successfully cookie delete' })
        })

        app.delete('/districts/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const query = { _id: new ObjectId(id) };
                const result = await allDistrict.deleteOne(query);
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })

        app.delete('/thanas/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const query = { _id: new ObjectId(id) };
                const result = await allThana.deleteOne(query);
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })

        app.delete('/places/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const query = { _id: new ObjectId(id) };
                const result = await allPlaces.deleteOne(query);
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })



        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.listen(port, () => {
    console.log(`Server Running at: ${port}`)
})