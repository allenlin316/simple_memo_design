// get access to HTML element
const content = document.getElementById("content");
const date = document.getElementById("date");
const time = document.getElementById("time");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const list = document.getElementById("list");
const removeAll = document.getElementById("removeAll");

class Memo {
    constructor(content, date, time) {
        this.content = content;
        this.date = date;
        this.time = time;
    }
}

function render() {
    let htmlStr = ""; //local variable 

    for (var i = 0; i < listContent.length; i++) {
        // using template literal (ES6 new feature)
        if (i != 0) htmlStr += `<p>--------------------------</p>`;
        htmlStr += `
        <div class="item">
            <div>
                <p>內容: ${listContent[i].content}</p>
                <p>時間: ${listContent[i].date} ${listContent[i].time}</p>
            </div>
        </div>
        `
    }
    list.innerHTML = htmlStr;
}
function removeEvent(name) {
    //console.log(listContent.length);
    let i = 0;
    while (i < listContent.length) {
        if (name == listContent[i].content) {
            listContent.splice(i, 1);
        } else {
            i++;
        }
    }
}
// array to store all of info(including date, time, content)
const listContent = [];
// add button event
addBtn.addEventListener('click', function () {
    const memo = new Memo(content.value, date.value, time.value);
    listContent.unshift(memo); // push memo object to the array front
    if (listContent.length == 0) {
        alert("欄位不得為空")
        return;
    }
    render();
})

// remove button event
removeBtn.addEventListener('click', function () {
    if (listContent.length == 0) {
        alert("你沒有行程可以刪除")
        return;
    }
    // Sweet Alert 
    swal("輸入你想刪除的事情", {
        content: "input",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((item) => {
            if (item) {
                removeEvent(item)// remove object from the array 
                swal(`你成功刪除 ${item} 行程`, {
                    icon: "success",
                });
            } else {
                swal(`行程被保留下來了`);
            }
            render();
        });
})

removeAll.addEventListener('click', function () {
    if (listContent.length == 0) {
        alert("你沒有行程可以刪除")
        return;
    }
    // Sweet Alert 
    swal("確定要全部刪除?", {
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((item) => {
            if (item) {
                while (listContent.length != 0) {
                    listContent.pop();
                }
                swal(`你成功刪除所有行程`, {
                    icon: "success",
                });
            } else {
                swal(`行程被保留下來了`);
            }
            render();
        });
})



