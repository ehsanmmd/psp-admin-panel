import { http } from '@/app/services/http';

export interface AddSiteTicketPayload {
  id?: number;
  name: string;
  mobile: string;
  title: string;
  description: string;
}

const E_GetSitePlans = 'GetSitePlans';

export const getPlans = () => http.get<any>(E_GetSitePlans);
