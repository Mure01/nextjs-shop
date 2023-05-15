/*api za buyformu */
export const sendContactForm = async (data) =>
fetch("/api/contact", {
  method: "POST",
  body: JSON.stringify(data),
  headers: { "Content-Type": "application/json", Accept: "application/json" },
}).then((res) => {
  if (!res.ok) throw new Error("Failed to send message");
  return res.json();
});


/*api za kontakt */
export const sendKontaktForm = async (data) =>
  fetch("/api/kontakt", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });
