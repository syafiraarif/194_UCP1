const express = require('express');
const app = express();
const db = require('./models');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
});

db.sequelize.sync().then((result) => {
    app.listen(3000, () => {
        console.log('Server Started');
    })
})
    .catch((err) => {
        console.log(err);
    })


    app.post('/kandang', async (req, res) => {
    const data = req.body;
    try {
        const kandang = await db.Kandang.create(data);
        res.send(kandang);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

app.get('/kandang', async (req, res) => {
    try {
        const kandang = await db.Kandang.findAll();
        res.send(kandang);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});


app.put('/kandang/:ID', async (req, res) => {
    const ID = req.params.ID;
    const data = req.body;
    try {
        const kandang = await db.Kandang.findByPk(ID);
        if (!kandang) {
            return res.status(404).send({ message: "Kandang not found" });
        }
        await kandang.update(data);
        res.send({ message: "Kandang berhasil diupdate" }, kandang);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

app.delete('/kandang/:ID', async (req, res) => {
    const ID = req.params.ID;
    try {
        const kandang = await db.Kandang.findByPk(ID);
        if (!kandang) {
            return res.status(404).send({ message: "Kandang not found" });
        }
        await kandang.destroy();
        res.send({ message: "Kandang berhasil dihapus" }, kandang);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});
