// ----------------
// ----Kirim data user-----
// ----------------

const login = document.getElementById("login");
const name_input = document.getElementById("name_input");
const big_container = document.getElementById("big_container");
const nama = document.getElementById("get_name");

let wadah_name_user = name_input.value;

function lanjut() {
  if (name_input.value === "") {
    alert("Tolong masukan nama lengkap anda ");
  } else {
    login.style.display = "none";
    big_container.style.display = "block";

    let wadah_name_user = name_input.value;
    nama.value = wadah_name_user;
    console.log(wadah_name_user);
  }
}

// ----------------
// ----Section-----
// ----------------

const humberger = document.getElementById("humberger");
const list = document.getElementById("list");

humberger.addEventListener("click", function () {
  if (list.style.display === "flex") {
    list.style.display = "none";
  } else {
    list.style.display = "flex";
  }
});

var jawaban_benar = [2, 0, 0, 2, 0, 0, 1, 3, 1, 2];
var jawaban_user = [];
var scor = 0;

const result = document.getElementById("result");
const form_hasil = document.querySelector(".c-hasil");

// fungsi haram
function selesai() {
  check_radio();
  const nilai = document.getElementById("nilai");
  nilai.value = scor;
  console.log(jawaban_user);
}

function check_radio() {
  let checked_radio1 = document.querySelector('input[name="option1"]:checked');
  let checked_radio2 = document.querySelector('input[name="option2"]:checked');
  let checked_radio3 = document.querySelector('input[name="option3"]:checked');
  let checked_radio4 = document.querySelector('input[name="option4"]:checked');
  let checked_radio5 = document.querySelector('input[name="option5"]:checked');
  let checked_radio6 = document.querySelector('input[name="option6"]:checked');
  let checked_radio7 = document.querySelector('input[name="option7"]:checked');
  let checked_radio8 = document.querySelector('input[name="option8"]:checked');
  let checked_radio9 = document.querySelector('input[name="option9"]:checked');
  let checked_radio10 = document.querySelector(
    'input[name="option10"]:checked'
  );

  if (
    checked_radio1 != null &&
    checked_radio2 != null &&
    checked_radio3 != null &&
    checked_radio4 != null &&
    checked_radio5 != null &&
    checked_radio6 != null &&
    checked_radio7 != null &&
    checked_radio8 != null &&
    checked_radio9 != null &&
    checked_radio10 != null
  ) {
    calculate();
    form_hasil.style.display = "flex";
  } else {
    alert("Ada yang belum di jawab");
  }
}

function calculate() {
  let checked_radio1 = document.querySelector('input[name="option1"]:checked');
  let checked_radio2 = document.querySelector('input[name="option2"]:checked');
  let checked_radio3 = document.querySelector('input[name="option3"]:checked');
  let checked_radio4 = document.querySelector('input[name="option4"]:checked');
  let checked_radio5 = document.querySelector('input[name="option5"]:checked');
  let checked_radio6 = document.querySelector('input[name="option6"]:checked');
  let checked_radio7 = document.querySelector('input[name="option7"]:checked');
  let checked_radio8 = document.querySelector('input[name="option8"]:checked');
  let checked_radio9 = document.querySelector('input[name="option9"]:checked');
  let checked_radio10 = document.querySelector(
    'input[name="option10"]:checked'
  );

  jawaban_user.push(parseInt(checked_radio1.getAttribute("data-id")));
  jawaban_user.push(parseInt(checked_radio2.getAttribute("data-id")));
  jawaban_user.push(parseInt(checked_radio3.getAttribute("data-id")));
  jawaban_user.push(parseInt(checked_radio4.getAttribute("data-id")));
  jawaban_user.push(parseInt(checked_radio5.getAttribute("data-id")));
  jawaban_user.push(parseInt(checked_radio6.getAttribute("data-id")));
  jawaban_user.push(parseInt(checked_radio7.getAttribute("data-id")));
  jawaban_user.push(parseInt(checked_radio8.getAttribute("data-id")));
  jawaban_user.push(parseInt(checked_radio9.getAttribute("data-id")));
  jawaban_user.push(parseInt(checked_radio10.getAttribute("data-id")));

  for (let i = 0; i < jawaban_benar.length; i++) {
    if (jawaban_user[i] === jawaban_benar[i]) {
      scor += 10;
    }
  }
}

function submit() {
  let checked_radio1 = document.querySelector('input[name="option1"]:checked');
  let checked_radio2 = document.querySelector('input[name="option2"]:checked');
  let checked_radio3 = document.querySelector('input[name="option3"]:checked');
  let checked_radio4 = document.querySelector('input[name="option4"]:checked');
  let checked_radio5 = document.querySelector('input[name="option5"]:checked');
  let checked_radio6 = document.querySelector('input[name="option6"]:checked');
  let checked_radio7 = document.querySelector('input[name="option7"]:checked');
  let checked_radio8 = document.querySelector('input[name="option8"]:checked');
  let checked_radio9 = document.querySelector('input[name="option9"]:checked');
  let checked_radio10 = document.querySelector(
    'input[name="option10"]:checked'
  );

  jawaban_user = [];
  scor = 0;

  checked_radio1.checked = false;
  checked_radio2.checked = false;
  checked_radio3.checked = false;
  checked_radio4.checked = false;
  checked_radio5.checked = false;
  checked_radio6.checked = false;
  checked_radio7.checked = false;
  checked_radio8.checked = false;
  checked_radio9.checked = false;
  checked_radio10.checked = false;

  form_hasil.style.display = "none";
}

const c_manipulator = document.getElementById("img-manipulator");
const mode_cupu = document.getElementById("mode_cupu");
const mode_manipulator = document.getElementById("mode_manipulator");

c_manipulator.addEventListener("mouseover", function () {
  mode_cupu.style.opacity = "0";
  mode_manipulator.style.opacity = "1";
});

c_manipulator.addEventListener("mouseout", function () {
  mode_manipulator.style.opacity = "0";
  mode_cupu.style.opacity = "1";
});
