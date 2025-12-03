/**
 * https://github.com/xzripper/SINE19000/
 * SINE19000 - A tiny module to keep mobile screens awake without requiring HTTPS or SSL certificates, ideal for local development.
 * Keeps the screen awake by playing a hidden ~10kB video with extremely low frequency and resolution.
 * @returns Nothing.
*/
export function addS19K() {
  const s19kElement = document.createElement("video");

  s19kElement.id = "S19KElem";

  s19kElement.src = "https://github.com/xzripper/SINE19000/raw/refs/heads/main/S19K/SINE19000.mp4"
  s19kElement.loop = true;
  s19kElement.autoplay = true;
  s19kElement.playsInline = true;

  s19kElement.volume = 0.01;

  s19kElement.style.position = "absolute";
  s19kElement.style.left = "100%";

  document.body.appendChild(s19kElement);

  s19kElement.play().catch((error) => {
    console.error("S19K: Failed to play S19K.", error);
  });
}

/**
 * Update S19K activity state. Prints error if S19K wasn't added on the page before.
 * @param {boolean} active 
 * @returns Nothing.
 */
export function setS19KActivity(active) {
  const s19kElement = document.getElementById("S19KElem");

  if (!s19kElement) {
    console.error("S19K: Can't change activity of non-existing S19K element.");

    return;
  }

  s19kElement.hidden = !active;
}

/**
 * Remove S19K element. Prints error in the console if S19K wasn't added on the page before.
 * @returns Nothing.
 */
export function removeS19K() {
  const s19kElement = document.getElementById("S19KElem");

  if (!s19kElement) {
    console.error("S19K: Can't destroy non-existing S19K element.");

    return;
  }

  s19kElement.remove();
}
