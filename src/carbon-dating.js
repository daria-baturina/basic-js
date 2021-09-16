const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  if (typeof sampleActivity === "string" && isFinite(sampleActivity) && Number(sampleActivity) >= 1 && Number(sampleActivity) < 15 ) {
    const N = Math.log(MODERN_ACTIVITY / Number(sampleActivity));
    const k = 0.693 / HALF_LIFE_PERIOD;
    return Math.ceil(N / k);
  }
  return false;
}

dateSample('1');
