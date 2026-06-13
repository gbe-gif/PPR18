export type TabState = 'worldview' | 'hq' | 'roster';

export interface RangerInfo {
  id: string;
  role: string;
  realName: string;
  basicInfo: string;
  appearance: string;
  personality: string;
  ability: {
    name: string;
    description: string;
    daily: string;
    ultimate: string;
  };
  traits: string;
  room: string;
  imageUrl?: string;
  themeColor: string;
  textColor: string;
  borderColor: string;
  bgColor: string;
  shadowColor: string;
}
