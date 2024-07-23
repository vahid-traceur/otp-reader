# OTP Reader

A simple JavaScript library to read OTP codes using the WebOTP API.

## Installation

```sh
npm install otp-reader
```

## Usage

```javascript
import OTPReader from 'otp-reader';

const otpReader = new OTPReader();

otpReader.getCode()
    .then(code => {
        console.log('OTP Code:', code);
    })
    .catch(err => {
        console.error('Error:', err);
    });
```