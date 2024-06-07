const mongoose = require("mongoose");

const SurveySchema = new mongoose.Schema({
    data: [
        {
            type: String
        }
    ]
});

const Survey = mongoose.model("survey", SurveySchema);

module.exports = Survey;