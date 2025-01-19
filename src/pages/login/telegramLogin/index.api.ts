import {ArgentTMA} from '@argent/tma-wallet';
import {isTMA} from '@telegram-apps/sdk-react';

export const getArgentTMA = () => {
  if (isTMA('simple')) {
    return ArgentTMA.init({
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
  }

  return undefined;
};
