import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import oracledb from "oracledb";

const config = {
    user: "system",
    password: "netlab",
    connectString:
        "(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1522))(CONNECT_DATA =(SID= xe)))",
};

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get("/teams", (req, res) => {
    async function getTeams() {
        let db;

        try {
            db = await oracledb.getConnection(config);

            const result = await db.execute("select * from Football_Club");

            res.send(result.rows);
        } catch (err) {
            console.log("Ouch!", err);
        } finally {
            if (db) {
                // conn assignment worked, need to close
                await db.close();
            }
        }
    }

    getTeams();
});

app.post("/addPlayer", (req, res) => {
    console.log(req.body);
    async function addPlayer() {
        let conn;

        try {
            conn = await oracledb.getConnection(config);

            let randomId = Math.floor(Math.random() * (100000 - 200 + 1)) + 200;

            console.log(req.body);
            console.log(req.body.clubId);
            console.log(randomId);
            console.log(req.body.age);
            console.log(req.body.nationality);
            console.log(req.body.position);
            console.log(req.body.name);
            console.log(req.body.surname);
            console.log(req.body.goals);
            console.log(req.body.assists);
            console.log(req.body.shots);
            console.log(req.body.shotsOnTarget);
            console.log(req.body.yellowCards);
            console.log(req.body.redCards);

            await conn.execute(
                `INSERT INTO Player VALUES (${randomId}, ${req.body.clubId}, ${req.body.age}, '${req.body.nationality}', '${req.body.position}', '${req.body.name}', '${req.body.surname}', ${req.body.goals}, ${req.body.assists}, ${req.body.shots}, ${req.body.shotsOnTarget}, ${req.body.yellowCards}, ${req.body.redCards})`,
                [],
                { autoCommit: true }
            );

            // INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
            // VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');
        } catch (err) {
            console.log("Ouch!", err);
        } finally {
            if (conn) {
                // conn assignment worked, need to close
                await conn.close();
            }
        }
    }

    addPlayer();
});

app.post("/addClub", (req, res) => {
    console.log(req.body);
    async function addClub() {
        let conn;

        try {
            conn = await oracledb.getConnection(config);

            let randomId = Math.floor(Math.random() * (100000 - 200 + 1)) + 200;

            console.log(req.body);
            console.log(randomId);
            console.log(req.body.soccerClubName);
            console.log(req.body.winnings);
            console.log(req.body.draws);
            console.log(req.body.losses);

            await conn.execute(
                `INSERT INTO Football_Club VALUES (${randomId}, '${req.body.soccerClubName}', ${req.body.winnings}, ${req.body.draws}, ${req.body.losses})`,
                [],
                { autoCommit: true }
            );

            // INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
            // VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');
        } catch (err) {
            console.log("Ouch!", err);
        } finally {
            if (conn) {
                // conn assignment worked, need to close
                await conn.close();
            }
        }
    }

    addClub();
});

app.listen(3001, () => console.log("Server address http://localhost:3001"));

// app.get("/", (req, res) => {
//     res.send("Server with orders");
// });

// app.get("/orders", (req, res) => {
//     fs.readFile("./orders.json", "utf8", (err, ordersJson) => {
//         if (err) {
//             console.log("File read failed in GET /orders: " + err);
//             res.status(500).send("File read failed");
//             return;
//         }
//         console.log("GET: /orders");
//         res.send(ordersJson);
//     });
// });

// app.get("/orders/:id", (req, res) => {
//     fs.readFile("./orders.json", "utf8", (err, ordersJson) => {
//         if (err) {
//             console.log(
//                 "File read failed in GET /orders/" + req.params.id + ": " + err
//             );
//             res.status(500).send("File read failed");
//             return;
//         }
//         var orders = JSON.parse(ordersJson);
//         var order = orders.find(
//             (ordertmp) => ordertmp.orderId == req.params.id
//         );
//         if (!order) {
//             console.log("Can't find order with id: " + req.params.id);
//             res.status(500).send("Cant find order with id: " + req.params.id);
//             return;
//         }
//         var orderJSON = JSON.stringify(order);
//         console.log("GET /orders/" + req.params.id);
//         res.send(orderJSON);
//     });
// });

