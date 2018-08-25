export interface IUserListResponse {
  desc: string;
  branch: { name: string };
  page_count: {
    docs: any[];
    total: number;
    offset: number;
  };
}
