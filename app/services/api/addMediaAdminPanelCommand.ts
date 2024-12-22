import { http } from '@/app/services/http';

export interface AddMediaAdminPanelCommandPayload {
  entityId: number;
  mediaContent: string;
  mediaPostix: number;
  entityType: number;
}

const E_AddMediaAdminPanelCommand = 'AddMediaAdminPanelCommand';

export const addMediaAdminPanelCommand = (
  payload: AddMediaAdminPanelCommandPayload,
) =>
  http.post<AddMediaAdminPanelCommandPayload>(
    E_AddMediaAdminPanelCommand,
    payload,
  );
