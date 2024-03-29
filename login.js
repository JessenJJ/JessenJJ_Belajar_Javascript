  //data dari inputan
  let users = [
    {
      email: "jess@gmail.com",
      password: "password",
    },
  ];

//   const users = null;

  function login(callback, userInput) {
    if (users.length > 0) {
      console.log("users found in database");
      users.forEach((user) => {
        if (userInput.email === user.email) {
          if (userInput.password === user.password) {
            console.log("success login!");
          } else {
            console.log("bad credentials");
          }
        } else {
          console.log("email is not found, please register!!!");
          callback(userInput)
        }
      });
    }
  }

  function register(user) {
    users.push(user);
  }

  let newUser = {
    email: "jessen@gmail.com",
    password: "pass123",
  };

  login(register, newUser);
  console.log(users);

  if (users.length <= 0) {
    console.log("users is not found");
    register({
      email: "jess@gmail.com",
      password: "pass",
    });
  }