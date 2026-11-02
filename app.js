/* SendMoney – prototype cliquable (aucune dépendance) */
const ICONS = {
  send:"M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z",
  download:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3",
  clock:"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2",
  help:"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01",
  user:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  home:"M3 10l9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10",
  up:"M7 17L17 7M8 7h9v9",
  down:"M12 5v14M5 12l7 7 7-7",
  check:"M20 6L9 17l-5-5",
  chevR:"M9 18l6-6-6-6", chevD:"M6 9l6 6 6-6", back:"M15 18l-6-6 6-6",
  headset:"M3 14v-2a9 9 0 0 1 18 0v2M21 15a2 2 0 0 1-2 2h-1v-5h1a2 2 0 0 1 2 2zM3 15a2 2 0 0 0 2 2h1v-5H5a2 2 0 0 0-2 2z",
  eye:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  eyeoff:"M17.9 17.9A10.9 10.9 0 0 1 12 20C5 20 1 12 1 12a18.5 18.5 0 0 1 5.1-5.9M9.9 4.2A9 9 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.2 3.2M1 1l22 22",
  bell:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0",
  wallet:"M20 7H5a2 2 0 0 1 0-4h13v4zM3 5v14a2 2 0 0 0 2 2h15V7",
  list:"M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
  users:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8",
  gauge:"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 12l4-4",
  settings:"M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6",
  shield:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  info:"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 16v-4M12 8h.01",
  logout:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9",
  share:"M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8.6 13.5l6.8 4M15.4 6.5l-6.8 4",
  mail:"M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 6l-10 7L2 6",
  camera:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  pen:"M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z",
  plus:"M12 5v14M5 12h14",
  search:"M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3"
};
const svg = n => `<svg viewBox="0 0 24 24"><path d="${ICONS[n]}"/></svg>`;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const fmt = n => Math.round(n).toLocaleString("fr-FR").replace(/\u202f|\u00a0/g, " ");
const FEE_RATE = 0.02;

const state = {
  balance: 125000,
  hidden: false,
  filter: "all",
  stack: ["home"],
  tx: [
    { type:"out", who:"Jean Dupont", amount:50000, cur:"XAF", date:"18 Mai 2025 • 14:30", ref:"SM125478963" },
    { type:"in",  who:"Awa Diop",    amount:30000, cur:"XOF", date:"16 Mai 2025 • 11:20", ref:"SM125470112" },
    { type:"out", who:"Moussa Ndiaye", amount:25000, cur:"XAF", date:"12 Mai 2025 • 09:15", ref:"SM125466340" },
    { type:"in",  who:"Awa Diop",    amount:20000, cur:"XOF", date:"10 Mai 2025 • 17:40", ref:"SM125461877" },
    { type:"out", who:"Jean Dupont", amount:15000, cur:"XAF", date:"08 Mai 2025 • 12:10", ref:"SM125459021" },
    { type:"in",  who:"Fatou Sarr",  amount:10000, cur:"XOF", date:"05 Mai 2025 • 10:25", ref:"SM125455508" }
  ]
};

/* icônes */
$$("i[data-ic]").forEach(el => el.innerHTML = svg(el.dataset.ic));

/* navigation */
const noTab = ["send", "detail", "success", "profile"];
function show(id, push = true) {
  $$(".screen").forEach(s => s.classList.toggle("active", s.id === id));
  $(`#${id}`).scrollTop = 0;
  $("#tabbar").classList.toggle("hide", noTab.includes(id));
  $$("#tabbar button").forEach(b => b.classList.toggle("on", b.dataset.tab === id || (id === "profile" && b.dataset.tab === "account")));
  if (push && state.stack[state.stack.length - 1] !== id) state.stack.push(id);
  if (id === "home") renderHome();
  if (id === "history") renderHistory();
  if (id === "send") initSend();
}
function back() { state.stack.pop(); show(state.stack[state.stack.length - 1] || "home", false); }

document.addEventListener("click", e => {
  const t = e.target.closest("[data-go],[data-back],[data-toast]");
  if (!t) return;
  if (t.dataset.toast) return toast(t.dataset.toast);
  if (t.hasAttribute("data-back")) return back();
  const go = t.dataset.go;
  if (["home", "history", "help", "account"].includes(go)) state.stack = [go];
  show(go, !["home","history","help","account"].includes(go));
});

function toast(msg) {
  const t = $("#toast"); t.textContent = msg; t.classList.add("show");
  clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("show"), 1800);
}

/* transactions */
function txHTML(tx, i) {
  const out = tx.type === "out";
  return `<button class="tx" data-i="${i}">
    <span class="ico">${svg(out ? "up" : "down")}</span>
    <span class="mid"><b>${out ? "Transfert envoyé" : "Argent reçu"}</b><small>${tx.date}</small></span>
    <span class="amt">${out ? "-" : "+"} ${fmt(tx.amount)} ${tx.cur}<span>Réussi</span></span></button>`;
}
function bindTx(box) {
  $$(".tx", box).forEach(b => b.onclick = () => openDetail(+b.dataset.i));
}
function renderHome() {
  $("#balance").textContent = state.hidden ? "••••••" : fmt(state.balance);
  const box = $("#homeTx");
  const t = state.tx[0], out = t.type === "out";
  box.innerHTML = `<button class="tx" data-i="0"><span class="ico" style="background:#f3e3b5;color:#8a6d00;font-weight:700">${t.who.split(" ").map(w => w[0]).join("")}</span>
    <span class="mid"><b>${t.who}</b><small>${t.date.split(" •")[0]}</small></span>
    <span class="amt">${out ? "-" : "+"} ${fmt(t.amount)} ${t.cur} ✓</span></button>`;
  bindTx(box);
}
function renderHistory() {
  const list = state.tx.map((t, i) => ({ t, i })).filter(x => state.filter === "all" || x.t.type === state.filter);
  const box = $("#histList");
  box.innerHTML = list.map(x => txHTML(x.t, x.i)).join("") || `<p class="muted c">Aucune transaction</p>`;
  bindTx(box);
  $$("#histTabs button").forEach(b => b.classList.toggle("on", b.dataset.f === state.filter));
}
$$("#histTabs button").forEach(b => b.onclick = () => { state.filter = b.dataset.f; renderHistory(); });

