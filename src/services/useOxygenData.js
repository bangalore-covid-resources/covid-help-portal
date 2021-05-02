import { useEffect, useState } from 'react';
import { request } from 'graphql-request';

export default function useOxygenData()
{
    const [oxygenProviders, setOxygenProviders] = useState(null);

    useEffect(() => {
        const fetchProviders = async () => {
          const { oxygens } = await request(
            'https://api-ap-northeast-1.graphcms.com/v2/cko49acbi8xm901xt902e1rm0/master',
            `
            {
              oxygens {
                state
                location
                name
                contact
                alternateContacts
                address
                deposit
                charge
                otherDetails
                contactStatus
              }
            }
        `
          );
    
          setOxygenProviders(oxygens);
        };
    
        fetchProviders();
      }, []);

      return [ oxygenProviders ]
}