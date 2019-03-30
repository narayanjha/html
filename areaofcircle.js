var rangeslider = document.getElementById("range");
        var Area = document.getElementById("Area");
        var Circumference = document.getElementById("Circumference");
        var Radius = document.getElementById("Radius");
        rangeslider.oninput = function () {
            Area.innerHTML = rangeslider.value;
            Circumference.innerHTML = rangeslider.value * 2;
            Radius.innerHTML = rangeslider.value * 3;
        }