import { useEffect, useState } from 'react';
import { request } from 'graphql-request';

export default function useAmbulanceData()
{
    const [ambulanceProviders, setAmbulanceProviders] = useState(null);

    useEffect(() => {
        const fetchProviders = async () => {
          const { ambulances } = await request(
            'https://api-ap-northeast-1.graphcms.com/v2/cko49acbi8xm901xt902e1rm0/master',
            `
            {
                ambulances {
                  state
                  location
                  name
                  providerType
                  contact
                  cost
                  otherDetails
                  contactStatus
                }
              }
        `
          );
    
          setAmbulanceProviders(ambulances);
        };
    
        fetchProviders();
      }, []);

      return [ ambulanceProviders ]
}