no vi coconst fs = require('fs-extra')
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
global.caption = process.env.CAPTION || global.caption || "ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔾𝕀𝕊𝕋𝕄𝔻𝕀𝔸_𝕄𝔻" 


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_10_09_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTE4LFxuICAgICAgICA3NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ0LFxuICAgICAgICA5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTY1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjIwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE5LFxuICAgICAgICA4MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNCxcbiAgICAgICAgODMsXG4gICAgICAgIDQ4LFxuICAgICAgICA5NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwLFxuICAgICAgICA2MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDE5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ5LFxuICAgICAgICA2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTksXG4gICAgICAgIDM0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzksXG4gICAgICAgIDM3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDc5LFxuICAgICAgICA1NSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE1LFxuICAgICAgICA4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDU3LFxuICAgICAgICA5MixcbiAgICAgICAgODEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA3LFxuICAgICAgICA2MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDc5LFxuICAgICAgICA3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY4LFxuICAgICAgICAzNyxcbiAgICAgICAgNzksXG4gICAgICAgIDE2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc4LFxuICAgICAgICA0MixcbiAgICAgICAgMjMxLFxuICAgICAgICAzMCxcbiAgICAgICAgODUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE1LFxuICAgICAgICA4NixcbiAgICAgICAgNzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDU1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTQsXG4gICAgICAgIDU3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk1LFxuICAgICAgICA2MixcbiAgICAgICAgMTQxLFxuICAgICAgICA3MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJOZzVCcksrMStXR0E4OTVkY2FkVVpTeGx0M2NKWWVWVFBUcG5ZWUlGS3FFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLb2lIVl9LNlN2bVJGYWRndXlJSHlRXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ0ZjVhNzNmLTBkN2EtNGYyOC05Y2RhLTViMTIyNjc5NzMwMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NCxcbiAgICAgIDE5MixcbiAgICAgIDEwNSxcbiAgICAgIDIxOCxcbiAgICAgIDkwLFxuICAgICAgMTE5LFxuICAgICAgMTYxLFxuICAgICAgMjAzLFxuICAgICAgMTA3LFxuICAgICAgMjUsXG4gICAgICA1NyxcbiAgICAgIDU4LFxuICAgICAgNjAsXG4gICAgICA3MixcbiAgICAgIDIxNSxcbiAgICAgIDExMCxcbiAgICAgIDE5NixcbiAgICAgIDk0LFxuICAgICAgODEsXG4gICAgICA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NyxcbiAgICAgIDg4LFxuICAgICAgMTMxLFxuICAgICAgODcsXG4gICAgICAyMjcsXG4gICAgICAyNTIsXG4gICAgICAxOSxcbiAgICAgIDUyLFxuICAgICAgMTkzLFxuICAgICAgMTI2LFxuICAgICAgMjIyLFxuICAgICAgOTIsXG4gICAgICA3MCxcbiAgICAgIDUsXG4gICAgICAyNDUsXG4gICAgICAxMTIsXG4gICAgICAyMTAsXG4gICAgICAyMSxcbiAgICAgIDIwNSxcbiAgICAgIDIwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTVFoyMVJLMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTExOTE5MTU1Mjo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU2FtaVwiLFxuICAgIFwibGlkXCI6IFwiNzI2NDEyMTgxNDY0Njc6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQUzgzTHdFRUllTzY3WUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjVwNGxqR2VEdGlHb0xVQmFPM3V2K1ZrMXpkTlN0NHhuY3picFY1Mkp4V289XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQkh2aUdFMFhnTXhOTDJEY1NxZWQyQXAxeWpqYVAraWlKeURPQTJuM0tKbW9oWGZuNDY3V0d6elVibFg1dFZPclpJeWJSZVdWOFNodWdqMkF1TUNpQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZFRCSlRyM0UwUHppd09PT3AzbTFSbVJNZ1F3YlcwaXVPcnFNeGEvWTA4MVpZY0NJQnBwYWtmdmd3SEdhcS8vNDJEUWpMSzVzNG9wNWo0aFQ5UDdwZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTExOTE5MTU1Mjo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTYxMzgzNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZsd1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRmx3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiSnJYODRxSlhHSHhzN1VpUFR2Z3JVZkNIZTYxblNkM0R6d0Y2cnVMUEx3OD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjAxMDg2MDY4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDg2NzAyMTYxNzRcIn0iCn0="  // PUT your SESSION_ID 


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
