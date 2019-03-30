var sBtn = document.getElementById('start').addEventListener('click', getStart);;
///console.log('start');
//sBtn.addEventListener('click', getStart());
function getStart(){
    document.getElementById('first').setAttribute('style','display:none');
    document.getElementById('second').setAttribute('style','display:block');
}