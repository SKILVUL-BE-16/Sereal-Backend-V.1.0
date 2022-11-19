const Materi = require("../models/materi");

module.exports = {
  getAllMateri: async (req, res) => {
    try {
      const materi = await Materi.find({}, "-__v");

      res.status(200).json(materi);
    } catch (e) {
      console.log(e);
    }
  },

  getMateriByID: async (req, res) => {
    const { id } = req.params;

    try {
      if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(400).json({ message: "No data for this materi" });
      const materi = await Materi.findOne({ _id: id });
      res.status(200).json([materi]);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },

  addMateri: (req, res) => {
    const data = req.body;

    const materi = new Materi(data);
    materi.save(function (err) {
      if (err) {
        res.status(500).json({
          massage: err,
        });
      } else {
        res.status(201).json({
          message: "Materi has been created",
        });
      }
    });
  },

  updateMateriByID: async (req, res) => {
    const { id } = req.params;
    const { title, description, content, categories, status } = req.body;
    try {
      const materi = await Materi.findOne({ _id: id });

      if (title) materi.title = title;

      if (description) materi.description = description;

      if (content) {
        if (content.image) materi.content.image = content.image;

        if (content.video) materi.content.video = content.video;
      }

      for (let key in categories) {
        if (categories[key]) materi.categories[key] = categories[key];
      }

      if (status != undefined && typeof status == "boolean")
        status ? (materi.status = true) : (materi.status = false);

      await materi.save();

      res.json({
        massage: "success",
        data: materi,
      });
    } catch (e) {
      res.status(500).send({
        message: "server error",
        error: e.message,
      });
    }
  },

  deleteMateriByID: async (req, res) => {
    const { id } = req.params;
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ msg: "No data for this materi" });
      }
      await Materi.deleteOne({ _id: id });
      res.status(200).send({ massage: "success delete materi" });
    } catch {
      res.status(404);
      res.send({ error: "Materi doesn't exist!" });
    }
  },
};
