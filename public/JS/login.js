document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email) {
        return alert('email을 입력하세요.');
    }
    if(!password){
        return alert('비밀번호를 입력하세요.')
    }
    console.log('this is user id : '+email);
    
    axios.post('/users/login',{email, password}).then(res=>{
        console.log(res.data);
        if (res.data == "login success") {
            window.location = "/main";
        }
        else if(res.data == "nick is inconsistent"){
            alert("id is inconsistent");
        }
        else{
            alert("password is inconsistent");
        }
    })

    e.target.id.value = '';
    e.target.email.value='';
    e.target.password.value = '';
});