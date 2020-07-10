async function loadPage(file) {
    const promise = await fetch(`${file}`)
    const answerHtml = await promise.text()

    return answerHtml
}

window.onload = async function() {
    const page = await loadPage('source/pages/main/about.php')
    const styles = await loadPage('source/pages/side/about_head.php')

    $('load_zone').innerHTML = page
    document.getElementsByTagName('head')[0].innerHTML = styles
}

window.resize = function() {
    pages()
}

function pages() {
    // подгрузка о нас
    $('about').addEventListener('click', async e => {
        e.preventDefault()
        const page = await loadPage('source/pages/main/about.php')
        const styles = await loadPage('source/pages/side/about_head.php')
    
        $('load_zone').innerHTML = page
        document.getElementsByTagName('head')[0].innerHTML = styles
    })
    
    // подгрузка услуги
    $('works').addEventListener('click', async e => {
        e.preventDefault()
        const page = await loadPage('source/pages/main/works.php')
        const styles = await loadPage('source/pages/side/works_head.php')
    
        $('load_zone').innerHTML = page
        document.getElementsByTagName('head')[0].innerHTML = styles
    })
    
    // подгрущка кейсы
    $('cases').addEventListener('click', async e => {
        e.preventDefault()
        const page = await loadPage('source/pages/main/cases.php')
        const styles = await loadPage('source/pages/side/cases_head.php')
    
        $('load_zone').innerHTML = page
        document.getElementsByTagName('head')[0].innerHTML = styles
    })
}

pages()