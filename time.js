// Lessons (77-78) v (78-79) Explain: How to create professional watch, Part (1 & 2)  & (2) Lessons.   
// Project(3)
// 2،طريقة إنشاء ساعة إحترافية -     جزء 1
// ..............................................................................
// Note: The target of this lesson, not to create o'clock, but to learn how to use elements we learn in previous lessons.
// ..............................................................................

// Ex(1):
// Create o'clock (2) Part:

function updateDate() {
    // Create function.
    var date = new Date();
    // Create object type date to get temporary data.
    var setTime = document.getElementById("setTime");
    setTime.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    var setDate = document.getElementById("setDate");
    setDate.innerHTML = date.getDate() + "-" + parseInt(date.getMonth() + 1) + "-" + date.getFullYear();
    // To show correct date, first show date (-) the reason that January is (0) and so on, n we need to add (+1) to get correct date.
}

setInterval(updateDate, 100);
onload = updateDate();

function getColor() {
    var getColor = document.getElementById("setColor").value;
    localStorage.setItem("Color", getColor);
    document.getElementById("time").style.background = localStorage.getItem("Color");
    document.getElementById("body").style.background = localStorage.getItem("Color");
}


function setColor() {
    document.getElementById("setColor").value = localStorage.getItem("Color");

    document.getElementById("time").style.background = localStorage.getItem("Color");
    document.getElementById("body").style.background = localStorage.getItem("Color");
}
setInterval(setColor(), 100);

// .................... Succeeded ...................