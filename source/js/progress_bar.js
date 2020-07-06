const $ = (id) => document.getElementById(id)
const progress1 = $('progress1')
const progress2 = $('progress2')
const selector1 = $('selector1')
const selector2 = $('selector2')
const selectValue1 = $('selectValue1')
const selectValue2 = $('selectValue2')
const progressBar1 = $('progressBar1')
const progressBar2 = $('progressBar2')

selectValue1.innerHTML = progress1.value
selectValue2.innerHTML = progress2.value

progress1.oninput = function() {
    selectValue1.innerHTML = progress1.value
    selector1.style.left = this.value + '%'
    progressBar1.style.width = this.value + '%'
}

progress2.oninput = function() {
    selectValue2.innerHTML = progress2.value
    selector2.style.left = this.value + '%'
    progressBar2.style.width = this.value + '%'
}