const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//â•â•â•â•â•â•â•[Required Variables]â•â•â•â•â•â•â•â•\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Harare,Zimbabwe."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Zimbabwe/Harare";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263781599192";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "263781599192";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,263781599192";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_57_03_23_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiaVB5SGo4U3hOM3BWV2RlNnd2RWYvQXB3U0VaKzYrSCtYUHNGYXg2ZXlrQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjI4WHJsRVVpNGIyajRDK2FBZno0OXB1dzVOOG1paDF3dDZieHdkMWtiR0k9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiRUhHN2M1bmJPUEtoWFBzQ0N5TGRDYW1pak9lMnZUcVBsdTZNUXgydGMxcz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImNvSXJHK2RmZ1c0Z1gvbXEwS2JqMVY3dmlmZUFBM1BxMWg4bktaRlE1am89XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZUtDbGdpRk9PallnMzRzWXBQa09rVUpMNU5kbE1XQ2pmaDNCUmgyMW5raz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIk5UbUtzYmFsaWRZSXBPTzErbjFyN2ZQK3JHQmwzdUpwc3M4UU5xb0MzSG89XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJDQW9jODdueThnMUJJYTU2T0VaL2ZwWXFnN3kwa1g0dXA3U0Z2ZG56NTI4PVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZFIwdVJHV2JQVkQ3V3BEZERMeFcvajN3NlFtd3dCNnRjVlBPOVcvTit6dz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI1QnNlYk53czVlSFh5bVRIS2phUHcybXhwRDR6YXNMV0d6WnY0VW9iYWVwTjIvSkVqWllmWDk4S3JLTmp2a1Z0ZGVkdms3VXlnbTBnOTBtd2FVNWJCUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6NyxcImFkdlNlY3JldEtleVwiOlwiWTFWWCtXb1JhVDJiTkpGU2JFUUlSS21sLzVsRHgxd3BjNXdGdU02WDdXdz1cIixcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOltdLFwibmV4dFByZUtleUlkXCI6MzEsXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOjMxLFwiYWNjb3VudFN5bmNDb3VudGVyXCI6MCxcImFjY291bnRTZXR0aW5nc1wiOntcInVuYXJjaGl2ZUNoYXRzXCI6ZmFsc2V9LFwiZGV2aWNlSWRcIjpcInVMNkRsdm5DUTJlYmtjamVkd1QwMlFcIixcInBob25lSWRcIjpcImIyZDg3NTMwLThlM2YtNDYwOS04NmE4LWQ2ZjZlZjFjMmRkOFwiLFwiaWRlbnRpdHlJZFwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiem5valJyd2xzOGNkMXg1MmhkclArSlY2TEFVPVwifSxcInJlZ2lzdGVyZWRcIjpmYWxzZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJoUUFnc09yRlIzenFISEc0NUtXaXlhS1h4QjQ9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJhY2NvdW50XCI6e1wiZGV0YWlsc1wiOlwiQ1BuSHNiOENFS1BDK2E4R0dCSWdBQ2dBXCIsXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6XCJ5d2lBMEJEbHR3dDBXdk14Z2hidSs4QWg4YXVlYjZGRU5BK0hubVBFanlNPVwiLFwiYWNjb3VudFNpZ25hdHVyZVwiOlwiN2ZhUnlIR2YwVkVESUtITW0zdlVFVERKRFV3clRoZU14azQ0RkplbDZEWDNrM2xOQWxQN3M3d3NWQ0NRNmF4TXZReXFBdjUrTTFFUEJzU0x2RXowQUE9PVwiLFwiZGV2aWNlU2lnbmF0dXJlXCI6XCI2dFppNWFWbkJsMm90a2tJRG52d1laZzcxL2hSUEppemZOVm9pZlZsYyszbDROMGlQWFVJK0ZONDNZdEdZT0lxRXpzTmRvY0xmM1dyaW0vNVcyaE9DUT09XCJ9LFwibWVcIjp7XCJpZFwiOlwiMjYzNzE4MTk1Mzk5OjEwQHMud2hhdHNhcHAubmV0XCIsXCJuYW1lXCI6XCJMb3ZlXCIsXCJsaWRcIjpcIjE4MjY1MjQ2MDEzNDU1MToxMEBsaWRcIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyNjM3MTgxOTUzOTk6MTBAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCY3NJZ05BUTViY0xkRnJ6TVlJVzd2dkFJZkdybm0raFJEUVBoNTVqeEk4alwifX1dLFwicGxhdGZvcm1cIjpcInNtYmFcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MTExNjk4MzEsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBRTZGXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRTUrLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOTNJZUJ4TFQ4VndiSXBubTJhTVVBdk42czk2anBjb25IbExYNTVwUGhlQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2Njk4MDM1MTMsXCJjdXJyZW50SW5kZXhcIjoxMSxcImRldmljZUluZGV4ZXNcIjpbMCwxLDMsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRTU2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiYXBDa0pWOHlScW9TdjdaUG5QY3I1NUsraGpBVzVuM25wcGFUTWFWZVpaVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2Njk4MDM1MTMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcwNDgxMzg3NjIwM1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUU1Ny5qc29uIjogIntcImtleURhdGFcIjpcImpzSlRCd2JuUkpvUXRGQ0luYnhxTXVIaExHeGgxb3pUS1RpL043VTlOUUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjY5ODAzNTEzLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDNdfSxcInRpbWVzdGFtcFwiOlwiMTcwNDgxNDIyNDA3OVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUU1OC5qc29uIjogIntcImtleURhdGFcIjpcIjJlYThrOU5RTDJUQndIcnlmaWVDZ3hmTE9zZ3VhMjNHbGNxNkZlWmVPUkk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjY5ODAzNTEzLFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwxLDMsNF19LFwidGltZXN0YW1wXCI6XCIxNzA1MDM5MzYyMjg4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRTVfXy5qc29uIjogIntcImtleURhdGFcIjpcInBrenQvc3RQZitvcGJUN3pmcmFQOWJVbjQzMjN2dHgyeXhpcXQrYU94a2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjY5ODAzNTEzLFwiY3VycmVudEluZGV4XCI6MTEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFNkEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJGK3FRS29XTnpUUDFRblFJSEZmcVRQSE1WbHp4SUJ2cENrY0g5ZXZ6aWQwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY2OTgwMzUxMyxcImN1cnJlbnRJbmRleFwiOjExLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcwNzI0MjIxMTkxMlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUU2Qi5qc29uIjogIntcImtleURhdGFcIjpcImVTNTFIeVFLblgyKzdzZDNvbk9weFdaVHl6WXdtRWxUNHRBL3N1Tm9JWFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjY5ODAzNTEzLFwiY3VycmVudEluZGV4XCI6MTEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRTZDLmpzb24iOiAie1wia2V5RGF0YVwiOlwiN3o4NU1XK0dpRnBJeGxFTGlUUmVDRFhCa2d2NDFNNFlVL05kVGx3N2JEWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2Njk4MDM1MTMsXCJjdXJyZW50SW5kZXhcIjoxMixcImRldmljZUluZGV4ZXNcIjpbMCwxLDEyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFNkQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI5UkNZUTM5Rmlody9UaVArYkZ5czRLQkIvZVI4bEhoR0lVMWRuYXo1bnRjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY2OTgwMzUxMyxcImN1cnJlbnRJbmRleFwiOjEzLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMTNdfSxcInRpbWVzdGFtcFwiOlwiMTcxMDAxNzQ4OTE3N1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUU2RS5qc29uIjogIntcImtleURhdGFcIjpcIllXS0J6dEZuYWVRaU9ZVnNNNzNLUWRwT2lRb0NkZHBkRTYvRU9NMFRocFE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjY5ODAzNTEzLFwiY3VycmVudEluZGV4XCI6MTUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwxMywxNV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRTZGLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUXRZNEJuQ2F3K09QMHhya0tRaGoyL3VhM0pZdGNMUktKYXVJQnUwTzFwdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2Njk4MDM1MTMsXCJjdXJyZW50SW5kZXhcIjoxNixcImRldmljZUluZGV4ZXNcIjpbMTYsMCwxLDE1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTEwMDk2Njc1NzBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFNkguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJnZFIxZE0vcTkyNWNXUkExczY4RFFPNUJ5bTZyZTZMSzRrRmVCY2JjRGNFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY2OTgwMzUxMyxcImN1cnJlbnRJbmRleFwiOjE3LFwiZGV2aWNlSW5kZXhlc1wiOlsxNiwwLDEsMTcsMTVdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUU2SS5qc29uIjogIntcImtleURhdGFcIjpcInNYcWhDK1c1LzE3ay80bzFLYWFwdUhxbkRYQUQxencyS21TMHZoeHRZKzg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjY5ODAzNTEzLFwiY3VycmVudEluZGV4XCI6MTcsXCJkZXZpY2VJbmRleGVzXCI6WzE2LDAsMSwxNV19LFwidGltZXN0YW1wXCI6XCIxNzExMTY5ODE5MTA1XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBRUFBRTZHLmpzb24iOiAie1wia2V5RGF0YVwiOlwidnkwTG9ZaCt4UVhCb1dnQWlhMHZCcE1HbUt1cFh6cE1BS2VxZzMwWHFtST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2Njk4MDM1MTMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDE2LDE3LDEsMTVdfSxcInRpbWVzdGFtcFwiOlwiMTcxMTA5OTcxNzA4MVwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "Â©sá´œÊœá´€ÉªÊŸÂ²Â²Â¹-á´á´…" , // ```ã€Ž á´˜á´á´¡á´‡Ê€á´‡á´… Ê™Ê sá´œÊœá´€ÉªÊŸÂ²Â²Â¹-á´á´… ã€```", //*ã€Žsá´œÊ™sá´„Ê€ÉªÊ™á´‡ â€¢ sá´œÊœá´€ÉªÊŸ á´›á´‡á´„Êœã€*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "HandredThauzend",
  packname: process.env.PACK_NAME || "â™¥ï¸",
  botname : process.env.BOT_NAME  || "HandredThauzend…",
  ownername:process.env.OWNER_NAME|| "It's EbSparco",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 1,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
