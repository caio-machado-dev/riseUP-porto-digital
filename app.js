const cpfInput = document.getElementById("input-cpf");

function cpf(value) {
  if (!value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{2})$/, "$1-$2");
  }
  return value;
}

function cnpj(value) {
  if (!value.match(/^(\d{2}).(\d{3}).(\d{3})\\(\d{4})-(\d{2})$/)) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1/$2");
    value = value.replace(/(\d{4})(\d)/, "$1-$2");
  }
  return value;
}

cpfInput.addEventListener("input", (event) => {
  const cleanedInput = event.target.value.replace(/\D/g, "");
  if (cleanedInput.length > 11) {
    event.target.value = cnpj(cleanedInput);
  } else event.target.value = cpf(cleanedInput);
});

if (navigator.userAgent.indexOf('iPhone') > -1 ) {
    document.querySelector("[name=viewport]").setAttribute("content","width=device-width, initial-scale=1, maximum-scale=1");
}