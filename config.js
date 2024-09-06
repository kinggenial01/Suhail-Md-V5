const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ogbangoodluck07@gmail.com"
global.location="Imo, Nigeria"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Dartondave/Suhail-Md-V5";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔾𝕀𝕊𝕋𝕄𝔼𝔻𝕀𝔸_𝕄𝔻" 


global.devs = "2349119191552" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349119191552";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_50_09_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAzNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM1LFxuICAgICAgICA5MixcbiAgICAgICAgMTMxLFxuICAgICAgICA3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgODYsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjU1LFxuICAgICAgICA5OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQxLFxuICAgICAgICA4OCxcbiAgICAgICAgODQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODksXG4gICAgICAgIDg4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjksXG4gICAgICAgIDYsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA4LFxuICAgICAgICA1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI2LFxuICAgICAgICA2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3LFxuICAgICAgICA1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDQzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDkwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjA1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDgsXG4gICAgICAgIDgxLFxuICAgICAgICA1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODcsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODMsXG4gICAgICAgIDc1LFxuICAgICAgICA5LFxuICAgICAgICAyMzksXG4gICAgICAgIDg4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDc4LFxuICAgICAgICAzMixcbiAgICAgICAgNTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzOSxcbiAgICAgICAgNyxcbiAgICAgICAgMjA3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk3LFxuICAgICAgICA4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIzLFxuICAgICAgICA5NixcbiAgICAgICAgMjAzLFxuICAgICAgICA3OSxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTkyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjQ0eWhMdVRrMVhJWHg4d3ZCSGZwTFo0dnhkQzROVTNaMjJxNGRHRmhoSUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm5yQ3J6M2I4UXlhdDQ4QUk2UkJEM2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiODc5MTYyYjktNGExNS00N2EzLWJmNDgtOGE5N2UyNGUzZTFlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzLFxuICAgICAgMTg3LFxuICAgICAgNTgsXG4gICAgICAxOCxcbiAgICAgIDM1LFxuICAgICAgNjcsXG4gICAgICAxOTYsXG4gICAgICAyNCxcbiAgICAgIDM2LFxuICAgICAgMTIwLFxuICAgICAgMjE3LFxuICAgICAgMTMsXG4gICAgICA4NyxcbiAgICAgIDU4LFxuICAgICAgMTgyLFxuICAgICAgNjUsXG4gICAgICAyNDIsXG4gICAgICAzNSxcbiAgICAgIDE5LFxuICAgICAgMjQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg1LFxuICAgICAgMjA4LFxuICAgICAgMTYzLFxuICAgICAgMjM2LFxuICAgICAgMTM1LFxuICAgICAgMTEwLFxuICAgICAgMTAyLFxuICAgICAgMjIwLFxuICAgICAgMTYwLFxuICAgICAgOTYsXG4gICAgICA1NCxcbiAgICAgIDEwMyxcbiAgICAgIDE2NixcbiAgICAgIDIwLFxuICAgICAgMTU0LFxuICAgICAgMjMyLFxuICAgICAgMjcsXG4gICAgICA3OCxcbiAgICAgIDM1LFxuICAgICAgMTkyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpMUlJZOVNXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTE5MTkxNTUyOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTYW1pXCIsXG4gICAgXCJsaWRcIjogXCI3MjY0MTIxODE0NjQ2NzozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BTODNMd0VFS0hvNnJZR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNXA0bGpHZUR0aUdvTFVCYU8zdXYrVmsxemROU3Q0eG5jemJwVjUySnhXbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJSU3JsRVk3TzYrSzAvV1JybmNPS0NRYU00NlhlSmhhWkNBbnBJUjhOUE5jc2Y2TEdOSmxuR2NvTXZTenJMVUNubG1hTVBGUGhpOVpZVThUQnI5R1VCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ6NzB2QXd2eTBaZGVCMkhnVEptSWxodm8reGFoWDI2NjZmam41bERac3MvcmtQSmJzemhNNURKeGlxMnpIZDBkOGhKMW1ueEcydTNrSUdCd1c5cFRoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTE5MTkxNTUyOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgODksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI1NjA4OTk3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRmx3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGbHcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKclg4NHFKWEdIeHM3VWlQVHZnclVmQ0hlNjFuU2QzRHp3RjZydUxQTHc4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyMDEwODYwNjgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcwODY3MDIxNjE3NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔾𝕀𝕊𝕋𝕄𝔼𝔻𝕀𝔸_𝕄𝔻 』```", //*『𝕤ᴜʙ𝕤ᴄʀɪʙᴇ • 𝔾𝕀𝕊𝕋𝕄𝔼𝔻𝕀𝔸 𝕋𝔼ℂℍ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝔾𝕀𝕊𝕋𝕄𝔼𝔻𝕀𝔸",
  packname: process.env.PACK_NAME || "𝔾𝕀𝕊𝕋𝕄𝔼𝔻𝕀𝔸_𝕄𝔻",
  botname : process.env.BOT_NAME  || "𝔾𝕀𝕊𝕋𝕄𝔼𝔻𝕀𝔸_𝕄𝔻",
  ownername:process.env.OWNER_NAME|| "𝔾𝕀𝕊𝕋𝕄𝔼𝔻𝕀𝔸",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "𝔾𝕀𝕊𝕋𝕄𝔼𝔻𝕀𝔸"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "composing", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
