const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 10
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_20_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDg2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjksXG4gICAgICAgIDExLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjExLFxuICAgICAgICA2OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjEzLFxuICAgICAgICA5MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDUyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDg3LFxuICAgICAgICA4NixcbiAgICAgICAgMzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAzNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgODksXG4gICAgICAgIDksXG4gICAgICAgIDExNixcbiAgICAgICAgODYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDc5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY5LFxuICAgICAgICA5MCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA3OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NixcbiAgICAgICAgNDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDkxLFxuICAgICAgICA2MyxcbiAgICAgICAgMzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTksXG4gICAgICAgIDk4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODksXG4gICAgICAgIDMzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTMwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAzNixcbiAgICAgICAgMTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzksXG4gICAgICAgIDM5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA3LFxuICAgICAgICAyMjksXG4gICAgICAgIDY5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDM4LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwianhsTkQ5aEREUkkwaHQrWkdMaFUyQTZnb0Y2bi9scTB4aVJoTW4rUVlvWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaUYtUGVRMnJUaXFxZkplU3FlelFjZ1wiLFxuICBcInBob25lSWRcIjogXCI0Zjk5NDJhNS05YjVmLTQyMjQtYjk3NC1lYWFlYjQ5YjA1YzZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUyLFxuICAgICAgNjksXG4gICAgICAyMzMsXG4gICAgICAyMjEsXG4gICAgICAxMjAsXG4gICAgICA5NSxcbiAgICAgIDk2LFxuICAgICAgNDEsXG4gICAgICAxMTYsXG4gICAgICAyMjYsXG4gICAgICAxOTEsXG4gICAgICAxMTcsXG4gICAgICAyNTAsXG4gICAgICAxODksXG4gICAgICA0LFxuICAgICAgNTYsXG4gICAgICAxMjEsXG4gICAgICAxMzksXG4gICAgICAxODUsXG4gICAgICAyMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQxLFxuICAgICAgMTIzLFxuICAgICAgNzksXG4gICAgICAxMzEsXG4gICAgICAxOTYsXG4gICAgICAzMSxcbiAgICAgIDM0LFxuICAgICAgODEsXG4gICAgICA5MCxcbiAgICAgIDIwMyxcbiAgICAgIDg4LFxuICAgICAgMTM4LFxuICAgICAgNjAsXG4gICAgICAxMjIsXG4gICAgICA0NixcbiAgICAgIDE4MyxcbiAgICAgIDIxNixcbiAgICAgIDE1MCxcbiAgICAgIDQ4LFxuICAgICAgMTEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjQ4WllSWFRKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NTEyOTMxNzQ6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ4NTkzMTI2NTQ3NjIwOjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWk5bUpzSEVMNmNxN1FHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJaUHRLOG05ZlpFdEcxRXFMUFc5VXAxdXdROU5EUkhreVM0R2dHMjRGdEJJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlRXNktiU3huZVd5MDJVMjZZaE5XcTgwejRtUzZsYURhUDhadUhOdkV3alJ6QjA1dlNtQThiNXNYd1h2clcvenFrcjdXeC9uQzkwUjk0WE1IdGZ5dkRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk0xOHZ3QUFIcCs0WjdkTTlvN2R2Q2dySnJON3dtSXE5aldLU2czSmJvdy9RMGRhcGczekpCeEY0NGVHMzhYNFFJTUVJS1NVeUx5ME5LMzdycFNtd0FRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc1MTI5MzE3NDo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDM3MjgwMlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "DAVID",
  ownername:process.env.OWNER_NAME|| "L.Y.R.I.C.A.L_G",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
