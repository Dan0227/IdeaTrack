import express from "express"
const router = express.Router()

// Obtener todas las notas/Get all notes
router.get("/", (req, res) => {
    console.log("Notes endpoint hit")
})

// Obtener una nota por ID/Get a note by ID
router.get("/:id", (req, res) => {
    const id = req.params.id;
    console.log("Get note by ID endpoint hit")
})

// Crear una nueva nota/Create a new note
router.post("/", (req, res) => {
    const { title, description } = req.body;
    console.log(req.body)
    console.log(title, description)
})

// Eliminar una nota/Delete a note
router.delete("/:id", (req,res) => {
    const id = req.params.id
    console.log(`Eliminar la nota ${id}`)
})

// Editar una nota/Edit a note
router.put("/:id", (req,res) => {
    const id = req.params.id
    const updateData = req.body
    console.log(`Nota ${id} editada`)
    console.log(updateData)
})
export default router