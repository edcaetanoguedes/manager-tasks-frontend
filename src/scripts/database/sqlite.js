const SQLITE_TIMESTAMP_PATTERN = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/; // 2025-05-21 14:30:00
const UTC_ISO8601_PATTERN = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/; // 2025-05-21T14:30:00.123Z

// TESTADO: Converte o timestamp sqlite em utc iso
export function sqlite_convertTimestampToUTC(timestamp) {
  if (typeof timestamp === "string") {
    if (SQLITE_TIMESTAMP_PATTERN.test(timestamp)) {
      return timestamp.replace(" ", "T") + "Z";
    } else {
      throw new Error("Parâmetro deve ser um timestamp <2025-05-21 19:42:10>!");
    }
  } else {
    throw new Error("Parâmetro deve ser uma string!");
  }
}

// TESTADO: Formata UTC em locale "dd/MM/YYYY HH:mm:ss"
export function sqlite_convertUTCtoUTCLocale(utc) {
  if (typeof utc === "string") {
    if (UTC_ISO8601_PATTERN.test(utc)) {
      const t = new Date(utc);

      const dia = String(t.getDate()).padStart(2, "0");
      const mes = String(t.getMonth() + 1).padStart(2, "0"); // mês começa em 0
      const ano = t.getFullYear();

      const horas = String(t.getHours()).padStart(2, "0");
      const minutos = String(t.getMinutes()).padStart(2, "0");
      const segundos = String(t.getSeconds()).padStart(2, "0");

      return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
    } else {
      throw new Error("Parâmetro deve ser um UTC <2025-05-21T19:42:10Z>!");
    }
  } else {
    throw new Error("Parâmetro deve ser uma string!");
  }
}

// Converte timestamp sqlite em UTC locale "dd/MM/YYYY HH:mm:ss"
export function sqlite_convertTimestampToUTCLocale(timestamp) {
  let utc = sqlite_convertTimestampToUTC(timestamp);
  let utc_locale = sqlite_convertUTCtoUTCLocale(utc);
  return utc_locale;
}
