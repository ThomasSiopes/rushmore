const mongoose = require("mongoose");

const SurveySchema = new mongoose.Schema({
    data: {
        type: Object,
        required: true
    }
});

const Survey = mongoose.model("survey", SurveySchema);

module.exports = Survey;