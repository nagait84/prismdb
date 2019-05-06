import { Router } from "express";
import Sparql from "../middleware/sparqle"

const router = Router();

const className = `Song`
const classBaseUri = "https://prismdb.takanakahiko.me/rdfs/song/"
const arrayParameters = {
    'performedInLive': 'lives'
}

router.get("/", async (req, res) => {
    const keys = await Sparql.getKeys(className, classBaseUri)
    res.json({
        keys
    })
})

router.get("/:key", async (req, res) => {
    const key = req.params.key
    const properties = await Sparql.getProperties(key, classBaseUri, arrayParameters)
    res.json(properties)
})

export default router;
