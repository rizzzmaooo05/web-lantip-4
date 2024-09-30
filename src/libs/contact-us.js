const inputNama = document.getElementById('nama')
const labelNama = document.getElementById('label-nama')
inputNama.addEventListener("keydown", function() {
  labelNama.classList.remove('hidden')
  inputNama.setAttribute('placeholder', '')
})

const inputEmail = document.getElementById('email')
const labelEmail = document.getElementById('label-email')
inputEmail.addEventListener("keydown", function() {
  labelEmail.classList.remove('hidden')
  inputEmail.setAttribute('placeholder', '')
})

const inputSaran = document.getElementById('saran')
const labelSaran = document.getElementById('label-saran')
inputSaran.addEventListener("keydown", function() {
  labelSaran.classList.remove('hidden')
  inputSaran.setAttribute('placeholder', '')
})

const buttonKirim = document.getElementById('kirim')
buttonKirim.addEventListener('click', function() {
  const nama = inputNama.value
  const email = inputEmail.value
  const saran = inputSaran.value

  if(!nama) return ''
  if(!email) return ''
  if(!saran) return ''
  
  window.location.href = `http://wa.me/62895801201195?text=Nama:%20${nama}%0AEmail:%20${email}%0APesan:%20${saran}`
})