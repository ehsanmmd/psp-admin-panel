import { http } from '@/app/services/http';

export interface AddJobOpportunityPayload {
  id: number;
  name: string;
  mobile: string;
  email: string;
  referTo: number;
  description: string;
}
type JsonFile = {
  model: AddJobOpportunityPayload;
};

const E_AddJobOpportunity = 'AddJobOpportunity';

export const addJobOpportunity = (payload: AddJobOpportunityPayload) => {
  const jsonFile: JsonFile = { model: payload };
  http.post<JsonFile>(E_AddJobOpportunity, jsonFile);
};
