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

window.resize = () => pages()

function pages() {
    const f = async function(event, path_to_page, path_to_styles) {
        event.preventDefault()
        const page = await loadPage(path_to_page)
        const styles = await loadPage(path_to_styles)
    
        $('load_zone').innerHTML = page
        document.getElementsByTagName('head')[0].innerHTML = styles
    }


    // подгрузка о нас
    $('about').addEventListener('click', async event => f(event, 'source/pages/main/about.php', 'source/pages/side/about_head.php'))
    $('works').addEventListener('click', async event => f(event, 'source/pages/main/works.php', 'source/pages/side/works_head.php'))
    $('cases').addEventListener('click', async event => f(event, 'source/pages/main/cases.php', 'source/pages/side/cases_head.php'))
    
    $('about_f').addEventListener('click', async event => f(event, 'source/pages/main/about.php', 'source/pages/side/about_head.php'))
    $('works_f').addEventListener('click', async event => f(event, 'source/pages/main/works.php', 'source/pages/side/works_head.php'))
    $('cases_f').addEventListener('click', async event => f(event, 'source/pages/main/cases.php', 'source/pages/side/cases_head.php'))
}

pages()