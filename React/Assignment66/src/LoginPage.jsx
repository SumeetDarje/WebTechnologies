import axios from "axios";
import { useState ,useEffect } from "react";

function LoginPage(props) {
  let { userView } = props;
  let [loginStatus, setLoginStatus] = useState("no");
  let {userName,cartCount}=props;

  useEffect(()=>{
    let storedUser=localStorage.getItem("user");
    if(storedUser){
      let userData= JSON.parse(storedUser);
      if (userData.role=="admin"){
        setLoginStatus("admin");
        props.onAdminLogin(userData);
      }else{
        setLoginStatus("user");
        props.onUserLogin(userData);
      }
    }
  },[]);

  function handleLoginFormSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let user = {};
    for (let data of formData) {
      user[data[0]] = data[1];
    }
    console.log(user);
    checkUser(user);
  }

  async function checkUser(user) {
    let response = await axios("http://localhost:3000/users");
    let data = await response.data;
    let filteredData = data.filter(
      (e, index) => e.emailid == user.emailid && e.password == user.password
    );

    if (filteredData.length == 1) {
      let loggedInUser=filteredData[0];
      localStorage.setItem("user",JSON.stringify(loggedInUser));
      // localStorage.setItem("user", JSON.stringify({ name: loggedInUser.name, role: loggedInUser.role }));
      setLoginStatus("success");
      props.onLoginSubmit("products");
      // props.onLoginSubmit(filteredData[0]);
      if (loggedInUser.role == "admin") {
        setLoginStatus("admin");
        console.log("Admin Login");
        props.onAdminLogin(loggedInUser);
      }
      else{
        setLoginStatus("user");
        console.log("User Login");
        props.onUserLogin(loggedInUser);

      }
    } else {
      setLoginStatus("failed");
    }
  }

  function handleBackBtn(){
    props.onBackBtn();
  }

  return (
    <>
    <div className="ms-5">
      <button className="btn btn-danger" onClick={handleBackBtn}>
        <i className="bi bi-arrow-left"></i>
      </button>
    </div>
    { userName=="" && cartCount>0 &&(
      <div className="text-center text-danger">To process the order, you need to login.</div>
    )}
      {loginStatus == "failed" && (
        <div className="text-center text-danger">
          Wrong Credentials. Try again.
        </div>
      )}
      {(loginStatus == "failed" || loginStatus == "no") && (
        <div className="row justify-content-center">
          <div className="text-center text-danger my-3">LOGIN</div>
          <div className="col-sm-12 col-md-6  border border-3 border-danger">
            <form
              className="loginForm"
              onSubmit={(event) => {
                handleLoginFormSubmit(event);
              }}
            >
              <div className="row">
                <div className="col-sm-4 col-6 my-2 text-end">Email-id</div>
                <div className="col-6 my-2">
                  <input type="email" name="emailid" id="" required />
                </div>
                <div className="col-sm-4 col-6  my-2 text-end">Password</div>
                <div className="col-6 my-2">
                  <input
                    type="password"
                    name="password"
                    id=""
                    maxLength="10"
                    minLength="5"
                  />
                </div>
                <div className="col-sm-4 col-6  my-2 text-end"></div>
                <div className="col-6 my-2">
                  <input className="btn btn-danger" type="submit" value="Ok" />{" "}
                  <input
                    className="btn btn-danger"
                    type="reset"
                    value="Clear"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* row ends */}
    </>
  );
}

export default LoginPage;
