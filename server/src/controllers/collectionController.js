const db = require("../database/db");

exports.getCollections = async (req, res) => {
  try {
    const [collections] = await db.query("SELECT * FROM collections ORDER BY created_at DESC");
    res.json({ success: true, data: collections });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch collections" });
  }
};

exports.createCollection = async (req, res) => {
  try {
    const { title, description, amount, deadline } = req.body;

    if (!title || !amount || !deadline) {
      return res.status(400).json({ success: false, message: "Title, amount, and deadline are required" });
    }

    const [result] = await db.query(
      "INSERT INTO collections (title, description, amount, deadline) VALUES (?, ?, ?, ?)",
      [title, description, amount, deadline]
    );

    res.status(201).json({ success: true, message: "Collection created", id: result.insertId });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to create collection" });
  }
};

exports.updateCollection = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, amount, deadline, status } = req.body;

    await db.query(
      "UPDATE collections SET title=?, description=?, amount=?, deadline=?, status=? WHERE id=?",
      [title, description, amount, deadline, status, id]
    );

    res.json({ success: true, message: "Collection updated" });
  } catch (error) {
  console.error("GET COLLECTIONS ERROR:", error);
  res.status(500).json({
    success: false,
    message: "Failed to fetch collections",
    error: error.message
  });
}
};

exports.deleteCollection = async (req, res) => {
  try {
    const { id } = req.params;

    await db.query("DELETE FROM collections WHERE id=?", [id]);

    res.json({ success: true, message: "Collection deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete collection" });
  }
};