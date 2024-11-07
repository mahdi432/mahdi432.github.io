const prices = new Map([
  ["bmw-i8", 10000000],
  ["bmw-x6", 3500000],
  ["bmw-528", 2500000],
  ["benz-E350", 2600000],
  ["prado-4X", 3000000],
  ["porsche-911", 5000000],
  ["porsche-boxster", 2500000],
  ["benz-cls", 2600000],
]);
const rentCars = new Array();
let selectedCar;
let selectedCarEle;

function selectCar(name, ele) {
  for (index = 0; index < rentCars.length; index++) {
    if (rentCars[index] == name) {
      alert("این ماشین در حال حاظر موجود نمیباشد");
      return;
    }
  }
  selectedCar = name;
  selectedCarEle = ele.parentElement;
  const selectedList = document.getElementsByClassName("car_item_selected");
  for (let index = 0; index < selectedList.length; index++) {
    selectedList[index].classList.remove("car_item_selected");
  }
  ele.parentElement.classList.add("car_item_selected");

  document.getElementById("rent_section").style.display = "block";
  document.getElementById("result_section").style.display = "none";

  day.value = "";
  price.value = "";
}

function calcPrice() {
  const price = prices.get(selectedCar);
  const days = document.getElementById("day").value;
  if (days == "") {
    alert("لطفا جای خالی را پر کنید");
  } else if (days <= 0 || days > 365) {
    alert("روز وارد شده اشتباه است");
  } else {
    const priceEle = document.getElementById("price");
    priceEle.value = price * days;
    document.getElementById("information_section").style.display = "block";
    document.getElementById("result_section").style.display = "none";
  }

  fname.value = "";
  lname.value = "";
  phone.value = "";
}

function submitRent() {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const phone = document.getElementById("phone").value;
  if (fname == "" || lname == "" || phone == "") {
    alert("لطفا اطلاعات خود را به درستی وارد نمایید");
  } else {
    selectedCarEle.classList.add("car_item_disable");
    document.getElementById("rent_section").style.display = "none";
    document.getElementById("information_section").style.display = "none";
    document.getElementById("result_section").style.display = "block";
    rentCars.push(selectedCar);
  }
}
