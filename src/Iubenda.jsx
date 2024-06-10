import React, { useEffect } from 'react';

const Iubenda = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.innerHTML = `
      var _iub = _iub || [];
      _iub.csConfiguration = {
        "enableFadp": true,
        "enableLgpd": true,
        "enableUspr": true,
        "fadpApplies": true,
        "floatingPreferencesButtonCaptionColor": "#000000",
        "floatingPreferencesButtonColor": "#FFFFFF",
        "floatingPreferencesButtonDisplay": "bottom-left",
        "lang": "en",
        "perPurposeConsent": true,
        "preferenceCookie": { "expireAfter": 180 },
        "siteId": 3623574,
        "usprApplies": true,
        "whitelabel": false,
        "cookiePolicyId": 26885513,
        "banner": {
          "acceptButtonColor": "#000000",
          "acceptButtonDisplay": true,
          "backgroundColor": "#FFFFFF",
          "closeButtonDisplay": false,
          "customizeButtonCaptionColor": "#000000",
          "customizeButtonColor": "#FFFFFF",
          "customizeButtonDisplay": true,
          "explicitWithdrawal": true,
          "listPurposes": true,
          "logo": null,
          "linksColor": "#000000",
          "ownerName": "https://cusiecommerce.netlify.app",
          "position": "bottom",
          "rejectButtonCaptionColor": "#000000",
          "rejectButtonColor": "#F0EEEE",
          "rejectButtonDisplay": true,
          "showPurposesToggles": true,
          "showTitle": false,
          "showTotalNumberOfProviders": true,
          "textColor": "#000000"
        }
      };
    `;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.src = 'https://cs.iubenda.com/autoblocking/3623574.js';
    document.body.appendChild(script2);

    const script3 = document.createElement('script');
    script3.type = 'text/javascript';
    script3.src = '//cdn.iubenda.com/cs/gpp/stub.js';
    document.body.appendChild(script3);

    const script4 = document.createElement('script');
    script4.type = 'text/javascript';
    script4.src = '//cdn.iubenda.com/cs/iubenda_cs.js';
    script4.charset = 'UTF-8';
    script4.async = true;
    document.body.appendChild(script4);
  }, []);

  return null;
};

export default Iubenda;
