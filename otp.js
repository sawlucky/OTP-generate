// function generateOTP() {
//     var digits = '0123456789';
//     var OTP = '';
//     for (let i = 0; i < 5; i++ ) {
//       OTP += digits[Math.floor(Math.random()*10)];
//     }
//     document.getElementById('otp').value = OTP;
//   }
  // const input= document.getElementById("otp")
  const otp= document.getElementById('otp');

  const generateOTP=()=>
  {
    let text="";
    let digits='0123456789';
   
    for( let i=0;i<5;i++)
    { 
      let random=Math.floor(Math.random()*10);
      text+=digits[(random)];
    }
        //  text.value=otp;
    // return text;
    
    otp.value=text;
    
  }
 
  // console.log(generateOTP());