function openDetail(i) {
  const t = state.tx[i], out = t.type === "out";
  $("#dAmount").textContent = `${out ? "-" : "+"} ${fmt(t.amount)} ${t.cur}`;
  $("#dWho").textContent = t.who; $("#dDate").textContent = t.date.replace("•", "·"); $("#dRef").textContent = t.ref;
  $("#detail h2").textContent = out ? "Transfert réussi !" : "Argent reçu !";
  $("#detail p").textContent = out ? "Votre argent a bien été envoyé." : "Vous avez reçu de l'argent.";
  show("detail");
}
$("#share").onclick = async () => {
  const txt = `Reçu SendMoney – ${$("#dAmount").textContent} – Réf. ${$("#dRef").textContent}`;
  try { navigator.share ? await navigator.share({ text: txt }) : (await navigator.clipboard.writeText(txt), toast("Reçu copié")); }
  catch { toast("Partage annulé"); }
};

/* accueil */
$("#toggleEye").onclick = () => {
  state.hidden = !state.hidden;
  $("#toggleEye").innerHTML = svg(state.hidden ? "eyeoff" : "eye"); renderHome();
};
$("#recharge").onclick = () => { state.balance += 25000; renderHome(); toast("+ 25 000 XAF ajoutés (simulation)"); };
$("#receiveBtn").onclick = () => { state.filter = "in"; state.stack = ["history"]; show("history", false); };

/* envoi */
let amount = 50000;
function parseAmt(s) { return parseInt(String(s).replace(/\D/g, "")) || 0; }
function updateSend() {
  const fee = Math.round(amount * FEE_RATE), recv = Math.max(amount - fee, 0);
  $("#fee").textContent = `${fmt(fee)} XAF`; $("#recv").textContent = fmt(recv);
  $$("#chips button").forEach(b => b.classList.toggle("on", +b.dataset.v === amount));
  let err = "";
  if (amount <= 0) err = "Entrez un montant"; else if (amount > state.balance) err = "Solde insuffisant";
  $("#amtErr").textContent = err; $("#continue").disabled = !!err;
}
function initSend() {
  $("#availBal").textContent = fmt(state.balance);
  $("#amt").value = fmt(amount); updateSend();
}
$("#amt").addEventListener("input", e => { amount = parseAmt(e.target.value); e.target.value = amount ? fmt(amount) : ""; updateSend(); });
$$("#chips button").forEach(b => b.onclick = () => { amount = +b.dataset.v; $("#amt").value = fmt(amount); updateSend(); });
$("#continue").onclick = () => {
  const fee = Math.round(amount * FEE_RATE);
  const now = new Date(), mois = ["Jan","Fév","Mars","Avr","Mai","Juin","Juil","Août","Sept","Oct","Nov","Déc"];
  const pad = n => String(n).padStart(2, "0");
  const ref = "SM" + Math.floor(100000000 + Math.random() * 900000000);
  state.tx.unshift({ type:"out", who:"Jean Dupont", amount, cur:"XAF",
    date:`${pad(now.getDate())} ${mois[now.getMonth()]} ${now.getFullYear()} • ${pad(now.getHours())}:${pad(now.getMinutes())}`, ref });
  state.balance -= amount;
  $("#sSent").textContent = `${fmt(amount)} XAF`; $("#sRecv").textContent = `${fmt(amount - fee)} XOF`; $("#sRef").textContent = ref;
  state.stack = ["home"]; show("success", false);
};

/* aide */
const FAQ = [
  ["Comment envoyer de l'argent ?", "Depuis l'accueil, touchez « Envoyer de l'argent », choisissez le montant puis confirmez."],
  ["Quels sont les frais de transfert ?", "Les frais sont de 2 % du montant envoyé, affichés avant la confirmation."],
  ["Combien de temps pour recevoir ?", "Le bénéficiaire reçoit généralement l'argent en quelques minutes."],
  ["Comment recharger mon solde ?", "Touchez « Recharger mon solde » sur l'accueil et choisissez votre moyen de paiement mobile."],
  ["Que faire en cas d'échec ?", "Vérifiez votre solde et votre connexion, puis réessayez. Sinon, contactez notre support 24h/24."]
];
function renderFaq(q = "") {
  $("#faq").innerHTML = FAQ.filter(f => f[0].toLowerCase().includes(q.toLowerCase()))
    .map(f => `<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join("") || `<p class="muted">Aucun résultat</p>`;
}
$("#faqSearch").oninput = e => renderFaq(e.target.value);
renderFaq();

/* profil */
$("#notifSwitch").onclick = e => { const s = e.currentTarget; s.classList.toggle("on"); toast(s.classList.contains("on") ? "Notifications activées" : "Notifications désactivées"); };

show("home", false);
