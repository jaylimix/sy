function burger(test) {

    if (test.className == 'fa fa-bars') {

        test.classList.remove('fa-bars')

        test.classList.add('fa-times')

        document.getElementById('my_links').style.display = 'block'
    }
    else {

        test.classList.remove('fa-times')

        test.classList.add('fa-bars')

        document.getElementById('my_links').style.display = 'none'
    }

}