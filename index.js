console.log("hello");
{
  //scope 1
  var sapa = "apa kabar wooooi";
  let jawab = "kabar baik boss";
  const datenow = "2024-12-02";

  sapa = "ayam maunya sekarang";
  jawab = "iya ayam enak dong";
  // datenow = "2024-13-02";

  console.log("batas");
}

{
  //scope 2
  console.log("scope2");
  console.log(sapa);
  // console.log(jawab);
  console.log("batas");
}

{
  console.log("scope3 - tipe data -");
  //number
  let angka = 100;
  console.log(typeof angka);

  //string
  let teks = "judul buku";
  console.log(typeof teks);

  //bool
  let isActive = true;
  console.log(typeof isActive);

  //array
  let days = [
    "monday",
    1,
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  console.log(days);
  console.log(days[1]);

  //object pasangan key dan value
  let book = {
    judul: "buku 1",
    stock: angka,
    isActive,
  };
  console.log(book);
}

{
  let x = 10;
  let y = 15;
  if (x > y) {
    console.log("x" + "lebih besar dari y:" + y);
  } else if (x < y) {
    console.log("x: ${x} kurang dari y: ${y}");
  } else {
    console.log("x sama dengan y");
  }



  for (let i = 100; i >= 75; i--) {
    //cek angka genap
    if (i % 2 === 0) {
      console.log(i);
    }
  }

  //bilangan faktorial
  // 5! = 5 x 4 x 3 x 2 x 1
  function faktorial(angka) {
    if (angka === 1 || angka === 0) {
      return 1;
    }
    return angka * faktorial(angka - 1);
  }
  //5 * 4 * 3 * 2 * 1
  console.log(faktorial(5));

  //spread operator
  const arr1 = [1, 2, 3];
  const arr2 = [1, 2, 3];
  const arr3 = [...arr1, ...arr2];
  console.log(arr3);

  let book = {
    judul: "buku 1",
    stock: 10,
    isActive: true,
  };
  const updatedBook = { ...book, judul: "buku 1 updated", stock: 8 };
  console.log(updatedBook);

  const { judul, stock, isActive } = book;
  console.log(`Judul: ${judul}`);
  console.log(`Stock: ${stock}`);
  console.log(`isActive: ${isActive}`);

  let usersData = {
    id: 1,
    name: "Leanne Graham",
    usersname: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };

  console.log(usersData.usersname);
  console.log(usersData.address.street);
  console.log(usersData.company.name);

  const {
    usersname,
    address: { street },
    company: { name: companyName },
    name,
  } = usersData;
  //   console.log(usersname);
  //   console.log(address);
  //   console.log(companyName);
  //   console.log(name);
}

{
  function changeStatus(book, status) {
    let updateBook = {
      ...book,
      isActive: status,
    };
    console.log(updateBook);
    // return updateBook
  }

  let book = {
    judul: "buku 1",
    stock: 10,
    isActive: true,
  };

  // console.log(changeStatus(book,false));
  changeStatus(book, false);

  //normal function
  let add1 = function (a, b) {
    a + b;
  };
  console.log(add(1, 2));

  //arrow function
  let add = (a, b) => {
    a * b;
  };
  console.log(add(1, 2));
}
