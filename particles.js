// script.js — funções simples, contacto e interações
document.getElementById('year').textContent = new Date().getFullYear();

function scrollToTop(){
  window.scrollTo({top:0,behavior:'smooth'});
}

function handleContact(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
  const result = document.getElementById('formResult');

  if(!name || !phone || !message){
    result.textContent = 'Por favor preencha todos os campos.';
    return false;
  }

  // Aqui podes ligar a um backend, email service, ou enviar para o WhatsApp:
  const waText = encodeURIComponent(`Orçamento FOCMETAL\nNome: ${name}\nTel: ${phone}\nMensagem: ${message}`);
  const waUrl = `https://wa.me/25886616220?text=${waText}`;

  result.innerHTML = 'A abrir WhatsApp para enviar a tua mensagem…';
  window.open(waUrl,'_blank');

  // limpa o formulário
  setTimeout(()=> {
    result.textContent = 'Mensagem enviada (via WhatsApp).';
    document.getElementById('contactForm').reset();
  }, 900);

  return false;
}

/* Toggle mobile menu */
document.addEventListener('click', (e) => {
  if(e.target.matches('.nav-toggle')){
    const nav = document.querySelector('.main-nav');
    if(nav.style.display === 'flex') nav.style.display = 'none';
    else nav.style.display = 'flex';
  }
});
