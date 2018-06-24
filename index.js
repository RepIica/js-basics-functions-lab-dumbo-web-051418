

function distanceFromHqInBlocks (street) {
  // a function that takes in a pickup location for a passenger, and returns the number of blocks from it's headquarters on 42nd street. This can be used for another function that translates the number of blocks from headquarters to the distance in feet.
  return Math.abs(street - 42)

}

function distanceFromHqInFeet(street) {
  // Second, customers want Scuber to calculate the number of feet travelled based on the distance. Write a function called distanceTravelledInFeet that takes in the beginning and destination blocks and returns the number of feet travelled. Each block in Manhattan is 264 feet long. For example distanceTravelledInFeet(34, 38) representing 34th St to 38th St, returns 1056 ((38-34)*264). You can assume that we are only calculating distance uptown/downtown, not from river to river.
  return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(originSt, destSt) {
  return Math.abs(originSt-destSt) * 264
}

function calculatesFarePrice(start,destination) {
  switch (true) {
    case distanceTravelledInFeet(start,destination)<= 400:
      return 0;
      break;
    case distanceTravelledInFeet(start,destination)>400 && distanceTravelledInFeet(start,destination)<=2000:
      return 0.02 * (distanceTravelledInFeet(start,destination)-400);
      break;
    case distanceTravelledInFeet(start,destination)>2000 && distanceTravelledInFeet(start,destination)<=2500:
      return 25;
      break;
    default:
      return `cannot travel that far`;
  }
}
