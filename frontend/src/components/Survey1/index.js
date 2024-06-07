import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";

const SurveyOne = (input) => {
    const survey = new Model(input.input);
    survey.onComplete.add(function(sender, options) {
        options.showSaveInProgress();
        const xhr = new XMLHttpRequest();
        xhr.open("POST","http://localhost:4001");
        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        xhr.onload = xhr.onerror = function () {
            if(xhr.status === 200) {
                options.showSaveSuccess();
            } else {
                options.showSaveError();
            }
        }
        xhr.send(JSON.stringify(sender.data));
        console.log(JSON.stringify(sender.data));
    })

    return <Survey model={survey}/>
}

export default SurveyOne;