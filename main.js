'use strict'

const {form} = document.forms;

form.addEventListener('submit', formSend);

async function formSend(e) {
  e.preventDefault();

  const formDate = new FormData(form);
  const values = Object.fromEntries(formDate.entries());

  console.log(JSON.stringify(values));
}