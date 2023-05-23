/*navbar section */
fetch("./navbar.html")
.then(response =>{
    return response.text()
})
.then(data =>{
    document.querySelector("navbar").innerHTML=data
})