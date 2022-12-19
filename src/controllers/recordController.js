// In src/controllers/recordController.js
const recordService = require('../services/recordService');

const getRecordForWorkout = (req, res) => {
  try {
    const {
      params: { workoutId },
    } = req;
    const recordsWorkout = recordService.getRecordForWorkout(workoutId);
    res.send({ status: 'OK', data: recordsWorkout });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

module.exports = {
  getRecordForWorkout,
};
