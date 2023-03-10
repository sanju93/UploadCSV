var files_container = document.getElementById('files');
window.addEventListener('load',function() {
    fetch('/getting_files')
    .then(response => response.json())
    .then((data) => {
    
  
        var results = data.files;
        for(var i = 0; i < results.length; i++) {
             
          

        

                var div_row = this.document.createElement('div')
                div_row.setAttribute('class','row mt-3');
                
                      
            
            
                div_col = document.createElement('div');
                div_col.setAttribute('class','col-12');
                var para = document.createElement('p');
                para.innerHTML = results[i]["file"];
                para.setAttribute('id',`${results[i]["file"]}`);
                para.style.cursor = "pointer";

                para.addEventListener('click',(e) => {
                    var filename = e.target.getAttribute('id');
                   window.location.href = `/show_file/${filename}?page=${1}`;
                })
                
                
               
                div_col.appendChild(para);
                div_row.appendChild(div_col);
                files.appendChild(div_row);
          
        }
   
  
    })
    .catch(err => console.log(err))
})