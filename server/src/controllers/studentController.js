export const getStudents = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Students fetched successfully",
      data: []
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;

    res.status(200).json({
      success: true,
      message: `Student ${id} fetched successfully`
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};