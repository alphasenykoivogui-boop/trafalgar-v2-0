const {
default: makeWASocket,
useMultiFileAuthState,
fetchLatestBaileysVersion,
DisconnectReason
} = require("@whiskeysockets/baileys")

let sock

async function startWhatsApp() {

try {

console.log("╔════════════════════╗")
console.log("👑 TRAFALGAR V2")
console.log("⚡ Initialisation...")
console.log("╚════════════════════╝")

const { state, saveCreds } =
await useMultiFileAuthState("./session")

const { version } =
await fetchLatestBaileysVersion()

sock = makeWASocket({
version,
auth: state,
printQRInTerminal: false
})

sock.ev.on("creds.update", saveCreds)

sock.ev.on(
"connection.update",
async ({
connection,
lastDisconnect
}) => {

if (connection === "connecting") {

console.log("🔄 Connexion à WhatsApp...")

}

if (connection === "open") {

console.log("╔════════════════════╗")
console.log("🟢 WHATSAPP CONNECTÉ")
console.log(
`📱 ${sock.user?.id || "Inconnu"}`
)
console.log("🚀 TRAFALGAR V2 ONLINE")
console.log("╚════════════════════╝")

}

if (connection === "close") {

console.log("🔴 Connexion fermée")

const shouldReconnect =
lastDisconnect?.error?.output?.statusCode !==
DisconnectReason.loggedOut

if (shouldReconnect) {

console.log("♻️ Reconnexion dans 5 secondes...")

setTimeout(async () => {

await startWhatsApp()

}, 5000)

}

else {

console.log("🚪 Session déconnectée")

}

}

}

)

}

catch (err) {

console.log("❌ Erreur :", err)

}

}

function getSocket() {

return sock

}

async function logout() {

if (!sock) return

await sock.logout()

console.log("🔒 Déconnexion effectuée")

}

function isConnected() {

return !!sock?.user

}

function getUser() {

return sock?.user || null

}

module.exports = {

startWhatsApp,
getSocket,
logout,
isConnected,
getUser

  }
