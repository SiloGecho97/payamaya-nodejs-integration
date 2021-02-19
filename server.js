let express = require("express");
let axios = require("axios");

const obj2 = {
  totalAmount: {
    value: 100,
    currency: "PHP",
    details: {
      discount: 0,
      serviceCharge: 0,
      shippingFee: 0,
      tax: 0,
      subtotal: 100,
    },
  },
};

const obj = {
  totalAmount: {
    value: 100,
    currency: "PHP",
    details: {
      discount: 0,
      serviceCharge: 0,
      shippingFee: 0,
      tax: 0,
      subtotal: 100,
    },
  },
  buyer: {
    firstName: "Silas",
    middleName: "Paul",
    lastName: "Getachew",
    birthday: "1995-10-24",
    customerSince: "1995-10-24",
    sex: "M",
    contact: {
      phone: "+639181008888",
      email: "merchant@merchantsite.com",
    },
    shippingAddress: {
      firstName: "John",
      middleName: "Paul",
      lastName: "Doe",
      phone: "+639181008888",
      email: "merchant@merchantsite.com",
      line1: "6F Launchpad",
      line2: "Reliance Street",
      city: "Mandaluyong City",
      state: "Metro Manila",
      zipCode: "1552",
      countryCode: "PH",
      shippingType: "ST", // ST - for standard, SD - for same day
    },
    billingAddress: {
      line1: "6F Launchpad",
      line2: "Reliance Street",
      city: "Mandaluyong City",
      state: "Metro Manila",
      zipCode: "1552",
      countryCode: "PH",
    },
  },
  items: [
    {
      name: "Applicant CV",
      quantity: 1,
      code: "CVG-096732",
      description: "CV Purchase",
      amount: {
        value: 100,
        details: {
          discount: 0,
          serviceCharge: 0,
          shippingFee: 0,
          tax: 0,
          subtotal: 100,
        },
      },
      totalAmount: {
        value: 100,
        details: {
          discount: 0,
          serviceCharge: 0,
          shippingFee: 0,
          tax: 0,
          subtotal: 100,
        },
      },
    },
  ],
  redirectUrl: {
    success: "https://www.trabahanap.com/login",
    failure: "https://www.trabahanap.com/failure",
    cancel: "https://www.trabahanap.com/cancel",
  },
  requestReferenceNumber: "1551191039",
  metadata: {},
};

const customization = {
  logoUrl: "https://www.trabahanap.com/assets/img/th_logo-2.png",
  iconUrl:
    "https://cdn3.iconfinder.com/data/icons/diagram_v2/PNG/96x96/diagram_v2-12.png",
  appleTouchIconUrl:
    "https://cdn3.iconfinder.com/data/icons/diagram_v2/PNG/96x96/diagram_v2-12.png",
  customTitle: "Trabanahap",
  colorScheme: "#7d1216",
  showMerchantName: true,
  hideReceiptInput: true,
  skipResultPage: false,
  redirectTimer: 3,
};

const apiKey = "pk-lNAUk1jk7VPnf7koOT1uoGJoZJjmAxrbjpj6urB8EIA";
const sKey = "sk-fzukI3GXrzNIUyvXY3n16cji8VTJITfzylz5o5QzZMC";
let publicKey = Buffer.from(apiKey).toString("base64");
let secretKey = Buffer.from(sKey).toString("base64");

const headerPublic = {
  "Content-Type": "application/json",
  Authorization: "Basic " + publicKey,
};

const headerSecret = {
  "Content-Type": "application/json",
  Authorization: "Basic  " + secretKey,
};
let callbackUrl =
  "http://ec2-54-202-232-199.us-west-2.compute.amazonaws.com/api/payment/endpoint";

const webhook_reg = {
  name: "CHECKOUT_DROPOUT",
  callbackUrl: callbackUrl,
};

// axios
//   .get(" https://pg-sandbox.paymaya.com/payments/v1/webhooks", {
//     headers: headerSecret,
//   })
//   .then((data) => {
//     console.log("data", data);
//   })
//   .catch((err) => console.log("err", err));

// axios
//   .post("https://pg-sandbox.paymaya.com/checkout/v1/webhooks", webhook_reg, {
//     headers: headerSecret,
//   })
//   .then((data) => {
//     console.log("data", data.data);
//   })
//   .catch((err) => console.log("err", err));

const webhokId = "33375ea6-617d-49d3-bf22-afca3c31ab28";
axios
  .delete(`https://pg-sandbox.paymaya.com/checkout/v1/webhooks/${webhokId}`, {
    headers: headerSecret,
  })
  .then((data) => {
    console.log("data", data);
  })
  .catch((err) => console.log("err", err));
