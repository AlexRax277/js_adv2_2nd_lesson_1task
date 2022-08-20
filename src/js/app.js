export default function changeZone(target, zonesList, currentZone) {
  const nextZone = zonesList[Math.floor(Math.random() * zonesList.length)];
  if (nextZone !== currentZone) {
    setInterval(() => {
      nextZone.appendChild(target);
      return changeZone();
    }, 5000);
  } else {
    return changeZone();
  }
}
