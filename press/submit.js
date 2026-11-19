// Replace this value with your actual Formspree endpoint after enabling file uploads.
const FORMSPREE_ENDPOINT = "";
const form = document.getElementById("submission-form");
const statusBox = document.getElementById("status");
const sendButton = document.getElementById("send");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  statusBox.className = "status";
  if (!FORMSPREE_ENDPOINT || !/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(FORMSPREE_ENDPOINT)) {
    statusBox.textContent = "Online submission is not yet configured. Please contact doubletakeworld@outlook.com.";
    statusBox.classList.add("error");
    return;
  }
  if (!form.reportValidity()) return;
  sendButton.disabled = true;
  statusBox.textContent = "Sending submission…";
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error("Submission service returned " + response.status);
    statusBox.className = "status success";
    statusBox.textContent = "Submission received. Thank you!";
    form.reset();
  } catch (error) {
    statusBox.className = "status error";
    statusBox.textContent = "Submission could not be sent. Please try again or email doubletakeworld@outlook.com.";
  } finally { sendButton.disabled = false; }
});
