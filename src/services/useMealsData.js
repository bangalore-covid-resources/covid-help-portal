import { useEffect, useState } from 'react';
import { request } from 'graphql-request';

export default function usePlasmaData()
{
    const [mealsProviders, setMealsProviders] = useState(null);

    useEffect(() => {
        const fetchProviders = async () => {
          const { meals } = await request(
            'https://api-ap-northeast-1.graphcms.com/v2/cko49acbi8xm901xt902e1rm0/master',
            `
            {
              meals {
                state
                location
                name
                providerType
                contact
                alternateContacts
                serviceAreas
                serviceHours
                deliveryOption
                cost
                otherDetails
                contactStatus
              }
            }
        `
          );
    
          setMealsProviders(meals);
        };
    
        fetchProviders();
      }, []);

      return [ mealsProviders ]
}