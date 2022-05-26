let token = 0
let is_checked = false

function demoEvent() {
    const spring_server_path = "192.168.137.248"
    const host_url_path = "localhost"

    console.log("Hello, World")
    alert("워드 클라우드를 생성하시겠습니까?")

    fetch("http://" + host_url_path + ":8090/api/v1")
        .then((res) => {
            console.log(res)
        })
}

function sendmail() {
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value

    alert("이메일이 전송되었습니다.")

    fetch("http://localhost:8090/api/v1/mail/" + username + "/" + email)
        .then((res) => res.json())
        .then((data) => token = data)

}

function checkingToken() {
    const c = document.getElementById("token_input").value

    if (c == token) {
        alert("인증 확인")
        is_checked = true
    } else alert("인증번호가 틀립니다.")

}

function clickSubmit() {
    console.log(is_checked)

    if (is_checked) {
        document.getElementById("join-form").submit()
        alert("회원가입이 완료되었습니다.")
    } else {
        alert("모든 입력을 완료해주세요.")
    }
}


