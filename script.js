fetch("booksCollection.json")
.then((response)=>response.json())
.then(function(books){
    const placeholder=document.querySelector("#data-output");
    let out="";
    books.forEach((book)=>{
        out+="<tr>";
        out+="<td>"+book.bookName+"</td>";
        out+="<td>"+book.authorName+"</td>";
        out+="<td>"+"<a href='>"+book.bookLink+"'>"+book.bookLink+"</a>"+"</td>";
    })
    placeholder.innerHTML=out;
})
