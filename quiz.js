// Step 1: Function Declaration
function checkAnswer() {
    // Step 2: Identify the Correct Answer
    const correctAnswer = "4";

    // Step 3: Retrieve the User’s Answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // لو المستخدم ما اختارش أي إجابة
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer.";
        return;
    }

    const userAnswer = selectedOption.value;

    // Step 4: Compare the User’s Answer with the Correct Answer
    const feedback = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Step 5: Add an Event Listener to the Submit Button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
