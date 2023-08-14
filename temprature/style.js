const inputs = document.querySelectorAll(".panel input");
const c = document.querySelector("#celsius");
const f = document.querySelector("#fahrenheit");
const k = document.querySelector("#kelvin");


inputs.forEach(input => {
    input.addEventListener("input", e => {
        const unit = e.target.id;
        const v = parseInt(e.target.value);
        if(unit == "celsius"){
            f.value = parseFloat((v * 1.8) + 32).toFixed(4) * 1;

            k.value=parseFloat(v + 273.15).toFixed(4)*1;
        }

        else if(unit ==="fahrenheit"){
          c.value = parseFloat((v - 32) * 5/9).toFixed(4)*1;  
          k.value = parseFloat(((v-32) * 5/9) + 273.15).toFixed(4) *1;
        }
        else if (unit === "kelvin"){
            c.value = parseFloat(v- 273.15).toFixed(4) * 1;
            f.value = parseFloat((v-273.15) * 9/5 + 32).toFixed(4)*1;
        }
    });
});


document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Temperature | Piyush Sharma";
        $("#favicon").attr("href", "images\new_umberella.webp");
    } else {
        document.title = "Come Back To Temperature Converter | Piyush";
        $("#favicon").attr("href", "images\success_mark.webp");
    }
});
        