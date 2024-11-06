const change = document.getElementById("change")

function change_all(){
    if (document.getElementsByTagName('div')[3].innerText==='Shkatova'){
        document.getElementsByTagName('div')[3].innerText='Шкатова';
        document.getElementsByTagName('div')[4].innerText='Анна';
        document.getElementsByTagName('div')[5].innerText='Юрьевна';
        document.getElementsByTagName('div')[6].innerText='жен.';
        document.getElementsByTagName('div')[8].innerText='гор. Москва';
    }
    else{

        if (document.getElementsByTagName('div')[3].innerText==='Шкатова'){
            document.getElementsByTagName('div')[3].innerText='Shkatova';
            document.getElementsByTagName('div')[4].innerText='Anna';
            document.getElementsByTagName('div')[5].innerText='Yurievna';
            document.getElementsByTagName('div')[6].innerText='female';
            document.getElementsByTagName('div')[8].innerText='Moscow';

        }
    }
}

change.addEventListener("click", change_all)