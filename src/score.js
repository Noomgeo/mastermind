export default secret => guess => {
	//compute and return score

	/*let matches = 0;
	for(let i=0; i<(guess.length); i++){
		if(guess[i] === secret[i]){
			matches++;
		}
	}*/

	const matches = guess.filter((guessDigit, i)=>(
		guessDigit === secret[i]
	)).length;

	const guessRemainder = guess.filter((guessDigit, i)=>(
		guessDigit !== secret[i]
	));

	const secretRemainder = secret.filter((secretDigit, i)=>(
		secretDigit!== guess[i]
	));

	const guessBins = [0, 1, 2, 3 , 4, 5].map(d=> (
		guessRemainder.filter(guessDigit => (
			guessDigit === d
		)).length
	));

	const secretBins = [0, 1, 2, 3 , 4, 5].map(d=> (
		secretRemainder.filter(secretDigit => (
			secretDigit === d
		)).length
	));

	const inexactMatches = guessBins.reduce((total, guessBins, d)=>(
		total + Math.min( guessBins, secretBins[d] )
	), 0);

	return[matches, inexactMatches];

};
