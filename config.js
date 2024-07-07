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
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_17_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyLFxuICAgICAgICAxMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDM4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDkzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNixcbiAgICAgICAgMzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICAxODEsXG4gICAgICAgIDc4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjAsXG4gICAgICAgIDczLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDk4LFxuICAgICAgICAxODUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDkxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTA0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDMzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAzNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODcsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTY1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDg0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDg0LFxuICAgICAgICAzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMixcbiAgICAgICAgNDksXG4gICAgICAgIDYxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMixcbiAgICAgICAgNzksXG4gICAgICAgIDMzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyLFxuICAgICAgICAxODMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDgwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTUzLFxuICAgICAgICA5NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNixcbiAgICAgICAgNzYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjksXG4gICAgICAgIDcxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDcwLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMixcbiAgICAgICAgNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTQsXG4gICAgICAgIDUyLFxuICAgICAgICA5MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDksXG4gICAgICAgIDIzLFxuICAgICAgICAyNixcbiAgICAgICAgODUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICA2LFxuICAgICAgICA2MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTkwLFxuICAgICAgICA4NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjAzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTQsXG4gICAgICAgIDc4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm9aeiszckhKQnlXTUlhanZNUG5vZGZxWUc2UGFuTlJra01sSC9ReWo2SkU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzEwNDI0MjU3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4MjgzNDdCNEM5Qzg5RjhCNjkzRTcyNzhFRkM1MTg4NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAzNDc0MjJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MTA0MjQyNTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI0NUJFNzVEQTFFMDUzMzY1Q0I3NkU2OEQxRDEyNDQ4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDM0NzQyM1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKbkdGSXVZbVN2V2hvdmJ5T1B3TGRBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjExNjFmMGJhLTgwMWMtNDg1My1hZDBlLTU2NjU0Y2NkY2I5ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MyxcbiAgICAgIDQ4LFxuICAgICAgMTM2LFxuICAgICAgMTgyLFxuICAgICAgNTQsXG4gICAgICAyMDEsXG4gICAgICAxMDEsXG4gICAgICA1NyxcbiAgICAgIDQyLFxuICAgICAgMTAxLFxuICAgICAgMjQwLFxuICAgICAgNDQsXG4gICAgICAyNTMsXG4gICAgICAxOCxcbiAgICAgIDE2OSxcbiAgICAgIDE4NSxcbiAgICAgIDIxNyxcbiAgICAgIDIzLFxuICAgICAgMTEzLFxuICAgICAgMTUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNixcbiAgICAgIDIyNyxcbiAgICAgIDE2NyxcbiAgICAgIDIzMCxcbiAgICAgIDE2MyxcbiAgICAgIDE1OSxcbiAgICAgIDEwMixcbiAgICAgIDIzNyxcbiAgICAgIDE2NSxcbiAgICAgIDk5LFxuICAgICAgMixcbiAgICAgIDE4NixcbiAgICAgIDE0NSxcbiAgICAgIDE5OCxcbiAgICAgIDIwNCxcbiAgICAgIDEyOSxcbiAgICAgIDI1LFxuICAgICAgMTczLFxuICAgICAgMjksXG4gICAgICA2OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxUzVSTkdQUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzEwNDI0MjU3OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNcmFzc1wiLFxuICAgIFwibGlkXCI6IFwiMjc1MTgzMzM2MjIyOTYwOjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWE2NnRrR0VKbldxYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJsV1lRRzRObG55aE1lWEQrc3owVktWRExmVVp1SS81SXJ6Q21Ob0JZdkRJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjhFb1JzU3ZzYUNSaVAxRGZvNVdMYW1tZ2VvS0UycDM3TS9FSTE0bG9yVklPL09RSmZ6aEw3TzN4d1ZuY0VrTS9JNE9rUGE0aVBYUURwMnVxUzNyTUJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlB6Vy9ibkNabnVWWFFlYnQwczlBUzdHSnBqTkI1eGM3R2tLZnYrRWxVL1ByT2twUERxa1pxUCt6QjIzWnRjYzFUR1RLOWE4QkF3bWtFcXovMElHNmlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcxMDQyNDI1Nzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMzQ3NDIwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTkQzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFORDMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNSTFYUDhmZUFlZ040M1MrUXVpR29tdXhGbFBVbWVIOTBnVGhSTlJMTklnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3OTkwMDM0NjIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDM0NzQyMTY2MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "DAVID",
  ownername:process.env.OWNER_NAME|| "Mrass",


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
