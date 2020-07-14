$(document).ready(function () {
    //       Menu
    $(".header_burger").click(function (event) {
        $(".header_burger, .header_menu").toggleClass("active");
        $("body").toggleClass("lock");
    });


    let name = $(".name").html();
    let price = parseInt($(".new_price").html());
    $(".btn").click(function () {
        let sum = number * price;
        let fhtml = `<div id = "modal_shadow"></div>
        <div id="my_alert">
        <div class="alert_header">
        <div class="alert_header_title"><h4>Ваш заказ</h4></div>
        <a href="javascript:;" id="alert_close" onclick="closeMyAlert()" title="Close">&times;</a>
        </div>
        <div class="alert_body">
        <form>
        <div class="info">
        <div class="product">
        <textarea type="text" class="static name" name="product_name" placeholder="${name}"disabled></textarea>
        <input type="text" class="static number" name="amount" value="${number} x"disabled>
        <input type="text" class="static price" name="price" value="${price} грн"disabled>
        <label>Сумма заказа: <input type="text" class="static sum" value="${sum} грн"disabled></label>
        </div>
        <div class="buyer">
        <h5>Укажите свои данные</h5>
        <input type="text" class="info" placeholder="Имя" required>
        <input type="text" class="info" placeholder="Фамилия" required>
        <input type="tel" class="info" placeholder="Телефон" required>
        <input type="email" class="info" placeholder="Почта" required>
        </div>
        </div>
        <button class="btn" type="submit">Заказать</button> 
        </form>
        </div>
        </div>`;
        $(".buy").append($(fhtml));
        $("body").toggleClass("lock");
    });

});

function closeMyAlert() {
    document.getElementById("modal_shadow").remove();
    document.getElementById("my_alert").remove();
};

let number = $(".number").val();

$(".plus").click(function () {
    number++;
    $(".number").val(number);
});

$(".minus").click(function () {
    if (number != 1) {
        $(".minus").prop("disabled", false);
        number--;
        $(".number").val(number);
    }
});

/*   if (number != 1) {
       $(".minus").prop("disabled", false);
   } */