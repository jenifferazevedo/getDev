export class Job {
  id: number;
  company: {
    id: number;
    name: string;
    logo?: string;
    description: string;
    address: string;
    email: string;
    url: string;
    url_twitter?: string;
    url_facebook?: string;
    url_linkedin?: string;
  };
  companyId: number;
  title: string;
  body: string;
  allowRemote: boolean;
  types: [
    {
      id: string;
      name: string;
    }
  ];
  contracts?: [
    {
      id: string;
      name: string;
    }
  ];
  locations?: [
    {
      id: string;
      name: string;
    }
  ];
  publishedAt: string;
  updatedAt: string;
}