// app.post("/orders", (req, res) => {
//     fs.readFile("./orders.json", "utf8", (err, ordersJson) => {
//         if (err) {
//             console.log("File read failed in POST /orders: " + err);
//             res.status(500).send("File read failed");
//             return;
//         }
//         var orders = JSON.parse(ordersJson);
//         var order = orders.find(
//             (ordertmp) => ordertmp.orderId == req.body.orderId
//         );
//         if (!order) {
//             orders.push(req.body);
//             var newList = JSON.stringify(orders);
//             fs.writeFile("./orders.json", newList, (err) => {
//                 if (err) {
//                     console.log("Error writing file in POST /orders: " + err);
//                     res.status(500).send("Error writing file orders.json");
//                 } else {
//                     res.status(201).send(req.body);
//                     console.log(
//                         "Successfully wrote file orders.json and added new order with id = " +
//                             req.body.orderId
//                     );
//                 }
//             });
//         } else {
//             console.log(
//                 "Order by id = " + req.body.orderId + " already exists"
//             );
//             res.status(500).send(
//                 "Order by id = " + req.body.orderId + " already exists"
//             );
//             return;
//         }
//     });
// });

// app.put("/orders/:id", (req, res) => {
//     fs.readFile("./orders.json", "utf8", (err, ordersJson) => {
//         if (err) {
//             console.log(
//                 "File read failed in PUT /orders/" + req.params.id + ": " + err
//             );
//             res.status(500).send("File read failed");
//             return;
//         }
//         var orders = JSON.parse(ordersJson);
//         var orderBody = orders.find(
//             (ordertmp) => ordertmp.orderId == req.body.orderId
//         );
//         if (orderBody && orderBody.orderId != req.params.id) {
//             console.log(
//                 "Order by id = " + orderBody.orderId + " already exists"
//             );
//             res.status(500).send(
//                 "Order by id = " + orderBody.orderId + " already exists"
//             );
//             return;
//         }
//         var order = orders.find(
//             (ordertmp) => ordertmp.orderId == req.params.id
//         );
//         if (!order) {
//             orders.push(req.body);
//             var newList = JSON.stringify(orders);
//             fs.writeFile("./orders.json", newList, (err) => {
//                 if (err) {
//                     console.log(
//                         "Error writing file in PUT /orders/" +
//                             req.params.id +
//                             ": " +
//                             err
//                     );
//                     res.status(500).send("Error writing file orders.json");
//                 } else {
//                     res.status(201).send(req.body);
//                     console.log(
//                         "Successfully wrote file orders.json and added new order with id = " +
//                             req.body.orderId
//                     );
//                 }
//             });
//         } else {
//             for (var i = 0; i < orders.length; i++) {
//                 if (orders[i].orderId == order.orderId) {
//                     orders[i] = req.body;
//                 }
//             }
//             var newList = JSON.stringify(orders);
//             fs.writeFile("./orders.json", newList, (err) => {
//                 if (err) {
//                     console.log(
//                         "Error writing file in PUT /orders/" +
//                             req.params.id +
//                             ": " +
//                             err
//                     );
//                     res.status(500).send("Error writing file orders.json");
//                 } else {
//                     res.status(200).send(req.body);
//                     console.log(
//                         "Successfully wrote file orders.json and edit order with old id = " +
//                             req.params.id
//                     );
//                 }
//             });
//         }
//     });
// });

// app.delete("/orders/:id", (req, res) => {
//     fs.readFile("./orders.json", "utf8", (err, ordersJson) => {
//         if (err) {
//             console.log("File read failed in DELETE /orders: " + err);
//             res.status(500).send("File read failed");
//             return;
//         }
//         var orders = JSON.parse(ordersJson);
//         var orderIndex = orders.findIndex(
//             (ordertmp) => ordertmp.orderId == req.params.id
//         );
//         if (orderIndex != -1) {
//             orders.splice(orderIndex, 1);
//             var newList = JSON.stringify(orders);
//             fs.writeFile("./orders.json", newList, (err) => {
//                 if (err) {
//                     console.log(
//                         "Error writing file in DELETE /orders/" +
//                             req.params.id +
//                             ": " +
//                             err
//                     );
//                     res.status(500).send("Error writing file orders.json");
//                 } else {
//                     res.status(204).send();
//                     console.log(
//                         "Successfully deleted order with id = " + req.params.id
//                     );
//                 }
//             });
//         } else {
//             console.log("Order by id = " + req.params.id + " does not exists");
//             res.status(500).send(
//                 "Order by id = " + req.params.id + " does not exists"
//             );
//             return;
//         }
//     });
// });
