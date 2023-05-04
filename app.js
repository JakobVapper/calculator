function calculate() {
	const sleepHours = parseInt(document.getElementById("sleep").value);
	const socialHours = parseInt(document.getElementById("social").value);
	const exerciseHours = parseInt(document.getElementById("exercise").value);
	const studyHours = parseInt(document.getElementById("study").value);
	const otherHours = parseInt(document.getElementById("other").value);

	const totalHours = sleepHours + socialHours + exerciseHours + studyHours + otherHours;

	if (totalHours > 24) {
		alert("The total number of hours cannot be more than 24.");
		return;
	}

	const remainingHours = 24 - sleepHours - socialHours - exerciseHours - studyHours - otherHours;

	let resultText = `You have ${remainingHours} hours left in the day.`;

	if (remainingHours === 24) {
        resultText += " Enter how many hours you spend on other activities to see your results.";
    }

	if (sleepHours >= 8) {
		resultText += " You have a healthy amount of sleep!";
	}

	if (socialHours >= 8) {
		resultText += " You are socializing a full day!";
	}

	if (exerciseHours >= 1) {
		resultText += " You are staying active!";
	}

	if (studyHours >= 2) {
		resultText += " You are dedicating time to learning!";
	}

	if (otherHours > 0) {
		resultText += ` You have ${otherHours} hours for other activities.`;
	}

	document.getElementById("result").innerHTML = resultText;
}