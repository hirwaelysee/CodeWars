/*
#### 1.You are given an array of notifications. Each notification has a message and a delay.

const notifications= [
  { message:"You have a new message", delay:1000 },
  { message:"Your download is ready", delay:3000 },
  { message:"Battery is low", delay:2000 },
  { message:"Friend is online", delay:4000 }
];


Task:
Print each message using setTimeout after its given delay.

Format:

[1s] You have a new message
[2s] Battery is low
[3s] Your download is ready
[4s] Friend is online
*/
const notifications= [
  { message:"You have a new message", delay:1000 },
  { message:"Your download is ready", delay:3000 },
  { message:"Battery is low", delay:2000 },
  { message:"Friend is online", delay:4000 }
];

for (let i=0; i<notifications.length; i++){
    setTimeout(()=>{
        console.log(notifications[i].message);
    },notifications[i].delay)
}