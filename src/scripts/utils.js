
// Retorna o timestamp da data e hora atual
function getTimestampNow() {
  return Date.now()
}

// Retorna data e hora atual no formato "dd/MM/YYYY HH:mm:ss"
function getDatetimeNow() {
  const timestamp = getTimestampNow();

  const dia = String(timestamp.getDate()).padStart(2, '0');
  const mes = String(timestamp.getMonth() + 1).padStart(2, '0'); // mês começa em 0
  const ano = timestamp.getFullYear();

  const horas = String(timestamp.getHours()).padStart(2, '0');
  const minutos = String(timestamp.getMinutes()).padStart(2, '0');
  const segundos = String(timestamp.getSeconds()).padStart(2, '0');

  return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
}