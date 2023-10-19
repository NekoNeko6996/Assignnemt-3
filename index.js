const checkBox = document.getElementsByClassName("checkbox");
const form = document.querySelector('form');
const total = document.querySelector('#total');
const select = document.querySelector('select');

var formStatus = false;

///kiểm tra form và tính tổng tiền///
const checkForm = () => {
    let totalMoney = 0;
    let checkStatus = false;
    for(let count = 0; count < checkBox.length; count++) {
        if(checkBox[count].checked == true) {
            totalMoney += parseInt(checkBox[count].value);
            checkStatus = true;
        }
    }
    ///
    if(checkStatus == true) {
        total.value = totalMoney - (totalMoney/100*parseInt(select.value));
    } else { 
        alert('Vui lòng chọn một dịch vụ từ Đăng kí khám bệnh!');
    }
    /////////kiểm tra form có hợp lệ hay không////////
    form.reportValidity();
    
    formStatus = checkStatus && form.checkValidity();
    console.log(formStatus);
}


////////////////////////////////
const onCalculate = (event) => {
    event.preventDefault();
    //////
    checkForm();
}
////////////////////////////////
const onSubmit = () => {
    checkForm();
    if(total.value && formStatus) {
        form.submit();
    } else {
        (total.value)? '' :alert('Bạn chưa tính tổng tiền!');
    }
}
////////////////////////////////
const onReset = () => {
    form.reset();
}