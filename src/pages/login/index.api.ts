import {ArgentTMA} from '@argent/tma-wallet';

export const argentTMA = ArgentTMA.init({
  environment: 'sepolia',
  appName: 'The Pass',
  appTelegramUrl: 'https://t.me/thePassbot/thePassApp',
  sessionParams: {
    allowedMethods: [
      {
        contract:
          '0xafec3be6180eb6a8a31fbd751dcbc9a8bad2a8dc35f0f3829a46a46768cb25',
        selector: 'claim_pass',
      },
    ],
    validityDays: 90,
  },
});

// export const argentTMA = undefined
