var arr=[12, 13, 40, 13, 33, 45, 22, 45, 94, 21 ];

	document.write("Given array is "+"[12, 13, 40, 13, 33, 45, 22,  45, 94, 21]"+"<br><br>");
	document.write("Delete dubilicate array"+"<br><br>");

var b=[];
arr.sort();
let temporary;
for(let i=0;i<arr.length;i++){
	if(arr[i]!==temporary){
		b.push(arr[i]);
		temporary=arr[i];
	}
}
document.write(b);
