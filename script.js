const markRead = document.querySelector(".read-all span");
const nums = document.querySelector(".num");
const notify1 = document.getElementById("notify1");
const notify2 = document.getElementById("notify2");
const notify3 = document.getElementById("notify3");
const unreadPoints = document.querySelectorAll(".unread");
let notified = true;

const unread = {
  number: "3",
  bgcolor: "hsl(211, 68%, 94%)",
  show: "d-inline-block",
};
const read = {
  number: "0",
  bgcolor: "hsl(0, 0%, 100%)",
  show: "d-none",
};

const readNotifications = () => {
  nums.textContent = read.number;
  notify1.style.backgroundColor = read.bgcolor;
  notify2.style.backgroundColor = read.bgcolor;
  notify3.style.backgroundColor = read.bgcolor;
  unreadPoints.forEach(point=>{
    point.classList.add(read.show);
    point.classList.remove(unread.show);
  })
 notified = false;
};
const unreadNotifications = () => {
  nums.textContent = unread.number;
  notify1.style.backgroundColor = unread.bgcolor;
  notify2.style.backgroundColor = unread.bgcolor;
  notify3.style.backgroundColor = unread.bgcolor;
  unreadPoints.forEach(point=>{
    point.classList.add(unread.show);
    point.classList.remove(read.show);
  })
  notified = true;
};

const toggleChange = () => {
  notified ? readNotifications() : unreadNotifications();
};

markRead.addEventListener("click", () => {
  toggleChange();
});
