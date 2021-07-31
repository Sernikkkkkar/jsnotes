
//for load
var cls=document.getElementsByTagName("pre")
console.log(cls.length)
for (i=0;i<cls.length;i++) {
   console.log(i+" "+cls[i].className)
   eval('cls['+i+'].addEventListener("click", function(e){if(e.altKey) runJS("pre",'+i+')});');
 
}


function runJS(cls,num) {
    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementsByTagName(cls)[num]);
        range.select();
    } else if (window.getSelection()) {
        var range = document.createRange();
        range.selectNode(document.getElementsByTagName(cls)[num]);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        var html=window.getSelection().toString();
        alert(html)
        window.getSelection().removeAllRanges();
       var c=document.getElementsByTagName("pre")[num].className;
        if (c=="language-js")
         eval(html);
        if (c=="language-html") {
         window.getSelection().removeAllRanges();
        var x=window.open('','NewWin',
            'toolbar=no,status=no,width=550,height=400,top=10,left=20');
        x.document.open().write(html);
        x.document.title = 'testing';
    
        }
    }
}