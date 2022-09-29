const endpoints = {
  project: (slug, dashboard) => `v1/clients/${slug}/project/${dashboard}`,
  login: (slug, dashboard) => `v1/clients/${slug}/project/${dashboard}/login`,
  data: (slug, dashboard) => `v1/clients/${slug}/dashboards/${dashboard}/data`,
  summary: (slug, dashboard) =>
    `v1/clients/${slug}/dashboards/${dashboard}/summary`,
  widget: (slug, dashboard, id) =>
    `v1/clients/${slug}/dashboards/${dashboard}/data/widgets/${id}`,
};

export default endpoints;
