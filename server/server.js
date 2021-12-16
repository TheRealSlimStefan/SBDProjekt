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

app.get("/", (req, res) => {
    async function getTeam() {
        let db;

        try {
            db = await oracledb.getConnection(config);

            const result = await db.execute(
                `select game.ID_match game, host.club_name host, goals_host, guest.club_name guest, goals_guest
                from Football_Match game, Football_Club host, Football_Club guest, Match_Statistics statistics
                where game.ID_home_club = host.id_club 
                and game.ID_away_club = guest.id_club
                and game.ID_match = statistics.ID_match`
            );

            console.log(result);
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

    getTeam();
});

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

app.get("/highlight/:id/playersHost", (req, res) => {
    async function getHighlightPlayers() {
        let db;

        try {
            db = await oracledb.getConnection(config);

            const result = await db.execute(`select game.ID_match game
            , host.club_name host, hostPlayers.ID_player, hostPlayers.player_name, hostPlayers.player_surname
            FROM Football_Match game, Football_Club host, Player hostPlayers
            where game.ID_home_club = host.id_club 
            and host.ID_club = hostPlayers.ID_club
            and game.ID_match = ${req.params.id}`);

            console.log(result);
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

    getHighlightPlayers();
});

app.get("/highlight/:id/playersGuest", (req, res) => {
    async function getHighlightPlayers() {
        let db;

        try {
            db = await oracledb.getConnection(config);

            const result = await db.execute(`select game.ID_match game
            , guest.club_name guest, guestPlayers.ID_player, guestPlayers.player_name, guestPlayers.player_surname
            FROM Football_Match game, Football_Club guest, Player guestPlayers
            where game.ID_away_club = guest.id_club 
            and guest.ID_club = guestPlayers.ID_club
            and game.ID_match = ${req.params.id}`);

            console.log(result);
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

    getHighlightPlayers();
});

app.get("/highlight/:id", (req, res) => {
    console.log(req.params.id);
    async function getHighlight() {
        let db;

        try {
            db = await oracledb.getConnection(config);

            const result = await db.execute(
                `select game.ID_match game, host.club_name host, goals_host, shots_host, possession_host, passes_host, guest.club_name guest, goals_guest, shots_guest, possession_guest, passes_guest
                from Football_Match game, Football_Club host, Football_Club guest, Match_Statistics statistics
                where game.ID_home_club = host.id_club 
                and game.ID_away_club = guest.id_club
                and game.ID_match = statistics.ID_match
                and game.ID_match = ${req.params.id}`
            );

            console.log(result);
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

    getHighlight();
});

app.get("/team/:id", (req, res) => {
    console.log(req.params.id);
    async function getTeam() {
        let db;

        try {
            db = await oracledb.getConnection(config);

            const result = await db.execute(
                `select * from football_club, Player where Player.ID_club = Football_club.ID_club and Football_club.ID_club = ${req.params.id}`
            );

            console.log(result);
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

    getTeam();
});

app.get("/player/:id", (req, res) => {
    console.log(req.params.id);
    async function getPlayer() {
        let db;

        try {
            db = await oracledb.getConnection(config);

            const result = await db.execute(
                `select * FROM Player where Player.ID_player = ${req.params.id}`
            );

            console.log(result);
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

    getPlayer();
});

app.get("/statistics/goals", (req, res) => {
    async function getStatistics() {
        let db;

        try {
            db = await oracledb.getConnection(config);

            const result = await db.execute(
                "SELECT ID_player, player_name, player_surname, goals FROM Player WHERE goals > 0 ORDER BY goals DESC"
            );
            console.log(result.rows);

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

    getStatistics();
});

app.get("/statistics/assists", (req, res) => {
    async function getStatistics() {
        let db;

        try {
            db = await oracledb.getConnection(config);

            const result = await db.execute(
                "SELECT ID_player, player_name, player_surname, assists FROM Player WHERE assists > 0 ORDER BY assists DESC"
            );
            console.log(result.rows);

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

    getStatistics();
});

app.get("/statistics/yellowcards", (req, res) => {
    async function getStatistics() {
        let db;

        try {
            db = await oracledb.getConnection(config);

            const result = await db.execute(
                "SELECT ID_player, player_name, player_surname, yellow_cards FROM Player WHERE yellow_cards > 0 ORDER BY yellow_cards DESC"
            );
            console.log(result.rows);

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

    getStatistics();
});

app.get("/statistics/redcards", (req, res) => {
    async function getStatistics() {
        let db;

        try {
            db = await oracledb.getConnection(config);

            const result = await db.execute(
                "SELECT ID_player, player_name, player_surname, red_cards FROM Player WHERE red_cards > 0 ORDER BY red_cards DESC"
            );
            console.log(result.rows);

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

    getStatistics();
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
            console.log(req.body.stadium);
            console.log(req.body.winnings);
            console.log(req.body.draws);
            console.log(req.body.losses);

            await conn.execute(
                `INSERT INTO Football_Club VALUES (${randomId}, ${req.body.stadium}, '${req.body.soccerClubName}', ${req.body.winnings}, ${req.body.draws}, ${req.body.losses})`,
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

app.post("/addCoach", (req, res) => {
    console.log(req.body);
    async function addCoach() {
        let conn;

        try {
            conn = await oracledb.getConnection(config);

            let randomId = Math.floor(Math.random() * (100000 - 200 + 1)) + 200;

            console.log(req.body);
            console.log(randomId);
            console.log(req.body.coachClubId);
            console.log(req.body.coachRole);
            console.log(req.body.coachName);
            console.log(req.body.coachSurname);

            await conn.execute(
                `Insert Into Coach Values (${randomId}, ${req.body.coachClubId}, '${req.body.coachRole}', '${req.body.coachName}', '${req.body.coachSurname}')`,
                [],
                { autoCommit: true }
            );
        } catch (err) {
            console.log("Ouch!", err);
        } finally {
            if (conn) {
                // conn assignment worked, need to close
                await conn.close();
            }
        }
    }

    addCoach();
});

app.post("/addReferee", (req, res) => {
    console.log(req.body);
    async function addReferee() {
        let conn;

        try {
            conn = await oracledb.getConnection(config);

            let randomId = Math.floor(Math.random() * (100000 - 200 + 1)) + 200;

            console.log(req.body);
            console.log(randomId);
            console.log(req.body.refereeRole);
            console.log(req.body.refereeName);
            console.log(req.body.refereeSurname);

            await conn.execute(
                `Insert Into Referee Values (${randomId}, '${req.body.refereeRole}', '${req.body.refereeName}', '${req.body.refereeSurname}')`,
                [],
                { autoCommit: true }
            );
        } catch (err) {
            console.log("Ouch!", err);
        } finally {
            if (conn) {
                // conn assignment worked, need to close
                await conn.close();
            }
        }
    }

    addReferee();
});

app.post("/addStadium", (req, res) => {
    console.log(req.body);
    async function addStadium() {
        let conn;

        try {
            conn = await oracledb.getConnection(config);

            let randomId = Math.floor(Math.random() * (100000 - 200 + 1)) + 200;

            console.log(req.body);
            console.log(randomId);
            console.log(req.body.stadiumName);
            console.log(req.body.stadiumCity);

            await conn.execute(
                `Insert Into Stadium Values(${randomId}, '${req.body.stadiumName}', '${req.body.stadiumCity}')`,
                [],
                { autoCommit: true }
            );
        } catch (err) {
            console.log("Ouch!", err);
        } finally {
            if (conn) {
                // conn assignment worked, need to close
                await conn.close();
            }
        }
    }

    addStadium();
});

app.post("/addMatch", (req, res) => {
    console.log(req.body);
    async function addMatch() {
        let conn;

        try {
            conn = await oracledb.getConnection(config);

            let randomId = Math.floor(Math.random() * (100000 - 200 + 1)) + 200;

            console.log(req.body);
            console.log(randomId);
            console.log(req.body.matchHomeClubId);
            console.log(req.body.matchAwayClubId);
            console.log(req.body.matchTournamentId);
            console.log(req.body.matchStadiumId);
            console.log(req.body.matchHomeResult);
            console.log(req.body.matchAwayResult);
            console.log(req.body.matchStatisticsHostGoals);
            console.log(req.body.matchStatisticsHostShots);
            console.log(req.body.matchStatisticsHostPossession);
            console.log(req.body.matchStatisticsHostPasses);
            console.log(req.body.matchStatisticsGuestGoals);
            console.log(req.body.matchStatisticsGuestShots);
            console.log(req.body.matchStatisticsGuestPossession);
            console.log(req.body.matchStatisticsGuestPasses);

            await conn.execute(
                `Insert Into Football_Match Values (${randomId}, ${req.body.matchHomeClubId}, ${req.body.matchAwayClubId}, ${req.body.matchTournamentId}, ${req.body.matchStadiumId}, '${req.body.matchHomeResult}', '${req.body.matchAwayResult}')`,
                [],
                { autoCommit: true }
            );

            await conn.execute(
                `Insert Into Match_Statistics Values(${randomId}, ${req.body.matchStatisticsHostGoals}, ${req.body.matchStatisticsGuestGoals}, ${req.body.matchStatisticsHostShots}, ${req.body.matchStatisticsHostShots}, ${req.body.matchStatisticsHostPossession}, ${req.body.matchStatisticsGuestPossession}, ${req.body.matchStatisticsHostPasses}, ${req.body.matchStatisticsGuestPasses})`,
                [],
                { autoCommit: true }
            );
        } catch (err) {
            console.log("Ouch!", err);
        } finally {
            if (conn) {
                // conn assignment worked, need to close
                await conn.close();
            }
        }
    }

    addMatch();
});

app.post("/removeMatch", (req, res) => {
    console.log(req.body);
    async function removeMatch() {
        let conn;

        try {
            conn = await oracledb.getConnection(config);

            await conn.execute(
                `DELETE FROM Match_Statistics WHERE ID_match = ${req.body.matchId}`,
                [],
                { autoCommit: true }
            );

            await conn.execute(
                `DELETE FROM Football_Match WHERE ID_match = ${req.body.matchId}`,
                [],
                { autoCommit: true }
            );
        } catch (err) {
            console.log("Ouch!", err);
        } finally {
            if (conn) {
                // conn assignment worked, need to close
                await conn.close();
            }
        }
    }

    removeMatch();
});

app.post("/removePlayer", (req, res) => {
    console.log(req.body);
    async function removeStadium() {
        let conn;

        try {
            conn = await oracledb.getConnection(config);

            await conn.execute(
                `DELETE FROM Player WHERE ID_player = ${req.body.playerId}`,
                [],
                { autoCommit: true }
            );
        } catch (err) {
            console.log("Ouch!", err);
        } finally {
            if (conn) {
                // conn assignment worked, need to close
                await conn.close();
            }
        }
    }

    removeStadium();
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
