function verify() {
  var data = new Date()
  var year = data.getFullYear()
  var years = document.querySelector('input#yearsOld').value;
  var res = document.querySelector('div.res')
  var img = document.createElement('img')
  img.setAttribute('id', 'photo')
  if (years.length == 0 || (years) > year) {
    window.alert('[ERROR] Verify contents and try again ').reload
  } else {
    var fsex = document.getElementsByName('radsex')
    var yearsOld = year - Number(years)
    var gender = ''
    if (fsex[0].checked) {
      gender = 'Female'
    } if(yearsOld <= 10) {
      img.setAttribute('src', 'menina.png')
    } else if (yearsOld > 10 && yearsOld <= 18) {
      img.setAttribute('src', 'mJovem.png') 
    } else if (yearsOld > 18 && yearsOld < 60) {
      img.setAttribute('src', 'adulta.png') 
    } 
      else if(yearsOld >= 60) {
        img.setAttribute('src', 'idosa.png') }
    } if(fsex[1].checked) {
      gender = 'Male'
    } if(yearsOld <= 10) {
      img.setAttribute('src', 'menino.png')
    } else if(yearsOld > 10 && yearsOld <= 18) {
      img.setAttribute('src', 'hJovem.png')
    } else if(yearsOld > 18 && yearsOld < 60) {
      img.setAttribute('src', 'adulto.png')
    } else if(yearsOld >= 60) {
      img.setAttribute('src', 'idoso.png')
    }
    res.style.textAlign = 'center'
    res.style.color = 'rgb(164, 164, 255)'
    res.innerHTML = `Identify ${gender} with ${yearsOld} years old`
    res.appendChild(img)
  }