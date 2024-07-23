class OTPReader {
  constructor() {
    this.hasOTPCredential = 'OTPCredential' in window;
  }

  getCode() {
    return new Promise((resolve, reject) => {
      if (!this.hasOTPCredential) {
        return reject(new Error('WebOTP API not supported on this browser.'));
      }

      navigator.credentials.get({ otp: { transport: ['sms'] } })
        .then(otp => resolve(otp.code))
        .catch(err => reject(err));
    });
  }
}

export default OTPReader;
