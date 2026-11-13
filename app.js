// alert("Hii");

fetch('https://fakestoreapi.com/products').then(response => response.json()).then(data => {
     console.log(data);
     loadSection(data);
})

function loadSection(data){
    let body = '';
    data.forEach(element => {
        body +=`
        
        `

    

});

    

}