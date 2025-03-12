export interface CommunicationOption {
  type: "email" | "whatsapp" | "messenger";
  value: string;
}

export interface CommunicationFormData {
  email: string;
  whatsapp: string;
  messenger: string;
}
