export interface HomeFormValues {}

export interface HomePageData {
  announcements: AnnouncementData[];
  profile: ProfileData;
}

export interface BaseProps extends HomePageData {}

export type InsideProps = Pick<HomePageData, 'profile'>
export interface AnnouncementData {
  id: string;
  title: string;
  date: string;
  content: string;
}
export interface ProfileData {
  name: string;
  avatar: string;

  globalProgress: number;
  verified: boolean;
  profilePictureIsVerified: boolean;
  parentsVerified: boolean;
  litterVerified: boolean;
}
