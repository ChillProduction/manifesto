var element = document.getElementsByClassName('toJSON');
let elementString = element[0].innerHTML;
//remove unwanted and spread
elementString = elementString
    //remove line breaks
    .replace(/(?:\n|\r\n|\r)/ig, "")
    //remove comments
    .replace(/<!--.*?-->/mig, "");
let splitLeft = elementString.split("[");
let head = splitLeft[0];
let outputArray = ["<form class = 'f1'>"];
for(let i=1; i<splitLeft.length; i++){
    let chop = splitLeft[i];
    let toList = chop.split("]");  //分出選項的團塊
    let toText = toList.splice(1);//分出不是選項的團塊
    let listElement = toList[0];
    let splitOption = listElement.split(","); //選項團塊切分各個選項
    let makeList = []; //選單html格式化 - 個別項目
    for(let index in splitOption){
        makeList.push("<option value='" + index + "'>"+ splitOption[index]);
    };
    let makeForm = "<select class='s1' >"+makeList+"</select>";
    //刪除"<"前面的",""
    let cleanForm = makeForm.replace(/,(?=<)/g, "");
    outputArray.push(cleanForm, toText);
};
outputArray.splice(1,0,head);
outputArray.push("</form></div>");
console.log(outputArray);
let result = outputArray.join("");
var h = document.getElementById("live");        //MAGIC HERE, DON'T TOUCH
h.insertAdjacentHTML('beforeend', result);      //MAGIC HERE, DON'T TOUCH