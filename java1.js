function getdata() {
    fetch('https://apis.scrimba.com/jsonplaceholder/posts')
        .then(response => response.json())
        .then(data => {
            let ran=data.splice(0,5);
            console.log(ran);
            
                
            
        }
        )}
        getdata();
     
    