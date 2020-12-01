document.getElementById('SignUp-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const nick = e.target.nick.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const repassword = e.target.repassword.value;
    console.log(nick);
    console.log(password);
    if (!nick) {
    return alert('nick을 입력하세요.');
    }
    if(!password){
    return alert('비밀번호를 입력하세요.')
    }
    if(password != repassword){
    return alert('비밀번호가 틀렸습니다.')
    }
    try {
    await axios.post('/users/join', { email, nick, password }).then(res=>{
        if (res.data == "login success") {
            window.location = "/login";
        }
        else if(res.dat == "Already Joined"){
            alert("이미 가입된 이메일 입니다.");
            window.location = "/";
        }
    })
    } catch (err) {
    console.error(err);
    }
    e.target.id.value = '';
    e.target.email.value = '';
    e.target.password.value = '';
    e.target.repassword.value = '';
});