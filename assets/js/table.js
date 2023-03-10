const search_box = document.getElementById('search_box');
const table = document.getElementsByTagName('table')[0];
const tr = table.getElementsByTagName('tr');
const form = document.getElementsByTagName('form')[0];
// form.addEventListener('submit',(e) => {
//   e.preventDefault();
//   const page = document.getElementById('page');
//   const sort = document.getElementById('sort');
//   var url = window.location.href;
//   var url = url + '?' + `page=${page.value}`;
//   window.location.href = url;
// })
search_box.addEventListener('keyup',(e) => {

   let search_txt = e.target.value.toUpperCase();
   console.log(search_txt);
   for (let i = 0; i < tr.length; i++) {

      var td = tr[i].getElementsByTagName('td')[0];

      if (td) {


        if(td.innerText.toUpperCase().indexOf(search_txt) > -1){
            tr[i].style.display = "";
        }else{
            tr[i].style.display = "none";
        }
      }
  
   

    
          
       

     
       

      }
   
      
   
    
})