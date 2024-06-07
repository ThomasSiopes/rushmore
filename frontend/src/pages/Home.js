import React from "react";

import { Container } from "react-bootstrap";
import SurveyOne from "../components/Survey1";

function Home () {
    const surveyJson = {
        elements: [{
            name: "FirstName",
            title: "Enter your first name:",
            type: "text",
            isRequired: true
        }, {
            name: "LastName",
            title: "Enter your last name:",
            type: "text",
            isRequired: false
        }, {
            name: "First",
            title: "Which number is the highest?",
            type: "radiogroup",
            choices: [
                {value: 1, text: "One"},
                {value: 2, text: "Dos"},
                {value: 3, text: "3"},
                {value: 4, text: "IV"},
                {value: 5, text: "The number of sides on a pentagon..."}
            ],
            isRequired: true
        }, {
            name: "Secret",
            title: "This is a secret question, you can only see it by choosing the right answer to the first one. Can you see this question?",
            type: "radiogroup",
            choices: [
                {value: true, text: "Yes"},
                {value: false, text: "No"}
            ],
            visibleIf: "{First} = 5"
        }, {
            name: "Comment",
            title: "Any further comments / questions?",
            type: "comment"
        }]
    }

    return <Container className="my-5">
        <SurveyOne input={surveyJson}/>
    </Container>
}

export default Home;