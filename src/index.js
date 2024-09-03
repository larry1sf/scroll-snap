const share = document.getElementById("btn-share")
window.addEventListener("DOMContentLoaded", () => {
  // activacion popovers
  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
  )
  ;[...popoverTriggerList].map(
    (popoverTriggerEl) =>
      new bootstrap.Popover(popoverTriggerEl, {
        popperConfig: { placement: "right" },
      })
  )
})
// peticion a la api para copiar en el portapapeles
const clibboard = (params) => {
  const url = window.location.href
  navigator.clipboard
    .writeText(url)
    .then(() => {
      console.log("copiado", `cambiar bg a selec ${params.colorSelect} `, url)
    })
    .catch(() => {
      console.log("Error al copiar la url", `cambiar el bg a  ${params.color}`)
    })
}

share.addEventListener(
  "click",
  clibboard({ color: "red", colorSelect: "verde" })
)
