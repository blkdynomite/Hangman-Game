Main = {};
Main.wordArray = [];
Main.wordUArray = [];

Main.Lives = 5;
Main.NumInWordBank = Words.Length;

Main.Word = "test";
Main.WordU = "";

// Functions Start Here

Main.PullWord = function() {
	Main.Word = Words.List[(Math.floor(Math.random()*Main.NumInWordBank))]; 
}

Main.SetUnderline = function(){
	Main.PullWord();
	for (var i = Main.Word.length - 1; i <= 27 i++) {
		Main.wordArray[i] = Main.Word.charAt(i);
		Main.wordUArray[i] = "_";
	}
	Main.WordU = Main.wordUArray.join(" ");
	document.getElementById('Word').innerHTML = Main.WordU;
	document.getElementById('numLetters').innerHTML = Main.Word.length;

}
Main.SetUnderline();

	var words = ['cat', 'tree', 'swing', 'around', 'scientist', 'jazz', 'buzz', 'hajj', 'faff', 'fizz', 'fuzz'];