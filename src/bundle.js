function blurClass() {
    var element = document.getElementById('content-wrapper');
    // var modal = document.querySelector('.modal');
    var body = document.getElementById('body');
    if (body.classList.contains('modal')) {
        element.classList.add('filter-blur');
        console.log('yes');
    } else {
        element.classList.remove('filter-blur');
        console.log('no');
    }
}

(function() {
   // your page initialization code here
   // the DOM will be available here

})();