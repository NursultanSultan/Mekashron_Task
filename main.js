let loginForm = document.getElementById("login_form");
let registerForm = document.getElementById("register_form");


const situation = document.getElementById("situation");



//Login -------------

loginForm.addEventListener("submit", (e) => {
    console.time("Request");
    e.preventDefault();

    let formdata = new FormData(e.target);
    let formObject = Object.fromEntries(formdata);
    
    

    formdata.append('func', 'Login');
    formdata.append('params', `UserName=${formObject.userName}&Password=${formObject.password}`);


    let Url = 'http://isapi.mekashron.com/soapclient/soapclient.php?URL=http://isapi.icu-tech.com/icutech-test.dll%2Fwsdl%2FIICUTech'
       
    axios({
            method: "post",
            url: Url,
            data: formdata,
            headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
        })
        .then(res => {
            console.log(res.data)
            let retParse = JSON.parse(res.data.ret);

            if (retParse.ResultCode == -1) {
                situation.style.display = "block";
                situation.style.backgroundColor = "Red";
                situation.style.color = "white";
                situation.innerText = "Failed";

                setTimeout(() => {
                    situation.style.display = "none"
                }, 1500);
            } else {
                situation.style.display = "block";
                situation.style.backgroundColor = "Green";
                situation.style.color = "white";
                situation.innerText = "Succesed";

                setTimeout(() => {
                    situation.style.display = "none"
                }, 1500);
            }
           
        })
        .catch(err => { 
            console.log(err)
            
        })
    console.timeEnd("Request");

});



//register ----------

registerForm.addEventListener("submit", (e) => {
    console.time("Request");
    e.preventDefault();

    let formdata = new FormData(e.target);
    let formObject = Object.fromEntries(formdata);
  
    

    formdata.append('func', 'RegisterNewCustomer');
    formdata.append('params', `Email=${formObject.email}&Password=${formObject.password}&FirstName=${formObject.firstname}&LastName=${formObject.lastname}&Mobile=${formObject.mobile}`);


    let Url = 'http://isapi.mekashron.com/soapclient/soapclient.php?URL=http://isapi.icu-tech.com/icutech-test.dll%2Fwsdl%2FIICUTech'
       
    axios({
            method: "post",
            url: Url,
            data: formdata,
            headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
        })
        .then(res => {
            console.log(res.data)
            let retParse = JSON.parse(res.data.ret);

            if (retParse.ResultCode == -1) {
                situation.style.display = "block";
                situation.style.backgroundColor = "Red";
                situation.style.color = "white";
                situation.innerText = "Failed";

                setTimeout(() => {
                    situation.style.display = "none"
                }, 1500);

            } else {
                situation.style.display = "block";
                situation.style.backgroundColor = "Green";
                situation.style.color = "white";
                situation.innerText = "Succesed";

                setTimeout(() => {
                    situation.style.display = "none"
                }, 1500);

            }

        }).catch(err => { 
            console.log(err)
            
        })
     console.timeEnd("Request");




});
