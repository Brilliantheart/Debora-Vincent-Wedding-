const target=new Date("2026-08-27T11:00:00+01:00").getTime();
function tick(){let x=target-Date.now();if(x<=0)return;document.querySelector("#d").firstChild.textContent=Math.floor(x/86400000).toString().padStart(2,"0");document.querySelector("#h").firstChild.textContent=Math.floor(x/3600000%24).toString().padStart(2,"0");document.querySelector("#m").firstChild.textContent=Math.floor(x/60000%60).toString().padStart(2,"0");document.querySelector("#s").firstChild.textContent=Math.floor(x/1000%60).toString().padStart(2,"0")}tick();setInterval(tick,1000);
const lb=document.querySelector("#lightbox"),big=document.querySelector("#big");document.querySelectorAll(".pic").forEach(x=>x.onclick=()=>{big.src=x.dataset.img;lb.classList.add("show")});document.querySelector("#close").onclick=()=>lb.classList.remove("show");lb.onclick=e=>{if(e.target===lb)lb.classList.remove("show")};
document.querySelector("#form").onsubmit=e=>{e.preventDefault();let text=`Wedding Reservation%0A%0AName: ${encodeURIComponent(name.value)}%0APhone: ${encodeURIComponent(phone.value)}%0AGuests: ${encodeURIComponent(guests.value)}%0AAttendance: ${encodeURIComponent(attendance.value)}%0AMessage: ${encodeURIComponent(message.value)}`;window.open("https://wa.me/2349169841962?text="+text,"_blank")};
document.querySelector("#musicBtn").onclick=()=>alert("Send the wedding song file and I will connect it to this Music button.");
// ==========================================
// LOVE STORY MODALS
// ==========================================

const storyButtons = document.querySelectorAll(".story-button");
const storyModals = document.querySelectorAll(".story-modal");
const storyCloseButtons = document.querySelectorAll(".story-close");

storyButtons.forEach(button => {

    button.addEventListener("click", () => {

        const storyId = button.dataset.story;
        const modal = document.getElementById(storyId);

        if (modal) {
            modal.classList.add("show");

            document.body.style.overflow = "hidden";
        }

    });

});


storyCloseButtons.forEach(button => {

    button.addEventListener("click", () => {

        const modal = button.closest(".story-modal");

        modal.classList.remove("show");

        document.body.style.overflow = "";

    });

});


storyModals.forEach(modal => {

    modal.addEventListener("click", (e) => {

        if (e.target === modal) {

            modal.classList.remove("show");

            document.body.style.overflow = "";

        }

    });

});


document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        storyModals.forEach(modal => {
            modal.classList.remove("show");
        });

        document.body.style.overflow = "";

    }

});
// ==========================================
// WEDDING VIDEO SOUND BUTTON
// ==========================================

const weddingVideo = document.getElementById("weddingVideo");
const soundBtn = document.getElementById("soundBtn");

if (weddingVideo && soundBtn) {

    soundBtn.addEventListener("click", async function (e) {

        e.preventDefault();
        e.stopPropagation();

        try {

            // Turn sound on
            weddingVideo.muted = false;
            weddingVideo.volume = 1;

            // Make sure video is playing
            await weddingVideo.play();

            // Change button
            soundBtn.innerHTML = "🔊 Sound On";

        } catch (error) {

            console.log("Sound could not be enabled:", error);

            // Try again
            weddingVideo.muted = false;
            weddingVideo.volume = 1;

            try {
                await weddingVideo.play();
                soundBtn.innerHTML = "🔊 Sound On";
            } catch (error2) {
                console.log("Browser blocked video playback/audio.");
            }

        }

    });

}
function copyAccountNumber() {

    const accountNumber =
        document.querySelector("#accountNumber").textContent.trim();

    navigator.clipboard.writeText(accountNumber).then(() => {

        const button =
            document.querySelector(".copy-account");

        const originalText = button.textContent;

        button.textContent = "COPIED ✓";

        setTimeout(() => {
            button.textContent = originalText;
        }, 2000);

    });

}
// ==========================================
// DIGITAL INVITATION OPENING
// ==========================================

const invitationCover = document.querySelector("#invitationCover");
const openInvitation = document.querySelector("#openInvitation");

openInvitation.addEventListener("click", () => {

    invitationCover.classList.add("opening");

    setTimeout(() => {
        invitationCover.style.display = "none";
    }, 1000);

});