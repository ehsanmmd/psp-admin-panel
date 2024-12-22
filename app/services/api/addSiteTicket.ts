import { http } from '@/app/services/http';

export interface AddSiteTicketPayload {
  id?: number;
  name: string;
  mobile: string;
  title: string;
  description: string;
}

const E_AddSiteTicket = 'AddSiteTicket';

export const addSiteTicket = (payload: AddSiteTicketPayload) =>
  http.post<any>(E_AddSiteTicket, payload);
