const apiUrl = 'https://673c1b1296b8dcd5f3f885b9.mockapi.io/Preguntas-Frecuentes'; 

// Función para obtener las preguntas frecuentes de MockAPI
function loadFaqs() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const faqContainer = document.getElementById('faq-container');
      data.forEach(faq => {
        const faqItem = document.createElement('div');
        faqItem.innerHTML = `<h3>${faq.pregunta}</h3><p>${faq.respuesta}</p>`;
        faqContainer.appendChild(faqItem);
      });
    });
}

// Función para enviar la pregunta a la IA (reemplaza con tu lógica de API)
function sendQuestion() {
  const question = document.getElementById('user-question').value;
  const answerDiv = document.getElementById('ai-answer');

  // Aquí debes integrar la lógica para enviar la pregunta a tu IA y obtener la respuesta
  // ... (usa la API de OpenAI, Dialogflow, etc.)

  // Ejemplo con una respuesta simulada:
  answerDiv.textContent = "procesando";
  setTimeout(() => {
    answerDiv.textContent = "se puede decir que " + question;
  }, 1000); 
}

// Cargar las preguntas frecuentes al iniciar la página
loadFaqs();
