import { useEffect, useState } from 'react';
import { request } from 'graphql-request';

export default function usePlasmaData()
{
    const [plasmaProviders, setPlasmaProviders] = useState(null);

    useEffect(() => {
        const fetchProviders = async () => {
          const { plasmas } = await request(
            'https://api-ap-northeast-1.graphcms.com/v2/cko49acbi8xm901xt902e1rm0/master',
            `
            {
              plasmas {
                state
                location
                name
                contact
                bloodGroup
                otherDetails
                contactStatus
              }
            }
        `
          );
    
          setPlasmaProviders(plasmas);
        };
    
        fetchProviders();
      }, []);

      return [ plasmaProviders ]
}