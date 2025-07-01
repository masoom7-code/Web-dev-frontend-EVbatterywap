document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const answers = {
    q1: "b",
    q2: "a",
    q3: "a",
    q4: "c",
    q5: "a",
    q6: "a",
    q7: "a",
    q8: "a",
    q9: "b",
    q10: "b"
  };

  let score = 0;
  let total = Object.keys(answers).length;

  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === answers[key]) {
      score++;
    }
  }

  // ✅ Show alert with score
  alert(`You answered ${score} out of ${total} questions correctly!`);

  // ✅ Show score in result div
  const result = document.getElementById("result");
  result.textContent = `✅ You scored ${score} out of ${total}`;

  // Optional: Color feedback
  result.classList.remove("text-green-600", "text-red-600");
  if (score >= 8) {
    result.classList.add("text-green-600");
  } else {
    result.classList.add("text-red-600");
  }
});
