//your code here

let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

touristSpots = touristSpots.map((word) => {
	let articles = ['a', 'an', 'The', 'A', 'An', 'the']
	if(articles.includes(word.split(" ")[0])){
		word = word.split(' ')
		word.shift()
    	return word.join(" ");
	}else{
    	return word;
  	}
})

let ul = document.getElementsByTagName('ul')[0];

touristSpots.sort().forEach((word) => {
	let li = document.createElement('li');
	li.textContent = word;
	ul.append(li)
})

