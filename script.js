var fortunes = ["Enjoy the good luck a companion brings you.", "You learn from your mistakes... You will learn a lot today.", "Your shoes will make you happy today.", "A dream you have will come true.", "You will become great if you believe in yourself.", "The greatest risk is not taking one.", "You are very talented in many ways.", "Wealth awaits you very soon.", "Now is the time to try something new.", "Serious trouble will bypass you."];

var str = "";
var i = 0;
function enter() {
	str = document.getElementById("text1").value;
	document.getElementById("output").innerHTML = fortunes[parseInt(str)];
}