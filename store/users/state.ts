export default function (): any {
  return {
    form_input: {
      name: null,
      email: null,
      password: null,
      status: false,
      scraperDataSource: [],
      role: null,
    },
    data: [],
    opt_role: [
      { label: "Admin", value: "admin" },
      { label: "User", value: "user" },
    ],
    opt_data_source: [
      { label: "jobstreet.co.id", value: "jobstreet" },
      { label: "jobstreetexpress.com", value: "jobstreet_express" },
      { label: "kupu.id", value: "kupu" },
    ],
  };
}
