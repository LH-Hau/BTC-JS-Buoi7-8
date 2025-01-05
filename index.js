let numberArr = [];
document.getElementById("result-numbers").innerHTML = numberArr;

let getDataForm = () => {
  if (document.getElementById("number").value == "") {
    return;
  }
  let number = document.getElementById("number").value * 1;
  numberArr.push(number);

  //reset input
  document.getElementById("number").value = "";

  //hiển thị mảng
  document.getElementById("result-numbers").innerHTML = numberArr;
};

let sumSoDuong = () => {
  let sumPositive = 0;
  numberArr.forEach((item) => {
    if (item > 0) {
      sumPositive += item;
    }
  });
  document.getElementById("result-sum-positive").innerHTML = sumPositive;
};

let countSoDuong = () => {
  let countPositive = 0;
  for (let i = 0; i < numberArr.length; i++) {
    if (numberArr[i] > 0) {
      countPositive++;
    }
  }
  document.getElementById("result-count-positive").innerHTML = countPositive;
};

let numberMin = () => {
  let resultMin = numberArr[0];
  numberArr.forEach((item) => {
    if (resultMin > item) {
      resultMin = item;
    }
  });
  document.getElementById("result-min").innerHTML = resultMin;
};

let soDuongMin = () => {
  let resultSD = numberArr.filter((num) => num > 0);
  if (resultSD.length == 0) {
    return (document.getElementById("result-soDuongMin").innerHTML =
      "Không có số dương");
  }
  let resultSDMin = Math.min(...resultSD);

  document.getElementById("result-soDuongMin").innerHTML = resultSDMin;
};

let submit = () => {
  // thêm phần tử vào mảng
  getDataForm();

  // Tổng số dương
  sumSoDuong();

  // số lượng số dương
  countSoDuong();

  // Số nhỏ nhất
  numberMin();

  //số dương nhỏ nhất
  soDuongMin();
};
