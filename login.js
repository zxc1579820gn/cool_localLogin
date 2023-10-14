//===================================================登陸畫面=======================================================================================

const Account = document.getElementById("Account")
const Password = document.getElementById("Password")
const LogInBtn = document.getElementById("add")
const passwordIcon = document.getElementById('password-icon');
const myCheckbox = document.getElementById('reg-log');



// 從本機儲存中取得已註冊的用戶數據
let users = JSON.parse(localStorage.getItem("users")) || [];
console.log(users)

LogInBtn.addEventListener("click", function (event) {

    if (Account.value===""||Password.value==="") {
        alert("帳號或密碼不得為空");
        event.preventDefault();
    } else {
        let isUserFound = false; // 用於標誌是否找到匹配的用戶
        for (let i = 0; i < users.length; i++) {
            if (Account.value == users[i].Account && Password.value == users[i].Password) {
                alert("登入成功")
                isUserFound = true; // 找到匹配的用戶
                break; // 跳出循環
            }
        }
        if (!isUserFound) {
            alert("帳號或密碼錯誤")
            event.preventDefault(); // 阻止預設的連結跳躍行為
        }
    }
})

//=======================按住時顯示密碼===========================
let isMouseDown = false;
passwordIcon.addEventListener('mousedown', () => {
    isMouseDown = true;
    showPassword();
});
passwordIcon.addEventListener('mouseup', () => {
    isMouseDown = false;
    hidePassword();
});
passwordIcon.addEventListener('mouseleave', () => {
    if (isMouseDown) {
        hidePassword();
    }
});
function showPassword() {
    Password.type = 'text';
    passwordIcon.classList.remove('uil-eye-slash');
    passwordIcon.classList.add('uil-eye');

}
function hidePassword() {
    Password.type = 'password';
    passwordIcon.classList.remove('uil-eye');
    passwordIcon.classList.add('uil-eye-slash');
}
//=======================按住時顯示密碼===========================



//=======================旋轉時清空所有txtbox=====================
myCheckbox.addEventListener("click", function () {
    Account.value="";
    Password.value="";
    singupAccount.value="";
    singupPassword.value="";
    RepeatPassword.value="";
})
//=======================旋轉時清空所有txtbox=====================



//=======================清除按鈕================================
const re = document.getElementById('re');
re.addEventListener('click', () => {
const isConfirmed = window.confirm('是否確定要執行操作？');
    if (isConfirmed) {
        // 用戶點擊了確認按鈕
        // 執行你的操作
        localStorage.clear();
        alert('localStorage中的資料已清除！');
        location.reload();
    } else {
        // 用戶點擊了取消按鈕
        // 取消操作
    }
});
//=======================清除按鈕=================================






//===================================================登陸畫面=======================================================================================







//===================================================註冊畫面=======================================================================================

const singupAccount = document.getElementById("singupAccount");
const singupPassword = document.getElementById("singupPassword");
const RepeatPassword = document.getElementById("RepeatPassword");
const SignUpBtn = document.getElementById("SignUpBtn");


SignUpBtn.addEventListener("click", function (event) {
    const inputAccount = singupAccount.value;
    const inputPassword = singupPassword.value;
    const inputRepeatPassword = RepeatPassword.value;

    // 檢查帳號是否已存在
    const isAccountExists = users.some((user) => user.Account === inputAccount);

    if (singupAccount.value===""||singupPassword.value==="") {
        alert("帳號或密碼不得為空");
        event.preventDefault();
    } else {
        if (isAccountExists) {
            alert("帳號已存在，請選擇其他帳號");
            event.preventDefault(); // 阻止預設的連結跳躍行為
            console.log(users);
        } else if (inputPassword === inputRepeatPassword) {
            //註冊新帳號
            const newUser = {
                Account: inputAccount,
                Password: inputPassword
            };
            users.push(newUser);
            console.log(users)
            localStorage.setItem("users", JSON.stringify(users));
            alert("註冊成功");
            myCheckbox.click();
        } else {
            alert("輸入密碼不相同");
            event.preventDefault(); //  阻止預設的連結跳躍行為
        }
    }
});


//===================================================註冊畫面=======================================================================================