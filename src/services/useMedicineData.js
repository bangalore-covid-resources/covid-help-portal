import { useEffect, useState } from 'react';
import { request } from 'graphql-request';

export default function useMedicineData()
{
    const [medicineProviders, setMedicineProviders] = useState(null);

    useEffect(() => {
        const fetchProviders = async () => {
          const { medicines } = await request(
            'https://api-ap-northeast-1.graphcms.com/v2/cko49acbi8xm901xt902e1rm0/master',
            `
            {
              medicines {
                state
                location
                name
                contact
                alternateContacts
                otherDetails
                contactStatus
              }
            }
            `
          );
    
          setMedicineProviders(medicines);
        };
    
        fetchProviders();
      }, []);

      return [ medicineProviders ]
}