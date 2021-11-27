let display = document.getElementById("result");

function get_value(btn) {
  if (display.value == "0") {
    display.value = "" + btn.value;
  }
  else {
    display.value = display.value + btn.value;
  }
}

//演算子連続入力禁止
function get_ope(btn) {
  if (display.value.slice(-1) == "+") {
    return display.value;
  }
  else if (display.value.slice(-1) == "-") {
    return display.value;
  }
  else if (display.value.slice(-1) == "*") {
    return display.value;
  }
  else if (display.value.slice(-1) == "/") {
    return display.value;
  }
  display.value = display.value + btn.value;
}

/*合計値*/
function get_eq(btn) {
  display.value = new Function("return " + display.value)();
  if (btn.value != "=") {
    display.value = "";
  }
}

/*クリアボタンの処理*/
function get_cle(btn) {
  display.value = "";
}
