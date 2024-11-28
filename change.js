const change = document.getElementById("change")

function change_all(){
    if (document.getElementsByTagName('div')[7].innerText==='Shkatova'){
        document.getElementsByTagName('div')[7].innerText='Шкатова';
        document.getElementsByTagName('div')[8].innerText='Анна';
        document.getElementsByTagName('div')[9].innerText='Юрьевна';
        document.getElementsByTagName('div')[10].innerText='жен.';
        document.getElementsByTagName('div')[12].innerText='гор. Москва';
    }
    else{

        if (document.getElementsByTagName('div')[7].innerText==='Шкатова'){
            document.getElementsByTagName('div')[7].innerText='Shkatova';
            document.getElementsByTagName('div')[8].innerText='Anna';
            document.getElementsByTagName('div')[9].innerText='Yurievna';
            document.getElementsByTagName('div')[10].innerText='female';
            document.getElementsByTagName('div')[12].innerText='Moscow';

        }
    }
}

change.addEventListener("click", change_all)
