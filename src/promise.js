// let jsonData; 
// const element = document.getElementById('div1');
// const tag = document.createElement("p");
const startTime = performance.now();
fetch('https://dummyjson.com/products')
	.then(response => {
		if(!response){
			throw new Error('Response network error');
		}
		const endTime = performance.now();
		console.log(`Received promise data in ${endTime - startTime}ms`);
		return response.json();
	})
	.then(data => {
		
		data.products.forEach((product) => {
			console.log(product.title);
		})
	})
	.catch(error => {
		console.error(error);
});



