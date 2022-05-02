function dateSample(sampleActivity) {

   if(typeof(sampleActivity) === "string") {
      let MODERN_ACTIVITY = Number(sampleActivity);
            console.log(MODERN_ACTIVITY);

      if((MODERN_ACTIVITY == NaN) || (MODERN_ACTIVITY < 1)) {
         return false;
      } else {
         let HALF_LIFE_PERIOD = 5730;
         let k = 0.693/HALF_LIFE_PERIOD;
         let kt = Math.log(15/MODERN_ACTIVITY);
         let number = Math.ceil(kt / k);
         console.log(k, kt , number);
         console.log(number);
         return number;
      }
   } else{
      return false
   }
}


dateSample('3');