document.getElementById('content_form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    
    axios.post('/main/write',{content}).then(res=>{
        if (res.data == "save success") {
            alert("save success");
            window.location = "/main";
        }
    })
});