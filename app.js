function multiplicationTable(size) {
	for(var i=1; i<=size;i++) {
	var arr =[];
	for (var j=1;j<=size;j++) {
 		arr.push(i*j);   
	}
	var max=size*size;
	var width = max.toString().length
	console.log(arr.map(function(item) {
		var whitespace=" ";
		for (var i=0; i<(width-(item.toString().length)); i++) {
			whitespace = whitespace+" ";
		}
		return item.toString()+whitespace;
		}).join(" "));
	}
}