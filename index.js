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

let lastSoChan = () => {
  for (let i = numberArr.length - 1; i >= 0; i--) {
    if (numberArr[i] % 2 == 0) {
      let soChanCuoi = numberArr[i];
      return (document.getElementById("lastSoChan").innerHTML = soChanCuoi);
    }
  }
  return (document.getElementById("lastSoChan").innerHTML = "không có số chẵn");
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

  // số chẵn cuối cùng
  lastSoChan();
};

let doiCho = () => {
  for (let i = 0; i < numberArr.length; i++) {
    let index1 = document.getElementById("viTri1").value * 1;
    let index2 = document.getElementById("viTri2").value * 1;

    let bienTam = numberArr[index1];
    numberArr[index1] = numberArr[index2];
    numberArr[index2] = bienTam;
    return (document.getElementById("doiCho").innerHTML = numberArr);
  }
};

let sapXep = () => {
  for (let i = 0; i < numberArr.length; i++) {
    numberArr.sort((a, b) => a - b);
    return (document.getElementById("sapXep").innerHTML = numberArr);
  }
};

let ktraSNT = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

let timSNT = () => {
  for (let i = 0; i < numberArr.length; i++) {
    for (let num of numberArr)
      if (ktraSNT(num)) {
        return (document.getElementById("soNT").innerHTML = num);
      }
    break;
  }
  return (document.getElementById("soNT").innerHTML =
    "Không tìm thấy số nguyên tố");
};
