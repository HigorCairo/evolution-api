export class Session {
  remoteJid?: string;
  sessionId?: string;
  status?: string;
  createdAt?: number;
  updateAt?: number;
}

export class TypebotDto {
  enabled?: boolean;
  url: string;
  typebot?: string;
  expire?: number;
  delay_message?: number;
  unknown_message?: string;
  sessions?: Session[];
}
