const Todo = require("../models/todo")

module.exports = {
  getAllTodo: async (req, res) => {
    const todo = await Todo.find().populate("user", "name")

    res.json({
      message: "success get data",
      data: todo
    })
  },

  getTodoByID: async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findById(id).populate(
          "user",
          "-email -password -__v"
        );
        res.json({
          message: "get data success",
          data: todo,
        });
      } catch (error) {
        res.status(500).send({
          message: "server error",
        });
      }
    },

  addTodo: (req, res) => {
    const data = req.body
    const todo = new Todo(data)
    todo.save()

    res.json({
      message: "todo has been created"
    })
  },

  updateTodoByID: async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const todo = await Todo.findByIdAndUpdate(id, data);
        res.json({
          message: "update data success",
        });
      } catch (error) {
        res.status(500).send({
          message: "server error",
          error: error.message,
        });
    }

  },
  
  deleteTodoByID: async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByIdAndDelete(id);
        res.json({
          message: "delete data success",
        });
      } catch (error) {
        res.status(500).send({
          message: "server error!",
          error: error.message,
        });
      }
  },

  deleteAllTodo: async (req, res) => {
    try {
        const todo = await Todo.deleteMany();
        res.json({
          message: "delete data success",
        });
      } catch (error) {
        res.status(500).send({
          message: "server error!",
          error: error.message,
        });
      }
  },
}