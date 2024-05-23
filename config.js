const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="IbraheemChohan3145a@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/9hZzYdq/Whats-App-Image-2024-04-07-at-10-56-03-PM.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923474092022" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923474092022";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_44_05_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzcsXG4gICAgICAgIDk1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk4LFxuICAgICAgICA1MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM4LFxuICAgICAgICA1NixcbiAgICAgICAgMzgsXG4gICAgICAgIDIxLFxuICAgICAgICAxODIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAzMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDMzLFxuICAgICAgICA3LFxuICAgICAgICAxODksXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgNTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ4LFxuICAgICAgICAwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzksXG4gICAgICAgIDM1LFxuICAgICAgICAxODksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDcyLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgODQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjMxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTczLFxuICAgICAgICA4MixcbiAgICAgICAgMTYwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjQzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjMwLFxuICAgICAgICA4MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODksXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTEsXG4gICAgICAgIDk5LFxuICAgICAgICA4MixcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgODksXG4gICAgICAgIDQyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDg2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzEsXG4gICAgICAgIDUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTksXG4gICAgICAgIDI5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgOCxcbiAgICAgICAgODAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjksXG4gICAgICAgIDc3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTU4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTU0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjksXG4gICAgICAgIDkxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjksXG4gICAgICAgIDMzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTksXG4gICAgICAgIDU5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJscmdhL0FWR1hPbFZMVGFMNE9sanFLRGh0YjVGeEE4NHZPMHdlc2NucXk0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzQ3NDA5MjAyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTFDQjg2QjhFRDk4ODNEMjczNjA2QjkwRUZEMjFDRkJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NDkzNDU5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImxfdmxLa1lxUWd5MGk1WW5hUEZqUEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTU4Y2MyYzMtYjNkYi00ODU2LWE5ZjEtYjc3Y2E4YjI5ODY2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMyxcbiAgICAgIDQwLFxuICAgICAgMjEyLFxuICAgICAgMjM5LFxuICAgICAgNDQsXG4gICAgICA2NCxcbiAgICAgIDE2MSxcbiAgICAgIDIyLFxuICAgICAgMTg1LFxuICAgICAgMjA4LFxuICAgICAgMTE1LFxuICAgICAgMTMzLFxuICAgICAgMTk5LFxuICAgICAgNDcsXG4gICAgICA3NyxcbiAgICAgIDM0LFxuICAgICAgMTksXG4gICAgICAyNTAsXG4gICAgICAxNzMsXG4gICAgICAyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc0LFxuICAgICAgMjM0LFxuICAgICAgMTY1LFxuICAgICAgMTI2LFxuICAgICAgMTM1LFxuICAgICAgMTg2LFxuICAgICAgMTA1LFxuICAgICAgNjgsXG4gICAgICAyNDUsXG4gICAgICAxNjcsXG4gICAgICAyMjEsXG4gICAgICAzOCxcbiAgICAgIDI1NSxcbiAgICAgIDE5NSxcbiAgICAgIDI1NSxcbiAgICAgIDIyMixcbiAgICAgIDEzNCxcbiAgICAgIDE5OCxcbiAgICAgIDU2LFxuICAgICAgMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPYUQyVFVRaWJtK3NnWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldhS21QbDN0NjRmYlVPbXdUNEJabXFiL3RKY0RHaFZWcnF6cjdnNXlmeEk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTE9CWk12SFpCNENtY0c0MklxcWt5bDI3UmkvKzFHK0NVeDA0NldBSktPc2tqRDh5UEdYUVJFVXluVEFUMU5Gb01kV2F3SlFnaEZTYlN0MTZaZkgrQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiM3lmL1BEdmlDQkJSYzBEbUN2WWtzU3hiZHpiQkY5MzhwTjdyT0R6U0liWlo1QnRham1yTUVuVG1HOEpHK1piYUVyRTZneW9lV0VicVFqamlxV2RCamc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0NzQwOTIwMjI6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3MzQ2NTAxMzcyMzI0ODozMEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQ3NDA5MjAyMjozMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2NDkzNDUyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ1JVXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDUlUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJtQ1VIZ0h2Q1lPcGtYQThrRGE5T096a25sellCbTdtclprSzNaRzY2L05VPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMjYwNzcxOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE2NDkzNDU2OTUwXCJ9Igp9
"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©Nightmare-Bot" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Nightmare-Bot 』```", //*『I Hope You Enjoy』*\n Our Bot"),
 
  author : process.env.PACK_AUTHER|| "Ibraheem-Chohan",
  packname: process.env.PACK_NAME || "Nightmare-Bot",
  botname : process.env.BOT_NAME  || "Nightmare-Bot",
  ownername:process.env.OWNER_NAME|| "Ibraheem-Chohan",


  errorChat : process.env.ERROR_CHAT || "COMMAND NOT FOUND BAKA",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "QTJG3QKxFvQ6www8oLwj1iFs",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-9HLUT5kXnWDboMBh3igsT3BlbkFJekCTdhX9cKvD9ocvcHvI",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "a219fc402b1a8b029be56f978c5a4fee";
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
